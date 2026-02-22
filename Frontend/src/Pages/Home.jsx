import React from "react";
import Hero from "../components/others/Hero";
import Robot from "../components/ui/Robot";
import { useState } from "react";
import {
  Zap,
  Shield,
  Code,
  TrendingUp,
  Upload,
  Cpu,
  Check,
  FileOutput,
} from "lucide-react";
import { motion } from "framer-motion";
import Features from "../components/others/Features";
import Steps from "../components/others/Steps";

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

const Home = () => {
  const [activePlan, setActivePlan] = useState("free");

  const getCardStyle = (plan) =>
    activePlan === plan
      ? "border-purple-500 scale-105 shadow-xl shadow-purple-500/20 bg-gradient-to-br from-purple-600/20 to-blue-600/20"
      : "border-white/10 bg-white/5 hover:border-purple-500/40";

  return (
    <div>
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center mt-20 px-4 md:px-12">
        <div className="w-full md:mt-2 mt-20 md:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] flex justify-center">
          <Robot />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Hero />
        </div>
      </div>

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
          <Steps steps={steps} />
        </div>
      </section>

      <section className="py-28 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Simple Pricing Plans
            </h2>
            <p className="text-gray-400 text-lg">
              Choose a plan that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {["free", "starter", "pro"].map((plan, index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.03 }}
                onClick={() => setActivePlan(plan)}
                className={`cursor-pointer border rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 ${getCardStyle(plan)}`}
              >
                <h3 className="text-2xl font-semibold text-white mb-4 capitalize">
                  {plan}
                </h3>

                <p className="text-4xl font-bold text-purple-400 mb-6">
                  {plan === "free" ? "₹0" : plan === "starter" ? "₹49" : "₹99"}
                </p>

                <ul className="space-y-4 mb-8 text-gray-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    {plan === "free" && "Fill up to 3 forms"}
                    {plan === "starter" && "Fill up to 10 forms"}
                    {plan === "pro" && "Fill up to 25 forms"}
                  </li>

                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    {plan === "free" && "Basic AI autofill"}
                    {plan === "starter" && "Faster AI processing"}
                    {plan === "pro" && "Advanced AI autofill"}
                  </li>

                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-400" />
                    {plan === "free" && "Secure data storage"}
                    {plan === "starter" && "Priority support"}
                    {plan === "pro" && "Premium support"}
                  </li>
                </ul>

                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transition">
                  {plan === "free"
                    ? "Get Started"
                    : plan === "starter"
                      ? "Upgrade Now"
                      : "Go Pro"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Built with modern AI technology to deliver speed, security, and
              scalability.
            </p>
          </motion.div>

          <Features features={features} />
        </div>
      </section>
    </div>
  );
};

export default Home;
