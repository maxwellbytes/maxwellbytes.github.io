'use client'
import { useDesktop } from '@/context/DesktopContext';
import { AppType } from '@/lib/types';
import { ICON_MAP } from '@/lib/constants';
import { ICONS } from '@/lib/icons';


//const imageSrc = IMAGE_MAP[label] || IMAGE_MAP.default;
export function DesktopIcon({ appType, label }: { appType: AppType; label: string }) {
    const { openWindow } = useDesktop();
    //const imageSrc = ICON_MAP[appType] ?? ICON_MAP.welcome;
    const Icon = ICONS[appType]
    // below div: <img src={imageSrc} className="w-9 h-9 invert brightness-0"/>
    return (
        <button
            onClick={() => openWindow(appType, label)}
            className="flex flex-col gap-4 items-center w-20 text-xs"
        >
            <div className="flex flex-col items-center">
            <Icon size={40} />
            {label}
            </div>
        </button>
    );
}