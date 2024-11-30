import Image from 'next/image';
import React from 'react';

interface JobContentProps {
    company: string;
    position: string;
    date: string;
    img: any;
    desc: string[];
    side: number;
    rowStart: number;
}

export default function JobContent({
    company,
    position,
    date,
    img,
    desc,
    side,
    rowStart,
}: JobContentProps) {
    return (
        <div
            style={{ gridRowStart: rowStart }}
            className={`grid grid-rows-[auto_auto_1fr] my-8 w-full h-full border-l-[1px]  border-accent ${
                side === 0
                    ? 'lg:col-start-1  lg:border-r-[1px] lg:border-l-transparent lg:border-accent'
                    : ' lg:col-start-2 lg:ml-[-0.1rem] lg:border-l-[1px] lg:border-accent'
            } `}
        >
            <div
                className={`flex justify-between ${
                    side === 0 ? 'flex-row' : 'lg:flex-row-reverse'
                }`}
            >
                <picture className="pl-2 lg:pl-0 ">
                    <Image
                        src={img}
                        alt={img}
                        width={100}
                        className="object-cover rounded-lg w-14 h-14 "
                        rel="preload"
                    />
                </picture>
                <div
                    className={`grid items-end text-left flex-1 ml-4 lg:ml-0 ${
                        side === 0
                            ? 'text-left lg:ml-4'
                            : 'lg:text-right lg:mr-4'
                    } `}
                >
                    <h1 className="uppercase font-thin text-lg text-accent">
                        {company} · {position}
                    </h1>
                </div>
                <div
                    className={`${
                        side === 0
                            ? 'text-right mr-[0.5rem]'
                            : 'lg:text-left lg:ml-[0.5rem]'
                    } grid items-end   text-right`}
                >
                    <h2 className="font-thin">{date}</h2>
                </div>
            </div>
            <div>
                <div className="w-full h-[1px] bg-accent my-4"></div>
                <ul
                    className={`font-thin pl-8   ${
                        side === 0
                            ? ' text-left lg:pl-0'
                            : 'lg:text-right lg:pl-2'
                    }`}
                >
                    {desc.map((item, index) => (
                        <li
                            className="lg:list-none list-disc text-sm"
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
