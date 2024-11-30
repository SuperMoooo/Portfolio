import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
    const date = new Date();
    return (
        <div className=" text-pretty bgCool">
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr] ">
                <Navbar />
                <HomeSection />
            </div>
            <main className="container mx-auto sm:px-0 px-4  flex flex-col gap-20 ">
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <div className="flex items-center justify-center mb-10">
                    <p className="text-accent">
                        &copy; {date.getFullYear()} André Montoito
                    </p>
                </div>
            </main>
        </div>
    );
}
