import type { ReactNode } from 'react';

interface SectionProps {
    // The anchor the header nav links to, and what it watches to mark the current section.
    id: string;
    title: string;
    intro?: string;
    children: ReactNode;
}

/**
 * A page section: the title with its intro directly under it, left-aligned,
 * above the section's content.
 */
export function Section({ id, title, intro, children }: SectionProps) {
    const titleId = `${id}-title`;

    return (
        // scroll-mt matches the sticky header's height, so a nav jump lands below it.
        <section id={id} aria-labelledby={titleId} className="scroll-mt-16">
            <div className="mx-auto max-w-page px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="mb-6 md:mb-8">
                    <h2 id={titleId} className="font-wide text-title">
                        {title}
                    </h2>
                    {intro && <p className="mt-2 max-w-xl text-ink-muted">{intro}</p>}
                </div>
                {children}
            </div>
        </section>
    );
}
