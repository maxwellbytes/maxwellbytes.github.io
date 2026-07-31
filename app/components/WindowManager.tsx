// components/desktop/WindowManager.tsx
'use client';
import { useDesktop } from '@/context/DesktopContext';
import { Window } from '@/components/desktop/Window';
import ResumeApp  from '@/components/apps/ResumeApp'
import ProjectsApp from '@/components/apps/ProjectsApp';
import AboutApp from '@/components/apps/AboutApp';
import SettingsApp from '@/components/apps/SettingsApp';
import { TASKBAR_HEIGHT, APP_MAP } from '@/lib/constants';

/* Used to be like this. Now I use contants.ts. Leaving this until I decide which approach to take
const appMap = {
  resume: ResumeApp,
  projects: ProjectsApp,
  about: AboutApp,
  settings: SettingsApp,
};*/

export function WindowManager() {
  const { windows, closeWindow, minimizeWindow, focusWindow, moveWindow, maximizeToggle, focusedId } = useDesktop();

  return (
    <>
      {windows.filter(w => !w.isMinimized).map((w) => {
        const AppContent = APP_MAP[w.appType];
        return (
          <Window
            key={w.id}
            {...w}
            isFocused={w.id === focusedId}
            onClose={() => closeWindow(w.id)}
            onMinimize={() => minimizeWindow(w.id)}
            onFocus={() => focusWindow(w.id)}
            onMove={(x, y) => moveWindow(w.id, x, y)}
            onMaximize={() => maximizeToggle(w.id, { width: window.innerWidth, height: window.innerHeight - TASKBAR_HEIGHT })}
          >
            <AppContent />
          </Window>
        );
      })}
    </>
  );
}