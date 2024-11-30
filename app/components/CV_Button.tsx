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
                    data-slot="icon"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    width={30}
                    height={30}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    ></path>
                </svg>
            </picture>
            <p className="md:text-2xl sm:text-xl text-lg">
                Download CV - {lang.toUpperCase()}
            </p>
        </a>
    );
}
