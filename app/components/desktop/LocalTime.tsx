'use client'


import { Suspense, useEffect, useState  } from 'react'
import { useHydration } from '@/components/hooks/useHydration'

export function LocalTime({ date }: { date:Date | string | number }) {
    const hydrated = useHydration()
    const [now, setNow ] = useState(() => new Date(date))

    useEffect(() => {
        setNow(new Date(date))
    }, [date])

    useEffect(() => {
        const calc = (6000 - Date.now()) % 6000
        const interval = window.setInterval(() => {
            setNow(new Date())
        }, 30000)
        return () => window.clearInterval(interval)
    }, [])

    return (
        <Suspense key={hydrated ? 'local' : 'utc'}>
            <time dateTime={now.toISOString()}>
                {now.toLocaleTimeString(undefined, {
                hour: 'numeric',
                minute: '2-digit',
            })}
                {hydrated ? '' : ' (UTC)'}
            </time>
        </Suspense>
    )
}