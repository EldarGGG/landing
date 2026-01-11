
import React from 'react';
import { WHATSAPP_LINK } from '../../data';

type HeroProps = {
    navigateToVip: () => void;
    navigateToSelections: () => void;
};

const Hero: React.FC<HeroProps> = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
            >
            <source src="https://framerusercontent.com/assets/5S9gYpiFYZwVuLzg630s4L2Vk.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
            {/* Increased top padding for mobile (pt-32) to prevent text overlap with header */}
            <div className="relative z-10 flex flex-col h-full px-6 pt-32 pb-10 sm:p-12 md:p-16 lg:p-24">
            <main className="flex-grow flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-6xl">
                <h1 
                    className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight uppercase tracking-tighter mb-8" 
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                    <span className="block animate-slide-in" style={{animationDelay: '100ms'}}>Помогаем футболистам</span>
                    <span className="block animate-slide-in text-lime-400" style={{animationDelay: '250ms'}}>со всего мира</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-200 animate-slide-in" style={{animationDelay: '400ms'}}>
                    Попасть в футбольные академии <span className="border-b-4 border-lime-400">Испании</span>
                </h2>
                <p 
                    className="mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed animate-slide-in text-gray-400"
                    style={{ animationDelay: '700ms' }}
                >
                    Организуем просмотры и сопровождаем игроков на каждом этапе пути — от первого отбора до подписания контракта
                </p>
                <div 
                    className="mt-12 animate-slide-in"
                    style={{ animationDelay: '850ms' }}
                >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-lime-400 text-black font-black py-6 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(163,230,53,0.6)] inline-flex items-center gap-4">
                        Записаться на консультацию
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </div>
                </div>
            </main>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
        </section>
    );
};

export default Hero;
