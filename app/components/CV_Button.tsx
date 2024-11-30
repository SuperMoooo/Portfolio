import React from 'react';

export default function CV_Button({ cv, lang }: any) {
    return (
        <a
            href={cv}
            download
            className="flex items-center justify-center gap-4  bg-gradient-to-r from-accent to-primary text-black md:px-6 md:py-4 px-5 py-3 rounded-default hover:scale-105 transition-all duration-300 ease-in-out"
        >
            <picture>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-8 h-8"
                    fill="#000000"
                >
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
            </picture>
            <p className="md:text-3xl sm:text-2xl text-xl">
                Curriculum {lang.toUpperCase()}
            </p>
        </a>
    );
}
