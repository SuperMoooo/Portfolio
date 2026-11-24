import type { ReactNode } from 'react';
import type { ProjectLink } from '@/content/projects';
import { ButtonLink, type ButtonVariant } from './button';
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, PackageIcon, PlayStoreIcon } from './icons';

const ICON_BY_KIND: Record<ProjectLink['kind'], ReactNode> = {
    play: <PlayStoreIcon />,
    apk: <DownloadIcon />,
    github: <GithubIcon className="h-4 w-4" />,
    demo: <ArrowUpRightIcon />,
    pub: <PackageIcon />,
    pypi: <PackageIcon />,
};

/** A project's external link (store page, package registry, source code), with the icon for its kind. */
export function ProjectLinkButton({ link, variant = 'secondary' }: { link: ProjectLink; variant?: ButtonVariant }) {
    const isDownload = link.kind === 'apk';

    return (
        <ButtonLink href={link.href} variant={variant} isExternal={!isDownload} download={isDownload || undefined}>
            {ICON_BY_KIND[link.kind]}
            {link.label}
        </ButtonLink>
    );
}
