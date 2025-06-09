import React from "react";
import { motion } from "framer-motion";

const TrustedBySection: React.FC = () => {
  const logos = [
    "./company-1.png",
    "./company-2.png",
    "./company-1.png",
    "./company-2.png",
    "./company-1.png",
  ];

  // Duplicate logos array to create seamless loop
  const logosLoop = [...logos, ...logos];

  return (
    <section className="bg-lightBg py-36 px-4 md:px-8 text-center overflow-hidden w-[75vw] mx-auto">
      <h2 className="text-3xl font-medium mb-8">Trusted by these companies</h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 lg:gap-16"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {logosLoop.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-12 opacity-60 grayscale cursor-pointer hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              draggable={false}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
