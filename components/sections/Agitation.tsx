
import React from 'react';

const Agitation: React.FC = () => {
    return (
        <section className="bg-black py-20 section-animate border-y border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
                    Если ничего не делать — <span className="text-lime-400">мечта так и останется мечтой</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-300 mb-10">
                    <p>— Система тренировок останется такой же</p>
                    <p>— Шанс попасть в испанский футбол становится всё меньше</p>
                    <p>— Ребёнок может потерять мотивацию и выгореть</p>
                    <p>— А вы останетесь с вопросом: <span className="italic text-white">“А вдруг бы получилось?”</span></p>
                </div>
                <div className="inline-block bg-red-500/10 border border-red-500/50 rounded-lg p-6">
                    <p className="text-red-400 font-bold text-xl">
                        ❌ Без системы и поддержки — даже сильный игрок может не пробиться.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Agitation;
