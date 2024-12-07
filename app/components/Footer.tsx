'use client';
import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [time, setTime] = useState('');
    const date = new Date();
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                date.toLocaleTimeString('en-PT', {
                    timeZone: 'Europe/Lisbon',
                })
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="flex items-center justify-between  mb-10 *:text-accent *:text-center">
            <p>{time}</p>
            <p>&copy; {date.getFullYear()} André Montoito</p>
            <p>Portugal</p>
        </section>
    );
}
