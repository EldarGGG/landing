import React, { useEffect, useState, useRef } from 'react';

const AnimatedHeading: React.FC<{ children: React.ReactNode; className?: string; as?: 'h1' | 'h2' | 'h3' }> = ({ children, className = '', as = 'h2' }) => {
    const ref = useRef<HTMLHeadingElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const Tag = as;

    return (
        <Tag ref={ref} className={`${className} ${isInView ? 'section-heading-animated in-view' : ''}`} aria-label={typeof children === 'string' ? children : ''}>
           {React.Children.map(children, (child) => {
               if (typeof child === 'string') {
                   return child.split(' ').map((word, index) => (
                       <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                           {word}&nbsp;
                       </span>
                   ));
               }
               return child;
           })}
        </Tag>
    );
};

export default AnimatedHeading;
