import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const InvestmentTheProcess: React.FC = () => {
  return (
    <div className="py-12 px-14">
      <h2 className="text-center text-4xl font-bold mb-10 kumlien-400">
        THE PROCESS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 kumlien-400">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="text-xl font-bold mt-10">01.</span>
            <div className="relative">
              <Image
                src="/images/Icon-2-Cadet.png"
                width={180}
                height={80}
                alt="Utah Valley Bride"
                className="object-cover h-[60px] w-[30px]"
              />
            </div>
          </div>
          <p className="mb-2">CHECK OUT MY PRICING (BELOW) AND FAQ'S</p>
          <p className="mb-2">(ABOVE) AND REACH OUT THROUGH MY</p>
          <p className="mb-2">CONTACT PAGE. WE'LL CHAT A BIT AND MAKE</p>
          <p className="mb-2">SURE WE'RE A GOOD FIT AND GO OVER ALL THE</p>
          <p className="mb-2">DEETS YOU NEED TO KNOW BEFORE BOOKING</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="text-xl font-bold mt-10">02.</span>
            <div className="relative">
              <Image
                src="/images/Icon-2-Cadet.png"
                width={180}
                height={80}
                alt="Utah Valley Bride"
                className="object-cover h-[60px] w-[30px]"
              />
            </div>
          </div>
          <p className="mb-2">ONCE WE'VE NAILED DOWN A DATE AND</p>
          <p className="mb-2">LOCATION, I'LL SEND AN EMAIL THROUGH MY</p>
          <p className="mb-2">BOOKING SITE TO HAVE YOU GET THE</p>
          <p className="mb-2">CONTRACT SIGNED AND DEPOSIT PAID TO GET</p>
          <p className="mb-2">YOU OFFICIALLY ON THE CALENDAR! WE'LL</p>
          <p className="mb-2">SPEND THE WEEKS & MONTHS BEFORE YOUR</p>
          <p className="mb-2">WEDDING PLANNING AND PREPARING YOUR</p>
          <p className="mb-2">WEDDING THAT WILL BE COMPLETELY UNIQUE</p>
          <p className="mb-2">AND AUTHENTIC TO YOU!</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="text-xl font-bold mt-10">03.</span>
            <div className="relative">
              <Image
                src="/images/Icon-2-Cadet.png"
                width={180}
                height={80}
                alt="Utah Valley Bride"
                className="object-cover h-[60px] w-[30px]"
              />
            </div>
          </div>
          <p className="mb-2">WE FINALLY MAKE YOUR BIG DAY HAPPEN! YOU'LL</p>
          <p className="mb-2">GO HOME WITH GREAT MEMORIES AND I'LL SEND</p>
          <p className="mb-2">YOU THE PERFECTLY EDITED PICS TO REMIND</p>
          <p className="mb-2">YOU OF THIS DAY FOR YEARS TO COME. WE STAY</p>
          <p className="mb-2">FRIENDS FOREVER. YOU NAME YOUR DOG AFTER</p>
          <p className="mb-2">ME. LIFE IS GOOD.</p>
        </div>
      </div>
      <div className="bg-black w-full h-[1px] mt-2" />
      <div className="mt-10 flex px-20 items-center justify-center">
        <p className="text-start text-[12px] px-20 mr-20">
          Please don't hesitate to reach out with any questions! I realize a
          good majority of you have never tried to plan a wedding before which
          can be a little intimidating. Lucky for you, weddings are my
          livelihood, and I'm here to help as much as I possibly can.
        </p>
        <CustomButton text="I'M SO READY" additionalClasses="ml-20 px-10 bg-[#5C6F73]" />
      </div>
    </div>
  );
};

export default InvestmentTheProcess;
