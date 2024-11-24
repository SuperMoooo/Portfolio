import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
    title: string;
    img: any;
    desc: string;
    demoLink: string;
    githubLink: string;
    techs: string[];
}

export default function ProjectCard({
    title,
    img,
    desc,
    demoLink,
    githubLink,
    techs,
}: ProjectCardProps) {
    return (
        <div className="grid grid-rows-[auto_1fr_auto_auto] gap-4 w-full justify-stretch">
            <h1 className="sm:text-3xl text-2xl">{title}</h1>
            <picture className="border border-accent rounded-default 2xl:min-h-[30rem]  min-h-72 2xl:max-h-[34rem]  sm:max-h-[26rem] max-h-[22rem]">
                <Image
                    src={img}
                    alt={title}
                    width={1280}
                    className=" rounded-default h-full w-full object-cover object-center"
                />
            </picture>
            <h3 className="text-nonPrimaryText text-md">{desc}</h3>
            <div className="flex justify-between border-t border-accent *:mt-4 items-start sm:h-40 h-64 gap-4">
                <div className="flex items-center justify-center gap-6 sm:flex-row flex-col *:flex *:items-center *:justify-center *:font-thin *:gap-3 *:rounded-default *:p-2 *:text-xl *:w-40 *:transition-transform *:duration-300">
                    <a
                        href={demoLink}
                        className="bg-gradient-to-r from-accent to-primary hover:scale-105"
                        target="_blank"
                        download={title === 'MoT'}
                    >
                        <p className="text-black">Demo</p>
                        <picture>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                fill="#000000"
                                className="w-4 h-4 rotate-45"
                            >
                                <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                            </svg>
                        </picture>
                    </a>
                    {githubLink && (
                        <a
                            href={githubLink}
                            className="bg-gradient-to-r from-[#3C3C3C] to-[#4B4B4E] hover:scale-105"
                            target="_blank"
                        >
                            <picture>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                    fill="#A6A6A6"
                                    className="w-5 h-5"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </picture>
                            <p>Github</p>
                            <picture>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    fill="#ffffff"
                                    className="w-4 h-4 rotate-45"
                                >
                                    <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                                </svg>
                            </picture>
                        </a>
                    )}
                </div>
                <div className="flex items-start justify-end text-nonPrimaryText gap-4 flex-wrap">
                    {techs.map((tech, index) => (
                        <p
                            key={index}
                            className="text-sm bg-gradient-to-r from-[#3C3C3C] to-[#4B4B4E] rounded-default py-1 px-2"
                        >
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
