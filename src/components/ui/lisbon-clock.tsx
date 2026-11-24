'use client';
import { useEffect, useState } from 'react';

// The clock only shows minutes, so refreshing every 15 s is plenty.
const CLOCK_REFRESH_MS = 15_000;

/** Current time in Lisbon, so a visitor abroad knows when I'm likely to answer. */
function useLisbonTime() {
    const [lisbonTime, setLisbonTime] = useState('');

    useEffect(() => {
        const updateTime = () =>
            setLisbonTime(
                new Date().toLocaleTimeString('en-GB', {
                    timeZone: 'Europe/Lisbon',
                    hour: '2-digit',
                    minute: '2-digit',
                })
            );
        updateTime();
        const interval = setInterval(updateTime, CLOCK_REFRESH_MS);
        return () => clearInterval(interval);
    }, []);

    return lisbonTime;
}

/** The time in Lisbon as hh:mm, ticking. The text around it says where the time is from. */
export function LisbonClock({ className }: { className?: string }) {
    const lisbonTime = useLisbonTime();

    return (
        // Renders "--:--" on the server and until the clock runs, so server and
        // client HTML match and the line doesn't shift when the time fills in.
        <time className={className}>{lisbonTime || '--:--'}</time>
    );
}
