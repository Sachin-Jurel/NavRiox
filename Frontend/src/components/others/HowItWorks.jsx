import React from "react";
import { motion } from "framer-motion";
import { Upload, Cpu, FileOutput } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description:
      "Upload your documents, images, or data files to our secure platform.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description:
      "Our advanced AI algorithms analyze and process your data intelligently.",
  },
  {
    icon: FileOutput,
    title: "Get Structured Output",
    description:
      "Receive clean, structured data ready for integration into your workflow.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps to transform your workflow with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center group"
              >
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>

                  <div className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                    <Icon className="w-10 h-10 text-purple-400" />
                  </div>

                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
