import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  Sparkles,
  Check,
  Camera,
  Shirt,
  Wand2,
  Download,
  Upload,
  Zap,
  Shield,
  Image as ImageIcon,
} from "lucide-react";
import Features from "../components/others/Features";
import Steps from "../components/others/Steps";

const PassportPhoto = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const demoFeatures = [
    "AI adds professional coat & suit",
    "Automatic background correction",
    "Passport-size auto crop",
    "High-resolution export",
  ];

  const features = [
    {
      icon: Shirt,
      title: "AI Coat & Suit Generator",
      description:
        "Automatically add professional coat and formal attire to your casual photos.",
    },
    {
      icon: ImageIcon,
      title: "Smart Background Replacement",
      description:
        "Convert messy backgrounds into clean passport-approved backgrounds instantly.",
    },
    {
      icon: Wand2,
      title: "AI Face Enhancement",
      description:
        "Improve lighting, sharpness, and clarity for a studio-quality look.",
    },
    {
      icon: Shield,
      title: "Official Compliance Ready",
      description:
        "Optimized dimensions for passport, visa, and ID requirements.",
    },
  ];

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description:
        "Upload any clear front-facing photo from your phone or computer.",
    },
    {
      icon: Sparkles,
      title: "AI Enhances & Styles",
      description:
        "AI adds formal coat, improves lighting, and adjusts background automatically.",
    },
    {
      icon: Download,
      title: "Download Passport Image",
      description: "Download high-resolution passport-ready image instantly.",
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
                  AI Professional Styling
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                AI Passport Photo Editor
              </h1>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Turn your casual photo into a professional passport-ready image
                with AI coat addition and smart enhancements.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                {user ? (
                  <button
                    onClick={() => navigate("/passport-editor")}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:scale-105 transition"
                  >
                    Upload Photo
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/register")}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:scale-105 transition"
                  >
                    Register to Use
                  </button>
                )}
              </div>
            </motion.div>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                alt="Passport AI"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">What You Get</h2>
        </div>

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
      </section>

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

export default PassportPhoto;
