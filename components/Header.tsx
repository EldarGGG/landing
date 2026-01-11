
import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../data';
import { smoothScroll } from '../utils';

type HeaderProps = {
    navigateToMain: (hash?: string) => void;
    navigateToSelections: () => void;
    navigateToAbout: () => void;
    navigateToVip: () => void;
};

const Header: React.FC<HeaderProps> = ({ navigateToMain, navigateToSelections, navigateToAbout, navigateToVip }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (action: () => void) => {
        action();
        setIsOpen(false);
    };

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        smoothScroll(e);
        setIsOpen(false);
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigateToMain();
        setIsOpen(false);
    };

    const navItems = [
        { type: 'scroll', href: '#projects', text: 'Проекты' },
        { type: 'button', action: navigateToVip, text: 'VIP сопровождение' },
        { type: 'button', action: navigateToSelections, text: 'Отборы' },
        { type: 'button', action: navigateToAbout, text: 'О нас' },
        { type: 'scroll', href: '#faq', text: 'FAQ' },
        { type: 'scroll', href: '#contact', text: 'Контакты' },
    ];
    
    const renderNavLinks = (isMobile: boolean) => (
        <>
            {navItems.map(item => {
                const mobileClasses = "text-gray-300 hover:bg-slate-800 hover:text-lime-400 block px-4 py-3 rounded-xl text-lg font-medium border-b border-slate-800/50";
                const desktopClasses = "text-gray-300 hover:text-lime-300 transition-colors duration-300 font-semibold cursor-pointer";
                const classes = isMobile ? mobileClasses : desktopClasses;

                if (item.type === 'button') {
                    return (
                        <button 
                            key={item.text} 
                            onClick={() => handleNavClick(item.action as () => void)} 
                            className={`${classes} ${isMobile ? 'text-left w-full' : ''}`}
                        >
                            {item.text}
                        </button>
                    );
                }
                return (
                    <a 
                        key={item.text} 
                        href={item.href} 
                        onClick={(e) => isMobile ? handleScrollClick(e) : smoothScroll(e)} 
                        className={classes}
                    >
                        {item.text}
                    </a>
                );
            })}
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 z-50">
                        <a href="#" onClick={handleLogoClick} aria-label="ProStep Home" className="block transition-transform duration-300 hover:scale-105">
                            <img src={LOGO_URL} alt="ProStep Logo" className="h-14 w-auto logo-lime-filter" />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        {renderNavLinks(false)}
                    </div>
                    <div className="hidden md:block">
                        <a href="#contact" onClick={smoothScroll} className="bg-lime-400 text-black font-bold py-2.5 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                            Связаться
                        </a>
                    </div>
                    <div className="md:hidden flex items-center z-50">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-lime-400 hover:text-white focus:outline-none" 
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className={`hamburger-button ${isOpen ? 'open' : ''}`} aria-hidden="true">
                                <span className="hamburger-line bg-current"></span>
                                <span className="hamburger-line bg-current"></span>
                                <span className="hamburger-line bg-current"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-slate-900/98 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 pb-10 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className="flex flex-col space-y-2 h-full overflow-y-auto">
                    {renderNavLinks(true)}
                    <div className="mt-8">
                        <a href="#contact" onClick={handleScrollClick} className="w-full block bg-lime-400 text-black font-bold py-4 px-4 rounded-xl text-center text-lg shadow-[0_0_20px_rgba(163,230,53,0.4)]">
                            Связаться с нами
                        </a>
                    </div>
                 </div>
            </div>
        </header>
    );
};

export default Header;
