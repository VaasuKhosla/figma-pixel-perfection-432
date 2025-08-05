import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PricingTabs } from '@/components/PricingTabs';
import { PricingCards } from '@/components/PricingCards';
import { Footer } from '@/components/Footer';

const Index = () => {
  const handleTabChange = (tab: string) => {
    console.log('Selected pricing tab:', tab);
    // Implement tab change logic here if needed
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center min-h-screen">
      <HeroSection />
      
      <main className="w-full flex flex-col items-center">
        <PricingTabs onTabChange={handleTabChange} />
        <PricingCards />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
