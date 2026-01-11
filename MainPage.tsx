
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import AboutAgency from './components/sections/AboutAgency';
import WhyUs from './components/sections/WhyUs';
import PainPoints from './components/sections/PainPoints';
import Numbers from './components/sections/Numbers';
import Partners from './components/sections/Partners';
import Faq from './components/sections/Faq';
import Footer from './components/sections/Footer';
import FloatingContactButtons from './components/FloatingVipButton';
import AnimatedHeading from './components/ui/AnimatedHeading';
import { programFeatures, expectationsData, stepsData, playersData, teamData, WHATSAPP_LINK } from './data';
import { CheckIcon, InstagramIcon } from './components/ui/Icons';

type MainPageProps = {
    navigateToMain: (hash?: string) => void;
    navigateToSelections: () => void;
    navigateToAbout: () => void;
    selectionsData: { date: string; city: string; status: string; }[];
    getSelectionStatus: (dateStr: string) => 'ongoing' | 'upcoming' | 'past';
};

const MainPage: React.FC<MainPageProps> = ({ navigateToMain, navigateToSelections, navigateToAbout }) => {
    const [activePlayerIndex, setActivePlayerIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.section-animate');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className="bg-slate-900 overflow-x-hidden">
            <Header
                navigateToMain={navigateToMain}
                navigateToSelections={navigateToSelections}
                navigateToAbout={navigateToAbout}
                navigateToVip={() => { }}
            />

            {/* 1. Hero */}
            <Hero navigateToSelections={navigateToSelections} navigateToVip={() => { }} />

            {/* 2. About Agency Teaser (Added as requested) */}
            <AboutAgency navigateToAbout={navigateToAbout} />

            {/* 3. Why ProStep */}
            <WhyUs />

            {/* 4. Team (Team ProStep Section) - Updated to use full text from data.ts */}
            <section className="py-24 bg-black section-animate">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedHeading className="text-center text-4xl font-bold mb-16 text-white">Знакомьтесь, команда ProStep</AnimatedHeading>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamData.map((member, index) => (
                            <div key={index} className="bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 p-8 text-center transition-all hover:border-lime-400/30">
                                <img src={member.image} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" alt={member.name} />
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-lime-400 text-sm mb-4 font-semibold uppercase tracking-wider">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Pain Points */}
            <PainPoints />

            {/* 6. Results (Numbers) */}
            <Numbers />

            {/* 7. Program Implementation */}
            <section className="py-24 bg-black section-animate">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedHeading className="text-4xl font-bold mb-4 text-white text-center">Полугодовая / Годовая программа в академии</AnimatedHeading>
                    <p className="text-gray-400 text-center mb-16 text-xl">Основной формат нашей работы и фундамент развития игрока.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {programFeatures.map((feature, i) => (
                            <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex items-center gap-4">
                                <CheckIcon className="w-6 h-6 text-lime-400 flex-shrink-0" />
                                <span className="text-gray-200">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
                        <a href={WHATSAPP_LINK} className="bg-white text-black font-black py-4 px-10 rounded-2xl text-lg hover:scale-105 transition-all inline-block">
                            Узнать подходит ли программа
                        </a>
                    </div>
                </div>
            </section>

            {/* 8. Results Expectations */}
            <section className="py-24 bg-slate-900 section-animate">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedHeading className="text-4xl font-bold mb-16 text-white text-center">Какой результат вы получите после сезона</AnimatedHeading>
                    <div className="grid md:grid-cols-3 gap-8">
                        {expectationsData.map((item) => (
                            <div key={item.id} className="bg-black/30 p-10 rounded-3xl border border-slate-800 relative">
                                <span className="absolute -top-4 -left-4 w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center font-black text-xl">{item.id}</span>
                                <h3 className="text-2xl font-bold text-white mb-4 mt-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 p-8 bg-lime-400/10 border border-lime-400/20 rounded-3xl text-center max-w-4xl mx-auto">
                        <p className="text-xl text-gray-200 font-medium">
                            Чтобы академия полностью покрывала расходы, игрок должен быть на голову или две выше тех, кто сейчас в академии. <span className="text-lime-400">Основной акцент делается на развитие в сезоне.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* 9. Value Prop */}
            <section className="py-24 bg-black section-animate">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedHeading className="text-4xl font-bold mb-16 text-white text-center">Что получает ребенок?</AnimatedHeading>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-lime-400 text-black rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0">1</div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Организация просмотров</h4>
                                    <p className="text-gray-400">В топовые клубы Испании, куда самому не попасть.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-lime-400 text-black rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0">2</div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Стратегия роста</h4>
                                    <p className="text-gray-400">Разрабатываем план карьерного развития для быстрого прогресса.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-lime-400 text-black rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0">3</div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Полное сопровождение</h4>
                                    <p className="text-gray-400">Клуб, условия, документы, споры — ребёнок не один на этом пути.</p>
                                </div>
                            </div>
                            <a href={WHATSAPP_LINK} className="bg-lime-400 text-black font-black py-4 px-10 rounded-2xl text-lg hover:scale-105 transition-all inline-block mt-4">Присоединиться к нам</a>
                        </div>
                        <div className="rounded-3xl overflow-hidden bg-slate-800 h-full min-h-[400px] flex items-center justify-center relative">
                            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" />
                            <span className="relative z-10 text-white font-bold text-xl bg-black/50 px-6 py-3 rounded-full flex items-center gap-3">
                                <span className="w-4 h-4 bg-lime-400 rounded-full animate-pulse"></span>
                                Видео: Один день футболиста
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Academy Viewings */}
            <section className="py-24 bg-slate-900 section-animate">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <AnimatedHeading className="text-4xl font-bold mb-8 text-white">Просмотр в академии — этап оценки</AnimatedHeading>
                    <div className="max-w-3xl mx-auto text-xl text-gray-400 mb-12 space-y-4">
                        <p>• Понять текущий уровень ребёнка</p>
                        <p>• Получить профессиональную оценку</p>
                        <p>• Показать, как играют испанцы, и к чему стремиться</p>
                        <p>• Определить оптимальный формат развития</p>
                    </div>
                    <a href={WHATSAPP_LINK} className="bg-white text-black font-black py-4 px-10 rounded-2xl text-lg hover:scale-105 transition-all inline-block">Попасть в систему</a>

                    <div className="mt-20 p-12 bg-black/40 rounded-3xl border border-slate-800">
                        <h4 className="text-2xl font-bold text-white mb-4">Летние лагеря + Турниры</h4>
                        <p className="text-gray-400 mb-8">Этот формат идеально подходит для детей 6-12 лет.</p>
                        <a href={WHATSAPP_LINK} className="text-lime-400 font-bold border-b-2 border-lime-400 pb-1 hover:text-white hover:border-white transition-all">Оставьте заявку</a>
                    </div>
                </div>
            </section>

            {/* 11. Steps */}
            <section className="py-24 bg-black section-animate">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedHeading className="text-center text-4xl font-bold mb-16 text-white">Этапы пути к мечте</AnimatedHeading>
                    <div className="flex flex-col md:flex-row justify-between gap-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 hidden md:block"></div>
                        {stepsData.map((step, i) => (
                            <div key={i} className="relative z-10 bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1 text-center">
                                <span className="text-lime-400 font-black text-2xl mb-4 block">{i + 1}</span>
                                <h5 className="text-white font-bold">{step.title}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <a href={WHATSAPP_LINK} className="bg-lime-400 text-black font-black py-5 px-12 rounded-2xl text-xl hover:scale-105 transition-all inline-block">Начните путь к мечте</a>
                    </div>
                </div>
            </section>

            {/* 12. Our Players (Carousel) */}
            <section className="py-24 bg-slate-900 section-animate">
                <div className="max-w-7xl mx-auto px-4">
                    <AnimatedHeading className="text-center text-4xl font-bold mb-16 text-white">Наши игроки</AnimatedHeading>
                    <div className="relative group">
                        <div className="flex overflow-hidden rounded-3xl border border-slate-800 bg-black/20">
                            <div className="grid md:grid-cols-2 w-full">
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    <img src={playersData[activePlayerIndex].image} className="w-full h-full object-cover" alt="" />
                                    {/* Mobile Swipe Hint */}
                                    <div className="absolute top-4 right-4 bg-lime-400/90 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 md:hidden">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                        </svg>
                                        Листай
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-12 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-white mb-2">{playersData[activePlayerIndex].name}</h3>
                                    <p className="text-lime-400 font-bold mb-6 uppercase text-sm tracking-widest">{playersData[activePlayerIndex].position}</p>
                                    <p className="text-gray-400 text-lg leading-relaxed italic">"{playersData[activePlayerIndex].story}"</p>

                                    <div className="flex items-center gap-4 mt-10">
                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={() => setActivePlayerIndex((prev) => prev === 0 ? playersData.length - 1 : prev - 1)}
                                            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-lime-400 hover:text-black text-gray-400 flex items-center justify-center transition-all"
                                            aria-label="Previous player"
                                        >
                                            ←
                                        </button>
                                        <div className="flex gap-2 flex-1 justify-center">
                                            {playersData.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActivePlayerIndex(i)}
                                                    className={`h-2 rounded-full transition-all ${activePlayerIndex === i ? 'bg-lime-400 w-8' : 'bg-slate-700 w-2'}`}
                                                    aria-label={`Player ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setActivePlayerIndex((prev) => (prev + 1) % playersData.length)}
                                            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-lime-400 hover:text-black text-gray-400 flex items-center justify-center transition-all"
                                            aria-label="Next player"
                                        >
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-center">
                        <h4 className="text-2xl font-bold text-white mb-6">Хочешь стать следующим игроком своей страны в Испании?</h4>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a href={WHATSAPP_LINK} className="bg-lime-400 text-black font-black py-4 px-10 rounded-2xl text-lg hover:scale-105 transition-all">Напиши нам</a>
                            <a href="https://instagram.com/prostep_agency" target="_blank" className="flex items-center justify-center gap-3 text-white border-2 border-slate-700 py-4 px-10 rounded-2xl text-lg hover:border-lime-400 transition-all">
                                <InstagramIcon className="w-6 h-6" /> Больше в Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. Partners Map */}
            <Partners />

            {/* 14. FAQ */}
            <Faq />

            {/* Footer */}
            <Footer navigateToAbout={navigateToAbout} />

            <FloatingContactButtons />
        </div>
    );
};

export default MainPage;
