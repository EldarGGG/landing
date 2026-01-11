
import React from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';

const PainPoints: React.FC = () => {
    return (
        <section className="bg-slate-900 py-24 sm:py-32 section-animate relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <AnimatedHeading className="text-4xl font-bold text-white mb-8">
                            Что даёт ребёнку работа с агентством
                        </AnimatedHeading>
                        <div className="space-y-4 text-xl text-gray-300">
                            <p className="flex items-center gap-3"><span className="text-lime-400">✓</span> Ваш сын тренируется</p>
                            <p className="flex items-center gap-3"><span className="text-lime-400">✓</span> он любит футбол</p>
                            <p className="flex items-center gap-3"><span className="text-lime-400">✓</span> у него есть потенциал</p>
                        </div>
                        
                        <div className="mt-12 bg-red-500/10 border-4 border-red-500 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
                            <p className="text-red-400 font-bold text-xl mb-4 italic relative z-10">С каждым годом окно возможностей сужается.</p>
                            <p className="text-gray-300 relative z-10 mb-6">Чем старше ребёнок — тем сложнее войти в европейскую систему. Если среда не меняется — развитие тоже не меняется.</p>
                            
                            <div className="mt-6 pt-6 border-t border-red-500/30 relative z-10">
                                <p className="text-gray-300 leading-relaxed">Во многих странах СНГ футбол ориентирован на результат здесь и сейчас, а не на долгосрочный рост игрока. Если среда не меняется — развитие тоже.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-black/40 p-10 rounded-3xl border border-slate-800 space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Но у родителей остаются одни и те же:</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-4"><span>—</span> куда ехать и стоит ли ехать вообще?</li>
                            <li className="flex gap-4"><span>—</span> какая академия действительно развивает?</li>
                            <li className="flex gap-4"><span>—</span> будет ли он в безопасности за границей?</li>
                            <li className="flex gap-4"><span>—</span> как совместить футбол и обучение?</li>
                            <li className="flex gap-4"><span>—</span> и главное — к какому результату это приведёт?</li>
                        </ul>
                        <div className="pt-6 border-t border-slate-800 mt-6">
                            <p className="text-white font-bold italic">Однажды возникает самый сложный вопрос: мы сделали все чтобы помочь ему?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
