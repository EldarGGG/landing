import React from 'react';

export const getSelectionStatus = (dateStr: string): 'ongoing' | 'upcoming' | 'past' => {
    const now = new Date();
    // To test the 'ongoing' status, you can manually set the date:
    // const now = new Date('2024-08-18T12:00:00');
    now.setHours(0, 0, 0, 0);
    const currentYear = now.getFullYear();

    const parseDate = (dayMonth: string): Date => {
        const [day, month] = dayMonth.split('.').map(Number);
        return new Date(currentYear, month - 1, day);
    };
    
    if (dateStr.toLowerCase().includes('дата будет скоро')) {
        return 'upcoming';
    }

    if (dateStr.includes(' - ')) {
        const [startStr, endStr] = dateStr.split(' - ');
        const startDate = parseDate(startStr);
        let endDate = parseDate(endStr);
        
        if (endDate < startDate) {
            endDate.setFullYear(currentYear + 1);
        }
        
        endDate.setHours(23, 59, 59, 999);

        if (now >= startDate && now <= endDate) return 'ongoing';
        if (now < startDate) return 'upcoming';
        return 'past';
    }

    const eventDate = parseDate(dateStr);
    if (now.getTime() === eventDate.getTime()) return 'ongoing';
    if (now < eventDate) return 'upcoming';
    return 'past';
};

export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
