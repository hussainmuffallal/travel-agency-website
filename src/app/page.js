// src/app/page.js
import Hero from '@/components/Hero';
import FeatureMarquee from '@/components/FeatureMarquee';
import WhyChooseUs from '@/components/WhyChooseUs';
import ReviewSection from '@/components/ReviewSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <Hero />
      <FeatureMarquee />
      <WhyChooseUs />
      
      {/* NEW SECTION ADDED HERE */}
      <ReviewSection /> 
      
      {/* You can add a Contact component here later */}
    </main>
  );
}