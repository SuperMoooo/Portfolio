import { EXPERIENCE } from '../constants/Experience';
import JobContent from './JobContent';

export default function ExperienceSection() {
    return (
        <section>
            <div className="gap-2 flex  justify-center flex-col mb-10">
                <h1 className="text-4xl uppercase font-bold">Experience</h1>
            </div>
            <div className="mt-40 flex flex-col space-y-12 lg:px-24 px-6 lg:relative">
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
            </div>
        </section>
    );
}
