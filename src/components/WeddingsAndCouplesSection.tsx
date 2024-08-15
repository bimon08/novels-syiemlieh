import Image from "next/image";
import Link from "next/link";
import React from "react";

const WeddingsAndCouplesSection: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-4">
      <div className="w-full sm:w-1/2 relative">
        <Image
          src="/images/DSC-2.jpg"
          width={400}
          height={600}
          alt=""
          className="object-cover w-full h-auto"
        />
        <div className="absolute bottom-16 left-0 w-full p-6 text-center text-white">
          <h1 className="text-2xl font-bold mb-2 hover:opacity-80">
            <Link href="/weddings">WEDDINGS</Link>
          </h1>
          <div className="bg-white w-full h-[1px]"></div>
          <p className="text-sm mt-2 kumlien-400">
            INTIMATE WEDDINGS & ADVENTUROUS ELOPEMENTS
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col">
        <div className="flex-grow flex flex-col h-auto sm:h-[70%] justify-center items-center relative">
          <div className="sm:mx-0 mx-4 sm:mt-0 mt-8">
            <Image
              src="/images/wildflower-engagement-session-brin.jpg"
              width={450}
              height={450}
              alt=""
              className="object-cover"
            />
            <div className="bottom-0 left-0 w-full py-4 mt-8 sm:text-start text-center">
              <h1 className="text-2xl font-bold mb-2 text-[#968B77] hover:opacity-80">
                <Link href="/couples">COUPLES</Link>
              </h1>
              <div className="bg-black w-full h-[1px]"></div>
              <p className="text-sm mt-2 kumlien-400">
                ENGAGEMENTS & ADVENTUROUS SESSIONS
              </p>
            </div>
          </div>
        </div>
        <div className="flex  flex-col sm:flex-row bg-[#5A4B2E] h-auto sm:h-[30%] relative">
          <div className=" sm:w-2/3 relative">
            <div className="absolute sm:top-1/2 top-24  sm:left-20 left-32 transform -translate-y-1/2 text-start p-4">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2 hover:opacity-80">
                <Link href="/wedding-guides">WEDDING GUIDES</Link>
              </h1>
              <div className="bg-white w-full h-[1px] mb-4"></div>
              <p className="text-xs sm:text-sm text-white">
                NEED HELP PLANNING YOUR BIG DAY?
              </p>
            </div>
          </div>

          <div className="w-1/3 flex items-end justify-end">
            <Image
              src="/images/DSC-3.jpg"
              width={500}
              height={500}
              alt=""
              className="object-cover h-auto sm:h-[350px] w-full sm:w-[600px]"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WeddingsAndCouplesSection;
