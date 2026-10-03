import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import MobileNav from './components/MobileNav';
import MoarchSection from './components/MoarchSection';
import Navbar from './components/Navbar';
import OtherProjectsSection from './components/OtherProjectsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
    return (
        <div className="bgCool min-h-[100dvh] overflow-x-clip text-pretty">
            <Navbar />
            <HomeSection />
            <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-32 sm:px-6 md:gap-28 md:pb-12">
                <ProjectsSection />
                <MoarchSection />
                <OtherProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <Footer />
            </main>
            <MobileNav />
        </div>
    );
}
