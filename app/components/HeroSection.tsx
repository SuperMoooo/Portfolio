import Image from 'next/image';
import { ARCHITECTURE_LAYERS, CV_FILES, SOCIALS } from '../constants/Profile';
import { LOGO_BY_NAME } from '../constants/Skills';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { buttonClass, cardClass, iconButtonClass } from './styles';

/** The line between two layers, labelled with the protocol, with a dot travelling down it. */
function LayerConnector({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3 pl-[1.6rem]" aria-hidden="true">
            <span className="relative h-9 w-px bg-edge">
                <span className="flow-dot absolute -left-[2.5px] h-1.5 w-1.5 rounded-full bg-lilac shadow-[0_0_8px] shadow-lilac" />
            </span>
            <span className="font-mono text-xs text-muted">{label}</span>
        </div>
    );
}

/** Mobile app → API → database, each with the tools I use for it. */
function ArchitectureDiagram() {
    return (
        <figure className={`${cardClass} p-4 sm:p-5`}>
            <figcaption className="mb-4 text-sm text-muted">What I build, end to end</figcaption>
            <ol>
                {ARCHITECTURE_LAYERS.map((layer) => (
                    <li key={layer.layer}>
                        <div className="flex items-center gap-3 rounded-xl border border-edge bg-surface-raised p-3">
                            <span className="flex shrink-0 -space-x-1.5">
                                {layer.techs.map((tech) => {
                                    const logo = LOGO_BY_NAME.get(tech);
                                    return logo ? (
                                        <span key={tech} className="grid h-9 w-9 place-items-center rounded-lg border border-edge bg-base">
                                            <Image src={logo} alt="" width={20} height={20} className="h-5 w-5" />
                                        </span>
                                    ) : null;
                                })}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block font-semibold">{layer.title}</span>
                                <span className="block text-sm text-muted">{layer.techs.join(', ')}</span>
                            </span>
                            <span className="rounded-md bg-lilac/10 px-2 py-0.5 font-mono text-xs text-lilac">{layer.layer}</span>
                        </div>
                        {layer.talksToNextVia && <LayerConnector label={layer.talksToNextVia} />}
                    </li>
                ))}
            </ol>
        </figure>
    );
}

export default function HeroSection() {
    return (
        <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
            {/* A single soft glow behind the hero, so the top of the page has depth. */}
            <div
                aria-hidden="true"
                className="absolute -top-40 right-[-10%] -z-10 h-[32rem] w-[32rem] rounded-full bg-lilac/[0.07] blur-3xl"
            />

            <div className="mx-auto grid max-w-page items-center gap-12 px-4 pb-6 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-10">
                <div className="hero-enter">
                    <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-3 py-1 text-sm text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden="true" />
                        Portugal, studying Computer Science and AI
                    </p>

                    <h1 id="hero-title" className="type-heading mt-6 text-[clamp(2.25rem,5.4vw,3.75rem)] leading-[1.05]">
                        Mobile Engineer & Backend Developer
                    </h1>

                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                        I&apos;m André, and I build apps end to end, from the UI to the API: Flutter and Android on the
                        phone, Python, FastAPI and PostgreSQL on the server.
                    </p>

                    {/* Two groups, so on phones the CVs and the contact icons each
                        wrap as a unit instead of splitting mid-row. */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        <div className="flex flex-wrap gap-2">
                            <a href={CV_FILES.english} download className={buttonClass('primary')}>
                                <DownloadIcon />
                                Download CV
                            </a>
                            <a href={CV_FILES.portuguese} download lang="pt" className={buttonClass('secondary')}>
                                CV em português
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <a href={`mailto:${SOCIALS.email}`} aria-label="Email" className={iconButtonClass}>
                                <MailIcon />
                            </a>
                            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconButtonClass}>
                                <GithubIcon />
                            </a>
                            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconButtonClass}>
                                <LinkedinIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-enter [animation-delay:150ms]">
                    <ArchitectureDiagram />
                </div>
            </div>
        </section>
    );
}
