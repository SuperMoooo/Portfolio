export default function TechChips({ techs }: { techs: string[] }) {
    return (
        <ul className="flex flex-wrap gap-1.5">
            {techs.map((tech) => (
                <li key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-accent">
                    {tech}
                </li>
            ))}
        </ul>
    );
}
