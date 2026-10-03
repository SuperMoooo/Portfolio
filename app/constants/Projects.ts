import type { StaticImageData } from 'next/image';
import bipo from '../assets/projectImgs/bipo.webp';
import blackJackGame from '../assets/projectImgs/blackJackGame.webp';
import comicChars from '../assets/projectImgs/comicChars.webp';
import compras from '../assets/projectImgs/compras.webp';
import gesti from '../assets/projectImgs/gesti.webp';
import kubicDeal from '../assets/projectImgs/kubicDeal.webp';
import moT from '../assets/projectImgs/moT.webp';
import nbaSite from '../assets/projectImgs/nbaSite.webp';
import pokeGames from '../assets/projectImgs/pokeGames.webp';
import slimeGame from '../assets/projectImgs/slimeGame.webp';

export interface ProjectLink {
    label: string;
    href: string;
    kind: 'play' | 'apk' | 'demo' | 'github' | 'pub';
}

export interface MobileApp {
    title: string;
    img: StaticImageData;
    // Where the app logo sits in the store banner, used to crop an app icon.
    icon: { x: number; y: number; zoom: number };
    tagline: string;
    desc: string;
    techs: string[];
    links: ProjectLink[];
}

export const MOBILE_APPS: MobileApp[] = [
    {
        title: 'Gesti',
        img: gesti,
        icon: { x: 20, y: 50, zoom: 470 },
        tagline: 'Productivity · Google Play',
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
        tagline: 'Shared shopping lists · Google Play',
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
    {
        title: 'MoT',
        img: moT,
        icon: { x: 50, y: 50, zoom: 100 },
        tagline: 'Birthdays, notes & tasks · React Native',
        desc: 'Track birthdays (with a notification on the day), notes and tasks.',
        techs: ['React Native', 'Redux TK'],
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/SuperMoooo/MoT',
                kind: 'github',
            },
        ],
    },
];

export const MOARCH = {
    name: 'moarch',
    tagline: 'Flutter CLI for Clean Architecture projects',
    desc: 'Scaffolds Flutter apps with Clean Architecture, Riverpod or flutter_bloc, FVM and shared team conventions. Built first for me and the people I work with, now on pub.dev for anyone whose conventions match.',
    install: 'dart pub global activate moarch',
    commands: [
        { cmd: 'moarch init', note: 'scaffold the project' },
        { cmd: 'moarch create feature auth', note: 'all layers + route' },
        {
            cmd: 'moarch create model auth user --from-json user.json',
            note: '',
        },
        { cmd: 'moarch create tests', note: 'unit + integration tests' },
        { cmd: 'moarch doctor --fix', note: 'check & fix the setup' },
    ],
    features: [
        'Riverpod or flutter_bloc',
        'Dio or Firebase',
        'Flavors (dev / staging / prod)',
        'Models from JSON samples',
        'Generated unit & integration tests',
        'UI kit + light / dark theme',
        'Offline-first cache & sync',
        'Deep links, maintenance & update gates',
    ],
    links: [
        {
            label: 'pub.dev',
            href: 'https://pub.dev/packages/moarch',
            kind: 'pub',
        },
        {
            label: 'GitHub',
            href: 'https://github.com/SuperMoooo/moarch',
            kind: 'github',
        },
    ] as ProjectLink[],
};

export interface OtherProject {
    title: string;
    img?: StaticImageData;
    desc: string;
    techs: string[];
    demoLink: string;
    githubLink?: string;
}

export const OTHER_PROJECTS: OtherProject[] = [
    {
        title: 'PokeGames',
        img: pokeGames,
        desc: 'Guess the Pokémon, guess from a blurred image, and Stronger or Weaker with an online leaderboard.',
        demoLink: 'https://poke-games-nine.vercel.app/',
        githubLink: 'https://github.com/SuperMoooo/PokeGames',
        techs: ['Next.js', 'TypeScript', 'Redux TK', 'MongoDB'],
    },
    {
        title: 'Liga dos Amigos do Hospital de Abrantes',
        desc: 'Volunteer project: built and published the website for the hospital’s friends association.',
        demoLink: 'https://ligaamigoshospital.abrantes.pt',
        techs: ['Website', 'Volunteer'],
    },
    {
        title: 'Kubic Deal',
        img: kubicDeal,
        desc: 'Website for a client, built for the launch of the company.',
        demoLink: 'https://kubicdeal.pt/',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Comic Characters Info',
        img: comicChars,
        desc: 'Appearance, biography and power stats for comic characters, from a public API.',
        demoLink: 'https://superheroesinfo.vercel.app/',
        githubLink: 'https://github.com/SuperMoooo/superheroesinfo',
        techs: ['Next.js', 'Redux TK', 'MUI'],
    },
    {
        title: 'NBA Teams',
        img: nbaSite,
        desc: 'NBA team info built on API data.',
        demoLink: 'https://supermoooo.github.io/NBA-SITE/',
        githubLink: 'https://github.com/SuperMoooo/NBA-SITE',
        techs: ['React', 'TailwindCSS'],
    },
    {
        title: 'Slime Game',
        img: slimeGame,
        desc: 'PC and Android game made for the school’s final project. Final grade: 18/20.',
        demoLink: 'https://supermo.itch.io/slime-game',
        techs: ['GDevelop'],
    },
    {
        title: 'Bipo',
        img: bipo,
        desc: 'Game built for the game development course unit.',
        demoLink: 'https://supermoooo.itch.io/bipo',
        techs: ['Unreal Engine 5'],
    },
    {
        title: 'BlackJack',
        img: blackJackGame,
        desc: 'A birthday “gift” for a friend who loves blackjack. Infinite money, no splits.',
        demoLink: 'https://supermoooo.github.io/blackJackGame/',
        githubLink: 'https://github.com/SuperMoooo/blackJackGame',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
];
