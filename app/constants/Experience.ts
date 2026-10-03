import type { StaticImageData } from 'next/image';
import algoritmo from '../assets/companyImgs/algoritmo.webp';
import dualinfor from '../assets/companyImgs/dualinfor.webp';
import knowledge from '../assets/companyImgs/knowledge.webp';
import mafraTv from '../assets/companyImgs/mafratv.webp';
import pontinhos from '../assets/companyImgs/pontinhos.webp';

export interface Highlight {
    name: string;
    points: string[];
}

export interface Role {
    title: string;
    period: string;
    current?: boolean;
    bullets: string[];
    highlights?: Highlight[];
    techs?: string[];
}

export interface Job {
    company: string;
    location: string;
    img?: StaticImageData;
    initials: string;
    roles: Role[];
}

export const EXPERIENCE: Job[] = [
    {
        company: 'Tempus Tecnologia',
        location: 'Portugal',
        initials: 'TT',
        roles: [
            {
                title: 'Mobile Engineer · Flutter',
                period: 'Aug 2025 — Present',
                current: true,
                bullets: [
                    'End-to-end development, maintenance and release of Android, iOS and Huawei apps.',
                    'Define the front-end architecture and take part in back-end technical decisions.',
                    'Evaluate technical alternatives and deliver scalable solutions aligned with stakeholders.',
                    'Technical leadership and team coordination, with a strong focus on code quality and stability.',
                ],
                highlights: [
                    {
                        name: 'LegalTech app for law firms',
                        points: [
                            'Access to legal proceedings',
                            'Client ↔ lawyer messaging, VoIP calls and email',
                            'Calendar sync and scheduling',
                            'Secure document upload and management',
                            'Third-party and enterprise API integrations',
                        ],
                    },
                ],
                techs: ['Flutter', 'Dart'],
            },
        ],
    },
    {
        company: 'IMR Research and Development',
        location: 'Abrantes, Portugal',
        initials: 'IMR',
        roles: [
            {
                title: 'Mobile Engineer · Flutter',
                period: 'Jan 2025 — Present',
                current: true,
                bullets: [
                    'Vehicle management app built in close collaboration with the back-end team for secure, stable integrations.',
                ],
                highlights: [
                    {
                        name: 'Vehicle management app',
                        points: [
                            'VIN reading via manual entry, QR code or OCR',
                            'Vehicle check-in / check-out flows',
                            'Detailed vehicle data screens',
                        ],
                    },
                ],
                techs: ['Flutter', 'Dart', 'OCR'],
            },
        ],
    },
    {
        company: 'Knowledge In Motion',
        location: 'Abrantes, Portugal',
        img: knowledge,
        initials: 'KM',
        roles: [
            {
                title: 'Mobile Engineer · Flutter',
                period: 'Mar 2025 — Jul 2025',
                bullets: [
                    'Brought Flutter into the company and led its adoption as the core mobile stack.',
                    'Trained and mentored teammates; internal reference for architecture and best practices.',
                ],
                highlights: [
                    {
                        name: 'Incubator ecosystem app',
                        points: [
                            'Maintenance requests with image reporting',
                            'Directory and news for incubated startups',
                            'Vehicle and meeting-room booking',
                        ],
                    },
                ],
                techs: ['Flutter', 'Dart'],
            },
            {
                title: 'Application Developer',
                period: 'Oct 2024 — Jul 2025',
                bullets: [
                    'Development, configuration and publication of apps on Android, iOS and Huawei.',
                    'Brazilian cultural association app: yearly memberships, news and community features.',
                    'Event management solution: QR ticket validation with real-time scan and sales dashboards.',
                    'API development in Python (FastAPI) for an app project.',
                ],
                techs: [
                    'Flutter',
                    'C#',
                    '.NET MAUI',
                    'Cordova',
                    'PHP',
                    'Laravel',
                    'FastAPI',
                ],
            },
        ],
    },
    {
        company: 'Dualinfor',
        location: 'Mafra, Portugal',
        img: dualinfor,
        initials: 'D',
        roles: [
            {
                title: 'Full-Stack Developer · Intern',
                period: 'Jan 2024 — May 2024',
                bullets: [
                    'Full-stack development of a process-automation bot.',
                    'Built tooling to manage data and monitor the company’s printer fleet.',
                ],
            },
        ],
    },
    {
        company: 'Algoritmo',
        location: 'Mafra, Portugal',
        img: algoritmo,
        initials: 'A',
        roles: [
            {
                title: 'Intern',
                period: 'Feb 2022 — Apr 2022',
                bullets: [
                    'Managed and maintained corporate WordPress websites.',
                    'Designed banners and graphics for in-store campaigns.',
                ],
            },
        ],
    },
    {
        company: 'Lacinhos & Pontinhos',
        location: 'Mafra, Portugal',
        img: pontinhos,
        initials: 'LP',
        roles: [
            {
                title: 'Designer + Front-end Developer · Intern',
                period: 'May 2021 — Jun 2021',
                bullets: [
                    'Designed and built the company website with inventory integration.',
                    'Created a new visual identity: logo, colour palette, banners and cards.',
                ],
            },
        ],
    },
    {
        company: 'Mafra TV',
        location: 'Mafra, Portugal',
        img: mafraTv,
        initials: 'MTV',
        roles: [
            {
                title: 'Intern',
                period: 'Apr 2021 — May 2021',
                bullets: [
                    'Designed promotional flyers for events and programmes.',
                    'Supported the setup of audiovisual production equipment.',
                ],
            },
        ],
    },
];

// Jobs from this index onwards are shown collapsed under "Earlier experience".
export const EARLIER_EXPERIENCE_FROM = 3;

export const EDUCATION = [
    {
        degree: "Bachelor's in Computer Science & Artificial Intelligence",
        school: 'Instituto Politécnico de Tomar',
        period: '2024 — Present',
    },
    {
        degree: 'Higher Professional Technical Course in Computer Science',
        school: 'Instituto Politécnico de Tomar',
        period: '2022 — 2024',
    },
    {
        degree: 'Professional Technician Course in Multimedia',
        school: 'Escola Secundária José Saramago',
        period: '2019 — 2022',
    },
];
