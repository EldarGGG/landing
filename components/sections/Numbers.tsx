
import React from 'react';
import { aboutNumbers } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';
import CountUpNumber from '../ui/CountUpNumber';

const Numbers: React.FC = () => {
    return (
        <section className="py-24 sm:py-32 bg-black section-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <AnimatedHeading as="h2" className="text-3xl font-extrabold tracking-tight sm:text-4xl section-heading">
                        ProStep в цифрах
                    </AnimatedHeading>
                    <p className="mt-4 text-xl text-gray-400">Сезон 2024-2025</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {aboutNumbers.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] hover:-translate-y-2 animate-slide-in" 
                            style={{ animationDelay: `${index * 150}ms`}}
                        >
                            <CountUpNumber value={item.value} className="text-5xl lg:text-6xl font-extrabold text-lime-400" />
                            <p className="mt-2 text-base md:text-lg font-medium text-gray-400">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Numbers;
