"use client";

import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

// Typing Indicator Component
const TypingIndicator = () => (
  <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm relative w-16 h-10 flex items-center justify-center space-x-1.5">
    <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
  </div>
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStage, setChatStage] = useState(0); 
  // 0: Closed/Reset
  // 1: Typing message 1
  // 2: Show message 1, typing message 2
  // 3: Show both messages
  
  const whatsappNumber = "94777883379"; 
  const defaultMessage = "Hi *Rosary Global Taxi & Tour Services*! I need more info about your services.";

  // --- NEW: Auto-open on mobile devices ---
  useEffect(() => {
    // Check if we are in the browser and the screen width is mobile (< 768px)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Wait 2 seconds before popping up so it isn't too aggressive
      const autoOpenTimer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);

      return () => clearTimeout(autoOpenTimer);
    }
  }, []);

  // Handle the typing animation sequence when the popup opens
  useEffect(() => {
    if (isOpen) {
      setChatStage(1); // Start typing first message
      
      const timer1 = setTimeout(() => {
        setChatStage(2); // Show first message, start typing second
      }, 1200); // 1.2 seconds typing

      const timer2 = setTimeout(() => {
        setChatStage(3); // Show both messages
      }, 2800); // Additional 1.6 seconds typing

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // Reset the animation after a short delay when closed
      const resetTimer = setTimeout(() => setChatStage(0), 300);
      return () => clearTimeout(resetTimer);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popup Chat Window */}
      <div 
        className={`bg-[#e5ddd5] w-80 rounded-3xl overflow-hidden shadow-2xl mb-4 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#00a884] text-white p-4 flex items-center justify-between z-10 relative shadow-sm">
          <div className="flex items-center gap-2">
            <WhatsAppIcon size={24} />
            <span className="font-semibold text-lg tracking-wide">WhatsApp</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Close chat"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-5 space-y-4 bg-opacity-90 pb-20 min-h-[220px]">
          
          {/* First Message Sequence */}
          {chatStage === 1 && <TypingIndicator />}
          
          {chatStage >= 2 && (
            <div className="bg-white text-gray-800 p-3.5 rounded-2xl rounded-tl-sm text-[15px] shadow-sm relative w-11/12 leading-relaxed animate-fade-in-up">
              <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
              Hi 👋, welcome to <strong>Rosary Global | Taxi & Tour Services! 🚖🇱🇰</strong>
            </div>
          )}

          {/* Second Message Sequence */}
          {chatStage === 2 && <TypingIndicator />}
          
          {chatStage >= 3 && (
            <div className="bg-white text-gray-800 p-3.5 rounded-2xl rounded-tl-sm text-[15px] shadow-sm relative w-3/4 animate-fade-in-up">
              <div className="absolute top-0 -left-2 w-3 h-3 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
              Can we help you?
            </div>
          )}

        </div>

        {/* Footer Link Button */}
        <div className="absolute bottom-5 right-5">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00a884] text-white rounded-full px-5 py-3 font-bold flex items-center gap-2 shadow-lg hover:bg-[#008f6f] hover:-translate-y-0.5 transition-all"
          >
            Open Chat
            <Send size={18} />
          </a>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#1EBE5D] hover:scale-110 transition-all duration-300 focus:outline-none"
        aria-label="Toggle WhatsApp Chat"
      >
        {isOpen ? <X size={28} /> : <WhatsAppIcon size={32} />}
      </button>

    </div>
  );
}