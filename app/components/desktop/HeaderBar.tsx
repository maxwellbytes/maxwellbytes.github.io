'use client';
import { useDesktop } from '@/context/DesktopContext';
import { LocalTime } from '@/components/desktop/LocalTime';

export default function HeaderBar() {
    const currentUCTime = new Date().toISOString()
    return (
        <>
        <div className="bg-crust flex justify-between px-4 py-1">
            <h2>This is a test header bar</h2>
            <LocalTime date={currentUCTime}></LocalTime>
        </div>
        </>
    )
}