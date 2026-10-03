import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
});

export const viewport: Viewport = {
    themeColor: '#151515',
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
};

export const metadata: Metadata = {
    title: 'André Montoito · Mobile Engineer (Flutter)',
    description:
        'André Montoito, a Flutter Mobile Engineer from Portugal shipping Android, iOS and Huawei apps. Apps, open-source work (moarch), experience and stack.',
    keywords: [
        'portfolio',
        'Flutter developer',
        'mobile engineer',
        'Dart',
        'Android',
        'iOS',
        'moarch',
        'clean architecture',
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
        <html lang="en">
            <body className={`${rubik.className} antialiased`}>{children}</body>
        </html>
    );
}
