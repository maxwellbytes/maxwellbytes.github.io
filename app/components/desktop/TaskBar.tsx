'use client';
import { TASKBAR_HEIGHT } from '@/lib/constants';
import { useDesktop } from '@/context/DesktopContext';
import { Window } from '@/components/desktop/Window'; //??

export default function TaskBar() {
  const { windows, focusedId, focusWindow, minimizeWindow } = useDesktop();
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-amber-600 flex items-center z-50" style={{ height: TASKBAR_HEIGHT }}>
        <button className="bg-sky-700 h-full w-32">Start</button>
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
    </>
  );
}
