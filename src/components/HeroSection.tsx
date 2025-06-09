import { Check, ChevronRight, CircleSlash2 } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  const line1 = "Unlock Your"
  const line2 = "Team's Potential"

  const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section className="bg-lightBg pl-6 md:pl-12 lg:pl-28 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 flex flex-col items-start lg:pr-16 mb-12 lg:mb-0">
        <div className="p-4 mb-3">
          <img
            src="./zuro-icon-green.png"
            alt="Zuro Main Icon"
            className="h-[100px] w-[100px] rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)]"
          />
        </div>

        <h1 className="font-[700] tracking-tight text-darkText text-[3.5rem] md:text-[4.25rem] leading-[1.1] ml-5 mb-6 font-inter">
          {[...line1].map((char, i) => (
            <motion.span
              key={`line1-${i}`}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={char === " " ? "inline-block w-2" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
          <br />
          {[...line2].map((char, i) => (
            <motion.span
              key={`line2-${i}`}
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: (line1.length + i) * 0.05, duration: 0.4 }}
              className={char === " " ? "inline-block w-2" : "inline-block"}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <>
          <motion.p
            className="text-gray-600 text-lg md:text-xl ml-5 mb-10 max-w-lg"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            Automate complex workflows and increase productivity in real time all
            on one powerful platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center px-8 py-4 bg-[#1B7564] text-white text-lg rounded-full shadow-md hover:bg-green-900 transition-colors">
              Get this Template
              <ChevronRight />
            </button>
            <button className="flex items-center gap-x-2 px-8 py-4 bg-white text-darkText text-lg rounded-full hover:bg-gray-50 transition-colors">
              Book a Demo
              <CircleSlash2 />
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-y-4 gap-x-12 text-darkText text-lg font-medium"
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-x-2">
              <Check />
              Real-Time Analytics
            </div>
            <div className="flex items-center gap-x-2">
              <Check />
              Seamless Integrations
            </div>
            <div className="flex items-center gap-x-2">
              <Check />
              Scalable Infrastructure
            </div>
          </motion.div>
        </>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:pl-16 relative">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-l-[2rem] p-4 lg:p-6 w-full max-w-2xl aspect-[1.2/1] flex items-center justify-center bg-white shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
        >
          <img
            src="./hero-section.png"
            alt="Product UI Mockup"
            className="w-full h-full object-contain rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
