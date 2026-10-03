import Image from 'next/image';
import type { OtherProject } from '../constants/Projects';
import { ArrowUpRightIcon, GithubIcon } from './Icons';
import TechChips from './TechChips';

export default function ProjectCard({ project }: { project: OtherProject }) {
    const initials = project.title
        .split(' ')
        .filter((w) => /^[A-Z]/.test(w))
        .map((w) => w[0])
        .join('')
        .slice(0, 3);

    return (
        <article className="flex w-[78vw] max-w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-secondBg sm:w-auto sm:max-w-none">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="relative block aspect-video overflow-hidden bg-black" tabIndex={-1}>
                {project.img ? (
                    <Image
                        src={project.img}
                        alt={project.title}
                        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 78vw"
                        className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <span className="grid h-full w-full place-items-center bg-gradient-to-br from-secundary to-[#1d1d24] text-3xl font-semibold text-accent">
                        {initials}
                    </span>
                )}
            </a>
            <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="font-semibold leading-snug">{project.title}</h3>
                <p className="text-sm text-nonPrimaryText">{project.desc}</p>
                <TechChips techs={project.techs} />
                <div className="mt-auto flex gap-2 pt-1">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-default bg-white/10 text-sm transition-colors hover:bg-white/15"
                    >
                        Open <ArrowUpRightIcon />
                    </a>
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            className="grid min-h-[40px] w-11 place-items-center rounded-default border border-white/10 transition-colors hover:bg-white/10"
                        >
                            <GithubIcon className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
