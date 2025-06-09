import { LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
    description:
      "Connect with popular tools like Slack, Google Workspace, Salesforce, and more. No need to migrate data—StreamlinePro adapts to your existing workflow.",
  },
  {
    id: "03.",
    title: "Automated Workflows",
    description:
      "Eliminate repetitive tasks by automating processes. Set triggers, define actions, and watch your operations run on autopilot.",
  },
  {
    id: "04.",
    title: "Scalable Infrastructure",
    description:
      "Our cloud-based architecture grows with your business. Handle peak workloads without worrying about downtime or performance bottlenecks.",
  },
];

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveFeature((prev) => (prev === index ? null : index));
  };

  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10,
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
              className="mb-6 last:mb-0 border-b last:border-b-0 pb-6 last:pb-0 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center justify-between">
                <span>
                  <span className="text-gray-600 mr-2">{feature.id}</span>
                  {feature.title}
                </span>
                <span className="text-2xl">{activeFeature === index ? "−" : "+"}</span>
              </h3>

              {activeFeature === index && (
                <p className="text-gray-600 mt-2 text-lg leading-relaxed flex flex-wrap">
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
