
import React, { useEffect } from 'react';
import { aboutNumbers, teamData, WHATSAPP_LINK } from './data';
import CountUpNumber from './components/ui/CountUpNumber';
import AnimatedHeading from './components/ui/AnimatedHeading';

const LOGO_URL = 'https://static.tildacdn.com/tild3538-3165-4331-a533-326564303862/Frame_44.png';

const PageHeader: React.FC<{ navigateToMain: (hash?: string) => void }> = ({ navigateToMain }) => (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <button onClick={() => navigateToMain()} aria-label="ProStep Home">
                    <img src={LOGO_URL} alt="ProStep Logo" className="h-16 w-auto logo-lime-filter" />
                </button>
                <button onClick={() => navigateToMain()} className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-semibold text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Вернуться на главную
                </button>
            </div>
        </div>
    </header>
);

const AboutPage: React.FC<{ navigateToMain: (hash?: string) => void }> = ({ navigateToMain }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const principles = [
        { title: 'Честность', desc: 'Мы сразу говорим, какие есть шансы и какие риски.' },
        { title: 'Система', desc: 'Развитие важнее быстрого результата. Мы строим фундамент.' },
        { title: 'Прозрачность', desc: 'Родители понимают, что происходит на каждом этапе.' },
        { title: 'Ответственность', desc: 'Мы сопровождаем игрока и семью, а не исчезаем после отбора.' },
        { title: 'Долгосрочный подход', desc: 'Работаем на прогресс и будущее, а не на громкие обещания.' }
    ];
      
    return (
        <div className="bg-slate-900 text-white min-h-screen">
            <PageHeader navigateToMain={navigateToMain} />
            <main>
                {/* Hero */}
                <section className="relative py-24 sm:py-32 text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="https://framerusercontent.com/images/uT7EVQllYFLziZXOKAf7oCbZqRM.jpg?width=3905&height=5857" className="w-full h-full object-cover opacity-30" alt="" />
                    </div>
                    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedHeading as="h1" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl section-heading mb-8">
                            Наша миссия — <span className="text-lime-400">открывать двери</span> в большой футбол
                        </AnimatedHeading>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                            ProStep — это больше, чем агентство. Это команда наставников, скаутов и людей, которые прошли тот же путь, что и вы, объединённых одной целью: помочь молодым талантам со всего мира реализовать свой потенциал в лучших академиях Испании и Европы.
                        </p>
                    </div>
                </section>

                {/* Results & Map Section */}
                <section className="py-24 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedHeading className="text-center text-3xl font-bold mb-16 text-white">Результаты сезона 2024-2025</AnimatedHeading>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                            {aboutNumbers.slice(0, 3).map((item, index) => (
                                <div key={index} className="bg-slate-800/40 p-10 rounded-3xl border border-slate-700 text-center">
                                    <CountUpNumber value={item.value} className="text-6xl font-black text-lime-400 mb-2" />
                                    <p className="text-xl text-gray-400">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="relative rounded-3xl overflow-hidden bg-slate-800/20 p-4 border border-slate-700">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1280px-World_map_blank_without_borders.svg.png" className="w-full h-auto opacity-10 grayscale invert" alt="World Map" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <p className="text-2xl font-bold text-lime-400/80 tracking-widest uppercase">Карта нашего влияния</p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* History & Team */}
                <section className="py-24 bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                            <div>
                                <AnimatedHeading className="text-4xl font-bold mb-6 text-white">История агентства</AnimatedHeading>
                                <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                                    <p>Мы создали ProStep, потому что раньше сами были такими же игроками — без команды, без поддержки и без человека, который возьмёт за руку.</p>
                                    <p>Наш подход строится на долгосрочном сопровождении. Мы не обещаем контракт за месяц — мы даём честную оценку и реальный план развития.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://framerusercontent.com/images/xJ98euRfIrM3o4r6t7dUM57t3w.jpg?width=1200" className="rounded-2xl h-64 w-full object-cover" alt="" />
                                <img src="https://framerusercontent.com/images/4bK46Omvcbuu8IX4Rex4f6zW73I.jpg?width=1200" className="rounded-2xl h-64 w-full object-cover mt-8" alt="" />
                            </div>
                        </div>

                        <AnimatedHeading className="text-center text-4xl font-bold mb-16 text-white">Наша команда</AnimatedHeading>
                        <div className="grid md:grid-cols-3 gap-8">
                            {teamData.map((member) => (
                                <div key={member.name} className="group bg-black/40 rounded-3xl overflow-hidden border border-slate-800 transition-all hover:border-lime-400/50">
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img src={member.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={member.name} />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Principles */}
                <section className="py-24 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedHeading className="text-center text-4xl font-bold mb-16 text-white">Принципы работы</AnimatedHeading>
                        <div className="grid md:grid-cols-5 gap-6">
                            {principles.map((p, i) => (
                                <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-lime-400/30 transition-all">
                                    <h4 className="text-lime-400 font-bold text-xl mb-3">{p.title}</h4>
                                    <p className="text-gray-400 text-sm">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <AnimatedHeading className="text-4xl font-bold mb-6 text-white">Готовы сделать шаг?</AnimatedHeading>
                        <p className="text-xl text-gray-400 mb-10">Свяжитесь с нами, чтобы получить бесплатную консультацию и оценку перспектив вашего ребёнка в испанском футболе.</p>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-lime-400 text-black font-black py-5 px-12 rounded-2xl text-xl inline-block transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]">
                            Оставить заявку
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
