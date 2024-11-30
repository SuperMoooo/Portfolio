import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'André Montoito Portfolio | Projects, Skills & Professional Experience',
    description:
        "Discover André Montoito's portfolio showcasing innovative projects, technical skills, and experience. See how I can add value to your team or project.",
    keywords: [
        'portfolio',
        'projects',
        'professional experience',
        'technical skills',
        'software developer',
        'web developer',
        'creative work',
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
    icons: {
        icon: '/assets/favIcon/icon.ico',
        shortcut: '/assets/favIcon/icon.ico',
        apple: '/assets/favIcon/icon.ico',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/assets/favIcon/icon.ico',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${rubik.className} antialiased`}>{children}</body>
        </html>
    );
}
