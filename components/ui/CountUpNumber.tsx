import React, { useEffect, useState, useRef } from 'react';

const CountUpNumber: React.FC<{ value: string; className?: string, style?: React.CSSProperties }> = ({ value, className, style }) => {
    const numRef = useRef<HTMLParagraphElement>(null);
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    const endValue = parseInt(value.replace('+', ''), 10);
    const suffix = value.includes('+') ? '+' : '';

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        if (numRef.current) observer.observe(numRef.current);
        return () => {
            if (numRef.current) {
                observer.unobserve(numRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView || isNaN(endValue)) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        let startTime: number | null = null;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * endValue);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, endValue]);

    if (value.includes('-')) {
        return <p ref={numRef} className={className} style={style}>{value}</p>;
    }
    
    return <p ref={numRef} className={className} style={style}>{count}{suffix}</p>;
};

export default CountUpNumber;