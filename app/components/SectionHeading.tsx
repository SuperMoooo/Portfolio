interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    desc?: string;
}

export default function SectionHeading({ eyebrow, title, desc }: SectionHeadingProps) {
    return (
        <div className="mb-8 flex flex-col gap-2 sm:mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80">{eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
            {desc && <p className="max-w-2xl text-nonPrimaryText">{desc}</p>}
        </div>
    );
}
