import Image from 'next/image';
import { STACK } from '@/content/skills';
import { Section } from '@/components/ui/section';
import { Tile } from '@/components/ui/tile';

/** Skills grouped by area: one tile per group in a three-column grid, each tool with its logo. */
export function StackSection() {
    return (
        <Section id="stack" title="Stack" intro="Mobile first, with the back end to match.">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {STACK.map((group) => (
                    <Tile as="li" key={group.title} className="p-5">
                        <h3 className="font-semibold">{group.title}</h3>
                        <p className="mt-1 text-sm text-ink-muted">{group.note}</p>
                        <ul aria-label={`${group.title} skills`} className="mt-4 flex flex-wrap gap-1.5">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill.name}
                                    className="flex items-center gap-1.5 rounded-control bg-surface-raised px-2.5 py-1 text-sm"
                                >
                                    {skill.logo && <Image src={skill.logo} alt="" width={16} height={16} className="h-4 w-4" />}
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </Tile>
                ))}
            </ul>
        </Section>
    );
}
