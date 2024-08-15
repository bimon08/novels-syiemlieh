import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection: React.FC = () => {
  return (
    <div className="relative w-full h-auto sm:h-70">
      <Image
        src="/images/california-coast-elopement-at-sunset-slider-2.jpg"
        width={700}
        height={700}
        alt="hero"
        className="w-full h-[300px] sm:h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-8">
        <h2 className="text-4xl sm:text-8xl font-bold mb-4 antro-vectra-400">
          alrighty then
        </h2>
        <p className="font-bold text-xl sm:text-3xl tracking-[0.1em] work-sans-400">
          <span className="block">READY TO MAKE YOUR DREAM</span>{" "}
          <span className="block">WEDDING A REALITY?</span>
        </p>
        <p className="mt-6 sm:mt-10 font-bold text-sm sm:text-md work-sans-400 space-y-2">
          <span className="block">
            HEAD ON OVER TO MY CONTACT PAGE TO SHOOT ME A MESSAGE
          </span>{" "}
          <span className="block">AND LET'S MAKE SOME MAGIC HAPPEN!</span>
        </p>{" "}
        <Link href="/contact" className="mt-6 sm:mt-8">
          <Button className="work-sans-400 px-4 sm:px-8 py-2 text-[12px] sm:text-[14px] hover:bg-[#5A4B2E] bg-[#a79a81] text-white">
            LET'S GET MARRIED
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionSection;
