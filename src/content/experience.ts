export interface Role {
    title: string;
    period: string;
    // Part-time, internship… Left out for nothing worth noting.
    arrangement?: string;
    // The product the work was on, when the company name alone doesn't say.
    product?: string;
    highlights: string[];
    technologies?: string[];
}

export interface Job {
    company: string;
    location: string;
    roles: Role[];
}

/** Recent jobs, newest first, as on the CV. */
export const EXPERIENCE: Job[] = [
    {
        company: 'Tempus Tecnologia',
        location: 'Portugal',
        roles: [
            {
                title: 'Mobile Engineer (Flutter)',
                period: 'Aug 2025 – Oct 2026',
                arrangement: 'Part-time',
                product: 'LegalTech app for law firms and their clients',
                highlights: [
                    'Built client–lawyer messaging, VoIP calls, calendar sync and secure document upload.',
                    'Defined the front-end architecture and contributed to back-end technical decisions.',
                    'Integrated third-party and enterprise APIs; ran code reviews and coordinated tasks across the team.',
                ],
                technologies: ['Flutter', 'Dart', 'REST APIs', 'VoIP'],
            },
        ],
    },
    {
        company: 'IMR Research and Development',
        location: 'Abrantes, Portugal',
        roles: [
            {
                title: 'Mobile Engineer (Flutter)',
                period: 'Jan 2025 – Oct 2026',
                arrangement: 'Part-time',
                product: 'Vehicle-management app',
                highlights: [
                    'Built VIN capture via manual entry, QR code and OCR.',
                    'Built vehicle check-in and check-out flows and detailed vehicle data screens.',
                    'Worked with the back-end team on secure, stable API integrations.',
                ],
                technologies: ['Flutter', 'Dart', 'OCR'],
            },
        ],
    },
    {
        company: 'Knowledge In Motion',
        location: 'Abrantes, Portugal',
        roles: [
            {
                title: 'App Developer → Mobile Engineer (Flutter)',
                period: 'Oct 2024 – Jul 2025',
                arrangement: 'Part-time',
                highlights: [
                    'Introduced Flutter and led its adoption as the company’s main mobile stack; mentored teammates on architecture.',
                    'Built the incubator ecosystem app: maintenance requests with photos, startup directory, news, vehicle and room booking.',
                    'Shipped a membership app for a cultural association and an event platform with real-time QR ticket validation.',
                    'Built a Python/FastAPI back end for an app project.',
                ],
                technologies: ['Flutter', 'FastAPI', 'C#', '.NET MAUI', 'Laravel'],
            },
        ],
    },
    {
        company: 'Dualinfor Hito Innovation',
        location: 'Mafra, Portugal',
        roles: [
            {
                title: 'Full-Stack Developer',
                period: 'Jan 2024 – May 2024',
                arrangement: 'Internship',
                highlights: [
                    'Built a process-automation bot and a tool to manage and monitor the company’s printer fleet.',
                ],
            },
        ],
    },
];

/**
 * School internships, before the CS degree. Off the CV, but they are where the
 * design and video work in the skills list comes from, so they stay on the
 * site behind a toggle.
 */
export const EARLY_INTERNSHIPS: Job[] = [
    {
        company: 'Algoritmo',
        location: 'Mafra, Portugal',
        roles: [
            {
                title: 'Intern',
                period: 'Feb 2022 – Apr 2022',
                highlights: [
                    'Managed and maintained corporate WordPress websites.',
                    'Designed banners and graphics for in-store campaigns.',
                ],
            },
        ],
    },
    {
        company: 'Lacinhos & Pontinhos',
        location: 'Mafra, Portugal',
        roles: [
            {
                title: 'Designer and front-end developer',
                period: 'May 2021 – Jun 2021',
                highlights: [
                    'Designed and built the company website with inventory integration.',
                    'Created a new visual identity: logo, colour palette, banners and cards.',
                ],
            },
        ],
    },
    {
        company: 'Mafra TV',
        location: 'Mafra, Portugal',
        roles: [
            {
                title: 'Intern',
                period: 'Apr 2021 – May 2021',
                highlights: [
                    'Designed promotional flyers for events and programmes.',
                    'Supported the setup of audiovisual production equipment.',
                ],
            },
        ],
    },
];

export interface Education {
    degree: string;
    school: string;
    period: string;
}

export const EDUCATION: Education[] = [
    {
        degree: 'BSc in Computer Science and Artificial Intelligence',
        school: 'Polytechnic Institute of Tomar',
        period: '2024 – 2027 (expected)',
    },
    {
        degree: 'Higher Professional Technical Course (CTeSP) in Computer Science',
        school: 'Polytechnic Institute of Tomar',
        period: '2022 – 2024',
    },
    {
        degree: 'Professional course in Multimedia',
        school: 'Escola Secundária José Saramago',
        period: '2019 – 2022',
    },
];

export const SPOKEN_LANGUAGES = [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Professional, B2–C1' },
    { name: 'Spanish', level: 'Basic' },
];
