import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const PatagoniaElopementSection: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/Linen-with-Cadet.png"
        layout="fill"
        objectFit="cover"
        alt="Your image description"
      />
      <div className="absolute items-center sm:justify-center sm:mt-0 mt-40  inset-0 flex flex-col md:flex-row">
        <div className="flex items-center justify-center ">
          <div className="absolute flex items-center w-full justify-center sm:left-24 sm:w-1/2">
            <Image
              src="/images/patagonia-chile-same-sex-elopement.webp"
              width={700}
              height={700}
              alt="Your image description"
              className="w-full sm:h-[550px] object-cover"
            />
          </div>
          <div className="sm:w-[460px] w-11/12 bg-gray-100 p-8 top-24  absolute sm:right-48 sm:h-[450px] h-[500px] flex flex-col sm:justify-center text-center ">
            <h2 className="sm:text-3xl text-2xl  font-bold mb-4 kumlien-400">
              AN EPIC ELOPEMENT IN PATAGONIA
            </h2>
            <p className="text-centre  goudy-300 sm:mt-0 mt-16 sm:text-[12px] text-[13px] tracking-[0.1em] space-y-0 sm:space-y-2 ">
              <span className=" block">
                "We hiked through the pouring rain to the perfect spot
              </span>{" "}
              <span className=" block">
                overlooking a glacial lake with towering mountains in the
              </span>
              <span className=" block">
                distance. I'm tellin ya...Patagonia does not suck."
              </span>
            </p>
            <Link href="/patagonia-elopement" className="mt-8">
              <Button className="work-sans-400 px-8 py-2 text-[14px] hover:bg-[#5A4B2E] bg-[#5A4B2E] text-white">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatagoniaElopementSection;
