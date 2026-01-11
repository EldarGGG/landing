import React, { useState } from 'react';
import { faqData } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';

const Faq: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleFaqToggle = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className="bg-black text-gray-200 py-24 sm:py-32 section-animate">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                        Часто задаваемые вопросы
                    </AnimatedHeading>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Ответы на самые популярные вопросы о нашей работе.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <button
                                className="w-full flex justify-between items-center p-5 text-left"
                                onClick={() => handleFaqToggle(index)}
                                aria-expanded={openFaq === index}
                                aria-controls={`faq-content-${index}`}
                            >
                                <span className="font-semibold text-lg text-white">{faq.question}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                id={`faq-content-${index}`}
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-[500px]' : 'max-h-0'}`}
                            >
                                <div className={`p-6 border-t border-slate-700/50 text-gray-300 leading-relaxed`}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
