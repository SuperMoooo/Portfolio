'use client';

import React, { useEffect, useState } from 'react';

export default function BottomNavbar({
    curriculumSection,
    projectSection,
    experienceSection,
    skillsSection,
}: any) {
    const [showBottomBar, setShowBottomBar] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        const sections = [
            { ref: curriculumSection, index: 0 },
            { ref: projectSection, index: 1 },
            { ref: experienceSection, index: 2 },
            { ref: skillsSection, index: 3 },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const section = sections.find(
                            (sec) => sec.ref.current === entry.target
                        );
                        if (section) {
                            setSelectedTab(section.index);
                            setShowBottomBar(section.index > 0); // Show only if not the first section
                        }
                    }
                });
            },
            {
                root: null, // Viewport
                threshold: 0.1, // Trigger when 10% of the target is visible
            }
        );

        // Observe all sections
        sections.forEach(({ ref }) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [curriculumSection, projectSection, experienceSection, skillsSection]);

    return (
        <nav
            className={`fixed bottom-10 left-1/2 bg-[#191919] px-6 py-3 rounded-default -translate-x-1/2 transition-opacity duration-300 ease-in-out z-50 ${
                showBottomBar ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <ul className="flex lg:gap-32 md:gap-20 gap-4 items-center justify-around lg:*:text-2xl text-lg flex-wrap md:flex-nowrap font-thin *:rounded-default md:*:px-6 md:*:py-2  *:px-4 *:py-1 *:transition-all *:duration-300 *:ease-in-out">
                <li
                    className={`${
                        selectedTab === 0 &&
                        'bg-gradient-to-r from-accent to-primary text-black font-bold'
                    } hover:scale-105`}
                >
                    <a href="#0">Curriculum</a>
                </li>
                <li
                    className={`${
                        selectedTab === 1 &&
                        'bg-gradient-to-r from-accent to-primary text-black font-bold'
                    } hover:scale-105`}
                >
                    <a href="#1">Projects</a>
                </li>
                <li
                    className={`${
                        selectedTab === 2 &&
                        'bg-gradient-to-r from-accent to-primary text-black font-bold'
                    } hover:scale-105`}
                >
                    <a href="#2">Experience</a>
                </li>
                <li
                    className={`${
                        selectedTab === 3 &&
                        'bg-gradient-to-r from-accent to-primary text-black font-bold'
                    } hover:scale-105`}
                >
                    <a href="#3">Skills</a>
                </li>
            </ul>
        </nav>
    );
}
