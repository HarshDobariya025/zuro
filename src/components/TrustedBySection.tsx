import React from 'react';

const TrustedBySection: React.FC = () => {
  const logos = [
    './company-1.png',
    './company-2.png',
    './company-1.png',
    './company-2.png',
    './company-1.png',
  ];

  return (
    <section className="bg-lightBg py-36 px-4 md:px-8 text-center">
      <h2 className="text-3xl font-medium mb-8">Trusted by these companies</h2>
      <div className="bg-white h-18 rounded-2xl flex flex-wrap justify-center items-center mx-40 gap-8 md:gap-12 lg:gap-16">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="h-12 opacity-60 grayscale cursor-pointer hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;