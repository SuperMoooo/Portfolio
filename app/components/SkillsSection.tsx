import { STACK } from '../constants/Skills';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';

export default function SkillsSection() {
    return (
        <section id="stack" className="scroll-mt-20">
            <SectionHeading eyebrow="05 · Stack" title="What I work with" desc="Mobile first, with a web and back-end background that helps me work closely with API teams." />
            <div className="grid gap-4 md:grid-cols-2">
                {STACK.map((group) => (
                    <div
                        key={group.title}
                        className={`rounded-[1.25rem] border p-5 ${
                            group.primary ? 'border-accent/25 bg-gradient-to-br from-secundary/50 to-secondBg' : 'border-white/10 bg-secondBg'
                        }`}
                    >
                        <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-nonPrimaryText">{group.title}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
