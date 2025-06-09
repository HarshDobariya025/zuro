import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How long is the free trial?',
      answer: 'Our free trial lasts for 14 days, giving you full access to all features to explore and experience Zuro.',
    },
    {
      question: 'What happens after my trial ends?',
      answer: 'After your trial ends, your account will be paused. You can then choose to subscribe to one of our paid plans to continue using Zuro.',
    },
    {
      question: 'Do you offer an annual billing discount?',
      answer: 'Yes, we offer a significant discount for annual billing compared to monthly subscriptions. Please refer to our pricing page for details.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We prioritize your data security with industry-standard encryption, regular backups, and compliance with privacy regulations.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-lightBg py-16 px-4 md:px-8 text-darkText">
      <div className="flex items-center justify-center mb-12">
        <img src="/path/to/faq-icon.svg" alt="FAQ Icon" className="h-10 mr-3" />
        <h2 className="text-4xl font-extrabold text-center">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <button
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span className="text-2xl font-bold">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-6 pt-0 border-t border-subtleGray">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;