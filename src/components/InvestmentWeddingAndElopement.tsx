import React from "react";
import Image from "next/image";

const InvestmentWeddingAndElopement: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="bg-[#504A32] flex flex-col items-center justify-center h-[200px] relative">
        <h1 className="text-3xl text-center text-white goudy-300 tracking-[0.1em] mb-10">
          WEDDING & ELOPEMENT A LA CARTE
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex flex-col items-center -mt-16">
        <div className="flex flex-col items-center">
          <div className="relative  w-full flex flex-col items-center justify-center">
            <Image
              src="/images/DSC-13.jpg"
              height={700}
              width={700}
              alt="Engagements"
              className="z-10 object-cover h-[600px] w-[500px]"
            />
            <h2 className="text-2xl mt-6 mb-4 text-center  tracking-[0.1em] absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black z-20 text-white">
              ENGAGEMENTS
            </h2>
          </div>
          <h2 className="text-3xl mt-6 mb-4 text-center goudy-300 tracking-[0.1em]">
            ENGAGEMENTS
          </h2>
          <p className="text-center text-[12px] goudy-300 tracking-[0.1em] px-8">
            Engagements are my very favorite way to get to know a couple before
            your wedding day!
          </p>
          <div className="flex items-center mt-4">
            <p className="text-sm goudy-300 tracking-[0.1em] mr-2">
              STARTING AT
            </p>
            <p className="text-sm goudy-300 tracking-[0.1em]">$ 550</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative  w-full flex flex-col items-center justify-center">
            <Image
              src="/images/DSC-13.jpg"
              height={700}
              width={700}
              alt="Engagements"
              className="z-10 object-cover h-[600px] w-[500px]"
            />
            <h2 className="text-2xl mt-6 mb-4 text-center  tracking-[0.1em] absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black z-20 text-white">
              ENGAGEMENTS
            </h2>
            <div className="flex flex-col items-center border w-full justify-center h-1/3 z-20 absolute bottom-0">
              {" "}
              <div className=" ">
                thrsfdfjtghndcjndcgh
              </div>
              <div className=" absolute flex items-center justify-center border h-[200px] w-[1px] right-[300px]">
                thrsfdfjtghndcjndcgh
              </div>
            </div>
          </div>
          <h2 className="text-3xl mt-6 mb-4 text-center goudy-300 tracking-[0.1em]">
            ENGAGEMENTS
          </h2>
          <p className="text-center text-[12px] goudy-300 tracking-[0.1em] px-8">
            Engagements are my very favorite way to get to know a couple before
            your wedding day!
          </p>
          <div className="flex items-center mt-4">
            <p className="text-sm goudy-300 tracking-[0.1em] mr-2">
              STARTING AT
            </p>
            <p className="text-sm goudy-300 tracking-[0.1em]">$ 550</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentWeddingAndElopement;
