"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useJsApiLoader, Autocomplete, GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { fleetData } from '@/data/fleetData';

const libraries = ['places'];

// Map styling for the visual route display
const mapContainerStyle = {
  width: '100%',
  height: '250px',
  borderRadius: '0.5rem',
  marginTop: '1rem'
};

// Default center (Colombo, Sri Lanka) before a route is calculated
const defaultCenter = { lat: 6.9271, lng: 79.8612 };

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // States for calculating & booking
  const [selectedVehicleId, setSelectedVehicleId] = useState(fleetData[0].id);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [distance, setDistance] = useState(null);
  const [price, setPrice] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // State to hold the actual map route data
  const [directionsResponse, setDirectionsResponse] = useState(null);

  // Refs to pull the exact values from the Autocomplete inputs
  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);

  // Safely load the Google Maps scripts
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  
  // --- THE CALCULATION ENGINE ---
  const calculateDistanceAndPrice = async () => {
    if (!pickupRef.current?.value || !dropoffRef.current?.value || !pickupDate || !pickupTime) {
      alert("Please fill out all fields (Locations, Date, and Time).");
      return;
    }

    setIsCalculating(true);

    const directionsService = new window.google.maps.DirectionsService();
    
    directionsService.route(
      {
        origin: pickupRef.current.value,
        destination: dropoffRef.current.value,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          // Save the full route result to draw on the map later
          setDirectionsResponse(result);

          // Extract distance
          const distanceInMeters = result.routes[0].legs[0].distance.value;
          const distanceInKm = (distanceInMeters / 1000).toFixed(1);
          
          setDistance(distanceInKm);

          // Calculate Price
          const activeVehicle = fleetData.find(v => v.id === selectedVehicleId);
          const calculatedPrice = Math.round(distanceInKm * activeVehicle.pricePerKm);
          setPrice(calculatedPrice);
        } else {
          alert("Could not calculate the driving distance between these locations.");
          setDirectionsResponse(null);
        }
        setIsCalculating(false);
      }
    );
  };

  // --- THE UPGRADED WHATSAPP DISPATCHER ---
  const handleWhatsAppDispatch = () => {
    if (!distance || !price) {
      alert("Please calculate the price first!");
      return;
    }

    const activeVehicle = fleetData.find(v => v.id === selectedVehicleId);
    const whatsappNumber = "94777883379";
    
    const messageTemplate = `Hi Rosary Global! I would like to book a ride.\n\n📅 *Date:* ${pickupDate}\n⏰ *Time:* ${pickupTime}\n📍 *Pickup:* ${pickupRef.current.value}\n🏁 *Dropoff:* ${dropoffRef.current.value}\n🚘 *Vehicle:* ${activeVehicle.name}\n🛣️ *Distance:* ${distance} km\n💰 *Estimated Price:* LKR ${price}\n\nIs this available?`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // --- HELPER TO RESET MODAL ---
  const closeModal = () => {
    setIsModalOpen(false);
    setDirectionsResponse(null);
    setDistance(null);
    setPrice(null);
  };

  // Helper to assign a quick icon based on vehicle ID
  const getVehicleIcon = (id) => {
    if (id.includes('sedan')) return '🚘';
    if (id.includes('minivan')) return '🚐';
    if (id.includes('van')) return '🚌';
    return '🚗'; // default
  };

  return (
    <>
      {/* Adjusted padding for mobile (px-5 py-10) vs desktop (md:px-8 md:py-20)*/}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center overflow-hidden">
        
        {/* Left Content */}
        <div className="space-y-1 md:space-y-1">
          
          {/* Welcome Text: Scaled down to text-2xl on mobile, text-4xl on desktop */}
          <h4 className="text-[#5c4033] font-bold uppercase tracking-widest text-2xl md:text-4xl">
            Welcome
          </h4>
          
          {/* Main Title: Scaled to 6xl on mobile so it doesn't cause horizontal scrolling */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-emerald-700 leading-[1.1] md:leading-tight">
            Rosary <br /> Global
          </h1>
          
          <div className="max-w-md space-y-1 md:space-y-4">
            {/* Subtitle: Slightly smaller on mobile */}
            <p className="text-gray-800 font-bold text-lg md:text-2xl">
              Your trusted travel partner in Sri Lanka
            </p>
            
            {/* Paragraph text: Standardized size for better mobile reading */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Premium airport transfers, unforgettable safari adventures and quality bike rentals across the island.
            </p>
          </div>
          
          {/* Buttons: Stacked on mobile (flex-col), side-by-side on desktop (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-5 sm:space-y-0 sm:space-x-6 pt-4 md:pt-6">
            
            {/* Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto text-center bg-[#1a3a2a] text-base md:text-lg text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-900 transition"
            >
              Book Your Trip
            </button>
            
            <Link href="/fleet" className="group flex items-center space-x-2 text-base md:text-lg text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1">
              <span>Fleet</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Right Image Collage: Reduced height for mobile (350px) to keep it in view */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 h-[350px] sm:h-[450px] md:h-[600px] mt-4 md:mt-0">
          <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
            <Image 
              src="/hero1.jpeg" 
              alt="Driver with car"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid grid-rows-2 gap-3 md:gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/hero3.png" 
                alt="White Sedan"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/hero2.jpeg" 
                alt="White Van"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
      </section>

      {/* --- SCROLLABLE MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          {/* Added overscroll-contain to fix mobile scrolling glitches */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 relative max-h-[90vh] overflow-y-auto overscroll-contain">
            <button type="button" onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold p-2 touch-manipulation z-50">
              &times;
            </button>

            <h2 className="text-2xl font-bold text-emerald-900 mb-6">Plan Your Journey</h2>

            <div className="space-y-5 relative z-10">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
                  <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-emerald-600 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Time</label>
                  <input type="time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-emerald-600 bg-white" />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Pickup Location</label>
                {isLoaded ? (
                  <Autocomplete options={{ componentRestrictions: { country: "lk" } }}>
                    <input type="text" placeholder="e.g. BIA Airport" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-emerald-600" ref={pickupRef} />
                  </Autocomplete>
                ) : (
                  <input type="text" placeholder="Loading..." disabled className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100" />
                )}
              </div>
              
              {/* Drop-off Location */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Drop-off Location</label>
                {isLoaded ? (
                  <Autocomplete options={{ componentRestrictions: { country: "lk" } }}>
                    <input type="text" placeholder="e.g. Galle Fort" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-emerald-600" ref={dropoffRef} />
                  </Autocomplete>
                ) : (
                  <input type="text" placeholder="Loading..." disabled className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100" />
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select Vehicle</label>
                <div className="grid grid-cols-3 gap-3">
                  {fleetData.map((vehicle) => {
                    const isSelected = selectedVehicleId === vehicle.id;
                    return (
                      <button
                        key={vehicle.id}
                        type="button" 
                        onClick={() => setSelectedVehicleId(vehicle.id)}
                        // FIX: Added touch-manipulation, active state, and limited hover to md: screens only
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 touch-manipulation active:scale-[0.98] ${
                          isSelected 
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm' 
                            : 'border-gray-200 bg-white text-gray-500 md:hover:border-emerald-300 md:hover:bg-gray-50 active:bg-gray-100'
                        }`}
                      >
                        <span className="text-3xl mb-1">{getVehicleIcon(vehicle.id)}</span>
                        <span className="text-xs font-bold text-center leading-tight">
                          {vehicle.name.split(' (')[0]}
                        </span>
                        <span className="text-[10px] text-gray-400 mt-1">
                          {vehicle.name.includes('(') ? `(${vehicle.name.split('(')[1]}` : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button 
                type="button"
                onClick={calculateDistanceAndPrice}
                disabled={isCalculating}
                // FIX: touch-manipulation added here as well
                className="w-full bg-emerald-100 text-emerald-900 py-3 rounded-lg font-bold hover:bg-emerald-200 active:bg-emerald-300 transition mt-2 touch-manipulation"
              >
                {isCalculating ? "Calculating Route..." : "Calculate Price & Route"}
              </button>

              {distance && price && directionsResponse && (
                <div className="mt-4 animate-in fade-in slide-in-from-bottom-2 space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    {isLoaded && (
                      <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={defaultCenter}
                        zoom={7}
                        options={{ disableDefaultUI: true, zoomControl: true }}
                      >
                        <DirectionsRenderer directions={directionsResponse} />
                      </GoogleMap>
                    )}
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-sm text-gray-600">Estimated Distance: <span className="font-bold">{distance} km</span></p>
                    <p className="text-xl font-bold text-emerald-900 mt-1">Estimated Price: LKR {price.toLocaleString()}</p>
                  </div>
                  <button 
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="w-full bg-[#1a3a2a] text-white py-3 rounded-lg font-bold hover:bg-emerald-900 active:scale-[0.98] transition shadow-lg flex items-center justify-center space-x-2 touch-manipulation"
                  >
                    <span>Book via WhatsApp</span>
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}