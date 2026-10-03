import type { ProjectLink } from '../constants/Projects';
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, PlayStoreIcon } from './Icons';

export default function LinkButton({ link, primary = false }: { link: ProjectLink; primary?: boolean }) {
    const icon = {
        play: <PlayStoreIcon />,
        apk: <DownloadIcon className="h-4 w-4" />,
        github: <GithubIcon className="h-4 w-4" />,
        demo: <ArrowUpRightIcon />,
        pub: <ArrowUpRightIcon />,
    }[link.kind];

    return (
        <a
            href={link.href}
            target={link.kind === 'apk' ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={link.kind === 'apk' || undefined}
            className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-default px-4 text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95 ${
                primary
                    ? 'bg-gradient-to-r from-accent to-primary text-black'
                    : 'border border-white/15 bg-white/5 text-white'
            }`}
        >
            {icon}
            {link.label}
        </a>
    );
}
