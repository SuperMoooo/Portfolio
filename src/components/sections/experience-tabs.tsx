'use client';
import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { EARLY_INTERNSHIPS, EXPERIENCE, type Job } from '@/content/experience';
import { TagList } from '@/components/ui/tag-list';
import { cn } from '@/lib/class-names';

interface ExperienceTab {
    key: string;
    label: string;
    // The years under the label, e.g. "2024 – 2025".
    years: string;
}

/** The span of years across some periods: "Oct 2024 – Jul 2025" → "2024 – 2025", or one year if they match. */
function yearsOf(periods: string[]) {
    // Every four-digit number in the periods is a year.
    const years = periods.flatMap((period) => period.match(/\d{4}/g) ?? []).map(Number);
    const firstYear = Math.min(...years);
    const lastYear = Math.max(...years);
    return firstYear === lastYear ? `${firstYear}` : `${firstYear} – ${lastYear}`;
}

const periodsOf = (job: Job) => job.roles.map((role) => role.period);

const SCHOOL_TAB_KEY = 'school-internships';

// One tab per employer, newest first, then all school internships in one.
const TABS: ExperienceTab[] = [
    ...EXPERIENCE.map((job) => ({
        key: job.company,
        label: job.company,
        years: yearsOf(periodsOf(job)),
    })),
    {
        key: SCHOOL_TAB_KEY,
        label: 'School internships',
        years: yearsOf(EARLY_INTERNSHIPS.flatMap(periodsOf)),
    },
];

/** One employer: each role with its dates, what I did and the stack. */
function JobPanel({ job }: { job: Job }) {
    return (
        <div className="flex flex-col gap-8">
            {job.roles.map((role) => (
                <article key={role.title + role.period}>
                    <h3 className="text-heading">{role.title}</h3>
                    <p className="mt-1 text-ink-muted">
                        <span className="text-ink">{job.company}</span>, {job.location}
                    </p>
                    <ul aria-label="Dates and terms" className="mt-3 flex flex-wrap gap-1.5 text-xs">
                        <li className="rounded-tag bg-accent/15 px-2 py-0.5 font-medium tabular-nums text-accent">{role.period}</li>
                        {role.arrangement && (
                            <li className="rounded-tag bg-surface-raised px-2 py-0.5 font-medium text-ink-muted">{role.arrangement}</li>
                        )}
                    </ul>
                    {role.product && <p className="mt-4 text-sm font-medium">{role.product}</p>}
                    <ul className="mt-3 flex flex-col gap-2 text-ink-muted">
                        {role.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                            >
                                {highlight}
                            </li>
                        ))}
                    </ul>
                    {role.technologies && <TagList tags={role.technologies} className="mt-5" />}
                </article>
            ))}
        </div>
    );
}

/** The three pre-degree internships, short, in one panel. */
function SchoolInternshipsPanel() {
    return (
        <div>
            <h3 className="text-heading">School internships</h3>
            <p className="mt-1 text-ink-muted">Before the degree: where the design and video work comes from.</p>
            <ul className="mt-5 flex flex-col gap-5">
                {EARLY_INTERNSHIPS.flatMap((job) =>
                    job.roles.map((role) => (
                        <li key={job.company + role.period}>
                            <p className="flex flex-wrap items-baseline justify-between gap-x-4">
                                <span className="font-medium">
                                    {job.company}
                                    <span className="font-normal text-ink-muted">, {role.title.toLowerCase()}</span>
                                </span>
                                <span className="text-sm tabular-nums text-ink-muted">{role.period}</span>
                            </p>
                            <p className="mt-1 text-sm text-ink-muted">{role.highlights.join(' ')}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

/**
 * Work history as tabs, one employer at a time, so four jobs take the height
 * of one. Follows the WAI-ARIA tabs pattern: arrow keys move between tabs,
 * Home and End jump to the first and last.
 */
export function ExperienceTabs({ className }: { className?: string }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
    const idPrefix = useId();

    const selectTab = (index: number) => {
        setSelectedIndex(index);
        tabRefs.current[index]?.focus();
    };

    // Both arrow pairs work, since the tab list is a row on phones and a column on desktop.
    const moveBetweenTabs = (event: KeyboardEvent<HTMLDivElement>) => {
        const lastIndex = TABS.length - 1;
        const next = selectedIndex === lastIndex ? 0 : selectedIndex + 1;
        const previous = selectedIndex === 0 ? lastIndex : selectedIndex - 1;
        const targetIndexByKey: Record<string, number> = {
            ArrowDown: next,
            ArrowRight: next,
            ArrowUp: previous,
            ArrowLeft: previous,
            Home: 0,
            End: lastIndex,
        };
        const targetIndex = targetIndexByKey[event.key];
        if (targetIndex === undefined) return;
        event.preventDefault();
        selectTab(targetIndex);
    };

    return (
        <div className={cn('grid gap-6 p-5 sm:p-6 md:grid-cols-[14rem_1fr] md:gap-8', className)}>
            <div
                role="tablist"
                aria-label="Employers"
                onKeyDown={moveBetweenTabs}
                // A scrolling row on phones, a column beside the panel from md up.
                className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-col md:overflow-visible md:px-0 md:pb-0"
            >
                {TABS.map((tab, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                        <button
                            key={tab.key}
                            ref={(element) => {
                                tabRefs.current[index] = element;
                            }}
                            type="button"
                            role="tab"
                            id={`${idPrefix}-tab-${index}`}
                            aria-selected={isSelected}
                            aria-controls={`${idPrefix}-panel-${index}`}
                            // Only the selected tab is in the Tab order; arrows reach the rest.
                            tabIndex={isSelected ? 0 : -1}
                            onClick={() => setSelectedIndex(index)}
                            className={cn(
                                'flex min-h-[44px] shrink-0 flex-col justify-center rounded-control px-3 py-2 text-left transition-colors',
                                isSelected ? 'bg-surface-raised text-ink' : 'text-ink-muted hover:bg-surface-raised/50 hover:text-ink'
                            )}
                        >
                            <span className="whitespace-nowrap text-sm font-semibold">{tab.label}</span>
                            {/* The space keeps screen readers from running the name and
                                years together; flex layout ignores it visually. */}{' '}
                            <span className={cn('text-xs tabular-nums', isSelected ? 'text-accent' : 'text-ink-muted')}>
                                {tab.years}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Every panel is in the HTML (so search engines and no-JS visitors
                get the first one, and the rest exist); only the selected one shows. */}
            {TABS.map((tab, index) => {
                const job = EXPERIENCE.find((candidate) => candidate.company === tab.key);
                return (
                    <div
                        key={tab.key}
                        role="tabpanel"
                        id={`${idPrefix}-panel-${index}`}
                        aria-labelledby={`${idPrefix}-tab-${index}`}
                        hidden={index !== selectedIndex}
                        tabIndex={0}
                        className="min-w-0 rounded-control"
                    >
                        {job ? <JobPanel job={job} /> : <SchoolInternshipsPanel />}
                    </div>
                );
            })}
        </div>
    );
}
