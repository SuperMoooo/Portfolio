'use client';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/content/profile';
import { cn } from '@/lib/class-names';

// The hero and the contact panel are watched too, though they have no nav
// link, so scrolling back up to the top or down to the end clears the highlight.
const WATCHED_SECTION_IDS = ['intro', ...NAV_LINKS.map((link) => link.id), 'contact'];

/** The id of the section being read: the one crossing the middle of the viewport. */
function useCurrentSectionId(sectionIds: string[]) {
    const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const crossingSection = entries.find((entry) => entry.isIntersecting);
                if (crossingSection) setCurrentSectionId(crossingSection.target.id);
            },
            // Shrinks the viewport to a thin band 45–50% of the way down, so
            // only one section overlaps it at a time.
            { rootMargin: '-45% 0px -50% 0px' }
        );

        for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        }
        return () => observer.disconnect();
    }, [sectionIds]);

    return currentSectionId;
}

/** The header's section links, with the section being read in bold and underlined in the accent. */
export function SectionNav() {
    const currentSectionId = useCurrentSectionId(WATCHED_SECTION_IDS);

    return (
        <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex">
                {NAV_LINKS.map(({ id, label }) => {
                    const isCurrent = id === currentSectionId;
                    return (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                aria-current={isCurrent ? 'true' : undefined}
                                className={cn(
                                    'relative flex h-16 items-center px-3 text-sm transition-colors',
                                    // Wisteria text barely differs from the muted links in brightness, so the
                                    // current link is set apart by weight and full ink, with the accent underline.
                                    isCurrent ? 'font-semibold text-ink' : 'text-ink-muted hover:text-ink'
                                )}
                            >
                                {/* An invisible bold copy holds each link at its bold width, so
                                    the links do not shift sideways when the current one changes. */}
                                <span className="grid">
                                    <span className="col-start-1 row-start-1">{label}</span>
                                    <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-semibold">
                                        {label}
                                    </span>
                                </span>
                                {/* Sits on the header's bottom border, like a tab indicator. */}
                                {isCurrent && <span aria-hidden="true" className="absolute inset-x-3 -bottom-px h-0.5 bg-accent" />}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
