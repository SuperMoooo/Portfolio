import type { ReactNode } from 'react';
import type { ProjectLink } from '../constants/Projects';
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, PackageIcon, PlayStoreIcon } from './Icons';
import { buttonClass, type Emphasis } from './styles';

const ICONS: Record<ProjectLink['kind'], ReactNode> = {
    play: <PlayStoreIcon />,
    apk: <DownloadIcon />,
    github: <GithubIcon className="h-4 w-4" />,
    demo: <ArrowUpRightIcon />,
    pub: <PackageIcon />,
    pypi: <PackageIcon />,
};

/** A project's external link (store page, package registry, source code). */
export default function LinkButton({ link, emphasis = 'secondary' }: { link: ProjectLink; emphasis?: Emphasis }) {
    const isDownload = link.kind === 'apk';

    return (
        <a
            href={link.href}
            target={isDownload ? undefined : '_blank'}
            rel="noopener noreferrer"
            download={isDownload || undefined}
            className={buttonClass(emphasis)}
        >
            {ICONS[link.kind]}
            {link.label}
        </a>
    );
}
