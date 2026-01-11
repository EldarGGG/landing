
import React from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';

const Solution: React.FC = () => {
    return (
        <section className="bg-slate-900 py-24 sm:py-32 section-animate">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedHeading className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
                    Вы не хотите терять время. Вам нужен понятный путь и команда, кто проведёт за руку.
                </AnimatedHeading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-lime-400/20">
                        <div className="text-5xl font-bold text-lime-400 mb-4 opacity-50">01</div>
                        <h3 className="text-xl font-bold text-white mb-2">Консультация</h3>
                        <p className="text-gray-400">И подбор программы под ваши цели.</p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-lime-400/20">
                        <div className="text-5xl font-bold text-lime-400 mb-4 opacity-50">02</div>
                        <h3 className="text-xl font-bold text-white mb-2">Подготовка</h3>
                        <p className="text-gray-400">И качественный просмотр в Испании.</p>
                    </div>
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-lime-400/20">
                        <div className="text-5xl font-bold text-lime-400 mb-4 opacity-50">03</div>
                        <h3 className="text-xl font-bold text-white mb-2">Результат</h3>
                        <p className="text-gray-400">Контракт, повторный просмотр или рекомендации.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
