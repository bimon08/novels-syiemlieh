// d:/Projects/code/novels-syiemlieh/src/app/page.tsx

import Enlopment from "@/components/Enlopment";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Landing() {
  return (
    <div className="mt-8 sm:mt-28  ">
      <div className="relative justify-center   items-center flex">
        <div className="flex justify-center">
          <Image
            src="/images/alesha.jpg"
            width={700}
            height={700}
            alt="hero"
            className="sm:w-[852px] w-[320px] sm:h-[800px] h-[430px] z-10 object-cover"
          />
        </div>
        <div className="absolute inset-0">
          <div className="relative justify-center   items-center flex ">
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
              <div className="text-sm text-center work-sans-400 tracking-[0.2em] text-[#5A4B2E]">
                INTIMATE WEDDINGS <br /> AND ELOPEMENTS <br /> IN UTAH AND
                WORLDWIDE
              </div>
            </div>
            <div>
              <Image
                src="/images/Landscape-Grullo-1.png"
                width={320}
                height={500}
                alt="hero"
                className="absolute sm:top-[150px] top-[20px] right-0 opacity-30 z-0 h-[250px] w-[359px] object-cover"
              />
              <Image
                src="/images/Landscape-Grullo-1.png"
                width={320}
                height={500}
                alt="hero"
                className="absolute hidden sm:flex top-[420px] left-0 opacity-30 z-0 h-[250px] w-[359px] object-cover"
              />
              <Image
                src="/images/alesha-2.jpg"
                width={320}
                height={500}
                alt="hero"
                className="absolute top-[57px] sm:left-12 left-4 z-10 sm:h-[450px] h-[180px] w-[130px] sm:w-[359px] object-cover"
              />
              <Image
                src="/images/alesha-3.jpg"
                width={1500}
                height={200}
                alt="hero"
                className="absolute sm:top-[356px] top-[200px] right-0 z-10 sm:w-[350px] w-[120px] sm:h-[250px] h-[90px] object-cover"
              />
            </div>

            <div className="absolute sm:right-[130px]  justify-center items-center  sm:top-[660px] top-[370px] z-10  sm:p-4 p-3">
              <div className="kumlien-400 sm:text-8xl text-center text-5xl text-[#F1EBE4]">
                REIMAGINE
              </div>
              <div className="flex flex-col sm:ml-28 sm:flex-row items-center justify-center">
                <span className="work-sans-400 sm:ml-28">YOUR</span>
                <span className="sm:ml-4 kumlien-400 sm:static  text-5xl sm:text-8xl text-[#B0A596]">
                  ELOPEMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <div className="flex justify-center sm:flex-row flex-col items-center">
          <p className="goudy-400 text-sm tracking-[0.1em] mt-3 mr-6">
            <span>
              You deserve the wildly unforgettable,
              <span className="sm:inline-block block mt-3">
                meaningful, love-filled
              </span>
            </span>
            <span className="mt-2 block">wedding of your dreams.</span>
            <span className="mt-2 block">
              I&apos;m here to help make that happen.
            </span>
          </p>
          <Link href="/investment" className="sm:absolute right-[180px] mt-3">
            <CustomButton text="Experience >  " />
          </Link>
        </div>{" "}
        EXPERIENCE {">"}
      </div>
    </div>
  );
}
