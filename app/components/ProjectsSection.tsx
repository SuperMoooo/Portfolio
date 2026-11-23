import Image from 'next/image';
import { MOBILE_APPS, OTHER_PROJECTS, type MobileApp, type OtherProject } from '../constants/Projects';
import AppIcon from './AppIcon';
import { ArrowUpRightIcon, ChevronDownIcon, GithubIcon } from './Icons';
import LinkButton from './LinkButton';
import SectionHeading from './SectionHeading';
import { buttonClass, cardClass, interactiveCardClass } from './styles';
import TechChips from './TechChips';

// Smaller projects shown before the "Show more" toggle; two full rows on desktop.
const VISIBLE_PROJECT_COUNT = 6;

const textLinkClass =
    'inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-lilac transition-colors hover:text-lilac-light';

function AppCard({ app }: { app: MobileApp }) {
    return (
        <article className={`${cardClass} flex flex-col overflow-hidden`}>
            <Image
                src={app.img}
                alt={`${app.title} store banner`}
                sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
                className="aspect-[2.4/1] w-full border-b border-edge object-cover"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-3">
                    <AppIcon app={app} className="h-11 w-11" />
                    <div>
                        <h3 className="text-lg font-semibold">{app.title}</h3>
                        <p className="text-sm text-muted">{app.category}</p>
                    </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{app.desc}</p>
                <TechChips techs={app.techs} className="mt-4" />
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {app.links.map((link, index) => (
                        <LinkButton key={link.href} link={link} emphasis={index === 0 ? 'primary' : 'secondary'} />
                    ))}
                </div>
            </div>
        </article>
    );
}

function ProjectTile({ project }: { project: OtherProject }) {
    return (
        <li className={`${interactiveCardClass} flex flex-col p-4`}>
            <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold leading-snug">{project.title}</h4>
                {project.year && <span className="shrink-0 text-xs tabular-nums text-muted">{project.year}</span>}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.desc}</p>
            <TechChips techs={project.techs} className="mt-3" />
            {(project.demoLink || project.githubLink) && (
                <div className="-mb-2 mt-auto flex gap-5 pt-2">
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
                            Open
                            <ArrowUpRightIcon className="h-3.5 w-3.5" />
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={textLinkClass}>
                            <GithubIcon className="h-3.5 w-3.5" />
                            Source
                        </a>
                    )}
                </div>
            )}
        </li>
    );
}

const tileGridClass = 'grid gap-3 sm:grid-cols-2 lg:grid-cols-3';

/** The two apps I published, then everything else as compact tiles. */
export default function ProjectsSection() {
    const visibleProjects = OTHER_PROJECTS.slice(0, VISIBLE_PROJECT_COUNT);
    const hiddenProjects = OTHER_PROJECTS.slice(VISIBLE_PROJECT_COUNT);

    return (
        <section className="mx-auto max-w-page px-4 py-12 sm:px-6 md:py-16">
            <SectionHeading
                id="projects"
                title="Projects"
                intro="Two apps I designed, built and published on Google Play, plus a hackathon API, websites and games."
            />

            <div className="grid gap-4 md:grid-cols-2">
                {MOBILE_APPS.map((app) => (
                    <AppCard key={app.title} app={app} />
                ))}
            </div>

            <h3 className="mb-4 mt-10 font-semibold">More projects</h3>
            <ul className={tileGridClass}>
                {visibleProjects.map((project) => (
                    <ProjectTile key={project.title} project={project} />
                ))}
            </ul>

            {hiddenProjects.length > 0 && (
                <details className="group mt-3">
                    <summary className={`${buttonClass('secondary')} w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                        <span className="group-open:hidden">Show {hiddenProjects.length} more</span>
                        <span className="hidden group-open:inline">Show less</span>
                        <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className={`${tileGridClass} mt-3`}>
                        {hiddenProjects.map((project) => (
                            <ProjectTile key={project.title} project={project} />
                        ))}
                    </ul>
                </details>
            )}
        </section>
    );
}
