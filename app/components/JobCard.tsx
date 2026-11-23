import type { Job } from '../constants/Experience';
import { cardClass, chipClass } from './styles';
import TechChips from './TechChips';

/** One employer as a card: who, what role, when, then what I did there. */
export default function JobCard({ job }: { job: Job }) {
    return (
        <li className={`${cardClass} flex flex-col gap-6 p-5 sm:p-6`}>
            {job.roles.map((role, roleIndex) => {
                // A company with several roles shows its badge and name only once.
                const isFirstRole = roleIndex === 0;
                return (
                    <article key={role.title + role.period} className="flex flex-1 flex-col">
                        <header className="flex items-start gap-3">
                            {isFirstRole && (
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lilac/10 font-mono text-xs font-medium text-lilac ring-1 ring-lilac/20">
                                    {job.initials}
                                </span>
                            )}
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                                    {isFirstRole && <h3 className="text-lg font-semibold">{job.company}</h3>}
                                    <p className="text-sm tabular-nums text-muted">{role.period}</p>
                                </div>
                                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                                    <p className="text-[15px]">{role.title}</p>
                                    {role.arrangement && <span className={chipClass}>{role.arrangement}</span>}
                                </div>
                            </div>
                        </header>

                        {role.product && <p className="mt-4 text-sm font-medium text-lilac">{role.product}</p>}

                        <ul className={`${role.product ? 'mt-2' : 'mt-4'} flex flex-col gap-1.5 text-[15px] leading-relaxed text-muted`}>
                            {role.bullets.map((bullet) => (
                                <li
                                    key={bullet}
                                    className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-lilac"
                                >
                                    {bullet}
                                </li>
                            ))}
                        </ul>

                        {role.techs && <TechChips techs={role.techs} className="mt-auto pt-5" />}
                    </article>
                );
            })}
        </li>
    );
}
