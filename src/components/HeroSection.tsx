import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <header className="bg-white flex flex-col overflow-hidden items-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/a79f4084f2394f4db875fd58e1c4b5fc/f8d3b09eaa129bf72832d148944cce1438eefc62?placeholderIfAbsent=true"
        alt="Spiritual journey background"
        className="aspect-[1.75] object-contain w-full self-stretch rounded-[0px_0px_0px_0px] max-md:max-w-full"
      />
      <div className="flex w-full max-w-[1319px] items-stretch gap-5 font-normal uppercase flex-wrap justify-between mt-1.5 max-md:max-w-full">
        <h1 className="text-[rgba(11,81,60,1)] text-[40px]">
          Elevate Your <span className="text-[rgba(208,90,105,1)]">spiritual</span> journey
        </h1>
        <p className="text-[rgba(68,68,68,1)] text-[25px] max-md:max-w-full">
          Plans designed for every seeker <br />
          from the curious to the committed.
        </p>
      </div>
    </header>
  );
};
