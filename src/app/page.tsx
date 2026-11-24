import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { ContactSection } from '@/components/sections/contact-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { HeroSection } from '@/components/sections/hero-section';
import { OpenSourceSection } from '@/components/sections/open-source-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { StackSection } from '@/components/sections/stack-section';

// Order follows what a recruiter checks first: who, where they worked, what
// they built (both ends of the stack), the full skill list, then how to reach me.
export default function HomePage() {
    return (
        <div id="top" className="min-h-[100dvh] overflow-x-clip text-pretty">
            <SiteHeader />
            <main>
                <HeroSection />
                <ExperienceSection />
                <OpenSourceSection />
                <ProjectsSection />
                <StackSection />
                <ContactSection />
            </main>
            <SiteFooter />
        </div>
    );
}
