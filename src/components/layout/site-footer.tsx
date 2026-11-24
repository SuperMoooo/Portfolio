import { SITE_SOURCE } from '@/content/profile';
import { LisbonClock } from '@/components/ui/lisbon-clock';

/** Copyright, the local time in Lisbon, and a link to this site's source. */
export function SiteFooter() {
    return (
        <footer className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-2 text-sm text-ink-muted sm:px-6 lg:px-8">
            <p>&copy; {new Date().getFullYear()} André Montoito</p>
            <div className="flex flex-wrap items-center gap-x-6">
                {/* So a visitor abroad knows when I'm likely to answer. */}
                <p>
                    <LisbonClock className="tabular-nums" /> in Lisbon, Portugal
                </p>
                <a
                    href={SITE_SOURCE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-ink"
                >
                    Source of this site
                </a>
            </div>
        </footer>
    );
}
