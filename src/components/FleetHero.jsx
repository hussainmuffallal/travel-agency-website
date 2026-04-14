import Image from 'next/image';
import { ShieldCheck, Headphones } from 'lucide-react';

export default function FleetHero() {
  return (
    <section className="bg-[#fcfaf8] py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="space-y-6 md:space-y-8">
          
          {/* Headings */}
          <div>
            <h4 className="text-[#8a7967] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Our Curated Fleet
            </h4>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#0c3b2e] leading-[1.1]">
              The Perfect Fleet <br />
              for Every <br />
              Journey.
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            From solo executive travel to large group excursions, our meticulously maintained vehicles and professional chauffeurs ensure a sanctuary on wheels across the island.
          </p>

          {/* Features / Icons */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center space-x-2 text-[#0c3b2e] font-medium">
              <ShieldCheck size={20} strokeWidth={2} className="text-[#0c3b2e]" />
              <span className="text-sm md:text-base">Fully Insured</span>
            </div>
            
            <div className="flex items-center space-x-2 text-[#0c3b2e] font-medium">
              <Headphones size={20} strokeWidth={2} className="text-[#0c3b2e]" />
              <span className="text-sm md:text-base">24/7 Support</span>
            </div>
          </div>

        </div>

        {/* Right Image Column */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image 
            src="/fleet1.jpeg" 
            alt="White sedan parked on coastal road with palm trees"
            fill
            className="object-cover"
            priority // Loads this image faster since it's above the fold
          />
        </div>

      </div>
    </section>
  );
}