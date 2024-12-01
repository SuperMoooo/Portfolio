import React from 'react';
import CV_Button from './CV_Button';

export default function HomeSection() {
    return (
        <section className="flex items-center justify-center flex-col">
            <div className="mb-10 text-center">
                <p className="md:text-3xl text-2xl font-thin name">
                    André Montoito
                </p>
                <h1 className="lg:text-6xl md:text-5xl text-5xl text-gradient title">
                    Software Developer
                </h1>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap btns">
                <CV_Button cv="CV_AndreMontoito.pdf" lang="pt" />
                <CV_Button cv="CV_AndreMontoito_ENG.pdf" lang="en" />
            </div>

            <div className="flex items-center justify-center gap-4 absolute bottom-14">
                <div className="w-10 h-16 border border-accent rounded-full after:w-[0.5px] after:h-3 after:bg-accent after:absolute after:rounded-full flex items-start justify-center after:top-3"></div>
                <picture>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        fill="#D9D8FF"
                        className="w-6 h-6 animate-bounce"
                    >
                        <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
                    </svg>
                </picture>
            </div>
        </section>
    );
}
