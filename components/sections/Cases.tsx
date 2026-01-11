import React, { useState } from 'react';
import { casesData } from '../../data';
import { smoothScroll } from '../../utils';
import AnimatedHeading from '../ui/AnimatedHeading';
import { InstagramIcon } from '../ui/Icons';

const Cases: React.FC = () => {
    const [selectedCase, setSelectedCase] = useState<(typeof casesData)[0] | null>(null);

    return (
        <>
            <section id="cases" className="bg-black text-gray-200 py-24 sm:py-32 section-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedHeading className="flex items-center justify-center gap-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                        <span role="img" aria-label="soccer ball" className="text-4xl">⚽</span>
                        <span>Кейсы</span>
                    </AnimatedHeading>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Реальные истории успеха наших игроков, которые уже сделали шаг к мечте.
                    </p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {casesData.map((playerCase, index) => (
                            <div 
                                key={playerCase.id}
                                className="case-card animate-slide-in"
                                style={{animationDelay: `${index * 150}ms`}}
                            >
                                <img src={playerCase.image} alt={playerCase.name} className="w-full h-96 object-cover case-card-img" />
                                <div className="absolute inset-0 case-card-overlay flex flex-col justify-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{playerCase.name}</h3>
                                        <p className="text-lime-400 font-semibold">{playerCase.position}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedCase(playerCase)}
                                        className="mt-4 bg-lime-400 text-black font-bold py-2 px-5 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(163,230,53,0.6)] self-start"
                                    >
                                        Подробнее
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center animate-slide-in">
                        <a 
                            href="https://www.instagram.com/prostep_agency" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-3 bg-transparent border-2 border-lime-400 text-lime-400 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_25px_rgba(163,230,53,0.7)]"
                        >
                            <InstagramIcon className="w-6 h-6" />
                            Больше кейсов - в Instagram
                        </a>
                    </div>
                </div>
            </section>
            
            {selectedCase && (
                <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
                    <div className="modal-content overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedCase.image} alt={selectedCase.name} className="w-full h-64 object-cover object-center"/>
                        <div className="p-8">
                            <h3 className="text-3xl font-bold text-white">{selectedCase.name}</h3>
                            <p className="text-lime-400 font-semibold mt-1">{selectedCase.position} - <span className="text-white font-normal">{selectedCase.club}</span></p>
                            <p className="text-gray-300 mt-4 leading-relaxed">{selectedCase.story}</p>
                            <button onClick={() => setSelectedCase(null)} className="mt-6 bg-slate-700 text-white font-bold py-2 px-6 rounded-lg text-base transition-colors duration-300 hover:bg-slate-600">
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cases;
