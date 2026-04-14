// src/components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

// --- Custom Social Icons ---
const FacebookIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TiktokIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a5.64 5.64 0 0 1-1.04-.1z"/>
  </svg>
);

const YoutubeIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const TripAdvisorIcon = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M22.563 10.422c-.14-.234-.374-.351-.607-.351h-3.461c-.374-2.852-2.148-5.355-4.652-6.571 1.074-.539 2.054-1.332 2.73-2.316.188-.258.117-.656-.164-.867-.281-.211-.679-.164-.867.117-.841 1.195-2.22 1.875-3.696 1.969v-1.922c0-.328-.258-.609-.609-.609-.328 0-.609.281-.609.609v1.922c-1.453-.094-2.831-.773-3.695-1.969-.188-.281-.586-.328-.867-.117-.281.211-.352.609-.164.867.676.984 1.656 1.777 2.73 2.316-2.527 1.219-4.301 3.719-4.652 6.571h-3.461c-.233 0-.468.117-.607.351-.141.211-.141.516.023.703l3.23 3.656c-.023.281-.047.562-.047.844 0 3.726 3.064 6.797 6.812 6.797 3.75 0 6.813-3.07 6.813-6.797 0-.281-.023-.562-.047-.844l3.23-3.656c.14-.188.164-.492.023-.703z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#294231] pt-16 pb-8 border-t-4 border-emerald-800/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1 */}
          <div className="md:col-span-5 flex flex-col items-start">
            <h3 className="text-2xl font-bold text-white mb-5">Rosary Global</h3>
            
            <div className="relative w-[240px] h-[130px] overflow-hidden mb-5 rounded-sm">
              <Image src="/logo.jpeg" alt="Rosary Global Logo" fill className="object-cover"/>
            </div>
            
            <p className="text-[#a8c1b1] text-base leading-relaxed max-w-sm mb-6">
              Your premier partner for exploring Sri Lanka.
            </p>

            <div className="flex items-center space-x-5">
              <a href="https://facebook.com" target="_blank" className="text-[#88a592] hover:text-[#1877F2] hover:-translate-y-1 transition-all duration-200">
                <FacebookIcon size={20}/>
              </a>
              <a href="https://tiktok.com" target="_blank" className="text-[#88a592] hover:text-[#ff0050] hover:-translate-y-1 transition-all duration-200">
                <TiktokIcon size={20}/>
              </a>
              <a href="https://youtube.com" target="_blank" className="text-[#88a592] hover:text-[#FF0000] hover:-translate-y-1 transition-all duration-200">
                <YoutubeIcon size={20}/>
              </a>
              <a href="https://tripadvisor.com" target="_blank" className="text-[#88a592] hover:text-[#34E0A1] hover:-translate-y-1 transition-all duration-200">
                <TripAdvisorIcon size={20}/>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-3">
            <h4 className="text-[#d88c5a] font-bold uppercase text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-[#a8c1b1] hover:text-white">Home</Link></li>
              <li><Link href="/fleet" className="text-[#a8c1b1] hover:text-white">Fleet</Link></li>
              <li><Link href="/reviews" className="text-[#a8c1b1] hover:text-white">Reviews</Link></li>
              <li><Link href="/contact" className="text-[#a8c1b1] hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-4">
            <h4 className="text-[#d88c5a] font-bold uppercase text-sm mb-6">Contact</h4>
            
            <div className="space-y-4">
              <a href="mailto:sameerarosary@gmail.com" className="block text-[#a8c1b1] hover:text-white">
                sameerarosary@gmail.com
              </a>
              <a href="tel:+94777883379" className="block text-[#a8c1b1] hover:text-white">
                Call Us : +94 77 788 3379
              </a>
            </div>

            {/* FIXED IMAGE SECTION */}
            <div className="mt-4">
              <Image 
                src="/pay.jpg" 
                alt="Accepted Payment Methods"
                width={180}
                height={80}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

          </div>
        </div>

        <div className="mt-5 pt-8 border-t border-[#3b5744]">
          <p className="text-[#88a592] text-sm">
            © 2026 Rosary Global. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}