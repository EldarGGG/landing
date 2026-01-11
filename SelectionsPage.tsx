

import React, { useState, useMemo, useRef, useEffect } from 'react';

const LOGO_URL = 'https://static.tildacdn.com/tild3538-3165-4331-a533-326564303862/Frame_44.png';

type Selection = {
    date: string;
    city: string;
    status: string;
};

type SelectionsPageProps = {
    navigateToMain: (hash?: string) => void;
    selectionsData: Selection[];
    getSelectionStatus: (dateStr: string) => 'ongoing' | 'upcoming' | 'past';
};


const AnimatedHeading: React.FC<{ children: React.ReactNode; className?: string; as?: 'h1' | 'h2' | 'h3' }> = ({ children, className = '', as = 'h2' }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const Tag = as;

    return (
        <Tag ref={ref} className={`${className} ${isInView ? 'section-heading-animated in-view' : ''}`} aria-label={typeof children === 'string' ? children : ''}>
           {React.Children.map(children, (child) => {
               if (typeof child === 'string') {
                   return child.split(' ').map((word, index) => (
                       <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                           {word}&nbsp;
                       </span>
                   ));
               }
               return child;
           })}
        </Tag>
    );
};


const SelectionsPage: React.FC<SelectionsPageProps> = ({ navigateToMain, selectionsData, getSelectionStatus }) => {
    const [openSelection, setOpenSelection] = useState<number | null>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleToggle = (index: number) => {
        setOpenSelection(openSelection === index ? null : index);
    };
    
    const handleDetailsClick = () => {
        navigateToMain('#contact');
    };
    
    const processedSelections = useMemo(() => selectionsData.map(sel => ({
        ...sel,
        liveStatus: getSelectionStatus(sel.date)
    })).sort((a, b) => {
        const statusOrder = { 'ongoing': 1, 'upcoming': 2, 'past': 3 };
        return statusOrder[a.liveStatus] - statusOrder[b.liveStatus];
    }), [selectionsData, getSelectionStatus]);

    return (
        <div className="bg-slate-900 min-h-screen">
            <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                         <a href="#" onClick={(e) => {e.preventDefault(); navigateToMain();}} aria-label="ProStep Home">
                            <img src={LOGO_URL} alt="ProStep Logo" className="h-16 w-auto logo-lime-filter" />
                         </a>
                        <button onClick={() => navigateToMain()} className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-semibold text-sm flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Вернуться на главный сайт
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section id="selections-list" className="text-gray-200 py-24 sm:py-32">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-slide-in">
                            <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                                Ближайшие отборы
                            </AnimatedHeading>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                                Выберите свой город и сделайте первый шаг к мечте.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {processedSelections.map((selection, index) => (
                                <div key={index} className={`bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] animate-slide-in ${selection.liveStatus === 'past' ? 'opacity-60' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                                    <button
                                        className="w-full flex justify-between items-center p-5 text-left"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={openSelection === index}
                                        aria-controls={`selection-content-${index}`}
                                    >
                                        <span className="flex items-center gap-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-semibold text-lg text-white">{selection.date} — {selection.city}</span>
                                        </span>
                                        <span className="flex items-center gap-4">
                                            {selection.liveStatus === 'ongoing' && (
                                                <div className="live-indicator-container">
                                                    <div className="live-dot"></div>
                                                    <span>УЖЕ НАЧАЛСЯ</span>
                                                </div>
                                            )}
                                            {selection.liveStatus === 'upcoming' && selection.status === 'confirmed' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            {selection.liveStatus === 'past' && (
                                                <span className="text-sm font-semibold text-gray-500 px-2">ЗАВЕРШЕН</span>
                                            )}
                                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${openSelection === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        id={`selection-content-${index}`}
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${openSelection === index ? 'max-h-96' : 'max-h-0'}`}
                                    >
                                       <div className="p-6 border-t border-slate-700/50">
                                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                                <div className="bg-slate-700/50 aspect-video rounded-lg flex items-center justify-center stagger-item" style={{ animationDelay: '100ms' }}>
                                                    <span className="text-slate-400">Фото скоро будет</span>
                                                </div>
                                                <div>
                                                    <p className="text-gray-300 mb-4 stagger-item" style={{ animationDelay: '200ms' }}>Подробная информация о просмотре в городе <span className="font-bold text-white">{selection.city}</span>.</p>
                                                    <div className="stagger-item" style={{ animationDelay: '300ms' }}>
                                                        <button onClick={handleDetailsClick} className="bg-lime-400 text-black font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                                                            Оставить заявку
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SelectionsPage;