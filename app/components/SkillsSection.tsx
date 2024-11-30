import React from 'react';
import { SKILLS } from '../constants/Skills';
import SkillCard from './SkillCard';

export default function SkillsSection() {
    return (
        <section>
            <div className="gap-2 flex  justify-center flex-col mb-10">
                <h1 className="text-4xl">Skills</h1>
                <div className="bg-accent  md:w-2/5 3/5 h-[0.7px]"></div>
            </div>
            <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
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
