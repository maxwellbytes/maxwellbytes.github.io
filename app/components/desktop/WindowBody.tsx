// components/desktop/window/WindowBody.tsx
'use client';

// rounded-b-md

export function WindowBody({ children }: { children: React.ReactNode }) {
  return <div className="window-body  p-3 overflow-auto flex-1 min-h-0"
  style={{ backgroundColor: 'rgba(253, 253, 253, .8)', backdropFilter: 'blur(8px)' }}>
    {children}
    </div>;
}