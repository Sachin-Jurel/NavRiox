import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col py-45 px-6 ">
      <div className="max-w-3xl text-center space-y-5 animate-fade-in-up">
        <h1 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
          AI-Powered <span className="text-purple-500">Automation</span> for
          Forms & <br /> Photos in Seconds
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Streamline photo editing, document uploads, and autofill workflows
          using the world’s most secure cyber-automation suite.
        </p>

        <div className="flex items-center justify-center gap-5">
          <button className="group relative px-9 py-4 rounded-2xl font-semibold text-black bg-gradient-to-br from-amber-400 to-amber-600  shadow-amber-500/30 transition-all duration-300 hover:scale-[1.06] hover:shadow-amber-500/200">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
            </span>
          </button>

          <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-105">
            Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
