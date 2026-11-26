import Image from 'next/image';
import { STACK } from '@/content/skills';
import { Section } from '@/components/ui/section';

/**
 * Skills grouped by area, as plain text in a three-column grid. No tiles:
 * tiles are for things (a job, an app, a CLI), and a heading with whitespace
 * is enough to group facts.
 */
export function StackSection() {
    return (
        <Section id="stack" title="Stack">
            <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {STACK.map((group) => (
                    <div key={group.title}>
                        <dt className="font-semibold">{group.title}</dt>
                        <dd className="mt-1 text-sm text-ink-muted">{group.note}</dd>
                        <dd className="mt-4">
                            <ul aria-label={`${group.title} skills`} className="flex flex-wrap gap-x-4 gap-y-2">
                                {group.skills.map((skill) => (
                                    <li key={skill.name} className="flex items-center gap-1.5 text-sm text-ink">
                                        {skill.logo && <Image src={skill.logo} alt="" width={16} height={16} className="h-4 w-4" />}
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}
