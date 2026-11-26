import { CV_FILES, SOCIALS } from '@/content/profile';
import { ButtonLink } from '@/components/ui/button';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/icons';

/** The closing call to action: the only solid wisteria block on the page, so it is the last thing the eye lands on. */
export function ContactSection() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16">
            <div className="mx-auto max-w-page px-4 pb-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
                {/* The global focus ring is wisteria, which would vanish on this
                    band, so focus rings inside it use the dark ink instead. */}
                <div className="flex flex-col gap-8 rounded-panel bg-accent p-6 text-accent-ink sm:p-10 [&_:focus-visible]:outline-accent-ink">
                    <div>
                        <h2 id="contact-title" className="text-balance font-wide text-title">
                            Hiring for mobile or backend work?
                        </h2>
                        <p className="mt-3 max-w-xl text-lead text-accent-ink/75">
                            Email me, or start with the CV. I work in English and Portuguese.
                        </p>
                    </div>
                    {/* Three groups that wrap as units: the email (full width on phones),
                        the CVs, then the profiles, so no button is left alone on a line. */}
                    <div className="flex flex-wrap gap-2">
                        <ButtonLink href={`mailto:${SOCIALS.email}`} variant="primary-on-accent" className="w-full sm:w-auto">
                            <MailIcon className="h-4 w-4" />
                            {SOCIALS.email}
                        </ButtonLink>
                        <div className="flex gap-2">
                            <ButtonLink href={CV_FILES.english.href} download={CV_FILES.english.downloadName} variant="secondary-on-accent">
                                <DownloadIcon />
                                CV
                            </ButtonLink>
                            <ButtonLink
                                href={CV_FILES.portuguese.href}
                                download={CV_FILES.portuguese.downloadName}
                                lang="pt"
                                variant="secondary-on-accent"
                            >
                                CV em português
                            </ButtonLink>
                        </div>
                        <div className="flex gap-2">
                            <ButtonLink href={SOCIALS.github} shape="icon" isExternal aria-label="GitHub" variant="secondary-on-accent">
                                <GithubIcon />
                            </ButtonLink>
                            <ButtonLink href={SOCIALS.linkedin} shape="icon" isExternal aria-label="LinkedIn" variant="secondary-on-accent">
                                <LinkedinIcon />
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
