export type AppType = 'resume' | 'projects' | 'about' | 'settings';

//holds each open window (object) in an array.
//opening the same window twice (like resume) will make 2 objects with the same appType but diff IDs

export interface WindowState {
    id: string; //unique for each open window
    appType: AppType; //which content to render inside
    title: string;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
    isMinimized: boolean;
    isMaximized: boolean;
    prevBounds?: { x: number; y: number; width: number; height: number };
}