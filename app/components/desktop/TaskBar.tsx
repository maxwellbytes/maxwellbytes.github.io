'use client';
import { TASKBAR_HEIGHT } from '@/lib/constants';
import { useDesktop } from '@/context/DesktopContext';
import { Window } from '@/components/desktop/Window'; //??

export default function TaskBar() {
  const { windows, focusedId, focusWindow, minimizeWindow } = useDesktop();
  
  //TODO: create a switchable variable for the settings app to change the theme? Currently just using hardcoded values
  var currTheme = 'water'
   //backgroundColor: 'rgba(253, 253, 253, .8)', backdropFilter: 'blur(8px)'
   //backgroundColor: currTheme === 'water' ? '#071e22' : '#000000'

  return (
    <>
    <div className="fixed left-1/2 bottom-0 z-50 w-full max-w-xl -translate-x-1/2 px-4 pb-2 pointer-events-none">
      <nav className="bg-amber-600 gap-1 z-50 text-[#202830]" 
      style={{ height: TASKBAR_HEIGHT, backgroundColor: 'rgb(180, 190, 254, .4)', backdropFilter: 'blur(8px)' }}
      >
        <button className="h-full w-32" style={{ backgroundColor: 'rgba(224, 234, 244, 0.8)', backdropFilter: 'blur(4px)' }}>Start</button>
        {windows.map((w) => (
          <button key={w.id}
          onClick={() => {
            if (w.isMinimized || w.id != focusedId) {
              focusWindow(w.id)
            } else {
              minimizeWindow(w.id)
            }
          }}
          >
            {w.title}
          </button>
        ))}
      </nav>
      </div>
    </>
  );
}
