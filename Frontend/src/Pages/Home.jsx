import React from "react";
import Hero from "../components/others/Hero";
import Model from "../components/ui/spline";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center mt-20 px-4 md:px-12">
        <div className="w-full md:mt-2 mt-20 md:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] flex justify-center">
          <Model />
        </div>
        <div className="-mt-94 sm:-mt-68 md:-mt-120 w-full flex absolute left h-15 bg-black"></div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Hero />
        </div>
      </div>
      <div className="-mt-23 w-full flex absolute left h-10 bg-black"></div>
    </div>
  );
};

export default Home;
