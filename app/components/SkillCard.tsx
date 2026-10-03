import Image from 'next/image';
import type { Skill } from '../constants/Skills';

export default function SkillCard({ skill }: { skill: Skill }) {
    return (
        <li className="flex min-h-[40px] items-center gap-2 rounded-default border border-white/10 bg-black/20 px-3 py-1.5 text-sm">
            {skill.icon && <Image src={skill.icon} alt="" width={20} height={20} className="h-5 w-5 object-contain" />}
            {skill.name}
        </li>
    );
}
