import Image from 'next/image';
import React from 'react';

interface SkillCardProps {
    name: string;
    icon: any;
    experience: string;
}

export default function SkillCard({ name, icon, experience }: SkillCardProps) {
    return (
        <div className="px-4 py-2 flex items-center  gap-4 rounded-default bg-[#191919] ">
            <picture>
                <Image
                    src={icon}
                    alt={name}
                    width={60}
                    height={60}
                    className="object-cover "
                />
            </picture>
            <div className="flex flex-col text-left  justify-center gap-1 w-full">
                <h1 className="text-2xl font-thin">{name}</h1>
                <div className="bg-accent w-full h-[0.8px]"></div>
                <p className="text-lg">
                    {parseInt(experience) === 0 ? '> 1 year' : experience}
                </p>
            </div>
        </div>
    );
}