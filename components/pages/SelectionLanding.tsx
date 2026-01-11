import React, { useState, useEffect } from 'react';
import { landingPageData, LOGO_URL, WHATSAPP_LINK, partners } from '../../data';

interface SelectionLandingProps {
    citySlug: 'astana' | 'bishkek';
}

// Premium color scheme - gold accents
const colors = {
    gold: 'rgb(212, 175, 55)',
    goldLight: 'rgb(245, 215, 110)',
    goldDark: 'rgb(170, 140, 45)',
};

// Countdown Timer Component with premium styling
const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex justify-center gap-3 md:gap-4 py-6">
            {Object.entries(timeLeft).map(([key, value]) => (
                <div
                    key={key}
                    className="relative bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-lime-500/50 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] text-center shadow-[0_0_20px_rgba(132,204,22,0.2)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 to-transparent rounded-xl"></div>
                    <div className="relative text-2xl md:text-4xl font-black bg-gradient-to-b from-lime-400 to-lime-600 bg-clip-text text-transparent">
                        {String(value).padStart(2, '0')}
                    </div>
                    <div className="relative text-[10px] md:text-xs text-lime-200/70 uppercase mt-1 font-medium tracking-wider">
                        {key === 'days' ? 'дней' : key === 'hours' ? 'часов' : key === 'minutes' ? 'минут' : 'секунд'}
                    </div>
                </div>
            ))}
        </div>
    );
};

