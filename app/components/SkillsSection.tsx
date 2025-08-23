import { SKILLS } from '../constants/Skills';
import SkillCard from './SkillCard';

export default function SkillsSection() {
    return (
        <section className="w-full">
            <div className="gap-2 flex  justify-center flex-col mb-10">
                <h1 className="text-4xl uppercase font-bold">Skills</h1>
            </div>
            <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 place-items-center">
                {SKILLS.map((skill) => {
                    return (
                        <SkillCard
                            key={skill.name}
                            name={skill.name}
                            icon={skill.icon}
                            experience={skill.experience}
                            bgColor={skill.bgColor}
                        />
                    );
                })}
            </section>
        </section>
    );
}
