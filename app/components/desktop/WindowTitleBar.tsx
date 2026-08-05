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
    <div className="title-bar  flex items-center justify-between rounded-t-lg text-text px-2 py-1 cursor-move bg-crust">
      <span className="text-sm font-medium truncate">{title}</span>
      <div className="controls flex gap-1">
        <button onClick={onMinimize} aria-label="Minimize" className="w-5 h-5 leading-none">_</button>
          <button onClick={onMaximize} aria-label="Maximize" className="w-5 h-5 leading-none">□</button>
        <button onClick={onClose} aria-label="Close" className="w-5 h-5 leading-none">×</button>
      </div>
    </div>
  );
}