// Scout Card Component with premium styling
const ScoutCard: React.FC<{ scout: any; index: number }> = ({ scout, index }) => {
    return (
        <div
            className="group bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-lime-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-lime-500/50 hover:shadow-[0_0_40px_rgba(132,204,22,0.2)] animate-slide-in"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="aspect-[3/4] relative overflow-hidden">
                {scout.isHidden ? (
                    <div className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center">
                        <div className="text-center p-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-b from-lime-500/20 to-slate-800 mx-auto mb-4 flex items-center justify-center border-2 border-lime-500/30">
                                <svg className="w-12 h-12 text-lime-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-lime-200/80 text-sm font-medium">Скаут REAL-MURCI</p>
                            <p className="text-lime-400 text-xs mt-2 font-semibold">Имя будет раскрыто через 2 недели</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <img
                            src={typeof scout.image === 'string' ? scout.image : scout.image}
                            alt={scout.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </>
                )}
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{scout.name}</h3>
                {!scout.isHidden && (
                    <p className={`text-sm mb-3 ${scout.highlightRole ? 'text-lime-400 font-semibold' : 'text-gray-400'}`}>
                        {scout.role}
                    </p>
                )}
                {!scout.isHidden && scout.description && (
                    <p className="text-gray-300 text-sm mb-3">{scout.description}</p>
                )}
                {scout.achievements && scout.achievements.length > 0 && (
                    <ul className={`space-y-2 ${scout.isHidden ? 'mt-3' : ''}`}>
                        {scout.achievements.map((achievement: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                                <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${scout.highlightAchievements ? 'text-lime-400' : 'text-lime-500/60'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-400">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

// Player Card Component
const PlayerCard: React.FC<{ player: any; index: number }> = ({ player, index }) => {
    return (
        <div
            className="group bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-lime-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(132,204,22,0.15)] animate-slide-in"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="aspect-square relative overflow-hidden">
                <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-lime-500/20 border border-lime-500/50 text-lime-300 text-xs px-2 py-1 rounded-full">
                        {player.position}
                    </span>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{player.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{player.story}</p>
            </div>
        </div>
    );
};

// Price Ticket Component - Premium golden ticket style
const PriceTicket: React.FC<{ pricing: any; onCTA: () => void }> = ({ pricing, onCTA }) => {
    return (
        <div className="relative max-w-md mx-auto">
            {/* Ticket shape with golden gradient border */}
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-2 border-lime-500/60 shadow-[0_0_50px_rgba(132,204,22,0.3)]">
                {/* Golden shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-lime-500/10 to-transparent animate-shimmer"></div>

                {/* Top decorative bar */}
                <div className="h-2 bg-gradient-to-r from-lime-600 via-lime-400 to-lime-600"></div>

                <div className="p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-center bg-gradient-to-r from-lime-300 via-lime-100 to-lime-300 bg-clip-text text-transparent mb-6">
                        {pricing.title}
                    </h3>

                    {/* Includes list */}
                    <ul className="space-y-3 mb-6">
                        {pricing.includes.map((item: string, index: number) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Dashed separator */}
                    <div className="border-t-2 border-dashed border-lime-500/40 my-6"></div>

                    {/* Price */}
                    <div className="text-center mb-6">
                        <div className="text-4xl md:text-5xl font-black bg-gradient-to-b from-lime-300 to-lime-500 bg-clip-text text-transparent">
                            {pricing.price}
                        </div>
                        <div className="text-lime-200/70 font-medium">{pricing.currency}</div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onCTA}
                        className="w-full bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 hover:from-lime-400 hover:via-lime-300 hover:to-lime-400 text-black font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]"
                    >
                        {pricing.button}
                    </button>

                    {/* Disclaimer */}
                    <p className="text-center text-red-400 font-semibold text-sm mt-4">
                        {pricing.disclaimer}
                    </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="h-2 bg-gradient-to-r from-lime-600 via-lime-400 to-lime-600"></div>
            </div>
        </div>
    );
};

// Journey Steps Component - Simple horizontal line
const JourneySteps: React.FC<{ journeySteps: any }> = ({ journeySteps }) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{journeySteps.title}</h2>

            {/* Mobile version - vertical */}
            <div className="md:hidden flex flex-col gap-4">
                {journeySteps.steps.map((step: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/80 border-2 border-slate-700/80 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300">
                            <div className="text-5xl font-black bg-gradient-to-b from-lime-400 to-lime-600 bg-clip-text text-transparent mb-3">
                                {step.number}
                            </div>
                            <div className="text-white font-semibold text-sm leading-tight text-center">
                                {step.title}
                            </div>
                        </div>

                        {/* Mobile connector */}
                        {index < journeySteps.steps.length - 1 && (
                            <div className="flex items-center justify-center py-1">
                                <div className="h-8 w-1 bg-gradient-to-b from-lime-500/60 via-lime-400/40 to-lime-500/60 rounded-full relative">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-lime-500/60"></div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Desktop version - horizontal line */}
            <div className="hidden md:flex items-stretch justify-center gap-0 max-w-6xl mx-auto">
                {journeySteps.steps.map((step: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className="relative flex-1 bg-gradient-to-b from-slate-800/60 to-slate-900/80 border-2 border-slate-700/80 rounded-2xl p-8 min-h-[180px] flex flex-col items-center justify-center transition-all duration-300 hover:border-lime-500/60 hover:shadow-[0_0_25px_rgba(132,204,22,0.2)] hover:scale-105">
                            <div className="text-6xl font-black bg-gradient-to-b from-lime-400 to-lime-600 bg-clip-text text-transparent mb-4">
                                {step.number}
                            </div>
                            <div className="text-white font-semibold text-base leading-tight text-center px-2">
                                {step.title}
                            </div>
                        </div>

                        {/* Connector line with arrow */}
                        {index < journeySteps.steps.length - 1 && (
                            <div className="flex items-center justify-center px-2">
                                <div className="relative w-12 h-1 bg-gradient-to-r from-lime-500/60 via-lime-400/40 to-lime-500/60 rounded-full">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-lime-500/60"></div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

// Statistics Block
const StatisticsBlock: React.FC<{ statistics: any }> = ({ statistics }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{statistics.title}</h2>
            <p className="text-lime-400 font-semibold mb-8">{statistics.subtitle}</p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                {statistics.items.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="bg-gradient-to-b from-slate-800 to-slate-900 border border-lime-500/30 rounded-xl p-4 md:p-6"
                    >
                        <div className="text-3xl md:text-4xl font-black bg-gradient-to-b from-lime-400 to-lime-600 bg-clip-text text-transparent">
                            {item.value}
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Partners Grid Component
const PartnersGrid: React.FC = () => {
    const topPartners = partners.slice(0, 12);

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topPartners.map((partner, index) => (
                <div
                    key={index}
                    className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 flex items-center justify-center aspect-square hover:border-lime-500/30 transition-all duration-300 group"
                >
                    <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="max-w-[60%] max-h-[60%] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                </div>
            ))}
        </div>
    );
};

// Info Icon Block Component
const InfoIconBlock: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex flex-col items-center text-center p-3 md:p-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-b from-lime-500/20 to-slate-800 border border-lime-500/40 flex items-center justify-center mb-2">
            {icon}
        </div>
        <div className="text-xs text-lime-200/60 uppercase tracking-wider">{label}</div>
        <div className="text-white font-semibold text-sm md:text-base">{value}</div>
    </div>
);

// Destination Section Component
const DestinationSection: React.FC<{ destination: any; onCTA: () => void }> = ({ destination, onCTA }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 border-y border-lime-500/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="inline-block bg-lime-500/10 border border-lime-500/30 text-lime-400 text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                    ГЛАВНЫЙ ПРИЗ
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {destination.title}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                    {destination.text}
                </p>
                <div className="bg-gradient-to-r from-lime-900/20 via-lime-500/10 to-lime-900/20 border border-lime-500/30 rounded-2xl p-6 md:p-8 mb-10 max-w-3xl mx-auto backdrop-blur-sm">
                    <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
                        <span className="text-lime-400 block mb-2 text-2xl">WOW:</span>
                        {destination.highlight}
                    </p>
                </div>
                <button
                    onClick={onCTA}
                    className="group relative inline-flex items-center justify-center gap-3 bg-lime-500 hover:bg-lime-400 text-black font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(132,204,22,0.3)]"
                >
                    <span>{destination.button}</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

// Media Section Component
const MediaSection: React.FC<{ media: any }> = ({ media }) => {
    return (
        <div className="bg-slate-900 pt-10 pb-20">
            {/* Video Block */}
            <div className="max-w-5xl mx-auto px-4 mb-20">
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl group">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${media.video.youtubeId}?rel=0&autoplay=0&controls=1&showinfo=0`}
                        title={media.video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    {/* Optional overlay title if needed, but youtube has titles */}
                </div>
                <p className="text-center text-gray-400 mt-4 text-sm uppercase tracking-widest">{media.video.title}</p>
            </div>

            {/* Gallery Block */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{media.gallery.title}</h3>
                    <div className="h-1 w-20 bg-lime-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {media.gallery.images.map((image: any, index: number) => (
                        <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                            <img
                                src={image.src}
                                alt={image.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
                                    Real Murcia
                                </span>
                                <p className="text-white font-bold text-lg">{image.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Main Component
const SelectionLanding: React.FC<SelectionLandingProps> = ({ citySlug }) => {
    const data = landingPageData[citySlug];
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePlayerIndex, setActivePlayerIndex] = useState(0);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);

    const youtubeShorts = [
        { id: 'dwUEI9vv8IE', title: 'YouTube Short 1' },
        { id: 'a0FJGeqM7Ho', title: 'YouTube Short 2' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!data) {
        return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Данные не найдены</div>;
    }

    const handleCTAClick = () => {
        window.open(WHATSAPP_LINK, '_blank');
    };

    // Calculate target date based on city
    const targetDate = citySlug === 'astana' ? '2025-02-27' : '2026-03-13';

    return (
        <div className="bg-slate-900 min-h-screen">
            {/* Premium shimmer animation */}
            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
            `}</style>

            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-lime-500/5' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <a href="/" className="flex items-center">
                            <img src={LOGO_URL} alt="ProStep" className="h-10 md:h-14 w-auto logo-lime-filter" />
                        </a>
                        <button
                            onClick={handleCTAClick}
                            className="bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-300 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg text-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-lime-500/20"
                        >
                            Записаться
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section with video background */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
                {/* Video background matching Main Site */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        opacity: 0.6 // Match main site opacity
                    }}
                >
                    <source src="https://framerusercontent.com/assets/5S9gYpiFYZwVuLzg630s4L2Vk.mp4" type="video/mp4" />
                </video>

                {/* Overlay matching Hero.tsx: from-black/80 via-black/40 to-black */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4), rgb(0, 0, 0))',
                    zIndex: 1
                }}></div>

                <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
                    {/* Logo/Title area */}
                    <div className="mb-6 animate-slide-in">
                        <img src={LOGO_URL} alt="ProStep" className="h-12 md:h-16 w-auto mx-auto mb-4 logo-lime-filter" />
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight animate-slide-in" style={{ animationDelay: '100ms' }}>
                        {data.hero.title}
                    </h1>

                    <p className="text-lg md:text-xl uppercase tracking-wide bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent font-bold mb-4 animate-slide-in" style={{ animationDelay: '200ms' }}>
                        {data.hero.subtitle}
                    </p>

                    <p className="text-base text-white mb-6 max-w-xl mx-auto animate-slide-in" style={{ animationDelay: '250ms' }}>
                        {data.hero.description}
                    </p>

                    <p className="text-sm text-white mb-8 animate-slide-in" style={{ animationDelay: '280ms' }}>
                        {data.winners?.highlight}
                    </p>

                    {/* CTA Button - Elite FM Style */}
                    <div className="animate-slide-in mb-8" style={{ animationDelay: '300ms' }}>
                        <button
                            onClick={handleCTAClick}
                            className="relative bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 hover:from-lime-400 hover:via-lime-300 hover:to-lime-400 text-black font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/30 shadow-[0_0_30px_rgba(132,204,22,0.4)]"
                        >
                            {data.hero.button}
                        </button>
                    </div>

                    {/* Info Rows - Elite FM Style (each on separate line) */}
                    <div className="space-y-3 max-w-md mx-auto animate-slide-in" style={{ animationDelay: '400ms' }}>
                        {/* Date Row */}
                        <div className="flex items-center justify-center gap-3 bg-slate-800/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-slate-700/50">
                            <svg className="w-5 h-5 text-lime-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-lime-200/80 text-sm">Дата:</span>
                            <span className="text-white font-medium">{data.hero.date}</span>
                        </div>

                        {/* Limit Row */}
                        <div className="flex items-center justify-center gap-3 bg-slate-800/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-slate-700/50">
                            <svg className="w-5 h-5 text-lime-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-lime-200/80 text-sm">Лимит игроков:</span>
                            <span className="text-white font-medium">{data.hero.limit}</span>
                        </div>

                        {/* Location Row */}
                        <div className="flex items-center justify-center gap-3 bg-slate-800/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-slate-700/50">
                            <svg className="w-5 h-5 text-lime-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-lime-200/80 text-sm">Локация:</span>
                            <span className="text-white font-medium">{data.hero.location}</span>
                        </div>

                        {/* Age Row */}
                        <div className="flex items-center justify-center gap-3 bg-slate-800/60 backdrop-blur-sm rounded-lg py-3 px-4 border border-slate-700/50">
                            <svg className="w-5 h-5 text-lime-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-lime-200/80 text-sm">Возраст:</span>
                            <span className="text-white font-medium">{data.hero.age}</span>
                        </div>
                    </div>

                    {/* Red limited spots text */}
                    <p className="text-sm text-red-500 font-bold mt-6 animate-slide-in" style={{ animationDelay: '450ms' }}>
                        {data.hero.subButton}
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{data.benefits.title}</h2>
                    <div className="space-y-4">
                        {data.benefits.items.map((item: string, index: number) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-lime-500/20 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-lime-500/50 animate-slide-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-8 h-8 bg-gradient-to-b from-lime-500/30 to-lime-600/10 rounded-full flex items-center justify-center flex-shrink-0 border border-lime-500/30">
                                    <svg className="w-4 h-4 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-300 text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pain Points Section - with RED accent */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">{data.painPoints.title}</h2>
                    <p className="text-gray-400 text-center text-lg mb-8">{data.painPoints.intro}</p>

                    <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-red-500/40 rounded-2xl p-8 mb-8 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                        <p className="text-white font-semibold text-lg mb-4">{data.painPoints.problem}</p>
                        <ul className="space-y-3">
                            {data.painPoints.list.map((item: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-red-400 font-bold mt-6 text-center text-lg">{data.painPoints.result}</p>
                    </div>
                </div>
            </section>

            {/* Solution Section - with GREEN accent */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-gradient-to-r from-lime-500/20 to-lime-600/20 border-2 border-lime-500/50 text-lime-400 text-xl font-black px-8 py-3 rounded-full mb-4">
                            {data.solution.title}
                        </span>
                        <p className="text-xl md:text-2xl text-white font-semibold">{data.solution.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {data.solution.partners.map((partner: any, index: number) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-lime-500/30 rounded-2xl p-6"
                            >
                                <h3 className="text-xl font-bold text-lime-400 mb-2">{partner.name}</h3>
                                <p className="text-gray-300">{partner.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-800/40 rounded-2xl p-6 mb-8 border border-lime-500/20">
                        <p className="text-white font-semibold mb-4">Мы:</p>
                        <ul className="space-y-3">
                            {data.solution.list.map((item: string, index: number) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-gray-400 text-center italic">{data.solution.footer}</p>
                </div>
            </section>

            {/* Cold Details Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{data.coldDetails.title}</h2>
                    <p className="text-xl text-lime-400 font-semibold mb-10">{data.coldDetails.subtitle}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {data.coldDetails.list.map((item: string, index: number) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-lime-500/20 rounded-xl p-5 transition-all duration-300 hover:border-lime-500/50"
                            >
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scouts Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">СКАУТЫ</h2>
                    <p className="text-gray-400 text-center text-lg mb-12">Скауты и тренеры с многолетним опытом работы в топ-академиях</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {data.scouts.map((scout: any, index: number) => (
                            <ScoutCard key={index} scout={scout} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Agents Section */}
            {data.agents && (
                <section className="py-20 bg-slate-800/30">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">АГЕНТЫ</h2>
                        <p className="text-gray-400 text-center text-lg mb-12">Профессиональное сопровождение на всех этапах</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {data.agents.map((agent: any, index: number) => (
                                <ScoutCard key={index} scout={agent} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Timer Section */}
            <section className="py-16 bg-gradient-to-b from-slate-800/50 to-slate-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{data.timer.title}</h2>
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </section>

            {/* CTA Section after Timer */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                        {data.ctaSection.title}
                    </h2>

                    <button
                        onClick={handleCTAClick}
                        className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 hover:from-lime-400 hover:via-lime-300 hover:to-lime-400 text-black font-bold py-5 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_50px_rgba(132,204,22,0.5)]"
                    >
                        {data.ctaSection.button}
                    </button>
                </div>
            </section>

            {/* Journey Steps Section */}
            {data.journeySteps && (
                <section className="py-20 bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4">
                        <JourneySteps journeySteps={data.journeySteps} />
                    </div>
                </section>
            )}

            {/* Statistics Section */}
            {data.statistics && (
                <section className="py-20 bg-slate-800/30">
                    <div className="max-w-4xl mx-auto px-4">
                        <StatisticsBlock statistics={data.statistics} />
                    </div>
                </section>
            )}

            {/* Destination Section (Block 8) */}
            {data.destination && (
                <DestinationSection destination={data.destination} onCTA={handleCTAClick} />
            )}

            {/* Media Section (Block 9) */}
            {data.media && (
                <MediaSection media={data.media} />
            )}

            {/* Partners Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Наши партнеры</h2>
                    <p className="text-gray-400 text-center text-lg mb-12">Топ-клубы и академии Испании</p>
                    <PartnersGrid />
                </div>
            </section>

            {/* Players Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Наши игроки подписавшие контракт с Real Murcia</h3>

                    {/* Player Carousel - Only Alexander and David */}
                    <div className="relative group">
                        <div className="flex overflow-hidden rounded-3xl border border-slate-800 bg-black/20">
                            <div className="grid md:grid-cols-2 w-full">
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    <img src={data.players[activePlayerIndex].image} className="w-full h-full object-cover" alt="" />
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
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{data.players[activePlayerIndex].name}</h3>
                                    <p className="text-lime-400 font-bold mb-6 uppercase text-sm tracking-widest">{data.players[activePlayerIndex].position}</p>
                                    <p className="text-gray-400 text-base md:text-lg leading-relaxed italic">"{data.players[activePlayerIndex].story}"</p>

                                    <div className="flex items-center gap-4 mt-10">
                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={() => setActivePlayerIndex((prev) => prev === 0 ? 1 : 0)}
                                            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-lime-400 hover:text-black text-gray-400 flex items-center justify-center transition-all"
                                            aria-label="Previous player"
                                        >
                                            ←
                                        </button>
                                        <div className="flex gap-2 flex-1 justify-center">
                                            {[0, 1].map((i: number) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActivePlayerIndex(i)}
                                                    className={`h-2 rounded-full transition-all ${activePlayerIndex === i ? 'bg-lime-400 w-8' : 'bg-slate-700 w-2'}`}
                                                    aria-label={`Player ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setActivePlayerIndex((prev) => prev === 0 ? 1 : 0)}
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
                </div>
            </section>

            {/* YouTube Shorts Section */}
            <section className="py-20 bg-slate-800/30">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Смотри короткие видео</h3>

                    <div className="relative group max-w-md mx-auto">
                        <div className="flex overflow-hidden rounded-3xl border border-slate-800 bg-black/20">
                            <div className="w-full aspect-[9/16]">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${youtubeShorts[activeVideoIndex].id}?autoplay=0&mute=0`}
                                    title={youtubeShorts[activeVideoIndex].title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={() => setActiveVideoIndex((prev) => prev === 0 ? 1 : 0)}
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-lime-400 hover:text-black text-gray-400 flex items-center justify-center transition-all"
                                aria-label="Previous video"
                            >
                                ←
                            </button>
                            <div className="flex gap-2">
                                {[0, 1].map((i: number) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveVideoIndex(i)}
                                        className={`h-2 rounded-full transition-all ${activeVideoIndex === i ? 'bg-lime-400 w-8' : 'bg-slate-700 w-2'}`}
                                        aria-label={`Video ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => setActiveVideoIndex((prev) => prev === 0 ? 1 : 0)}
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-lime-400 hover:text-black text-gray-400 flex items-center justify-center transition-all"
                                aria-label="Next video"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Golden Ticket */}
            {data.pricing && (
                <section className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900">
                    <div className="max-w-4xl mx-auto px-4">
                        <PriceTicket pricing={data.pricing} onCTA={handleCTAClick} />
                    </div>
                </section>
            )}

            {/* Final CTA Section */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                        {data.ctaSection.title}
                    </h2>

                    <button
                        onClick={handleCTAClick}
                        className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 hover:from-lime-400 hover:via-lime-300 hover:to-lime-400 text-black font-bold py-5 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_50px_rgba(132,204,22,0.5)]"
                    >
                        {data.ctaSection.button}
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-lime-500/10 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <img src={LOGO_URL} alt="ProStep" className="h-10 w-auto mx-auto mb-4 logo-lime-filter" />
                    <p className="text-gray-500 text-sm">© 2026 ProStep Football Agency. Все права защищены.</p>
                </div>
            </footer>
        </div>
    );
};

export default SelectionLanding;
