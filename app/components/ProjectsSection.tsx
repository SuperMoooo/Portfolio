import Image from 'next/image';
import { MOBILE_APPS } from '../constants/Projects';
import AppIcon from './AppIcon';
import LinkButton from './LinkButton';
import SectionHeading from './SectionHeading';
import TechChips from './TechChips';

export default function ProjectsSection() {
    return (
        <section id="apps" className="scroll-mt-20">
            <SectionHeading
                eyebrow="01 · Mobile apps"
                title="Apps I've shipped"
                desc="Side projects I designed, built and published myself. My client work at Tempus, IMR and Knowledge In Motion is under Experience."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {MOBILE_APPS.map((app) => (
                    <article
                        key={app.title}
                        className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-secondBg transition-colors hover:border-accent/40"
                    >
                        <div className="relative aspect-[2.05/1] overflow-hidden bg-black">
                            <Image
                                src={app.img}
                                alt={`${app.title} banner`}
                                sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-4 p-5">
                            <div className="flex items-center gap-3">
                                <AppIcon app={app} className="h-12 w-12" />
                                <div>
                                    <h3 className="text-xl font-semibold">{app.title}</h3>
                                    <p className="text-xs text-nonPrimaryText">{app.tagline}</p>
                                </div>
                            </div>
                            <p className="text-sm text-nonPrimaryText">{app.desc}</p>
                            <TechChips techs={app.techs} />
                            <div className="mt-auto flex flex-wrap gap-2 pt-1">
                                {app.links.map((link, i) => (
                                    <LinkButton key={link.href} link={link} primary={i === 0} />
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
