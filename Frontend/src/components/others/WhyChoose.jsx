import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Code, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Accurate",
    description:
      "Lightning-fast processing with industry-leading accuracy rates.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Enterprise-grade security with end-to-end encryption and privacy compliance.",
  },
  {
    icon: Code,
    title: "Developer Friendly APIs",
    description:
      "RESTful APIs with comprehensive documentation and SDKs for all platforms.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Built to scale from startup to enterprise with 99.9% uptime guarantee.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Choose <span className="text-purple-500">Navriox</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Built with modern AI technology to deliver speed, security, and scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-purple-500" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
