
import React from 'react';
import { partners } from '../../data';
import AnimatedHeading from '../ui/AnimatedHeading';

const Partners: React.FC = () => {
    return (
        <section className="text-white py-12 sm:py-24 section-animate bg-[#020617] relative overflow-hidden flex flex-col items-center min-h-screen justify-center">
            {/* Background decorative glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(163,230,53,0.05),transparent_60%)] pointer-events-none"></div>

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl section-heading">
                    Наши партнёры
                </AnimatedHeading>
                <p className="mt-4 text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
                    Ведущие академии Ла Лиги и профессиональные клубы Испании
                </p>
            </div>
            
            {/* Map View - Visible on ALL devices now */}
            <div className="relative w-full mt-4 flex-grow flex items-center justify-center">
                 <div className="relative w-full mx-auto" style={{ maxWidth: '1600px', aspectRatio: '866/1024' }}>
                     {/* Provided Map Image */}
                     <img 
                        src="https://framerusercontent.com/images/B15E4lFxMxB1OkYjBIJodLmcheI.png?width=866&height=1024" 
                        alt="Spain Map Background" 
                        className="w-full h-full object-contain select-none pointer-events-none brightness-90 contrast-110"
                     />
                     
                     {/* Markers Layer - Glowing Bubbles */}
                     <div className="absolute inset-0">
                         {partners.map((partner, index) => (
                             <div 
                                key={partner.name}
                                className="map-marker absolute group cursor-pointer"
                                style={{ 
                                    left: partner.x, 
                                    top: partner.y,
                                    animationDelay: `${index * 150}ms`,
                                    transform: 'translate(-50%, -50%)' // Ensure exact centering on coordinate
                                }}
                             >
                                 <div className="relative flex items-center justify-center">
                                     {/* The Glowing Neon Border Bubble - Responsive Sizes */}
                                     <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-black border-2 sm:border-[3px] border-lime-400 p-1 sm:p-1.5 shadow-[0_0_10px_rgba(163,230,53,0.6)] sm:shadow-[0_0_15px_rgba(163,230,53,0.8)] transition-all duration-300 active:scale-95 group-hover:scale-125 group-hover:shadow-[0_0_25px_rgba(163,230,53,1)] z-10 bg-opacity-90 backdrop-blur-sm">
                                         <img 
                                            src={partner.logoUrl} 
                                            alt={partner.name} 
                                            className="w-full h-full object-contain" 
                                         />
                                         
                                         {/* Pulsing ring around the marker */}
                                         <div className="absolute inset-0 rounded-full border border-lime-400/50 animate-ping opacity-20 pointer-events-none"></div>
                                     </div>
                                 </div>
                                 
                                 {/* Tooltip - Always centered, responsive adjustments */}
                                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 sm:mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-20 w-max pointer-events-none">
                                     <div className="bg-slate-900/95 backdrop-blur-md border border-lime-400/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                                         <div className="font-bold text-white text-xs sm:text-sm whitespace-nowrap">{partner.name}</div>
                                         <div className="text-[9px] sm:text-[10px] text-lime-400 uppercase font-black tracking-wider">{partner.city}</div>
                                     </div>
                                 </div>
                             </div>
                         ))}
                     </div>
                 </div>
            </div>
        </section>
    );
};

export default Partners;
