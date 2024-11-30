import React from 'react';

export default function HomeSection() {
    return (
        <section className="flex items-center justify-center flex-col">
            <div className="mb-10 text-center">
                <p className="md:text-3xl text-2xl font-thin">André Montoito</p>
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-gradient">
                    Front-end Developer | UX/UI
                </h1>
            </div>

            <button className="flex items-center justify-center gap-4  bg-gradient-to-r from-accent to-primary text-black px-6 py-4 rounded-default hover:scale-105 transition-all duration-300 ease-in-out">
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
                <p className="md:text-3xl text-2xl">Curriculum</p>
            </button>
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
