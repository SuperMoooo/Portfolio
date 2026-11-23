import { publicFile } from './paths';

export const SOCIALS = {
    email: 'andremontoito@gmail.com',
    github: 'https://github.com/SuperMoooo',
    linkedin: 'https://www.linkedin.com/in/andre-montoito/',
};

export const CV_FILES = {
    english: publicFile('cvs/ANDRE_MONTOITO_CV_EN.pdf'),
    portuguese: publicFile('cvs/ANDRE_MONTOITO_CV_PT.pdf'),
};

/** In page order, so the header reads like a table of contents. */
export const NAV_LINKS = [
    { href: '#experience', label: 'Experience' },
    { href: '#open-source', label: 'Open source' },
    { href: '#projects', label: 'Projects' },
    { href: '#stack', label: 'Stack' },
];

export interface ArchitectureLayer {
    // Short tag on the right of the node: which layer of the app this is.
    layer: string;
    title: string;
    techs: string[];
    // How this layer talks to the one below it; empty on the last layer.
    talksToNextVia?: string;
}

/** The hero diagram: the layers I build, from the phone down to the data. */
export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
    { layer: 'UI', title: 'Mobile app', techs: ['Flutter', 'Android'], talksToNextVia: 'REST / JSON' },
    { layer: 'API', title: 'API service', techs: ['Python', 'FastAPI'], talksToNextVia: 'SQL' },
    { layer: 'Data', title: 'Database', techs: ['PostgreSQL'] },
];
