'use client'
import { useDesktop } from '@/context/DesktopContext'
import { AppType } from '@/lib/types'

export function DesktopIcon({ appType, label }: { appType: AppType; label: string }) {
    const { openWindow } = useDesktop();
    return (
        <button
            onClick={() => openWindow(appType, label)}
            className="flex flex-col items-center gap-1 w-20 text-xs"
        >
            <div className="w-9 h-9 bg-white border-2 border-black" />
            {label}
        </button>
    );
}