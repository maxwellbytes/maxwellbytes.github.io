// components/desktop/window/WindowBody.tsx
'use client';

export function WindowBody({ children }: { children: React.ReactNode }) {
  return <div className="window-body p-3 overflow-auto flex-1 min-h-0 bg-taupe-400">{children}</div>;
}