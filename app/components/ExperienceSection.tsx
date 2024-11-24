import React from 'react';
import { EXPERIENCE } from '../constants/Experience';
import JobContent from './JobContent';

export default function ExperienceSection({ experienceSection }: any) {
    return (
        <section
            id="2"
            className="mt-40 flex flex-col items-center space-y-12 lg:px-24 px-6 lg:relative"
            ref={experienceSection}
        >
            <div
                style={{
                    gridTemplateRows: `repeat(${EXPERIENCE.length}, minmax(0, 1fr))`,
                }}
                className={`grid lg:grid-cols-2 grid-cols-1 w-full lg:px-0  z-10  h-full place-items-center lg:container lg:mx-auto`}
            >
                {EXPERIENCE.map((job, index) => (
                    <JobContent
                        key={`${job}-${index}`}
                        company={job.company}
                        position={job.position}
                        date={job.date}
                        img={job.img}
                        desc={job.desc}
                        side={index % 2 === 0 ? 0 : 1}
                        rowStart={index + 1}
                    />
                ))}
            </div>
        </section>
    );
}
