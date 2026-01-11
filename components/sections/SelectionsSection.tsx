import React, { useMemo } from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';

type SelectionsSectionProps = {
    navigateToSelections: () => void;
    selectionsData: { date: string; city: string; status: string; }[];
    getSelectionStatus: (dateStr: string) => 'ongoing' | 'upcoming' | 'past';
};

const SelectionsSection: React.FC<SelectionsSectionProps> = ({ navigateToSelections, selectionsData, getSelectionStatus }) => {
    const hasLiveSelection = useMemo(() => selectionsData.some(sel => getSelectionStatus(sel.date) === 'ongoing'), [selectionsData, getSelectionStatus]);

    return (
        <section id="selections" className="bg-black text-gray-200 py-24 sm:py-32 section-animate">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {hasLiveSelection && (
                    <div className="mb-8 animate-slide-in">
                        <div className="inline-flex items-center gap-3 bg-red-500/10 text-red-400 font-bold px-5 py-3 rounded-full border border-red-500/30 text-lg">
                            <div className="live-dot"></div>
                            <span>ОТБОР УЖЕ НАЧАЛСЯ</span>
                        </div>
                    </div>
                )}
                <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                    Ближайшие отборы
                </AnimatedHeading>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                    Мы регулярно проводим просмотры в разных городах. Посмотрите полный список и сделайте первый шаг к мечте.
                </p>
                <div className="mt-12 animate-slide-in" style={{ animationDelay: '200ms' }}>
                    <button 
                        onClick={navigateToSelections} 
                        className="bg-lime-400 text-black font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(163,230,53,0.7)] flex items-center justify-center gap-3 mx-auto"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Посмотреть все города</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SelectionsSection;
