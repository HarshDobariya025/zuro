// src/App.tsx
import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import TrustedBySection from './components/TrustedBySection';
import FeaturesSection from './components/FeaturesSection';
import WhyChooseZuroSection from './components/WhyChooseZuroSection';
import PricingSection from './components/PricingSection';
// import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
// import FAQSection from './components/FAQSection';
import NewsletterSection from './components/NewsletterSection';

const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <WhyChooseZuroSection />
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <TeamSection />
      <BlogSection />
      {/* <FAQSection /> */}
      <NewsletterSection />
    </Layout>
  );
};

export default App;