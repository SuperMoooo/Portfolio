import { CV_FILES } from '@/content/profile';
import { ButtonLink } from '@/components/ui/button';
import { DownloadIcon } from '@/components/ui/icons';
import { SectionNav } from './section-nav';

/**
 * Sticky top bar. The CV stays one tap away at any scroll position; the
 * section links appear from md up, where there is room for them.
 */
export function SiteHeader() {
    return (
        // Solid, not blurred: a backdrop blur on a sticky bar repaints on every
        // scroll frame, which is what made an earlier version of the site lag.
        <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 pt-[env(safe-area-inset-top)]">
            <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <a href="#top" className="flex min-h-[44px] items-center gap-2.5 font-semibold">
                    <span
                        aria-hidden="true"
                        className="grid h-8 w-8 place-items-center rounded-control bg-accent text-xs font-bold text-accent-ink font-wide"
                    >
                        AM
                    </span>
                    André Montoito
                </a>

                <SectionNav />

                <ButtonLink href={CV_FILES.english.href} download={CV_FILES.english.downloadName} variant="primary">
                    <DownloadIcon />
                    CV
                </ButtonLink>
            </div>
        </header>
    );
}
