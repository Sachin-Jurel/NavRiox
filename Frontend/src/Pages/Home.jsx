import React from "react";
import Hero from "../components/others/Hero";
import Robot from "../components/ui/Robot";
import HowItWorks from "../components/others/HowItWorks";
import WhyChoose from "../components/others/WhyChoose";

const Home = () => {
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
      <div>
        <HowItWorks />
      </div>
      <div>
        <WhyChoose />
      </div>
    </div>
  );
};

export default Home;
