import { EARLY_INTERNSHIPS, EDUCATION, EXPERIENCE } from '../constants/Experience';
import { SPOKEN_LANGUAGES } from '../constants/Skills';
import { ChevronDownIcon } from './Icons';
import JobCard from './JobCard';
import SectionHeading from './SectionHeading';
import { cardClass } from './styles';

/** Work history as a card grid, then education, languages and early internships in one row. */
export default function ExperienceSection() {
    return (
        <section className="mx-auto max-w-page px-4 py-12 sm:px-6 md:py-16">
            <SectionHeading
                id="experience"
                title="Experience"
                intro="Client apps, mostly in Flutter, built part-time alongside my degree."
            />

            <ol className="grid gap-4 md:grid-cols-2">
                {EXPERIENCE.map((job) => (
                    <JobCard key={job.company} job={job} />
                ))}
            </ol>

            <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <div className={`${cardClass} p-5 lg:col-span-2`}>
                    <h3 className="font-semibold">Education</h3>
                    <ol className="mt-3 flex flex-col gap-3">
                        {EDUCATION.map((item) => (
                            <li key={item.degree} className="flex flex-col gap-x-4 sm:flex-row sm:justify-between">
                                <div>
                                    <p className="text-[15px]">{item.degree}</p>
                                    <p className="text-sm text-muted">{item.school}</p>
                                </div>
                                <p className="shrink-0 text-sm tabular-nums text-muted">{item.period}</p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="flex flex-col gap-4">
                    <div className={`${cardClass} p-5`}>
                        <h3 className="font-semibold">Languages</h3>
                        <ul className="mt-3 flex flex-col gap-1 text-[15px]">
                            {SPOKEN_LANGUAGES.map((language) => (
                                <li key={language.name} className="flex justify-between gap-4">
                                    {language.name}
                                    <span className="text-sm text-muted">{language.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <details className={`${cardClass} group px-5`}>
                        <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-2 font-semibold [&::-webkit-details-marker]:hidden">
                            School internships ({EARLY_INTERNSHIPS.length})
                            <ChevronDownIcon className="h-4 w-4 text-muted transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="flex flex-col gap-3 pb-5">
                            {EARLY_INTERNSHIPS.map((job) =>
                                job.roles.map((role) => (
                                    <li key={job.company}>
                                        <p className="text-[15px]">
                                            {job.company}
                                            <span className="text-muted">, {role.title.toLowerCase()}</span>
                                        </p>
                                        <p className="text-sm text-muted">{role.bullets.join(' ')}</p>
                                        <p className="text-xs tabular-nums text-muted">{role.period}</p>
                                    </li>
                                ))
                            )}
                        </ul>
                    </details>
                </div>
            </div>
        </section>
    );
}
