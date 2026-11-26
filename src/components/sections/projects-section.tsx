import Image from 'next/image';
import { PUBLISHED_APPS, SIDE_PROJECTS, type PublishedApp, type SideProject } from '@/content/projects';
import { AppIcon } from '@/components/ui/app-icon';
import { buttonStyles } from '@/components/ui/button';
import { ArrowUpRightIcon, ChevronDownIcon, GithubIcon } from '@/components/ui/icons';
import { ProjectLinkButton } from '@/components/ui/project-link-button';
import { Section } from '@/components/ui/section';
import { TagList } from '@/components/ui/tag-list';
import { Tile } from '@/components/ui/tile';
import { cn } from '@/lib/class-names';

// One full row of three on desktop, the strongest work, before the "Show more" toggle.
const VISIBLE_SIDE_PROJECT_COUNT = 3;

const TEXT_LINK_CLASS =
    'inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover';

// Phones: a swipeable row, each tile 80% wide so the next one peeks in, which
// keeps ten projects from stacking into a very long column. From sm up: a grid.
// The negative margin lets the row run to the screen edges; scroll-px keeps a
// snapped tile aligned with the page gutter.
const SIDE_PROJECT_LIST_CLASS =
    '-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3';

/** A published app: its store banner, then icon, name and store link in one row, what it does and its stack. */
function AppTile({ app }: { app: PublishedApp }) {
    return (
        <Tile as="article" className="flex flex-col overflow-hidden">
            <Image
                src={app.banner}
                alt={`${app.title} store banner`}
                sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
                // 3:1 trims a little off the 2.4:1 banners' top and bottom to keep the tile short.
                className="aspect-[3/1] w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                    <AppIcon app={app} className="h-11 w-11" />
                    <div className="mr-auto">
                        <h3 className="text-heading">{app.title}</h3>
                        <p className="text-sm text-ink-muted">{app.category}</p>
                    </div>
                    {/* Full width on phones so every app's store link drops to its own
                        row, instead of only the apps whose names happen to be long. */}
                    <div className="flex w-full flex-wrap gap-2 sm:w-auto">
                        {app.links.map((link, index) => (
                            <ProjectLinkButton key={link.href} link={link} variant={index === 0 ? 'primary' : 'secondary'} />
                        ))}
                    </div>
                </div>
                <p className="text-ink-muted">{app.description}</p>
                <TagList tags={app.technologies} className="mt-auto" />
            </div>
        </Tile>
    );
}

/** A smaller project as a tile: name and year, what it is, its stack, and its links. */
function SideProjectTile({ project }: { project: SideProject }) {
    const hasLinks = Boolean(project.demoLink || project.sourceLink);

    return (
        <Tile as="li" className="flex w-[80%] shrink-0 snap-start flex-col p-5 sm:w-auto">
            <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-semibold leading-snug">{project.title}</h4>
                {project.year && <span className="shrink-0 text-xs tabular-nums text-ink-muted">{project.year}</span>}
            </div>
            <p className="mt-2 text-sm text-ink-muted">{project.description}</p>
            <TagList tags={project.technologies} className="mt-4" />
            {hasLinks && (
                // The negative bottom margin offsets the 44px links' own padding, so
                // the tile's bottom space matches its top.
                <div className="-mb-2.5 mt-auto flex gap-5 pt-2">
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={TEXT_LINK_CLASS}>
                            Open
                            <ArrowUpRightIcon className="h-3.5 w-3.5" />
                        </a>
                    )}
                    {project.sourceLink && (
                        <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className={TEXT_LINK_CLASS}>
                            <GithubIcon className="h-3.5 w-3.5" />
                            Source
                        </a>
                    )}
                </div>
            )}
        </Tile>
    );
}

/** The two apps on Google Play as wide tiles, then the other projects in a three-column grid. */
export function ProjectsSection() {
    const visibleProjects = SIDE_PROJECTS.slice(0, VISIBLE_SIDE_PROJECT_COUNT);
    const hiddenProjects = SIDE_PROJECTS.slice(VISIBLE_SIDE_PROJECT_COUNT);

    return (
        <Section
            id="projects"
            title="Projects"
            intro="Two apps I designed, built and published on Google Play, plus a hackathon API, websites and games."
        >
            <div className="grid gap-4 md:grid-cols-2">
                {PUBLISHED_APPS.map((app) => (
                    <AppTile key={app.title} app={app} />
                ))}
            </div>

            <h3 className="sr-only">More projects</h3>
            <ul className={cn(SIDE_PROJECT_LIST_CLASS, 'mt-4')}>
                {visibleProjects.map((project) => (
                    <SideProjectTile key={project.title} project={project} />
                ))}
            </ul>

            {hiddenProjects.length > 0 && (
                <details className="group mt-4">
                    <summary className={cn(buttonStyles('secondary'), 'w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden')}>
                        <span className="group-open:hidden">Show {hiddenProjects.length} more projects</span>
                        <span className="hidden group-open:inline">Show fewer</span>
                        <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className={cn(SIDE_PROJECT_LIST_CLASS, 'mt-4')}>
                        {hiddenProjects.map((project) => (
                            <SideProjectTile key={project.title} project={project} />
                        ))}
                    </ul>
                </details>
            )}
        </Section>
    );
}
