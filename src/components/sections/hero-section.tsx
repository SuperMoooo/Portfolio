import { ButtonLink } from '@/components/ui/button';
import {
    DownloadIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
} from '@/components/ui/icons';
import { Tile } from '@/components/ui/tile';
import { CV_FILES, SOCIALS } from '@/content/profile';

// Links inside the lead: full ink and underlined, so the named work stands out
// from the muted sentence around it.
const LEAD_LINK_CLASS =
    'text-ink underline decoration-accent/60 underline-offset-4 transition-colors hover:text-accent';

/** The opening tile, full width: what I do, the work that proves it, then the CV and contact links. */
export function HeroSection() {
    return (
        <section
            id="intro"
            aria-labelledby="hero-title"
            className="scroll-mt-16"
        >
            <div className="mx-auto max-w-page px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
                <Tile className="hero-enter flex flex-col gap-10 p-6 sm:p-10 lg:p-14">
                    <div>
                        <p className="text-sm text-ink-muted">
                            Based in Portugal
                        </p>
                        <h1
                            id="hero-title"
                            className="mt-4 text-balance font-wide text-display"
                        >
                            Mobile Engineer & Backend Developer
                        </h1>
                    </div>

                    {/* Text left, actions right on wide screens, so the full-width
                        tile ends in one row instead of a tall stack. */}
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        {/* The proof, not a restatement of the title: the shipped apps
                            and the published CLIs, each linking to its section. */}
                        <p className="max-w-xl text-lead text-ink-muted">
                            Two Flutter apps on Google Play,{' '}
                            <a href="#projects" className={LEAD_LINK_CLASS}>Gesti and Compras</a>, and{' '}
                            <a href="#open-source" className={LEAD_LINK_CLASS}>moarch and moarch-py</a>, the
                            CLIs I publish to set up both ends of an app.
                        </p>

                        {/* Two groups, so on phones the CVs and the contact icons each
                            wrap as a unit instead of splitting mid-row. */}
                        <div className="flex flex-wrap gap-2 lg:shrink-0">
                            <div className="flex flex-wrap gap-2">
                                <ButtonLink
                                    href={CV_FILES.english.href}
                                    download={CV_FILES.english.downloadName}
                                    variant="primary"
                                >
                                    <DownloadIcon />
                                    Download CV
                                </ButtonLink>
                                <ButtonLink
                                    href={CV_FILES.portuguese.href}
                                    download={CV_FILES.portuguese.downloadName}
                                    lang="pt"
                                >
                                    CV em português
                                </ButtonLink>
                            </div>
                            <div className="flex gap-2">
                                <ButtonLink
                                    href={`mailto:${SOCIALS.email}`}
                                    shape="icon"
                                    aria-label="Email"
                                >
                                    <MailIcon />
                                </ButtonLink>
                                <ButtonLink
                                    href={SOCIALS.github}
                                    shape="icon"
                                    isExternal
                                    aria-label="GitHub"
                                >
                                    <GithubIcon />
                                </ButtonLink>
                                <ButtonLink
                                    href={SOCIALS.linkedin}
                                    shape="icon"
                                    isExternal
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinIcon />
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </Tile>
            </div>
        </section>
    );
}
