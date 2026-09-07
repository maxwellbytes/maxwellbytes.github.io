// components/desktop/window/WindowBody.tsx
'use client';
import { useRef, useLayoutEffect } from 'react';

interface WindowBodyProps {
  children: React.ReactNode;
  onMeasured?: (width: number, height: number) => void;
}

// rounded-b-md

export function WindowBody({ children, onMeasured } : WindowBodyProps) {
  return (
    <div className="window-body overflow-auto flex-1 min-h-0 bg-base">
      {children}
    </div>
  )
}

// export function WindowBody({ children }: { children: React.ReactNode }) {
//   return <div className="window-body rounded-b-lg p-3 overflow-auto flex-1 min-h-0 bg-mantle">
//     {children}
//     </div>;
// }