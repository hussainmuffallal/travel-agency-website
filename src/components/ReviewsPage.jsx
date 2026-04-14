"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShieldCheck, CheckCircle2, Car } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    type: 'video',
    videoSrc: '/review-video.mp4',
  },
  {
    id: 2,
    type: 'images',
    name: 'Ozair Rao',
    tag: 'Verified Traveler',
    quote: '"Had a wonderful experience with them. We rented car from them thrice and all 3 times they made sure they sent the car details before hand and followed up to make sure everything went smooth. Also car was always there before time. I did book woth others and had a bad experience so i highly recommend boomibg with them. Their rates are so the best!"',
    avatar: '/avatar.png',
  },
  {
    id: 3,
    type: 'badge',
    name: 'Melanie Van Zyl',
    tag: 'Verified Traveler',
    quote: '"This was a really good service. The drivers were friendly, fast and safe. Always arrived on time. I was able to use this service all the way from Colombo to weligama to Galle and back up to Colombo. Very good rates too! I highly recommend this service."',
    avatar: '/avatar.png',
  },
  {
    id: 4,
    type: 'standard',
    name: 'Marina Caldera',
    tag: 'Verified Traveler',
    quote: '"We used this company a few times during our holiday. Very good service. Fast, reliable and excellent communication. Perfect customer service and very reasonable rates. Totally recommended."',
    avatar: '/avatar.png',
  },
  {
    id: 5,
    type: 'badge',
    name: 'Lars Wiklund',
    tag: 'Verified Traveler',
    quote: '"We used RG Taxi for three weeks on our holiday. We can really recommend this company. They are extremely careful about the safety of their customers, they are punctual and extremely pleasant to deal with. If you want to hire a professional taxi company, this is the company you should contact."',
    avatar: '/avatar.png',
  },
  {
    id: 6,
    type: 'standard',
    name: 'David from USA 🇺🇸',
    tag: 'Verified Traveler',
    quote: '"Reliable airport transfer. The driver was waiting with a sign despite my flight being delayed by 2 hours. Excellent and stress-free service."',
    avatar: '/avatar.png',
  },
  {
    id: 7,
    type: 'standard',
    name: 'Giovanni L',
    tag: 'Verified Traveler',
    quote: '"The best taxi transfer company we had in Sri Lanka. We used few companies to drive around Sri Lanka (Colombo to Mirissa, Colombo to Ella) and this one was by far the best: both cheaper prices and also better cars. Both times I booked directly with them using Whatsapp. Thank you!"',
    avatar: '/avatar.png',
  },
  {
    id: 8,
    type: 'badge',
    name: 'Georgia Drieu',
    tag: 'Verified Traveler',
    quote: '"If you want to travel safely around Sri Lanka - use this company! We were assisted by the lovely owner frequently during our trip, who provided us with multiple transfers across the island for a great price. He always provided us with a kind, safe and reliable driver. They arrived early to collect us every single time and the driving was safe and comfortable, which is hard to find in SL. There were additional extras too, like a picture of the vehicle being sent to use beforehand and reassurance of no extra costs. Great company and great, trustworthy owner! 10/10!"',
    avatar: '/avatar.png',
  },
  {
    id: 9,
    type: 'standard',
    name: 'Giulia Riccio',
    tag: 'Verified Traveler',
    quote: '"Whether you’re traveling solo or in a group, this agency’s taxi service is an extremely convenient way to get around Sri Lanka. Their customer support is highly efficient and easily reachable via WhatsApp, with a team that is always friendly, professional, and ready to help you organize all your transfers.You can choose between private taxis or shared rides, depending on your needs. The prices are very competitive, and the drivers are skilled, reliable, and safety-conscious. Overall, a smooth and stress-free experience that I would highly recommend to anyone traveling in Sri Lanka."',
    avatar: '/avatar.png',
  }
];

export default function ReviewsPage() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="bg-[#fcfaf8] py-16 md:py-24 px-5 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#8a7967] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Our Journey Together
          </h4>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0c3b2e] mb-6 tracking-tight leading-tight">
            What Our Travelers Say
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Real stories from the road. Discover why thousands of travelers trust Rosary 
            Global for their Sri Lankan island adventures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-[#163828] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center shadow-lg">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-3">4.9/5.0</h2>
            <div className="flex text-[#f59e0b] gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-[#88a592] max-w-md leading-relaxed">
              Based on 2,500+ verified customer reviews across Google, TripAdvisor, and direct bookings.
            </p>
          </div>

          <div className="bg-[#f4f5f5] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-sm">
            <ShieldCheck size={40} className="text-[#0c3b2e] mb-4" strokeWidth={2.5} />
            <h2 className="text-4xl font-bold text-[#0c3b2e] mb-2">100%</h2>
            <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">
              Verified Reviews
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, visibleCount).map((review) => (
            <div
              key={review.id}
              className={`bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col ${
                review.type === 'video' ? 'p-0 overflow-hidden' : 'p-8'
              }`}
            >
              
              {/* NON-VIDEO CONTENT */}
              {review.type !== 'video' && (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      <p className="text-xs text-[#2b7a4b] font-medium flex items-center gap-1 mt-0.5">
                        <CheckCircle2 size={14} fill="currentColor" className="text-[#2b7a4b] bg-white rounded-full"/> 
                        {review.tag}
                      </p>
                    </div>
                  </div>

                  <div className="flex text-[#f59e0b] gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  <p className={`text-gray-600 italic leading-relaxed mb-6 ${
                    review.type === 'images'
                      ? 'text-blue-700 underline decoration-blue-700/30 underline-offset-4'
                      : ''
                  }`}>
                    {review.quote}
                  </p>
                </>
              )}

              {/* VIDEO */}
              {review.type === 'video' && (
                <div className="w-full aspect-[4/3] bg-black">
                  <video controls className="w-full h-full object-cover">
                    <source src={review.videoSrc} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < reviewsData.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="bg-[#163828] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#0c3b2e] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Load More Reviews
            </button>
          </div>
        )}

      </div>
    </section>
  );
}