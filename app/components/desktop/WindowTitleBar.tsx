// components/desktop/window/WindowTitleBar.tsx
'use client';

interface WindowTitleBarProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize?: () => void;
}
// rounded-t-lg

export function WindowTitleBar({ title, onClose, onMinimize, onMaximize }: WindowTitleBarProps) {
  return (
    <div className="title-bar font-jetbrains flex items-center justify-between text-text px-2 py-1 cursor-move bg-crust">
      <span className="text-m">{title}</span>
      <div className="controls flex flex-row gap-1" onMouseDown={(e) => e.stopPropagation()}
  onClick={(e) => e.stopPropagation()}>
        <button onClick={onMaximize} aria-label="Maximize" className="bg-green w-3 h-3 leading-none rounded-full hover:bg-green/75"></button>
          <button onClick={onMinimize} aria-label="Minimize" className="bg-yellow w-3 h-3 rounded-full leading-none hover:bg-green/75"></button>
        <button onClick={onClose} aria-label="Close" className="bg-red w-3 h-3 rounded-full hover:bg-red/75 "></button>
      </div>
    </div>
  );
}