import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const InvestmentHappyCouples = (props: Props) => {
  const testimonials = [
    {
      text: "Ashley, you are INCREDIBLE. I felt like we instantly clicked and honestly, it felt like we eloped with our best friend (not just a photographer. Our images are quite literally perfect and second to none. It's not because of us, it's because of the love Ashley put into each shot. The details she captured were immaculate, really. There are no words to describe how thankful we are to have had you be a part of our adventure.",
      author: "Selena & Jonathan",
    },
    {
      text: "Ashley, you are INCREDIBLE. I felt like we instantly clicked and honestly, it felt like we eloped with our best friend (not just a photographer. Our images are quite literally perfect and second to none. It's not because of us, it's because of the love Ashley put into each shot. The details she captured were immaculate, really. There are no words to describe how thankful we are to have had you be a part of our adventure.",
      author: "Selena & Jonathan",
    },
    {
      text: "Ashley, you are INCREDIBLE. I felt like we instantly clicked and honestly, it felt like we eloped with our best friend (not just a photographer. Our images are quite literally perfect and second to none. It's not because of us, it's because of the love Ashley put into each shot. The details she captured were immaculate, really. There are no words to describe how thankful we are to have had you be a part of our adventure.",
      author: "Selena & Jonathan",
    },
  ];

  return (
    <div className="relative mt-44 items-center flex justify-center flex-col text-4xl font-bold">
      <div className="absolute top-[-130px] z-20 text-[#B0A596] text-center w-[1000px] h-[700px]">
        <h1>HAPPY COUPLES</h1>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-[#F1EBE4] opacity-50 z-20"></div>
        <Image
          src="/images/wildflower-engagement-session-lara.jpg"
          width={1200}
          height={200}
          alt="Utah Mountain Elopement"
          className="z-10 object-cover h-[700px] w-[1200px]"
        />
      </div>
      <div className="flex justify-center">
        <div className="absolute top-[-50px] z-20 text-white text-center w-[1000px] bg-[#242527] p-8 h-[700px]">
          <div className="flex space-x-8 py-[50px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/3 flex items-center justify-center">
                <p className="work-sans-400 text-sm mt-8 goudy-300 tracking-[0.1em] leading-relaxed text-center px-10">
                  "{testimonial.text}" - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[-20px] z-20">
          <CustomButton text="JOIN THE CLUB" additionalClasses="bg-[#B0A596]" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentHappyCouples;
