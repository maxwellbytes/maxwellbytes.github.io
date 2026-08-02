// components/desktop/window/Window.tsx
'use client';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import { WindowTitleBar } from './WindowTitleBar';
import { WindowBody } from './WindowBody';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isFocused: boolean;
  isMaximized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
}

export function Window({
  id,
  title,
  children,
  x,
  y,
  width,
  height,
  zIndex,
  isFocused,
  onClose,
  onMinimize,
  onMaximize,
  isMaximized,
  onFocus,
  onMove,
}: WindowProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <>
    <Draggable
      nodeRef={nodeRef}
      key={isMaximized ? 'maximized' : 'normal'}
      handle=".title-bar"
      position={isMaximized ? { x: 0, y: 0} : { x, y }}
      onStart={onFocus}
      onStop={(e, data) => onMove(data.x, data.y)}
      bounds="parent"
      disabled={isMaximized}
    >
      <div
        ref={nodeRef}
        className={`window shadow-lg rounded-xl flex flex-col ${isMaximized ? 'fixed inset-0 w-screen h-screen' : 'absolute'}`}
        style={{ zIndex, width, height }}
        onMouseDown={onFocus}
      >
        <WindowTitleBar title={title} onClose={onClose} onMinimize={onMinimize} onMaximize={onMaximize}/>
        <WindowBody>{children}</WindowBody>
      </div>
    </Draggable>
    </>
  );
}