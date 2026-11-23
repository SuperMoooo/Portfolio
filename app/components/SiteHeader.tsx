import { CV_FILES, NAV_LINKS } from '../constants/Profile';
import { DownloadIcon } from './Icons';
import { buttonClass } from './styles';

/**
 * Sticky top bar. The CV stays one tap away at any scroll position; the
 * section links appear from md up, where there is room for them.
 */
export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-edge bg-base/90 pt-[env(safe-area-inset-top)]">
            <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6">
                <a href="#top" className="flex min-h-[44px] items-center gap-2.5 font-semibold">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-lilac font-mono text-xs font-medium text-base">
                        AM
                    </span>
                    André Montoito
                </a>

                <nav aria-label="Sections" className="hidden md:block">
                    <ul className="flex items-center gap-1">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="inline-flex min-h-[44px] items-center rounded-lg px-3 text-sm text-muted transition-colors hover:text-fg"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href={CV_FILES.english} download className={buttonClass('primary')}>
                    <DownloadIcon />
                    CV
                </a>
            </div>
        </header>
    );
}
