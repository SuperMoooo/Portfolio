import { OTHER_PROJECTS } from '../constants/Projects';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function OtherProjectsSection() {
    return (
        <section id="projects" className="scroll-mt-20">
            <SectionHeading eyebrow="03 · Beyond mobile" title="Web & games" desc="Websites, web apps and games from before (and alongside) Flutter." />
            {/* Swipeable row on phones, grid from sm up. */}
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
                {OTHER_PROJECTS.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
            <p className="mt-2 text-xs text-nonPrimaryText sm:hidden">Swipe to see more →</p>
        </section>
    );
}
