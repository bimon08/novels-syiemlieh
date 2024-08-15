import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const PhotographerSection: React.FC = () => {
  return (
    <div className="relative sm:h-screen sm:mt-20 -mt-7 mb-28">
      <Image
        width={900}
        height={700}
        src="/images/Girl sits on rock.jpg"
        alt="Girl sits on rock"
        className="object-cover sm:h-[500px] h-[300px] w-full"
      />
      <div className="sm:absolute sm:bottom sm:left-[500px] sm:transform sm:-translate-x-1/2 -translate-y-1/4 bg-[#F1EBE4] text-center w-11/12 mx-auto sm:w-auto sm:mx-0">
        <div className="hidden sm:flex sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:absolute sm:justify-center sm:items-center sm:mb-4">
          <Image
            src="/images/Icon-1.png"
            alt="Icon"
            width={100}
            height={100}
            className="w-30 h-30"
          />
        </div>
        <h2 className="px-4 sm:px-14 text-2xl sm:text-4xl font-serif mb-6 kumlien-400 mt-6 sm:mt-12 relative sm:text-start text-center">
          THE GIRL BEHIND
          <span className="block sm:inline sm:absolute sm:transform sm:-translate-y-[1px] text-3xl sm:text-5xl antro-vectra-400">
            The Camera
          </span>
        </h2>
        <p className="px-14 goudy-300 text-[12px] tracking-[0.1em] sm:mb-8 space-y-2 sm:text-start text-center">
          <span className="mb-1 block">
            {" "}
            Utah-based elopement & intimate wedding photographer capturing love
            stories around the{" "}
          </span>
          <span className="mb-1 block"> globe.</span>
          <span className="mb-1 block">
            Can usually be found in the mountains, making really bad puns, or
            binge-watching The Office.
          </span>
          <span className="mb-1 block">
            Or all three. I love photographing couples I adore in meaningful
            places, wherever that may be.
          </span>
          <span className=" block"> Let's hang!</span>
        </p>
      </div>{" "}
      <Link
        href="/about-me"
        className="sm:absolute sm:top-[580px] sm:right-[120px] sm:mt-3 flex justify-center mt-0">
        <button className="work-sans-400 px-8 py-2 text-[14px] bg-[#5A4B2E] text-white">
          GET TO KNOW ME
        </button>
      </Link>
    </div>
  );
};

export default PhotographerSection;
