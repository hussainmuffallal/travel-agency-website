"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // WhatsApp configuration
  const whatsappNumber = "94777883379";
  const defaultMessage = "Hi Rosary Global! I would like to plan a trip to Sri Lanka and book your services. Could you please provide more details?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Helper function for desktop link classes
  const getDesktopClass = (path) => {
    return pathname === path 
      ? "text-emerald-700 border-b-2 border-emerald-700" 
      : "text-gray-600 hover:text-emerald-700 transition border-b-2 border-transparent";
  };

  // Helper function for mobile link classes
  const getMobileClass = (path) => {
    return pathname === path 
      ? "text-emerald-700 font-medium" 
      : "text-gray-600 font-medium";
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-bold text-emerald-900 tracking-tighter font-bodoni-sc">
          RG
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className={getDesktopClass("/")}>Home</Link>
          <Link href="/fleet" className={getDesktopClass("/fleet")}>Fleet</Link>
          <Link href="/reviews" className={getDesktopClass("/reviews")}>Reviews</Link>
          <Link href="/contact" className={getDesktopClass("/contact")}>Contact</Link>
        </div>

        {/* Desktop CTA - Changed to WhatsApp Link */}
        <div className="hidden md:block">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1a3a2a] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-900 transition"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-emerald-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className={getMobileClass("/")}>Home</Link>
          <Link href="/fleet" onClick={() => setIsOpen(false)} className={getMobileClass("/fleet")}>Fleet</Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)} className={getMobileClass("/reviews")}>Reviews</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={getMobileClass("/contact")}>Contact</Link>
          <div className="pt-4 border-t border-gray-100">
            {/* Mobile CTA - Changed to WhatsApp Link */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)} 
              className="inline-block bg-[#1a3a2a] text-white px-6 py-3 rounded-full font-semibold text-center w-full"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}