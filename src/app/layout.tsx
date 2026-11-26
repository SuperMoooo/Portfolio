import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

// Archivo is a variable font with a width axis; loading `wdth` lets headings
// use its expanded cut while body text stays at normal width.
const archivo = Archivo({
    subsets: ['latin'],
    display: 'swap',
    axes: ['wdth'],
    variable: '--font-archivo',
});

// Only for code: package names and terminal commands in the open-source section.
const plexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    display: 'swap',
    variable: '--font-plex-mono',
});

export const viewport: Viewport = {
    // The canvas token (globals.css), so the browser chrome on phones matches the page.
    themeColor: '#0B0A0F',
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
};

export const metadata: Metadata = {
    title: 'André Montoito, Mobile Engineer & Backend Developer',
    description:
        'André Montoito, mobile engineer and backend developer in Portugal. Flutter and Android apps, Python/FastAPI and PostgreSQL back ends, built end to end from UI to API. Author of the moarch and moarch-py scaffolding CLIs.',
    keywords: [
        'portfolio',
        'mobile engineer',
        'backend developer',
        'Flutter developer',
        'Android',
        'FastAPI',
        'Python',
        'PostgreSQL',
        'moarch',
        'moarch-py',
        'André Montoito',
    ],
    authors: [
        {
            name: 'André Montoito',
            url: 'https://www.linkedin.com/in/andre-montoito/',
        },
    ],
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    publisher: 'André Montoito',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
