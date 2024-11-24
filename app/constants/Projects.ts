import bipo from '../assets/projectImgs/bipo.webp';
import kubicDeal from '../assets/projectImgs/kubicDeal.webp';
import blackJackGame from '../assets/projectImgs/blackJackGame.webp';
import comicChars from '../assets/projectImgs/comicChars.webp';
import moT from '../assets/projectImgs/moT.webp';
import nbaSite from '../assets/projectImgs/nbaSite.webp';
import planetSite from '../assets/projectImgs/planetWebImg.webp';
import pokeGames from '../assets/projectImgs/pokeGames.webp';
import shoppingCart from '../assets/projectImgs/shoppingCart.webp';
import oldPortfolio from '../assets/projectImgs/portfolio.webp';
import slimeGame from '../assets/projectImgs/slimeGame.webp';

export const PROJECTS = [
    {
        id: 1,
        projectTitle: 'Old Portfolio',
        img: oldPortfolio,
        desc: 'Old Portfolio.',
        demoLink: 'https://supermoooo.github.io/MyPortfolio/',
        githubLink: 'https://github.com/SuperMoooo/MyPortfolio',
        techs: ['React', 'TailwindCSS'],
    },
    {
        id: 2,
        projectTitle: 'PokeGames',
        img: pokeGames,
        desc: 'Guess the unknown Pokémon, Stronger or Weaker (with online leaderboard), Guess the blur Pokémon.',
        demoLink: 'https://poke-games-nine.vercel.app/',
        githubLink: 'https://github.com/SuperMoooo/PokeGames',
        techs: [
            'Next.js',
            'Tailwind',
            'TypeScript',
            'API',
            'Redux TK',
            'MongoDB',
        ],
    },
    {
        id: 3,
        projectTitle: 'MoT',
        img: moT,
        desc: 'Mobile app to track birthdays (with notification when its birthday), notes and tasks.',
        demoLink: '/assets/apks/MoTV11.apk',
        githubLink: 'https://github.com/SuperMoooo/MoT',
        techs: ['React Native', 'Redux TK'],
    },
    {
        id: 4,
        projectTitle: 'Kubic Deal',
        img: kubicDeal,
        desc: 'A website made for a client for the start of the company.',
        demoLink: 'https://kubicdeal.pt/',
        githubLink: '',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 5,
        projectTitle: 'Comic characters info',
        img: comicChars,
        desc: 'Comic Characters Info (Appearance, biography, powerstats, etc...).',
        demoLink: 'https://superheroesinfo.vercel.app/',
        githubLink: 'https://github.com/SuperMoooo/superheroesinfo',
        techs: ['Next.js', 'TailwindCSS', 'API', 'Redux TK', 'MUI'],
    },

    {
        id: 6,
        projectTitle: 'Planets Site',
        img: planetSite,
        desc: 'A website with some information about the planets of our galaxy.',
        demoLink: 'https://supermoooo.github.io/planetsWebSite/index.html',
        githubLink: 'https://github.com/SuperMoooo/planetsWebSite',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 7,
        projectTitle: 'Shopping Cart',
        img: shoppingCart,
        desc: 'Shopping Cart to learn Redux TK',
        demoLink: 'https://supermoooo.github.io/shoppingcart/',
        githubLink: 'https://github.com/SuperMoooo/shoppingcart',
        techs: ['Next.js', 'Redux TK', 'TailwindCSS'],
    },
    {
        id: 8,
        projectTitle: 'NBA teams site',
        img: nbaSite,
        desc: 'NBA teams info made using API data',
        demoLink: 'https://supermoooo.github.io/NBA-SITE/',
        githubLink: 'https://github.com/SuperMoooo/NBA-SITE',
        techs: ['React', 'TailwindCSS', 'API'],
    },
    {
        id: 9,
        projectTitle: 'Slime Game',
        img: slimeGame,
        desc: 'A game made for the final project of the course.',
        demoLink: 'https://supermo.itch.io/slime-game',
        githubLink: '',
        techs: ['GDevelop'],
    },
    {
        id: 10,
        projectTitle: 'Bipo Game',
        img: bipo,
        desc: 'Game developed within the scope of the game development discipline.',
        demoLink: 'https://supermoooo.itch.io/bipo',
        githubLink: '',
        techs: ['Unreal Engine 5'],
    },
    {
        id: 11,
        projectTitle: 'BlackJack game',
        img: blackJackGame,
        desc: 'BlackJack game with infinite money and no split cards',
        demoLink: 'https://supermoooo.github.io/blackJackGame/',
        githubLink: 'https://github.com/SuperMoooo/blackJackGame',
        techs: ['HTML', 'CSS', 'JavaScript'],
    },
];
