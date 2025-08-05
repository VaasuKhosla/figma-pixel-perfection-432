import React, { useState } from 'react';

interface PricingTabsProps {
  onTabChange?: (tab: string) => void;
}

export const PricingTabs: React.FC<PricingTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('MONTHLY');

  const tabs = ['REGULAR', 'WEEKLY', 'MONTHLY', 'YEARLY'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <nav className="z-10 flex w-full max-w-[1200px] items-stretch gap-5 text-xl text-[rgba(68,68,68,1)] font-semibold whitespace-nowrap uppercase flex-wrap justify-between mt-[58px] max-md:max-w-full max-md:mt-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`bg-white pt-[17px] pb-7 px-[45px] rounded-[100px] border-[rgba(245,184,85,1)] border-solid border-2 max-md:px-5 transition-all duration-200 hover:bg-[rgba(245,184,85,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(245,184,85,1)] ${
            activeTab === tab ? 'bg-[rgba(245,184,85,0.2)]' : ''
          }`}
          aria-pressed={activeTab === tab}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};
