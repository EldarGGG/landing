
import React from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';
import { EmailIcon, GlobeIcon, InstagramIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from '../ui/Icons';
import { WHATSAPP_LINK } from '../../data';

type FooterProps = {
    navigateToAbout: () => void;
};

const Footer: React.FC<FooterProps> = ({ navigateToAbout }) => {
    return (
        <footer id="contact" className="bg-black text-white py-20 sm:py-24 lg:py-32 section-animate">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Final CTA Section */}
                <div className="text-center mb-16 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
                    <AnimatedHeading className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl section-heading mb-6">
                        Готовы дать ребёнку шанс выйти на другой уровень?
                    </AnimatedHeading>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-lime-400 text-black font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_35px_rgba(163,230,53,0.5)]"
                    >
                        <WhatsAppIcon className="w-6 h-6" />
                        Получить консультацию
                    </a>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
                    {/* Email Card */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-start transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] hover:-translate-y-1">
                        <EmailIcon className="w-12 h-12 text-lime-400" />
                        <h4 className="text-xl font-bold text-white mt-4 mb-2">Email</h4>
                        <a href="mailto:info@prostepagency.com" className="text-gray-300 hover:text-lime-400 transition-colors break-all">info@prostepagency.com</a>
                    </div>
                    {/* Phone/Messengers Card */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-start transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] hover:-translate-y-1">
                        <PhoneIcon className="w-12 h-12 text-lime-400" />
                        <h4 className="text-xl font-bold text-white mt-4 mb-2">Телефон</h4>
                        <a href="tel:+34655207354" className="text-gray-300 hover:text-lime-400 transition-colors text-lg">+34 655 207 354</a>
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-lime-400 transition-transform duration-300 hover:scale-110">
                                <WhatsAppIcon className="w-8 h-8" />
                            </a>
                            <a href="https://t.me/prostepagency" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-400 hover:text-lime-400 transition-transform duration-300 hover:scale-110">
                                <TelegramIcon className="w-8 h-8" />
                            </a>
                            <a href="https://www.instagram.com/prostep_agency" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-lime-400 transition-transform duration-300 hover:scale-110">
                                <InstagramIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                    {/* Resources Card */}
                    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-start transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] hover:-translate-y-1">
                        <GlobeIcon className="w-12 h-12 text-lime-400" />
                        <h4 className="text-xl font-bold text-white mt-4 mb-2">Recursos</h4>
                        <p className="text-sm text-gray-400 mb-3">Valencia Sant Vicente Martín 85</p>
                        <div className="w-full space-y-3 flex flex-col items-center">
                            <button
                                onClick={navigateToAbout}
                                className="w-full max-w-xs text-center bg-slate-700/40 hover:bg-slate-700/80 text-gray-300 font-semibold py-2.5 px-4 border border-slate-600 rounded-lg transition-colors duration-300"
                            >
                                О нас
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center border-t border-slate-800 pt-8">
                    <p className="text-xl text-white font-semibold">ProStep — твой первый шаг к профессиональному футболу.</p>
                    <p className="text-sm text-gray-600 mt-2">&copy; {new Date().getFullYear()} ProStep Football Agency. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
