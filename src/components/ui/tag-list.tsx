import { cn } from '@/lib/class-names';

interface TagListProps {
    tags: string[];
    // Read out by screen readers before the list, since a row of tags has no heading.
    label?: string;
    className?: string;
}

/** Technologies or features as a row of small, scannable tags. */
export function TagList({ tags, label = 'Technologies', className }: TagListProps) {
    return (
        <ul aria-label={label} className={cn('flex flex-wrap gap-1.5', className)}>
            {tags.map((tag) => (
                <li key={tag} className="rounded-tag bg-surface-raised px-2 py-0.5 text-xs font-medium text-ink-muted">
                    {tag}
                </li>
            ))}
        </ul>
    );
}
