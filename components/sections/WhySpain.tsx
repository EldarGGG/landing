import React from 'react';
import { whySpainData } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';

const WhySpain: React.FC = () => {
    return (
        <section 
            id="why-spain" 
            className="why-spain-section text-gray-200 py-24 sm:py-32 section-animate"
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading flex items-center justify-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1280px-Bandera_de_Espa%C3%B1a.svg.png" alt="Spanish Flag" className="h-8 rounded-md"/>
                <span>Почему Испания</span>
                </AnimatedHeading>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300/90">
                Три ключевых преимущества для вашей карьеры.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whySpainData.map((item, index) => (
                <div key={item.title} className="why-spain-card p-8 text-center flex flex-col items-center animate-slide-in" style={{animationDelay: `${index * 150}ms`}}>
                    <div className="why-spain-icon mb-6">
                    {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">{item.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default WhySpain;
