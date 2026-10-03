import { NAV_LINKS } from './Navbar';

// App-style tab bar, only on small screens.
export default function MobileNav() {
    return (
        <nav
            aria-label="Sections"
            className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:hidden"
        >
            <div className="mx-auto grid max-w-md grid-cols-4 rounded-2xl border border-white/10 bg-[#1b1b1f]/85 p-1 shadow-2xl shadow-black/50 backdrop-blur-md">
                {NAV_LINKS.map(({ href, label, Icon }) => (
                    <a
                        key={href}
                        href={href}
                        className="flex flex-col items-center gap-0.5 rounded-xl py-2 text-[11px] text-nonPrimaryText transition-colors active:bg-white/10 active:text-white"
                    >
                        <Icon className="h-5 w-5" />
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
