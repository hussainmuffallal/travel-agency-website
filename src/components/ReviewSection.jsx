"use client"; // Required for React hooks (useState, useEffect) in Next.js

import { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle } from 'lucide-react';

// --- Animated Counter Component ---
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Detect when the element scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Disconnect so it only animates once
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle the counting animation
  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for a smooth slow-down at the end
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const reviews = [
  {
    initial: 'J',
    name: 'JOzair Rao',
    status: 'Verified Traveller',
    rating: 5,
    quote: '"Had a wonderful experience with them. We rented car from them thrice and all 3 times they made sure they sent the car details before hand and followed up to make sure everything went smooth. Also car was always there before time. I did book woth others and had a bad experience so i highly recommend boomibg with them. Their rates are so the best!"'
  },
  {
    initial: 'S',
    name: 'Melanie Van Zyl',
    status: 'Verified Traveller',
    rating: 5,
    quote: '"This was a really good service. The drivers were friendly, fast and safe. Always arrived on time. I was able to use this service all the way from Colombo to weligama to Galle and back up to Colombo. Very good rates too! I highly recommend this service."'
  },
  {
    initial: 'M',
    name: 'Marina Caldera',
    status: 'Verified Traveller',
    rating: 5,
    quote: '"We used this company a few times during our holiday. Very good service. Fast, reliable and excellent communication. Perfect customer service and very reasonable rates. Totally recommended."'
  }
];

export default function ReviewSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f0fff4] pb-16 md:pb-24 border-b border-gray-100">
      
      {/* --- NEW STATS BANNER --- */}
      <div className="w-full bg-[#a5c7a8] py-12 md:py-16 mb-16 md:mb-24 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#1f4223] mb-2 tracking-tight">
              {/* Using the new AnimatedCounter here */}
              <AnimatedCounter end={5000} suffix="+" />
            </h3>
            <p className="text-lg md:text-xl text-[#112914] font-medium">
              Happy Travelers
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#1f4223] mb-2 tracking-tight">
              {/* Using the new AnimatedCounter here */}
              <AnimatedCounter end={10} suffix="+" />
            </h3>
            <p className="text-lg md:text-xl text-[#112914] font-medium">
              Years Experience
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl md:text-7xl font-bold text-[#1f4223] mb-2 tracking-tight">
              {/* Using the new AnimatedCounter here */}
              <AnimatedCounter end={100} suffix="%" />
            </h3>
            <p className="text-lg md:text-xl text-[#112914] font-medium">
              Customer Satisfaction
            </p>
          </div>

        </div>
      </div>

      {/* --- REVIEWS CONTENT --- */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#112232] mb-4">
            What Our Guests Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 flex flex-col items-start shadow-xl shadow-gray-100/50 border border-gray-100 transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Header: Avatar & Info */}
              <div className="flex items-center gap-4 mb-6 w-full">
                {/* Large Letter Avatar */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#52b16a] text-white flex items-center justify-center text-3xl font-bold shadow-inner">
                  {review.initial}
                </div>
                
                {/* Name & Status */}
                <div>
                  <h3 className="text-xl font-bold text-[#112232]">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#52b16a] font-medium">
                    <CheckCircle size={16} />
                    <span>{review.status}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-[#52b16a]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={22} fill="currentColor" stroke="none" />
                ))}
              </div>
              
              {/* Review Quote */}
              <p className="text-gray-700 text-lg leading-relaxed italic grow">
                {review.quote}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}