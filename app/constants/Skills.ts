import type { StaticImageData } from 'next/image';
import ai from '../assets/techsImgs/ai.webp';
import cSharp from '../assets/techsImgs/cSharp.webp';
import css from '../assets/techsImgs/css.webp';
import figma from '../assets/techsImgs/figma.webp';
import flutter from '../assets/techsImgs/flutter.webp';
import git from '../assets/techsImgs/git.webp';
import html from '../assets/techsImgs/html.webp';
import js from '../assets/techsImgs/js.webp';
import nextjs from '../assets/techsImgs/nextjs.webp';
import node from '../assets/techsImgs/node.webp';
import pr from '../assets/techsImgs/pr.webp';
import python from '../assets/techsImgs/python.webp';
import react from '../assets/techsImgs/react.webp';
import redux from '../assets/techsImgs/redux.webp';
import sql from '../assets/techsImgs/sql.webp';
import tailwind from '../assets/techsImgs/tailwind.webp';
import typeScript from '../assets/techsImgs/typeScript.webp';
import vsCode from '../assets/techsImgs/vsCode.webp';

export interface Skill {
    name: string;
    icon?: StaticImageData;
}

export interface SkillGroup {
    title: string;
    primary?: boolean;
    skills: Skill[];
}

export const STACK: SkillGroup[] = [
    {
        title: 'Mobile',
        primary: true,
        skills: [
            { name: 'Flutter', icon: flutter },
            { name: 'Dart' },
            { name: 'Riverpod' },
            { name: 'Bloc' },
            { name: 'Provider' },
            { name: 'Firebase' },
            { name: 'FVM' },
            { name: 'React Native', icon: react },
            { name: '.NET MAUI' },
            { name: 'Android · iOS · Huawei' },
        ],
    },
    {
        title: 'Architecture & quality',
        primary: true,
        skills: [
            { name: 'Clean Architecture' },
            { name: 'MVVM' },
            { name: 'CI/CD' },
            { name: 'Unit & integration tests' },
            { name: 'REST APIs' },
        ],
    },
    {
        title: 'Web',
        skills: [
            { name: 'TypeScript', icon: typeScript },
            { name: 'Next.js', icon: nextjs },
            { name: 'React', icon: react },
            { name: 'Redux TK', icon: redux },
            { name: 'TailwindCSS', icon: tailwind },
            { name: 'JavaScript', icon: js },
            { name: 'HTML', icon: html },
            { name: 'CSS', icon: css },
        ],
    },
    {
        title: 'Back-end',
        skills: [
            { name: 'Python · FastAPI', icon: python },
            { name: 'Node.js', icon: node },
            { name: 'PHP · Laravel' },
            { name: 'C#', icon: cSharp },
            { name: 'SQL', icon: sql },
            { name: 'MongoDB' },
        ],
    },
    {
        title: 'Tools & design',
        skills: [
            { name: 'Git & GitHub', icon: git },
            { name: 'VS Code', icon: vsCode },
            { name: 'Figma', icon: figma },
            { name: 'Illustrator', icon: ai },
            { name: 'Premiere', icon: pr },
            { name: 'AI-assisted workflows' },
        ],
    },
];

