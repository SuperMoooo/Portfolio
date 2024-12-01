import Image from 'next/image';
import React from 'react';

interface SkillCardProps {
    name: string;
    icon: any;
    experience: string;
    bgColor: string;
}

export default function SkillCard({
    name,
    icon,
    experience,
    bgColor,
}: SkillCardProps) {
    return (
        <div className="px-4 py-2 flex items-center  gap-4 rounded-default bg-secondBg w-5/6 ">
            <picture
                style={{ backgroundColor: bgColor }}
                className=" p-3 rounded-default "
            >
                <Image
                    src={icon}
                    alt={name}
                    width={55}
                    height={55}
                    className="object-cover object-center "
                />
            </picture>
            <div className="flex flex-col text-left  justify-center gap-2 w-full">
                <h1 className="text-lg font-thin text-accent">{name}</h1>
                <div className="bg-nonPrimaryText w-full h-[0.8px]"></div>
                <p className="text-sm text-nonPrimaryText">
                    {parseInt(experience) === 0 ? '> 1 year' : experience}
                </p>
            </div>
        </div>
    );
}
