import { BriefcaseIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, StackIcon, TerminalIcon } from './Icons';

export const NAV_LINKS = [
    { href: '#apps', label: 'Apps', Icon: PhoneIcon },
    { href: '#moarch', label: 'moarch', Icon: TerminalIcon },
    { href: '#experience', label: 'Experience', Icon: BriefcaseIcon },
    { href: '#stack', label: 'Stack', Icon: StackIcon },
];

export const SOCIALS = {
    email: 'andremontoito@gmail.com',
    github: 'https://github.com/SuperMoooo',
    linkedin: 'https://www.linkedin.com/in/andre-montoito/',
};

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/5 bg-[#151515]/75 backdrop-blur-md pt-[env(safe-area-inset-top)]">
            <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
                <a href="#top" className="flex items-center gap-2 font-medium text-white">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-primary text-sm font-bold text-black">
                        AM
                    </span>
                    <span className="hidden sm:inline">André Montoito</span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="rounded-full px-3 py-1.5 text-sm text-nonPrimaryText transition-colors hover:bg-white/5 hover:text-white"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-1 text-nonPrimaryText">
                    <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-white">
                        <MailIcon />
                    </a>
                    <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-white">
                        <GithubIcon />
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/5 hover:text-white">
                        <LinkedinIcon />
                    </a>
                </div>
            </nav>
        </header>
    );
}
