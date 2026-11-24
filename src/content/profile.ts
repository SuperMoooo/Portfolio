import { publicPath } from '@/lib/public-path';

export const SOCIALS = {
    email: 'andremontoito@gmail.com',
    github: 'https://github.com/SuperMoooo',
    linkedin: 'https://www.linkedin.com/in/andre-montoito/',
};

export interface CvFile {
    href: string;
    // The name the file is saved under, which is what a recruiter sees in their downloads.
    downloadName: string;
}

export const CV_FILES: Record<'english' | 'portuguese', CvFile> = {
    english: {
        href: publicPath('cv/andre-montoito-cv-en.pdf'),
        downloadName: 'Andre-Montoito-CV-EN.pdf',
    },
    portuguese: {
        href: publicPath('cv/andre-montoito-cv-pt.pdf'),
        downloadName: 'Andre-Montoito-CV-PT.pdf',
    },
};

/** This site's own repository, linked from the footer. */
export const SITE_SOURCE = 'https://github.com/SuperMoooo/Portfolio';

/** Section ids, in page order. The header nav lists them like a table of contents. */
export const NAV_LINKS = [
    { id: 'experience', label: 'Experience' },
    { id: 'open-source', label: 'Open source' },
    { id: 'projects', label: 'Projects' },
    { id: 'stack', label: 'Stack' },
];