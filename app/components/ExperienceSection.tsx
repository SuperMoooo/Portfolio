import { EARLIER_EXPERIENCE_FROM, EDUCATION, EXPERIENCE } from '../constants/Experience';
import { ChevronDownIcon } from './Icons';
import JobContent from './JobContent';
import SectionHeading from './SectionHeading';

const timelineClass =
    'relative flex flex-col gap-6 before:absolute before:bottom-0 before:left-[17px] before:top-2 before:w-px before:bg-gradient-to-b before:from-accent/50 before:to-transparent sm:before:left-[21px]';

export default function ExperienceSection() {
    const recent = EXPERIENCE.slice(0, EARLIER_EXPERIENCE_FROM);
    const earlier = EXPERIENCE.slice(EARLIER_EXPERIENCE_FROM);

    return (
        <section id="experience" className="scroll-mt-20">
            <SectionHeading eyebrow="04 · Experience" title="Where I've worked" />

            <ol className={timelineClass}>
                {recent.map((job) => (
                    <JobContent key={job.company} job={job} />
                ))}
            </ol>

            <details className="group mt-6">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-center gap-2 rounded-default border border-white/10 bg-white/[0.03] px-4 text-sm text-nonPrimaryText transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                    Earlier experience & internships ({earlier.length})
                    <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <ol className={`${timelineClass} mt-6`}>
                    {earlier.map((job) => (
                        <JobContent key={job.company} job={job} />
                    ))}
                </ol>
            </details>

            <h3 className="mb-4 mt-12 text-xl font-semibold">Education</h3>
            <ul className="grid gap-3 md:grid-cols-3">
                {EDUCATION.map((item) => (
                    <li key={item.degree} className="rounded-[1.25rem] border border-white/10 bg-secondBg p-4">
                        <p className="font-mono text-xs text-nonPrimaryText">{item.period}</p>
                        <p className="mt-1 font-medium">{item.degree}</p>
                        <p className="mt-1 text-sm text-nonPrimaryText">{item.school}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
