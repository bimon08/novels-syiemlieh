import Image from "next/image";
import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Enlopment: React.FC = () => {
  const renderContent = (
    imageUrl: string,
    imageAlt: string,
    imageClassName: string,
    imageStyle?: React.CSSProperties,
    isSmallScreen?: boolean
  ) => (
    <div
      className={cn(
        "flex",
        "items-center",
        "justify-center",
        "h-screen",
        "border",
        isSmallScreen ? "flex-col sm:hidden" : "sm:flex sm:flex-row hidden"
      )}>
      <div className="relative flex">
        <div>
          <Image
            src={imageUrl}
            width={900}
            height={700}
            alt={imageAlt}
            className={imageClassName}
            style={imageStyle}
          />
        </div>
        <div className="absolute z-10 flex sm:flex-row flex-col w-full h-full">
          <div className="items-center flex sm:w-1/2 justify-center">
            <Image
              src="/images/Pine.png"
              width={900}
              height={700}
              alt="pine"
              className="w-[400px] h-[342px] z-10 p-6"
            />
          </div>
          <div className="z-10 flex items-center justify-center sm:w-1/2">
            <p className="text-center flex items-center flex-col p-6 text-white">
              <span className="work-sans-500 text-3xl extra-bold">
                HEY YOU <span className="sm:inline-block block">BEAUTIFUL</span>{" "}
                HUMAN!
              </span>
              <span className="mt-6 goudy-300 text-sm">
                If you're looking for something a little off the beaten path,
                you're in
              </span>
              <span className="mt-3 goudy-300 text-sm">
                the right place. Let's create something beautiful, and uniquely
              </span>
              <span className="mt-3 goudy-300 text-sm">yours.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderContent(
        "/images/paper.png",
        "paper",
        "w-[1200px] h-[442px] object-cover z-0"
      )}
      {renderContent(
        "/images/paper2.jpg",
        "paper",
        "w-[350px] h-[650px] object-cover z-0",
        { objectPosition: "left", backgroundSize: "200%" },
        true
      )}
    </>
  );
};

export default Enlopment;
