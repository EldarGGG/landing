
import React from 'react';
import { expectationsData } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';

const Expectations: React.FC = () => {
    return (
        <section className="bg-black py-24 sm:py-32 section-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl section-heading">
                        Чего ожидать на просмотрах
                    </AnimatedHeading>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Участие в просмотре — первый шаг к тому, чтобы стать профессиональным футболистом. Вот 3 возможных сценария:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expectationsData.map((item, index) => (
                        <div key={index} className="bg-slate-800/40 border border-slate-700 p-8 rounded-xl transition-all duration-300 hover:bg-slate-800">
                            <div className="mb-6">
                                {item.type === 'success' && <span className="text-4xl">✅</span>}
                                {item.type === 'develop' && <span className="text-4xl">🔄</span>}
                                {item.type === 'feedback' && <span className="text-4xl">❌</span>}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expectations;
