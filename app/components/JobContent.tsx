import Image from 'next/image';
import type { Job } from '../constants/Experience';
import TechChips from './TechChips';

export default function JobContent({ job }: { job: Job }) {
    const current = job.roles.some((role) => role.current);

    return (
        <li className="relative pl-12 sm:pl-16">
            <div className="absolute left-0 top-0 grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white text-xs font-bold text-black sm:h-11 sm:w-11">
                {job.img ? (
                    <Image src={job.img} alt={`${job.company} logo`} width={88} height={88} className="h-full w-full object-cover" />
                ) : (
                    <span className="grid h-full w-full place-items-center bg-gradient-to-br from-accent to-primary">{job.initials}</span>
                )}
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-secondBg p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold sm:text-xl">{job.company}</h3>
                    {current && (
                        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">Now</span>
                    )}
                </div>
                <p className="text-xs text-nonPrimaryText">{job.location}</p>

                <div className="mt-4 flex flex-col gap-6">
                    {job.roles.map((role) => (
                        <div key={role.title + role.period} className="flex flex-col gap-3">
                            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h4 className="font-medium text-accent">{role.title}</h4>
                                <p className="shrink-0 font-mono text-xs text-nonPrimaryText">{role.period}</p>
                            </div>
                            <ul className="flex list-disc flex-col gap-1.5 pl-4 text-sm text-nonPrimaryText marker:text-primary/60">
                                {role.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                            {role.highlights?.map((highlight) => (
                                <div key={highlight.name} className="rounded-default border border-white/5 bg-white/[0.03] p-3">
                                    <p className="text-sm font-medium">{highlight.name}</p>
                                    <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-nonPrimaryText">
                                        {highlight.points.map((point) => (
                                            <li key={point} className="before:mr-1.5 before:text-primary/60 before:content-['▸']">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {role.techs && <TechChips techs={role.techs} />}
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
}
