import { 
    Shield, 
    Clock, 
    Award, 
    Star, 
    UserCheck, 
    PlaneLanding, 
    Map 
  } from 'lucide-react';
  import Image from 'next/image';
  
  export default function WhyChooseUs() {
    const features = [
      {
        icon: Shield,
        title: "Licensed & Insured",
        description: "All our vehicles and drivers are fully licensed, insured, and certified for your safety."
      },
      {
        icon: Clock,
        title: "24/7 Availability",
        description: "Round-the-clock service. Book anytime, day or night, for your convenience."
      },
      {
        icon: Award,
        title: "Expert Guides",
        description: "Knowledgeable local guides who know every corner of Sri Lanka."
      },
      {
        icon: Star,
        title: "Top Rated",
        description: "Highly rated by international travelers across all platforms."
      }
    ];
  
    return (
      <section className="bg-[#f8f9fa] py-16 md:py-24 px-5 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          {/* --- PART 1: Top Feature Cards --- */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#112232] mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Experience the difference with our premium service and local expertise.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#dcfce7] rounded-2xl p-8 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-[#346244] text-white flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#112232] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
  
          {/* --- PART 2: Seamless Island Travel (The New Section) --- */}
          <div className="mt-24 md:mt-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-10">
              {/* Heading Group */}
              <div>
                <h4 className="text-[#8b6b4d] font-bold uppercase tracking-widest text-sm mb-3">
                  The Rosary Promise
                </h4>
                <h2 className="text-4xl md:text-5xl font-bold text-[#112232] leading-tight">
                  Seamless Island Travel
                </h2>
              </div>
  
              {/* List Items */}
              <div className="space-y-8">
                
                {/* Item 1 */}
                <div className="flex gap-5 md:gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#e8f0fe] flex items-center justify-center text-[#1a4b8c] shadow-sm">
                    <UserCheck size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#112232] mb-2">Professional English-speaking drivers</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clear communication and local insights from our experienced, friendly tourist chauffeurs.
                    </p>
                  </div>
                </div>
  
                {/* Item 2 */}
                <div className="flex gap-5 md:gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#ffede4] flex items-center justify-center text-[#c25e1a] shadow-sm">
                    <PlaneLanding size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#112232] mb-2">CMB Airport Pickup</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Meeting you right at the arrival terminal. No stress, no searching, just a smooth start to your vacation.
                    </p>
                  </div>
                </div>
  
                {/* Item 3 */}
                <div className="flex gap-5 md:gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#dcfce7] flex items-center justify-center text-[#112232] shadow-sm">
                    <Map size={28} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#112232] mb-2">Island-wide Transfers</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From the sandy beaches of the south to the tea mountains of the central highlands.
                    </p>
                  </div>
                </div>
  
              </div>
            </div>
  
            {/* Right Image Collage / Focus */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl mt-8 lg:mt-0">
              <Image 
                src="/hero4.jpeg" 
                alt="Coastal road travel in Sri Lanka"
                fill
                className="object-cover"
              />
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }