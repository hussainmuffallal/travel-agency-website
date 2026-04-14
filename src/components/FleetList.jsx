"use client";

import { useState } from 'react';
import Image from 'next/image';
import { User, Users, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Vehicle Data ---
const fleetData = [
  {
    id: 1,
    title: "Executive Sedan",
    description: "Perfect for business travelers or couples seeking a quiet, comfortable journey in vehicles like the Toyota Prius or Honda Insight.",
    badge: "PREMIUM CHOICE",
    badgeColor: "bg-white text-gray-800",
    passengers: "3-4 Passengers",
    price: "100",
    unit: "per 1km",
    images: [
      "/sedan-1.png", 
      "/sedan-2.png", 
      "/sedan-3.png", 
      "/sedan-4.png", 
      "/sedan-5.png", 
      "/sedan-6.png"
    ],
    imagePosition: "left",
    icon: User
  },
  {
    id: 2,
    title: "Comfort Mini Van",
    description: "Ideal for families or small groups traveling with extra luggage. Featuring comfortable journey in vehicles like Suzuki Every.",
    badge: "FAMILY FAVORITE",
    badgeColor: "bg-[#d4a017] text-white",
    passengers: "5 Passengers",
    price: "110",
    unit: "per 1km",
    images: [
      "/minivan-1.png", 
      "/minivan-2.png", 
      "/minivan-3.png", 
    ],
    imagePosition: "right",
    icon: Users
  },
  {
    id: 3,
    title: "Group Travel Van",
    description: "Designed for large tour groups and corporate outings, providing spacious interiors and maximum comfort for long journeys.",
    badge: "",
    badgeColor: "",
    passengers: "10 Passengers",
    price: "120",
    unit: "per 1km",
    images: [
      "/van-1.png", 
      "/van-2.png", 
      "/van-3.png"
    ],
    imagePosition: "left",
    icon: Users
  }
];

// --- Vehicle Card ---
function VehicleCard({ vehicle }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const Icon = vehicle.icon;

  // Your WhatsApp Number (Include Country Code, No '+')
  const whatsappNumber = "94777883379";
  // Dynamic Message based on the vehicle title
  const whatsappMessage = `Hi Rosary Global! I would like to book the ${vehicle.title}. Could you please provide more details?`;

  const nextImage = () => {
    setCurrentIdx((prev) =>
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 last:mb-0">
      
      {/* Image */}
      <div 
        className={`relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl group ${
          vehicle.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        {vehicle.badge && (
          <div className={`absolute top-6 ${vehicle.imagePosition === 'right' ? 'right-6' : 'left-6'} z-10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider ${vehicle.badgeColor} shadow-md`}>
            {vehicle.badge}
          </div>
        )}

        <Image 
          src={vehicle.images[currentIdx]} 
          alt={`${vehicle.title} view ${currentIdx + 1}`}
          fill
          className="object-cover"
        />

        {vehicle.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {vehicle.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentIdx === idx ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col ${vehicle.imagePosition === 'right' ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
        
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c3b2e] mb-4">
          {vehicle.title}
        </h2>
        
        <p className="text-gray-600 mb-6">
          {vehicle.description}
        </p>

        <div className="flex items-center text-gray-600 mb-8 space-x-2">
          <Icon size={20} className="text-[#346244]" />
          <span className="text-sm font-medium">{vehicle.passengers}</span>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
              Starting From
            </p>
            <div className="flex items-baseline text-[#0c3b2e]">
              <span className="text-3xl font-bold">
                LKR {vehicle.price}
              </span>
              <span className="text-sm text-gray-500 ml-2">
                / {vehicle.unit}
              </span>
            </div>
          </div>

          {/* UPDATED: Directs to WhatsApp instead of /book */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0c3b2e] text-white px-6 py-3 rounded-md font-semibold hover:bg-emerald-900 transition shadow-md whitespace-nowrap text-center"
          >
            Book This Vehicle
          </a>
        </div>

      </div>
    </div>
  );
}

// --- Main ---
export default function FleetList() {
  return (
    <section className="bg-[#fcfaf8] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {fleetData.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}