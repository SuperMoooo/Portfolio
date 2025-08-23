import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
    return (
        <div className=" text-pretty bgCool">
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr] ">
                <Navbar />
                <HomeSection />
            </div>
            <main className=" sm:mx-10 mx-2 items-center  sm:px-0 px-4  flex flex-col gap-20 ">
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <Footer />
            </main>
        </div>
    );
}
