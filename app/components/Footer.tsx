'use client';
import { useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { SOCIALS } from './Navbar';

export default function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const tick = () =>
            setTime(
                new Date().toLocaleTimeString('en-GB', {
                    timeZone: 'Europe/Lisbon',
                    hour: '2-digit',
                    minute: '2-digit',
                })
            );
        tick();
        const interval = setInterval(tick, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="contact" className="scroll-mt-20">
            <div className="rounded-[1.5rem] border border-accent/20 bg-gradient-to-br from-secundary/60 via-secondBg to-secondBg p-6 text-center sm:p-10">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                    Have an app in mind?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-nonPrimaryText">
                    I&apos;m always happy to talk Flutter, mobile architecture or a new project.
                </p>
                <a
                    href={`mailto:${SOCIALS.email}`}
                    className="mx-auto mt-6 flex min-h-[48px] w-full max-w-xs items-center justify-center gap-2 rounded-default bg-gradient-to-r from-accent to-primary px-5 font-medium text-black transition-transform hover:scale-105 active:scale-95"
                >
                    <MailIcon />
                    Get in touch
                </a>
                <p className="mt-3 break-all text-sm text-nonPrimaryText">{SOCIALS.email}</p>
                <div className="mt-6 flex justify-center gap-3 text-nonPrimaryText">
                    <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 hover:text-white">
                        <GithubIcon />
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 hover:text-white">
                        <LinkedinIcon />
                    </a>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 text-xs text-nonPrimaryText">
                <p>{time ? `${time} in Lisbon` : ''}</p>
                <p>&copy; {new Date().getFullYear()} André Montoito</p>
                <p aria-label="Portugal">🇵🇹</p>
            </div>
        </footer>
    );
}
