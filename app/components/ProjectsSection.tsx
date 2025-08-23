import { PROJECTS } from '../constants/Projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
    return (
        <section className="mb-[-100px]">
            <div className="gap-2 flex  justify-center flex-col mb-10">
                <h1 className="text-4xl uppercase font-bold">Projects</h1>
            </div>

            <section className="grid xl:grid-cols-2 sm:gap-20 gap-4 grid-cols-1 place-items-center lg:px-20 px-4">
                {PROJECTS.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            title={project.projectTitle}
                            img={project.img}
                            desc={project.desc}
                            demoLink={project.demoLink}
                            githubLink={project.githubLink}
                            techs={project.techs}
                        />
                    );
                })}
            </section>
        </section>
    );
}
