'use client'
import { useDesktop } from '@/context/DesktopContext'
import { AppType } from '@/lib/types'

const IMAGE_MAP = {
    "About Me" : "/about-svgrepo-com.svg",
    "Resume" : "/resume-4-svgrepo-com.svg",
    "Projects" : "/project-new-svgrepo-com.svg"
}
//const imageSrc = IMAGE_MAP[label] || IMAGE_MAP.default;
export function DesktopIcon({ appType, label }: { appType: AppType; label: string }) {
    const { openWindow } = useDesktop();
    const imageSrc = IMAGE_MAP[label as keyof typeof IMAGE_MAP]
    return (
        <button
            onClick={() => openWindow(appType, label)}
            className="flex flex-col items-center gap-1 w-20 text-xs"
        >
            <div className="w-9 h-9" />
            <img src={imageSrc} className="w-9 h-9 invert brightness-0"/>
            {label}
        </button>
    );
}