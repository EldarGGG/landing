
import React from 'react';
import { stagesData } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';

const Stages: React.FC = () => {
    return (
        <section className="bg-black text-gray-200 py-24 sm:py-32 section-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                    Этапы пути к мечте
                </AnimatedHeading>
            </div>
            
            <div className="mt-24">
                <div className="relative">
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                <div className="block lg:hidden absolute top-0 left-12 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2"></div>
                <div className="grid lg:grid-cols-3 gap-y-16 lg:gap-x-12 relative">
                    {stagesData.map((stage, index) => (
                    <div key={stage.title} className="relative flex lg:flex-col items-start lg:items-center animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="z-10 flex-shrink-0 w-24 h-24 flex items-center justify-center bg-black">
                        <div className="relative w-20 h-20 flex items-center justify-center">
                            <div className="absolute inset-0 bg-slate-800 rounded-full border-2 border-slate-700 group-hover:border-lime-400 transition-colors"></div>
                            <div className="absolute inset-1 bg-black rounded-full"></div>
                            <div className="relative z-10 text-3xl font-bold text-lime-400" style={{ fontFamily: "'Manrope', sans-serif" }}>{index + 1}</div>
                        </div>
                        </div>
                        <div className="ml-6 lg:ml-0 lg:mt-6 text-left lg:text-center group w-full">
                        <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] hover:-translate-y-2 h-full">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-slate-900 border-2 border-slate-600">
                                {stage.icon}
                            </div>
                            <p className="text-sm font-bold text-lime-400 uppercase tracking-wider mb-2">{stage.step}</p>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">{stage.title}</h3>
                            {stage.description && <p className="text-gray-400 text-sm">{stage.description}</p>}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Stages;
