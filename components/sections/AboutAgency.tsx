import React from 'react';
import AnimatedHeading from '../ui/AnimatedHeading';

type AboutAgencyProps = {
    navigateToAbout: () => void;
};

const AboutAgency: React.FC<AboutAgencyProps> = ({ navigateToAbout }) => {
    return (
        <section 
            id="about" 
            className="relative text-white py-24 sm:py-32 section-animate"
            style={{
                backgroundImage: "url('https://framerusercontent.com/images/xJ98euRfIrM3o4r6t7dUM57t3w.jpg?width=7008&height=4672')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-slide-in">
                    <div className="flex items-center justify-center gap-4 mb-4">
                            <AnimatedHeading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl section-heading">
                            Об агентстве
                        </AnimatedHeading>
                    </div>
                    <p className="text-xl max-w-4xl mx-auto font-semibold text-gray-100 leading-relaxed text-center">
                        ProStep — футбольное агентство, которое помогает игрокам из СНГ попасть в академии Испании и развиваться честным, прозрачным путём.
                    </p>
                    <div className="mt-8 text-center">
                        <button 
                          onClick={navigateToAbout}
                          className="bg-transparent border-2 border-lime-400 text-lime-400 font-bold py-3 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_25px_rgba(163,230,53,0.7)]"
                        >
                          Узнать нашу историю
                        </button>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default AboutAgency;