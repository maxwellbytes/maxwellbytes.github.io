'use client' //is needed??
import { createContext, useContext, useReducer, ReactNode } from 'react';
import { WindowState, AppType } from '@/lib/types';

//discriminated union - is typescript saying "an Action is 1 of these 5 shapes, and the type field tells you which one"

//using switch(action.type) in the reducer means that typescript will automatically narrow the type inside each case
//so inside case MOVE it knows that action.x and action.y can be accessed
//and inside case CLOSE it knows that action.x and action.y don't exist on that variant and it will be flagged :)
type Action = | { type: 'OPEN'; appType: AppType; title: string }
    | { type: 'CLOSE'; id: string }
    | { type: 'FOCUS'; id: string }
    | { type: 'MINIMIZE'; id: string }
    | { type: 'MOVE'; id: string; x: number; y:number }
    | { type: 'MAXIMIZE_TOGGLE'; id: string; viewport?: { width: number; height: number }}

//entire state of the desktop in 1 object
//windows = array of open window objects from types.ts
//nextZIndex = running zIndex counter
interface State {
    windows: WindowState[];
    nextZIndex: number;
}

//pure function that when given the current state and an action it returns a new state object
//never mutates state directly. every branch returns { ...state, ... } or builds a fresh object
//the fresh/new object workflow is required. React's useReducer only knows a re-render is needed if it gets a new object reference
//if I just mutated state.windows and returned the same reference then React wouldn't detect the change and re-render
function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'OPEN': {
            //bring window into ofcus if it is open instead of duplicating
            //example: checks if PROJECTS window is already open before creating a new window.
            //if the window is already open it un-minimizes/re-focuses the window already open
            //if the window is new it "builds" a WindowState object w/ cascading default position `100 + windows.length * 24` so new windows don't stack on top of each other.
            const existing = state.windows.find(w => w.appType === action.appType);
            if (existing) {
                return {
                    ...state,
                    windows: state.windows.map(w =>
                        w.id === existing.id ? { ...w, isMinimized: false, zIndex: state.nextZIndex } : w
                    ),
                    nextZIndex: state.nextZIndex + 1
                };
            }
            const newWindow: WindowState = {
                id: `${action.appType}-${Date.now()}`,
                appType: action.appType,
                title: action.title,
                x: 100 + state.windows.length * 24,
                y: 80 + state.windows.length * 24,
                width: 480,
                height: 360,
                zIndex: state.nextZIndex,
                isMinimized: false,
                isMaximized: false
            };
            return { windows: [...state.windows, newWindow], nextZIndex: state.nextZIndex + 1};
        };

        case 'CLOSE':
            return { ...state, windows: state.windows.filter(w => w.id !== action.id )};
        
        case 'FOCUS':
            return {
                ...state,
                windows: state.windows.map(w =>
                    w.id === action.id ? { ...w, zIndex: state.nextZIndex, isMinimized: false } : w
                ),
                nextZIndex: state.nextZIndex + 1
            };
        
        case 'MINIMIZE':
            return {
                ...state,
                windows: state.windows.map(w =>
                    w.id === action.id ? { ...w, isMinimized: !w.isMinimized } : w
                )
            };
        
        case 'MOVE':
            return {
                ...state,
                windows: state.windows.map(w =>
                    w.id === action.id ? { ...w, x: action.x, y: action.y } : w
                )
            };
        
        case 'MAXIMIZE_TOGGLE':
            return {
                ...state,
                windows: state.windows.map(w => {
                    if (w.id !== action.id) return w;
                    if (w.isMaximized) {
                        //restore to whatever got stashed (bounds, size (WIP)) before maximizing
                        return {
                            ...w,
                            ...(w.prevBounds ?? {}),
                            isMaximized: false,
                            prevBounds: undefined,
                        };
                    } else {
                        //stash current bounds then fill all available space
                        return {
                            ...w,
                            prevBounds: { x: w.x, y: w.y, width: w.width, height: w.height },
                            x: 0,
                            y: 0,
                            width: action.viewport?.width ?? w.width,
                            height: action.viewport?.height ?? w.height,
                            isMaximized: true,
                        };
                    }
                }),
        }
        
        default:
            return state;
    }
}

const DesktopContext = createContext<ReturnType<typeof useDesktopValue> | null>(null);

function useDesktopValue() {
    const [state, dispatch] = useReducer(reducer, { windows: [], nextZIndex: 1 });

    return {
        windows: state.windows,
        focusedId: state.windows.reduce(
            (top, w) => (w.zIndex > (top?.zIndex ?? -1) ? w : top),
            null as WindowState | null
        )?.id,
        openWindow: (appType: AppType, title: string) => dispatch({ type: 'OPEN', appType, title }),
        closeWindow: (id: string) => dispatch({ type: 'CLOSE', id }),
        focusWindow: (id: string) => dispatch({ type: 'FOCUS', id }),
        minimizeWindow: (id: string) => dispatch({ type: 'MINIMIZE', id }),
        moveWindow: (id: string, x: number, y: number) => dispatch({ type: 'MOVE', id, x, y }),
        maximizeToggle: (id: string, viewport?: { width: number; height: number }) => dispatch({ type: 'MAXIMIZE_TOGGLE', id, viewport })
    };
}

export function DesktopProvider({ children }: { children: ReactNode}) {
    const value = useDesktopValue();
    return <DesktopContext.Provider value={value}>{children}</DesktopContext.Provider>
}

export function useDesktop() {
    const ctx = useContext(DesktopContext);
    if (!ctx) throw new Error('useDesktop must be used inside DesktopProvider!');
    return ctx;
}