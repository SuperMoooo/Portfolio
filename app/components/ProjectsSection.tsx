import React from 'react';
import { PROJECTS } from '../constants/Projects';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projectSection }: any) {
    return (
        <section
            id="1"
            ref={projectSection}
            className="grid xl:grid-cols-2 gap-10 grid-cols-1"
        >
            {PROJECTS.map((project) => {
                return (
                    <ProjectCard
                        key={project.id}
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
    );
}
