import type { StaticImageData } from 'next/image';
// Logos are the "original" set from devicon (https://devicon.dev, MIT), the
// same icons GitHub profile READMEs use.
import android from '../assets/techIcons/android.svg';
import apple from '../assets/techIcons/apple.svg';
import css from '../assets/techIcons/css3.svg';
import dart from '../assets/techIcons/dart.svg';
import docker from '../assets/techIcons/docker.svg';
import fastapi from '../assets/techIcons/fastapi.svg';
import figma from '../assets/techIcons/figma.svg';
import firebase from '../assets/techIcons/firebase.svg';
import flutter from '../assets/techIcons/flutter.svg';
import git from '../assets/techIcons/git.svg';
import html from '../assets/techIcons/html5.svg';
import javascript from '../assets/techIcons/javascript.svg';
import jetpackCompose from '../assets/techIcons/jetpackcompose.svg';
import kotlin from '../assets/techIcons/kotlin.svg';
import mongodb from '../assets/techIcons/mongodb.svg';
import mysql from '../assets/techIcons/mysql.svg';
import nextjs from '../assets/techIcons/nextjs.svg';
import nodejs from '../assets/techIcons/nodejs.svg';
import postgresql from '../assets/techIcons/postgresql.svg';
import python from '../assets/techIcons/python.svg';
import react from '../assets/techIcons/react.svg';
import redux from '../assets/techIcons/redux.svg';
import tailwind from '../assets/techIcons/tailwindcss.svg';
import typescript from '../assets/techIcons/typescript.svg';

export interface Skill {
    name: string;
    // Only real tools get a logo; practices and fields of study stay text.
    icon?: StaticImageData;
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
            { name: 'Flutter', icon: flutter },
            { name: 'Dart', icon: dart },
            { name: 'Android', icon: android },
            { name: 'iOS', icon: apple },
            { name: 'Firebase', icon: firebase },
            { name: 'React Native', icon: react },
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
            { name: 'Python', icon: python },
            { name: 'FastAPI', icon: fastapi },
            { name: 'PostgreSQL', icon: postgresql },
            { name: 'MySQL', icon: mysql },
            { name: 'Docker', icon: docker },
            { name: 'Node.js', icon: nodejs },
            { name: 'MongoDB', icon: mongodb },
            { name: 'REST APIs' },
        ],
    },
    {
        title: 'Web',
        note: 'Where I started, and still how I build sites like this one.',
        skills: [
            { name: 'TypeScript', icon: typescript },
            { name: 'Next.js', icon: nextjs },
            { name: 'React', icon: react },
            { name: 'Redux Toolkit', icon: redux },
            { name: 'Tailwind CSS', icon: tailwind },
            { name: 'JavaScript', icon: javascript },
            { name: 'HTML', icon: html },
            { name: 'CSS', icon: css },
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
            { name: 'Git and GitHub', icon: git },
        ],
    },
    {
        title: 'Design and media',
        note: 'From a multimedia course before computer science.',
        skills: [
            { name: 'UI design', icon: figma },
            { name: 'Graphic design' },
            { name: 'Visual identity' },
            { name: 'Video editing' },
        ],
    },
    {
        title: 'Learning',
        note: 'Native Android, and the AI half of my degree.',
        skills: [
            { name: 'Kotlin', icon: kotlin },
            { name: 'Jetpack Compose', icon: jetpackCompose },
            { name: 'Machine learning' },
            { name: 'Deep learning' },
            { name: 'AI' },
        ],
    },
];

/** Logo lookup by skill name, for the few places that show techs outside the stack section. */
export const LOGO_BY_NAME = new Map(
    STACK.flatMap((group) => group.skills).flatMap((skill) => (skill.icon ? [[skill.name, skill.icon] as const] : []))
);

export const SPOKEN_LANGUAGES = [
    { name: 'Portuguese', level: 'native' },
    { name: 'English', level: 'professional, B2–C1' },
    { name: 'Spanish', level: 'basic' },
];
