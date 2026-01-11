import React, { useState } from 'react';
import { projectsData } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';
import { CheckIcon } from '../ui/Icons';

type ProjectsProps = {
    navigateToVip: () => void;
};

const Projects: React.FC<ProjectsProps> = ({ navigateToVip }) => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const activeProject = projectsData[activeProjectIndex];

    const handleDetailsClick = (e: React.MouseEvent) => {
        if (activeProject.shortTitle === 'VIP') {
            navigateToVip();
        } else {
            e.preventDefault();
            const element = document.querySelector('#contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="projects" className="bg-slate-900 text-gray-200 py-24 sm:py-32 section-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                Наши проекты
                </AnimatedHeading>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                Четыре пути к профессиональной карьере через наши программы в Испании.
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-8 animate-slide-in">
                {projectsData.map((project, index) => (
                <button
                    key={project.title}
                    onClick={() => setActiveProjectIndex(index)}
                    className={`px-4 py-3 md:px-6 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                    activeProjectIndex === index
                        ? 'bg-lime-400 text-slate-900 shadow-[0_0_20px_rgba(163,230,53,0.5)]'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                >
                    {project.shortTitle}
                </button>
                ))}
            </div>

            <div key={activeProjectIndex} className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl project-content-animation">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative ken-burns-container">
                    <img
                        src={activeProject.img}
                        alt={activeProject.title}
                        className={`w-full h-96 lg:h-full object-cover object-top ken-burns-image`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-slate-800/0 lg:bg-gradient-to-r"></div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-start sm:items-center gap-4 mb-4 flex-col sm:flex-row">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {activeProject.title}
                        </h3>
                        {activeProject.badge && (
                            <span className={`px-3 py-1 text-sm font-bold rounded-full ${activeProject.badgeColor} flex-shrink-0`}>
                                {activeProject.badge}
                            </span>
                        )}
                    </div>
                    <ul className="space-y-3 mt-4">
                    {activeProject.features.map((feature, index) => (
                        <li key={feature} className="flex items-center text-gray-300 text-base stagger-item" style={{ animationDelay: `${index * 70}ms`}}>
                        <CheckIcon className="w-5 h-5 text-lime-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                    <button onClick={handleDetailsClick} className="mt-8 bg-lime-400 text-black font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(163,230,53,0.7)] self-start">
                         {activeProject.shortTitle === 'VIP' ? 'Перейти на VIP-страницу' : 'Узнать подробнее'}
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Projects;