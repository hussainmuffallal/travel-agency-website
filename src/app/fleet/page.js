import FleetHero from '@/components/FleetHero';
import FleetList from '@/components/FleetList';

export const metadata = {
  title: "Our Fleet | Rosary Global",
  description: "Explore our curated fleet of premium vehicles for your Sri Lankan journey.",
};

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      <FleetHero />
      <FleetList />
    </main>
  );
}