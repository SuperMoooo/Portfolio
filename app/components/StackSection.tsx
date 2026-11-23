import Image from 'next/image';
import { STACK } from '../constants/Skills';
import SectionHeading from './SectionHeading';
import { cardClass } from './styles';

/** Skills grouped by area, one card per group, each tool with its logo. */
export default function StackSection() {
    return (
        <section className="mx-auto max-w-page px-4 py-12 sm:px-6 md:py-16">
            <SectionHeading id="stack" title="Stack" intro="Mobile first, with the back end to match." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {STACK.map((group) => (
                    <div key={group.title} className={`${cardClass} p-5`}>
                        <h3 className="font-semibold">{group.title}</h3>
                        <p className="mt-1 text-sm text-muted">{group.note}</p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill.name}
                                    className="flex items-center gap-1.5 rounded-lg border border-edge bg-surface-raised px-2.5 py-1.5 text-sm"
                                >
                                    {skill.icon && <Image src={skill.icon} alt="" width={16} height={16} className="h-4 w-4" />}
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
