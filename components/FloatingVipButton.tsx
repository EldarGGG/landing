
import React from 'react';
import { WhatsAppIcon, TelegramIcon } from './ui/Icons';

const FloatingContactButtons: React.FC = () => {
    const message = "Добрый день! Пишу по поводу просмотра.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/34655207354?text=${encodedMessage}`;
    const telegramLink = `https://t.me/prostepagency`;

    return (
        <div className="floating-contact-container" style={{ zIndex: 9999 }}>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-contact-btn whatsapp"
                aria-label="Связаться через WhatsApp"
            >
                <WhatsAppIcon className="w-8 h-8" />
            </a>
            <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-contact-btn telegram"
                aria-label="Связаться через Telegram"
            >
                <TelegramIcon className="w-8 h-8" />
            </a>
        </div>
    );
};

export default FloatingContactButtons;
