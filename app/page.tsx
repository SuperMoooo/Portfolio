import ContactFooter from './components/ContactFooter';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import OpenSourceSection from './components/OpenSourceSection';
import ProjectsSection from './components/ProjectsSection';
import SiteHeader from './components/SiteHeader';
import StackSection from './components/StackSection';

// Order follows what a recruiter checks first: who, where they worked, what
// they built (both ends of the stack), then the full skill list.
export default function Home() {
    return (
        <div id="top" className="min-h-[100dvh] overflow-x-clip text-pretty">
            <SiteHeader />
            <main>
                <HeroSection />
                <ExperienceSection />
                <OpenSourceSection />
                <ProjectsSection />
                <StackSection />
            </main>
            <ContactFooter />
        </div>
    );
}
