import React from 'react';

interface PricingCard {
  price: number;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const pricingData: PricingCard[] = [
  {
    price: 10,
    period: 'per month',
    features: [
      '1 Astrology or Vaastu',
      '',
      'Consultation (30 Mins)​',
      '',
      'Basic Kundli Analysis or question-based reading​',
      '',
      'Remedy Suggestion',
      ' ​',
      'WhatsApp Support (24hrs)'
    ],
    highlighted: true
  },
  {
    price: 25,
    period: 'per month',
    features: [
      '2 Consultations (Astrology or Vaastu or Aura Scan)​',
      '',
      '1 Tarot or Crystal Guidance Session​',
      '​',
      'WhatsApp Chat Support for 7 days​',
      '',
      '1 Personalised Daily Ritual (based on your chart)​',
      '',
      'Basic Remedy Guidance'
    ]
  },
  {
    price: 45,
    period: 'per month',
    features: [
      '4 Consultations (1/week) – Choice of Astrology, Vaastu, Aura or Tarot​',
      '',
      'In-depth Kundli Analysis or Vaastu Layout Review​',
      '',
      'Aura & Crystal Scanning (1 session)​',
      '',
      'Customized Remedies (YANTRA/ Gemstone / Mantra PDF)​',
      '',
      'Priority Appointment Slots​',
      '​',
      'WhatsApp + Phone Support (Limited hours)​',
      '',
      '10% Discount on Products/Crystals​'
    ]
  },
  {
    price: 45,
    period: 'per month',
    features: [
      '12 Major Consultations (1/month + 4 bonus seasonal consults)​',
      '',
      'Full Kundli Reading + Yearly Horoscope​',
      '',
      'Complete Vaastu Analysis (1 Residential + 1 Commercial Space)​',
      '',
      'Aura & Crystal Scanning (Quarterly)​',
      '',
      '1 Personalized Ritual Kit​',
      '',
      '20% Discount on Workshops, Crystals, and Products​',
      '',
      'WhatsApp & Call Support (Dedicated hours)​',
      '',
      'Early Access to Events + Free Entry to 1 Workshop'
    ]
  }
];

export const PricingCards: React.FC = () => {
  const handleGetStarted = (price: number) => {
    console.log(`Starting subscription for $${price}/month`);
    // Implement subscription logic here
  };

  return (
    <section className="w-full max-w-[1321px] max-md:max-w-full mt-[31px]">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {pricingData.map((card, index) => (
          <article
            key={index}
            className={`w-3/12 max-md:w-full max-md:ml-0 animate-fade-in`}
            style={{ animationDelay: `${index * 1}s`, animationFillMode: 'both' }}
          >
            <div
              className={`flex flex-col items-center text-[rgba(68,68,68,1)] font-semibold uppercase w-full pt-10 px-[18px] rounded-[45px] border-[rgba(245,184,85,1)] border-solid border-2 max-md:mt-[31px] max-md:pr-5 transition-colors duration-300 hover:bg-[rgba(245,184,85,1)] ${
                card.highlighted
                  ? 'bg-[rgba(245,184,85,1)]'
                  : 'bg-white'
              }`}
            >
              <div className="text-[25px] text-center">
                <span className="text-[32px] text-[rgba(68,68,68,1)]">
                  ${card.price}
                </span>
                <br />
                <span className="text-[16px]">{card.period}</span>
              </div>
              
              <div className="text-lg self-stretch mt-8 font-normal">
                {card.features.map((feature, featureIndex) => (
                  <React.Fragment key={featureIndex}>
                    {feature}
                    {featureIndex < card.features.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
              
              <button
                onClick={() => handleGetStarted(card.price)}
                className={`z-10 flex w-[170px] max-w-full flex-col text-xs justify-center mt-[19px] px-[18px] py-3.5 rounded-[100px] border-solid border-2 transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  card.highlighted
                    ? 'bg-[rgba(208,90,105,1)] text-white font-bold border-[rgba(208,90,105,1)] focus:ring-[rgba(208,90,105,1)]'
                    : 'bg-white text-[rgba(68,68,68,1)] font-normal border-[rgba(208,90,105,1)] focus:ring-[rgba(208,90,105,1)]'
                }`}
              >
                Get started now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
