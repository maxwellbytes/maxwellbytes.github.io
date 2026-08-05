// app/page.tsx
import { DesktopIcon } from '@/components/desktop/DesktopIcon';
import { WindowManager } from '@/components/WindowManager';
import TaskBar from '@/components/desktop/TaskBar';
import HeaderBar from '@/components/desktop/HeaderBar'
import { TASKBAR_HEIGHT } from './lib/constants';

export default function Page() {
  const currBG = '/portfolio_website_background.svg' //swap this out later or hook it up w/ a global state variable somewhere
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${currBG}')`}}>
      <HeaderBar />
      <div className="relative w-full overflow-hidden" style={{ height: `calc(100vh - ${TASKBAR_HEIGHT}px)`}}>
        <div className="p-4 flex flex-col gap-4">
          <DesktopIcon appType="resume" label="Resume" />
          <DesktopIcon appType="projects" label="Projects" />
          <DesktopIcon appType="about" label="About Me" />
          <DesktopIcon appType="settings" label="Settings" />
          <DesktopIcon appType="welcome" label="Welcome" />
        </div>
        <WindowManager />
      </div>
      <TaskBar />
    </main>
  );
}