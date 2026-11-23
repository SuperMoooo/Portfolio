interface SectionHeadingProps {
    id: string;
    title: string;
    intro?: string;
}

/** A section's h2 and its one-line summary. The id is the nav anchor. */
export default function SectionHeading({ id, title, intro }: SectionHeadingProps) {
    return (
        <div className="mb-8 max-w-2xl">
            <h2 id={id} className="type-heading scroll-mt-24 text-2xl sm:text-3xl">
                {title}
            </h2>
            {intro && <p className="mt-2 text-base leading-relaxed text-muted">{intro}</p>}
        </div>
    );
}
