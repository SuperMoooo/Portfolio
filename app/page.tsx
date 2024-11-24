'use client';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import { useRef } from 'react';

export default function Home() {
    const curriculumSection = useRef(null);
    const projectSection = useRef(null);
    const experienceSection = useRef(null);
    const skillsSection = useRef(null);
    return (
        <>
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr]">
                <Navbar />
                <HomeSection curriculumSection={curriculumSection} />
            </div>
            <main className="md:px-16 px-4 my-20">
                <BottomNavbar
                    curriculumSection={curriculumSection}
                    projectSection={projectSection}
                    experienceSection={experienceSection}
                    skillsSection={skillsSection}
                />
                <ProjectsSection projectSection={projectSection} />
                <ExperienceSection experienceSection={experienceSection} />
            </main>
        </>
    );
}
