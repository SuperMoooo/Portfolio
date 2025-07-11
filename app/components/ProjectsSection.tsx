import { PROJECTS } from '../constants/Projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
    return (
        <section className="mb-[-100px]">
            <div className="gap-2 flex  justify-center flex-col mb-10">
                <h1 className="text-4xl">Projects</h1>
                <div className="bg-accent  md:w-2/5 3/5 h-[0.7px]"></div>
            </div>

            <section className="grid xl:grid-cols-2 gap-20 grid-cols-1 place-items-center mx-auto px-20">
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
