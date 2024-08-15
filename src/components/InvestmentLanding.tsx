import Image from "next/image";
import React from "react";

const InvestmentLanding = () => {
  return (
    <div className="bg-[#5A4B2E] min-h-[120vh] flex justify-center items-center">
      <div className="relative my-20">
        <div className="relative my-24">
          <Image
            src="/images/elopement-with-horses-slider-1-1.jpg"
            width={800}
            height={400}
            alt="hero"
            className="z-10 object-cover relative right-[-180px]"
          />
          <div className="absolute top-[-60px] left-[-230px] z-20 text-white text-center">
            <h1 className="text-8xl kumlien-400 text-[#B0A596] mb-6">
              PRICING &
            </h1>
            <span className="work-sans-400 text-5xl">FREQUENTLY</span>
            <p className="work-sans-400 text-5xl text-[#B0A596]">ASKED</p>
            <span className="work-sans-400 text-5xl mb-4">QUESTION</span>
            <p className="work-sans-400 text-lg mt-8 leading-relaxed text-start w-[300px] ml-10">
              OKAY FRIENDS. SO YOU'VE LOOKED OVER MY PAGE, YOU'VE DECIDED YOU
              CAN GET DOWN WITH MY PHOTOGRAPHY STYLE AND BAD JOKES, AND YOU WANT
              TO KNOW EXACTLY WHAT YOU'RE GETTING YOURSELF INTO. LET'S GET DOWN
              TO THE NITTY GRITTIES. WE'LL TALK PRICING AND WHAT YOU CAN EXPECT
              FROM ME. SOUND GOOD? LET'S DO THIS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentLanding;
