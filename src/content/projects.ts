import comprasBanner from '@/assets/app-banners/compras.webp';
import gestiBanner from '@/assets/app-banners/gesti.webp';
import type { StaticImageData } from 'next/image';

export interface ProjectLink {
    label: string;
    href: string;
    kind: 'play' | 'apk' | 'demo' | 'github' | 'pub' | 'pypi';
}

export interface PublishedApp {
    title: string;
    banner: StaticImageData;
    // Where the app logo sits in the store banner, used to crop an app icon out of it.
    iconCrop: { x: number; y: number; zoom: number };
    category: string;
    description: string;
    technologies: string[];
    links: ProjectLink[];
}

/** The two apps I designed, built and published on Google Play. */
export const PUBLISHED_APPS: PublishedApp[] = [
    {
        title: 'Gesti',
        banner: gestiBanner,
        iconCrop: { x: 20, y: 50, zoom: 470 },
        category: 'Productivity',
        description:
            'Keeps your personal, work and school life organised in one place: reminders, events, tasks and school schedules on a single agenda.',
        technologies: ['Flutter', 'Riverpod', 'Firebase'],
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
        banner: comprasBanner,
        iconCrop: { x: 49, y: 50, zoom: 640 },
        category: 'Shared shopping lists',
        description:
            'Shared shopping lists for families and housemates. Create or join a group and edit lists together in real time.',
        technologies: ['Flutter', 'Firebase'],
        links: [
            {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/details?id=com.supermo.compras',
                kind: 'play',
            },
        ],
    },
];

export interface SideProject {
    title: string;
    year?: string;
    description: string;
    technologies: string[];
    // Hackathon work has no public deployment, so both links are optional.
    demoLink?: string;
    sourceLink?: string;
}

/** Everything else, most relevant first: a hackathon API, an app, websites and games. */
export const SIDE_PROJECTS: SideProject[] = [
    {
        title: 'Urban Infrastructure',
        year: '2026',
        description:
            'Aveiro Tech Week hackathon: finds traffic signs, street lights and waste containers in Street View images and videos, then maps them. I built the API, with a web developer and an ML engineer.',
        technologies: ['Python', 'API', 'Machine learning'],
    },
    {
        title: 'MoT',
        description:
            'React Native app to track birthdays (with a notification on the day), notes and tasks.',
        sourceLink: 'https://github.com/SuperMoooo/MoT',
        technologies: ['React Native', 'Redux Toolkit'],
    },
    {
        title: 'PokeGames',
        description:
            'Guess the Pokémon, guess from a blurred image, and Stronger or Weaker with an online leaderboard.',
        demoLink: 'https://poke-games-nine.vercel.app/',
        sourceLink: 'https://github.com/SuperMoooo/PokeGames',
        technologies: ['Next.js', 'TypeScript', 'Redux Toolkit', 'MongoDB'],
    },

    {
        title: 'Kubic Deal',
        description:
            'Website for a client, built for the launch of the company.',
        demoLink: 'https://kubicdeal.pt/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Comic Characters Info',
        description:
            'Appearance, biography and power stats for comic characters, from a public API.',
        demoLink: 'https://superheroesinfo.vercel.app/',
        sourceLink: 'https://github.com/SuperMoooo/superheroesinfo',
        technologies: ['Next.js', 'Redux Toolkit', 'MUI'],
    },
    {
        title: 'NBA Teams',
        description: 'NBA team info built on API data.',
        demoLink: 'https://supermoooo.github.io/NBA-SITE/',
        sourceLink: 'https://github.com/SuperMoooo/NBA-SITE',
        technologies: ['React', 'Tailwind CSS'],
    },
    {
        title: 'Slime Game',
        description:
            'PC and Android game made for my final school project. Final grade: 18/20.',
        demoLink: 'https://supermo.itch.io/slime-game',
        technologies: ['GDevelop'],
    },
    {
        title: 'Bipo',
        description: 'Game built for the game development course unit.',
        demoLink: 'https://supermoooo.itch.io/bipo',
        technologies: ['Unreal Engine 5'],
    },
    {
        title: 'BlackJack',
        description:
            'A birthday “gift” for a friend who loves blackjack. Infinite money, no splits.',
        demoLink: 'https://supermoooo.github.io/blackJackGame/',
        sourceLink: 'https://github.com/SuperMoooo/blackJackGame',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
];
