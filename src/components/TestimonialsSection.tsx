import React from 'react';

interface Testimonial {
  quote: string;
  image: string;
  name: string;
  title: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Our entire organization embraced Zuro in record time. It's so user-friendly that even non-tech staff found it easy to navigate.",
      image: '/path/to/carla-brown.jpg',
      name: 'Carla Brown',
      title: 'HR Manager',
    },
    {
      quote: "We used to spend hours sorting data. With Zuro, we have analytics at our fingertips—allowing more room for innovation.",
      image: '/path/to/ahmed-sayed.jpg',
      name: 'Ahmed Sayed',
      title: 'CTO',
    },
    {
        quote: "We love how easily Zuro integrates with existing systems. It has streamlined our operations significantly.",
        image: '/path/to/robert-kim.jpg',
        name: 'Robert Kim',
        title: 'Head Of IT',
    },
    {
        quote: "Their customer support is phenomenal. The Zuro team guided us every step of the way during our transition.",
        image: '/path/to/sarah-johnson.jpg',
        name: 'Sarah Johnson',
        title: 'Director',
    },
  ];

  return (
    <section className="bg-darkGreen py-16 px-4 md:px-8 text-white">
      <div className="flex items-center mb-12">
        <img src="/path/to/green-logo-icon.svg" alt="Testimonial Icon" className="h-10 mr-3" />
        <h2 className="text-4xl font-extrabold">What Our Customers Are Saying</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-darkText flex flex-col">
            <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;