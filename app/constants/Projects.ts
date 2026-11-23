import type { StaticImageData } from 'next/image';
import compras from '../assets/projectImgs/compras.webp';
import gesti from '../assets/projectImgs/gesti.webp';

export interface ProjectLink {
    label: string;
    href: string;
    kind: 'play' | 'apk' | 'demo' | 'github' | 'pub' | 'pypi';
}

export interface MobileApp {
    title: string;
    img: StaticImageData;
    // Where the app logo sits in the store banner, used to crop an app icon.
    icon: { x: number; y: number; zoom: number };
    category: string;
    desc: string;
    techs: string[];
    links: ProjectLink[];
}

export const MOBILE_APPS: MobileApp[] = [
    {
        title: 'Gesti',
        img: gesti,
        icon: { x: 20, y: 50, zoom: 470 },
        category: 'Productivity',
        desc: 'Keeps your personal, work and school life organised in one place: reminders, events, tasks and school schedules on a single agenda.',
        techs: ['Flutter', 'Riverpod', 'Firebase'],
        links: [
            {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.supermo.gesti',
                kind: 'play',
            },
        ],
    },
    {
        title: 'Compras',
        img: compras,
        icon: { x: 49, y: 50, zoom: 640 },
        category: 'Shared shopping lists',
        desc: 'Shared shopping lists for families and housemates. Create or join a group and edit lists together in real time.',
        techs: ['Flutter', 'Firebase'],
        links: [
            {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.supermo.compras',
                kind: 'play',
            },
        ],
    },
];

export interface CliCommand {
    cmd: string;
    note?: string;
}

/** One of the two moarch scaffolding CLIs: the app side or the API side. */
export interface ScaffoldTool {
    name: string;
    // Which end of an app the tool sets up, shown as a badge on its card.
    target: string;
    summary: string;
    install: string;
    commands: CliCommand[];
    // Short enough to read as chips.
    features: string[];
    links: ProjectLink[];
}

export const SCAFFOLD_TOOLS: ScaffoldTool[] = [
    {
        name: 'moarch',
        target: 'Flutter apps',
        summary:
            'Sets up a Flutter project with Clean Architecture and shared team conventions, then adds features to it layer by layer.',
        install: 'dart pub global activate moarch',
        commands: [
            { cmd: 'moarch init', note: 'new project' },
            { cmd: 'moarch create feature auth', note: 'every layer + route' },
            { cmd: 'moarch doctor --fix', note: 'check the setup' },
        ],
        features: ['Riverpod or Bloc', 'Dio or Firebase', 'Flavors', 'Models from JSON', 'Offline-first sync', 'Generated tests'],
        links: [
            { label: 'pub.dev', href: 'https://pub.dev/packages/moarch', kind: 'pub' },
            { label: 'Source', href: 'https://github.com/SuperMoooo/moarch', kind: 'github' },
        ],
    },
    {
        name: 'moarch-py',
        target: 'FastAPI back ends',
        summary:
            'The same commands for the API: a modular-monolith FastAPI project on uv, async SQLAlchemy 2, Alembic and Pydantic v2.',
        install: 'uv tool install moarch-py',
        commands: [
            { cmd: 'moarch-py init shop-api', note: 'new project' },
            { cmd: 'moarch-py create module orders', note: 'every layer + tests' },
            { cmd: 'uv run lint-imports', note: 'module boundaries hold' },
        ],
        features: ['PostgreSQL, MySQL, SQLite', 'Alembic', 'Enforced module boundaries', 'Docker + CI', 'Mock responses', 'AGENTS.md'],
        links: [
            { label: 'PyPI', href: 'https://pypi.org/project/moarch-py/', kind: 'pypi' },
            { label: 'Source', href: 'https://github.com/SuperMoooo/moarch-py', kind: 'github' },
        ],
    },
];

export interface OtherProject {
    title: string;
    year?: string;
    desc: string;
    techs: string[];
    // Hackathon work has no public deployment, so a link is optional.
    demoLink?: string;
    githubLink?: string;
}

export const OTHER_PROJECTS: OtherProject[] = [
    {
        title: 'Urban Infrastructure',
        year: '2026',
        desc: 'Aveiro Tech Week hackathon: finds traffic signs, street lights and waste containers in Street View images and videos, then maps them. I built the API, with a web developer and an ML engineer.',
        techs: ['Python', 'API', 'Machine learning'],
    },
    {
        title: 'MoT',
        desc: 'React Native app to track birthdays (with a notification on the day), notes and tasks.',
        githubLink: 'https://github.com/SuperMoooo/MoT',
        techs: ['React Native', 'Redux Toolkit'],
    },
    {
        title: 'PokeGames',
        desc: 'Guess the Pokémon, guess from a blurred image, and Stronger or Weaker with an online leaderboard.',
        demoLink: 'https://poke-games-nine.vercel.app/',
        githubLink: 'https://github.com/SuperMoooo/PokeGames',
        techs: ['Next.js', 'TypeScript', 'Redux Toolkit', 'MongoDB'],
    },
    {
        title: 'Liga dos Amigos do Hospital de Abrantes',
        desc: 'Volunteer work: built and published the website for the hospital’s friends association.',
        demoLink: 'https://ligaamigoshospital.abrantes.pt',
        techs: ['Website', 'Volunteer'],
    },
    {
        title: 'Kubic Deal',
        desc: 'Website for a client, built for the launch of the company.',
        demoLink: 'https://kubicdeal.pt/',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Comic Characters Info',
        desc: 'Appearance, biography and power stats for comic characters, from a public API.',
        demoLink: 'https://superheroesinfo.vercel.app/',
        githubLink: 'https://github.com/SuperMoooo/superheroesinfo',
        techs: ['Next.js', 'Redux Toolkit', 'MUI'],
    },
    {
        title: 'NBA Teams',
        desc: 'NBA team info built on API data.',
        demoLink: 'https://supermoooo.github.io/NBA-SITE/',
        githubLink: 'https://github.com/SuperMoooo/NBA-SITE',
        techs: ['React', 'Tailwind CSS'],
    },
    {
        title: 'Slime Game',
        desc: 'PC and Android game made for my final school project. Final grade: 18/20.',
        demoLink: 'https://supermo.itch.io/slime-game',
        techs: ['GDevelop'],
    },
    {
        title: 'Bipo',
        desc: 'Game built for the game development course unit.',
        demoLink: 'https://supermoooo.itch.io/bipo',
        techs: ['Unreal Engine 5'],
    },
    {
        title: 'BlackJack',
        desc: 'A birthday “gift” for a friend who loves blackjack. Infinite money, no splits.',
        demoLink: 'https://supermoooo.github.io/blackJackGame/',
        githubLink: 'https://github.com/SuperMoooo/blackJackGame',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
];
