import { Map, Banknote, Building2, Car, Headphones, PawPrint } from 'lucide-react';

export default function FeatureMarquee() {
  const features = [
    { title: "Customized\nItinerary", icon: Map },
    { title: "Affordable\nPrice", icon: Banknote },
    { title: "Hand-Picked\nHotels", icon: Building2 },
    { title: "Private Guide &\nVehicle", icon: Car },
    { title: "24x7 Customer\nService", icon: Headphones },
    { title: "No Animal\nExploitation", icon: PawPrint },
  ];

  // Tripled to ensure smooth scrolling even on ultra-wide 4K monitors
  const duplicatedFeatures = [...features, ...features, ...features];

  return (
    <section className="w-full bg-[#f8f9fa] py-10 border-b border-gray-200 overflow-hidden relative">
      {/* Container for the scrolling track */}
      <div className="flex w-max animate-marquee">
        
        {duplicatedFeatures.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <div 
              key={index} 
              // FIX: Added 'shrink-0' so the items don't squish together
              className="flex flex-col items-center justify-start w-48 md:w-56 mx-4 shrink-0"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-[#346244] flex items-center justify-center text-white mb-4 shadow-md">
                <Icon size={28} strokeWidth={2} />
              </div>
              
              {/* Feature Text */}
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-900 text-center whitespace-pre-line leading-relaxed">
                {feature.title}
              </h3>
            </div>
          );
        })}
        
      </div>
    </section>
  );
}