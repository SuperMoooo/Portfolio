import type { StaticImageData } from 'next/image';
// Logos are the "original" set from devicon (https://devicon.dev, MIT), the
// same icons GitHub profile READMEs use.
// mysql.svg is recoloured from devicon's #00618A to #5BA4CF: the original
// dark blue was about 2:1 on the page and all but vanished.
import androidLogo from '@/assets/tech-logos/android.svg';
import appleLogo from '@/assets/tech-logos/apple.svg';
import cssLogo from '@/assets/tech-logos/css3.svg';
import dartLogo from '@/assets/tech-logos/dart.svg';
import dockerLogo from '@/assets/tech-logos/docker.svg';
import fastapiLogo from '@/assets/tech-logos/fastapi.svg';
import figmaLogo from '@/assets/tech-logos/figma.svg';
import firebaseLogo from '@/assets/tech-logos/firebase.svg';
import flutterLogo from '@/assets/tech-logos/flutter.svg';
import gitLogo from '@/assets/tech-logos/git.svg';
import htmlLogo from '@/assets/tech-logos/html5.svg';
import javascriptLogo from '@/assets/tech-logos/javascript.svg';
import jetpackComposeLogo from '@/assets/tech-logos/jetpackcompose.svg';
import kotlinLogo from '@/assets/tech-logos/kotlin.svg';
import mongodbLogo from '@/assets/tech-logos/mongodb.svg';
import mysqlLogo from '@/assets/tech-logos/mysql.svg';
import nextjsLogo from '@/assets/tech-logos/nextjs.svg';
import nodejsLogo from '@/assets/tech-logos/nodejs.svg';
import postgresqlLogo from '@/assets/tech-logos/postgresql.svg';
import pythonLogo from '@/assets/tech-logos/python.svg';
import reactLogo from '@/assets/tech-logos/react.svg';
import reduxLogo from '@/assets/tech-logos/redux.svg';
import tailwindLogo from '@/assets/tech-logos/tailwindcss.svg';
import typescriptLogo from '@/assets/tech-logos/typescript.svg';

export interface Skill {
    name: string;
    // Only real tools get a logo; practices and fields of study stay text.
    logo?: StaticImageData;
}

export interface SkillGroup {
    title: string;
    // One line on how the group is used, so the list is not just names.
    note: string;
    skills: Skill[];
}

/** The stack, in the order of the LinkedIn headline: app, then API. */
export const STACK: SkillGroup[] = [
    {
        title: 'Mobile',
        note: 'Day-to-day work. Published on Android, iOS and Huawei AppGallery.',
        skills: [
            { name: 'Flutter', logo: flutterLogo },
            { name: 'Dart', logo: dartLogo },
            { name: 'Android', logo: androidLogo },
            { name: 'iOS', logo: appleLogo },
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'React Native', logo: reactLogo },
            { name: 'Riverpod' },
            { name: 'Bloc' },
            { name: 'Provider' },
            { name: 'FVM' },
        ],
    },
    {
        title: 'Back end',
        note: 'APIs for my own apps and for client projects.',
        skills: [
            { name: 'Python', logo: pythonLogo },
            { name: 'FastAPI', logo: fastapiLogo },
            { name: 'PostgreSQL', logo: postgresqlLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'Docker', logo: dockerLogo },
            { name: 'Node.js', logo: nodejsLogo },
            { name: 'MongoDB', logo: mongodbLogo },
            { name: 'REST APIs' },
        ],
    },
    {
        title: 'Web',
        note: 'Where I started, and still how I build sites like this one.',
        skills: [
            { name: 'TypeScript', logo: typescriptLogo },
            { name: 'Next.js', logo: nextjsLogo },
            { name: 'React', logo: reactLogo },
            { name: 'Redux Toolkit', logo: reduxLogo },
            { name: 'Tailwind CSS', logo: tailwindLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
        ],
    },
    {
        title: 'Practices',
        note: 'What moarch and moarch-py generate by default.',
        skills: [
            { name: 'Clean Architecture' },
            { name: 'MVVM' },
            { name: 'MVI' },
            { name: 'Unit and integration tests' },
            { name: 'CI/CD' },
            { name: 'Git and GitHub', logo: gitLogo },
        ],
    },
    {
        title: 'Design and media',
        note: 'From a multimedia course before computer science.',
        skills: [
            { name: 'UI design', logo: figmaLogo },
            { name: 'Graphic design' },
            { name: 'Visual identity' },
            { name: 'Video editing' },
        ],
    },
    {
        title: 'Learning',
        note: 'Native Android, and the AI half of my degree.',
        skills: [
            { name: 'Kotlin', logo: kotlinLogo },
            { name: 'Jetpack Compose', logo: jetpackComposeLogo },
            { name: 'Machine learning' },
            { name: 'Deep learning' },
            { name: 'AI' },
        ],
    },
];