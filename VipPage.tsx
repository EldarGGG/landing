
import React, { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from './data';

const LOGO_URL = 'https://static.tildacdn.com/tild3538-3165-4331-a533-326564303862/Frame_44.png';

const VipHeader: React.FC<{ navigateToMain: (hash?: string) => void }> = ({ navigateToMain }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => navigateToMain()} aria-label="ProStep Home">
            <img src={LOGO_URL} alt="ProStep Logo" className="h-16 w-auto logo-lime-filter" />
          </button>
          <button onClick={() => navigateToMain()} className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-semibold text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Вернуться на главный сайт
          </button>
        </div>
      </div>
    </header>
  );
};

const tabsData = [
    {
        name: "Для кого",
        content: [
            'Для игроков 18+, которые могут приезжать на индивидуальные просмотры.',
            'Для семей, которые живут в Испании или готовятся к переезду.',
            'Для игроков, уже подписавших контракт или проходящих годовую программу в академии после нашего отбора.'
        ]
    },
    {
        name: "Что входит",
        content: [
            'Организация индивидуальных просмотров и встреч с клубами.',
            'Персональное сопровождение и защита интересов игрока.',
            'Подбор дополнительных тренировок с проф. тренерами.',
            'Контроль прогресса: скауты, отчёты, рекомендации, анализ.',
            'Поддержка семьи в вопросах переезда, проживания и адаптации.',
            'Полное юридическое сопровождение (визы, документы, разрешения).',
            'Медицинское сопровождение и реабилитация.',
            'Ментальная и психологическая подготовка.',
            'Помощь в выборе и поступлении в учебные заведения.',
            'Персональный план питания от спортивного диетолога.',
        ]
    },
    {
        name: "Как это работает",
        content: [
            '1. Проведение первичной консультации и анализ игрока.',
            '2. Подбор программы и клуба под цели семьи.',
            '3. Организация индивидуальных просмотров.',
            '4. Сопровождение игрока и постоянная связь с клубом.',
            '5. Подбор дополнительных тренировок.',
            '6. Контроль развития и помощь в переходах на след. уровень.'
        ]
    }
];


const faqData = [
  {
    question: 'Можно ли перейти на VIP после отбора?',
    answer: 'Да. После отбора игрок проходит анализ, и при высоком уровне мы можем предложить формат сопровождения.'
  },
  {
    question: 'Что если семья ещё не в Испании?',
    answer: 'Мы поможем с переездом и адаптацией — от визы до поиска жилья и школы.'
  },
  {
    question: 'Сколько длится программа VIP?',
    answer: 'Программа рассчитана на сезон с дальнейшим продлением, в зависимости от целей игрока и родителей.'
  },
  {
    question: 'Сколько у вас человек на VIP сопровождении?',
    answer: 'На данные момент мы ведем 5 игроков'
  }
];


const VipPage: React.FC<{ navigateToMain: (hash?: string) => void }> = ({ navigateToMain }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.className = 'vip-page-v2-body';
        return () => {
          document.body.className = 'bg-gray-900';
        };
    }, []);
    
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <div className="vip-page-v2">
            <VipHeader navigateToMain={navigateToMain} />

            {/* Hero Section */}
            <section className="vip-v2-hero">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="vip-v2-hero-video"
                    poster="https://assets-global.website-files.com/642ed403044b82697147040a/642ed403044b823e8047051b_placeholder-poster.jpg"
                >
                    <source src="https://framerusercontent.com/assets/jK15zAbkGmaQalKyLectWH2s.mp4" type="video/mp4" />
                </video>
                <div className="vip-v2-hero-overlay"></div>
                <div className="vip-v2-hero-content">
                    <h1 className="vip-v2-heading">
                        <span className="vip-v2-heading-mask">
                            <span className="vip-v2-heading-line">Элитный путь</span>
                        </span>
                        <span className="vip-v2-heading-mask">
                            <span className="vip-v2-heading-line vip-v2-heading-line--accent">к вершине</span>
                        </span>
                    </h1>
                    <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-gray-300 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        Для тех, кто хочет, чтобы рядом была команда, которая ведёт и знает путь к профессиональному футболу.
                    </p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-12 primary-btn animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                        Обсудить индивидуально
                    </a>
                </div>
            </section>

             {/* Intro Section */}
            <section className="py-24 sm:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Индивидуальное ведение</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Мы не просто находим клуб, мы строим карьеру. VIP-сопровождение — это комплексная поддержка игрока и его семьи на всех этапах: от адаптации в новой стране до юридической и ментальной помощи.
                    </p>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-24 sm:py-32 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center border-b border-slate-700 mb-8">
                        {tabsData.map((tab, index) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(index)}
                                className={`px-4 sm:px-6 py-3 font-semibold text-base sm:text-lg transition-colors duration-300 outline-none focus:outline-none ${activeTab === index ? 'text-lime-400 border-b-2 border-lime-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className="text-gray-300 text-lg vip-v2-tab-panel">
                        {activeTab === 1 ? ( // "Что входит" is the second tab, index 1
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {tabsData[activeTab].content.map((item, i) => (
                                    <div key={i} className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ul className="space-y-4 list-none sm:list-disc sm:list-inside">
                                {tabsData[activeTab].content.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 sm:py-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Вопросы и ответы</h2>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_25px_rgba(163,230,53,0.1)]">
                                <button
                                    className="w-full flex justify-between items-center p-5 text-left"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="font-semibold text-lg text-white">{faq.question}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 border-t border-slate-700/50 text-gray-300 leading-relaxed">{faq.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VipPage;
