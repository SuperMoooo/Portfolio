import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
    return (
        <>
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr]">
                <Navbar />
                <HomeSection />
            </div>
            <main className="md:px-16 px-4 my-20 flex flex-col gap-20">
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
            </main>
        </>
    );
}
