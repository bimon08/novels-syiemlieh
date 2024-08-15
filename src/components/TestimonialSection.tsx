import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:mt-20 mt-4 gap-8 sm:gap-16 bg-[#F5EBE0] text-center text-[#5C6F73] py-8 sm:py-16">
      <p className="text-4xl sm:text-6xl kumlien-400">KIND WORDS</p>
      <p className="text-center px-4 sm:px-14 goudy-300 text-[12px] sm:text-[14px] tracking-[0.1em] space-y-1">
        <span className="block">
          "AMAZING! Seriously, speechlessly stunning. It's rare to find a
          photographer that sends you final photos where you love
        </span>
        <span className="block">
          and are impressed with every single one of them. But even a year later
          I STILL look and post mine in complete AWE of
        </span>{" "}
        <span className="block">
          how they came out. Amazing raw talent, amazing personality. I
          literally wouldn't book anyone else."
        </span>
      </p>
      <p className="text-3xl sm:text-5xl antro-vectra-400">- Al Fox Carraway</p>
      <div className="bg-black mx-4 sm:mx-14 w-11/12 sm:w-[1000px] max-w-full h-[1px] mb-4"></div>
    </div>
  );
};

export default TestimonialSection;
