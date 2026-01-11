
import React from 'react';
import { whyUsData } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';

const WhyUs: React.FC = () => {
    return (
        <section id="why-us" className="text-white py-24 sm:py-32 section-animate bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <AnimatedHeading className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
                        Почему <span className="text-lime-400">ProStep?</span>
                    </AnimatedHeading>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
                        Откройте для себя уникальные преимущества нашего футбольного агентства.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyUsData.map((item, index) => (
                        <div key={index} className="bg-black/40 p-10 rounded-3xl border border-slate-800 hover:border-lime-400/50 transition-all group">
                            <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:-rotate-3">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
