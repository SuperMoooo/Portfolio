import { chipClass } from './styles';

/** The technologies behind a job or project, as small scannable tags. */
export default function TechChips({ techs, className = '' }: { techs: string[]; className?: string }) {
    return (
        <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Technologies">
            {techs.map((tech) => (
                <li key={tech} className={chipClass}>
                    {tech}
                </li>
            ))}
        </ul>
    );
}
