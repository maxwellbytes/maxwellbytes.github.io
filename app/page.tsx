// app/page.tsx
import { DesktopIcon } from '@/components/desktop/DesktopIcon';
import { WindowManager } from '@/components/WindowManager';
import TaskBar from '@/components/desktop/TaskBar';
import { TASKBAR_HEIGHT } from './lib/constants';

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-neutral-800">
      <div className="relative w-full overflow-hidden" style={{ height: `calc(100vh - ${TASKBAR_HEIGHT}px)`}}>
        <div className="p-4 flex flex-col gap-4">
          <DesktopIcon appType="resume" label="Resume" />
          <DesktopIcon appType="projects" label="Projects" />
          <DesktopIcon appType="about" label="About Me" />
        </div>
        <WindowManager />
      </div>
      <TaskBar />
    </main>
  );
}