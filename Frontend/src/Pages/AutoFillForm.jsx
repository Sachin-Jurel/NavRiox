import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Features from "../components/others/Features";
import Steps from "../components/others/Steps";

import {
  Sparkles,
  Check,
  Target,
  Brain,
  Users,
  FileText,
  Shield,
  MousePointer,
  Download,
  Upload,
  Zap,
} from "lucide-react";

const AutoFillForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const demoFeatures = [
    "Fills 100+ fields automatically",
    "Works on 90% of websites",
    "Secure & encrypted",
    "Saves hours every week",
  ];

  const features = [
    {
      icon: Target,
      title: "Smart Field Detection",
      description: "AI recognizes and categorizes form fields accurately.",
    },
    {
      icon: Brain,
      title: "Context-Aware AI",
      description: "Understands context and fills accordingly.",
    },
    {
      icon: Users,
      title: "Multi-Profile Support",
      description: "Manage multiple profiles easily.",
    },
    {
      icon: FileText,
      title: "Resume Parsing",
      description: "Upload resume and auto extract details.",
    },
    {
      icon: Shield,
      title: "Secure Encryption",
      description: "Bank-level encryption security.",
    },
    {
      icon: MousePointer,
      title: "One-Click Autofill",
      description: "Fill entire forms instantly.",
    },
  ];

  const steps = [
    {
      icon: Download,
      title: "Install the Extension",
      description:
        "Add our lightweight extension to your browser in just one click. Compatible with Chrome, Edge, and more.",
    },
    {
      icon: Upload,
      title: "Upload Your Details Once",
      description:
        "Securely upload your information one time. Our AI learns your preferences and data patterns.",
    },
    {
      icon: Zap,
      title: "AI Instantly Fills Forms Anywhere",
      description:
        "Navigate to any website with a form. Click once, and watch as AI fills everything perfectly.",
    },
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">
                  AI-Powered Technology
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                AI-Powered Form Autofill in Seconds
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Install our smart browser extension and let AI fill forms
                instantly.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                {user ? (
                  <button
                    onClick={() =>
                      window.open("https://your-extension-link.com")
                    }
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95"
                  >
                    Install Extension
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/register")}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 active:scale-95"
                  >
                    Register to Install
                  </button>
                )}

                <button className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-purple-500/40 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95">
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1687392946857-96c2b7f94b0d"
                alt="Illustration"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-bold">
              See AI Autofill in Action
            </h2>
            <p className="text-gray-400 text-lg">
              Watch how our AI fills entire forms instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16 rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md shadow-lg"
          >
            <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center text-gray-400 text-lg">
              Animated Demo Placeholder
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-200 text-base font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

        <div className="relative container mx-auto max-w-6xl">
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

      <section className="relative py-28 px-6 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to automate form filling
            </p>
          </motion.div>

          <Features features={features} />
        </div>
      </section>
    </>
  );
};

export default AutoFillForm;
