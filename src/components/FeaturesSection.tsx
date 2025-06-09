import { LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01.",
    title: "Real-Time Analytics",
    description:
      "Gain actionable insights with dynamic reports and custom dashboards. Track KPIs, user activity, and project progress instantly.",
  },
  {
    id: "02.",
    title: "Seamless Integrations",
    description: "",
  },
  {
    id: "03.",
    title: "Automated Workflows",
    description: "",
  },
  {
    id: "04.",
    title: "Scalable Infrastructure",
    description: "",
  },
];

function FeaturesSection() {
  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1, // stagger words by 0.1s
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="bg-[#f7f8fa] pb-20 px-6 md:px-20">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded-full text-sm font-medium mb-4">
          <div className="flex justify-center items-center bg-[#B4ff8B] h-10 w-10 rounded-full">
            <LayoutGrid />
          </div>
          <h2 className="text-lg">Features</h2>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">
          <div>Features that drive</div>
          <div>Results</div>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto bg-white rounded-3xl">
        {/* Features list */}
        <div className="bg-white rounded-3xl p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="mb-6 last:mb-0 border-b last:border-b-0 pb-6 last:pb-0"
            >
              <h3 className="text-3xl font-medium text-gray-900">
                <span className="text-gray-600 mr-2">{feature.id}</span>
                {feature.title}
              </h3>

              {feature.description && (
                <p className="text-gray-600 mt-2 text-lg leading-relaxed">
                  {feature.description.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={descriptionVariants}
                      style={{ display: "inline-block", marginRight: "6px" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Image section */}
        <div className="rounded-3xl border-[9px] border-green-900 overflow-hidden">
          <div className="w-full h-[500px] min-h-[380px] bg-[#B4ff8B]">
            <img
              src="./feature-section.png"
              alt="Feature Graphic"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
