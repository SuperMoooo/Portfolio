'use client';
import { useEffect, useState } from 'react';
import { CV_FILES, SOCIALS } from '../constants/Profile';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { buttonClass, cardClass, iconButtonClass } from './styles';

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

export default function ContactFooter() {
    const lisbonTime = useLisbonTime();

    return (
        <footer className="mx-auto max-w-page px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)] pt-8 sm:px-6">
            <div className={`${cardClass} relative isolate overflow-hidden p-6 sm:p-10`}>
                {/* The same soft glow as the hero, closing the page. */}
                <div
                    aria-hidden="true"
                    className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-lilac/[0.08] blur-3xl"
                />
                <h2 id="contact" className="type-heading scroll-mt-24 text-2xl sm:text-4xl">
                    Hiring for mobile or backend work?
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                    Email me, or start with the CV. I work in English and Portuguese.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <a href={`mailto:${SOCIALS.email}`} className={buttonClass('primary')}>
                        <MailIcon className="h-4 w-4" />
                        {SOCIALS.email}
                    </a>
                    <a href={CV_FILES.english} download className={buttonClass('secondary')}>
                        <DownloadIcon />
                        CV
                    </a>
                    <a href={CV_FILES.portuguese} download lang="pt" className={buttonClass('secondary')}>
                        CV em português
                    </a>
                    <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconButtonClass}>
                        <GithubIcon />
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconButtonClass}>
                        <LinkedinIcon />
                    </a>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-between gap-x-6 gap-y-1 text-sm text-muted">
                <p>&copy; {new Date().getFullYear()} André Montoito</p>
                {/* Empty until the client clock runs, so server and client HTML match. */}
                <p>{lisbonTime && `${lisbonTime} in Lisbon, Portugal`}</p>
            </div>
        </footer>
    );
}
