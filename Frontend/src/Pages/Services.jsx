import React from "react";
import { motion } from "framer-motion";
import {
  ScanLine,
  ImagePlus,
  Map,
  Workflow,
  Sparkles,
} from "lucide-react";
import icon from "../assets/icon.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: icon,
    title: "AI Form Auto-Fill",
    description:
      "Automatically extract and fill form data from images & documents with precision.",
      go: "/services/autofill"
  },
  {
    icon: ScanLine,
    title: "Smart OCR & Extraction",
    description:
      "Convert scanned documents into structured, usable data instantly.",
  },
  {
    icon: ImagePlus,
    title: "AI Photo Enhancement",
    description:
      "Background removal, enhancement and professional retouching powered by AI.",
  },
  {
    icon: Map,
    title: "Document Mapping",
    description:
      "Smart document validation with real-time error detection.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline your operations.",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description:
      "Tailored AI systems built specifically for your business needs.",
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful AI tools designed to simplify, automate, and scale your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => service.go && navigate(service.go)}
                className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300" />

                <div className="relative z-10">

                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-900/30 group-hover:scale-110 transition duration-300">
                    <img src={service.icon} alt={service.title} className="w-7 h-7 object-contain" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
