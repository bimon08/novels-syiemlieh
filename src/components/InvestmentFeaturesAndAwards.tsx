import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import CustomButton from "./CustomButton";

const InvestmentFeaturesAndAwards = () => {
  return (
    <div className="flex mx-20 mt-20 flex-col goudy-300">
      <h1 className="text-3xl ">FEATURES & AWARDS</h1>
      <div className="flex mt-10 space-x-10 justify-center items-center">
        <Image
          src="/images/junebug-weddings-wedding-photographers.png"
          width={180}
          height={180}
          alt="Junebug Weddings Wedding Photographers"
          className="z-20 object-cover h-[130px] w-[130px]"
        />
        <Image
          src="/images/huffington-post-logo.png"
          width={80}
          height={80}
          alt="The Huffington Post"
          className="z-20 object-cover h-[130px] w-[130px]"
        />
        <Image
          src="/images/destination2019.png"
          width={120}
          height={120}
          alt="The Best of the Best Destination 2019"
          className="z-20 object-cover h-[130px] w-[100px]"
        />
        <Image
          src="/images/utah-valley-bride.png"
          width={180}
          height={80}
          alt="Utah Valley Bride"
          className="z-20 object-cover h-[40px] w-[150px]"
        />
        <Image
          src="/images/LLFBadge.png"
          width={100}
          height={100}
          alt="Featured on LooksLikeFilm"
          className="z-20 object-cover h-[130px] w-[130px]"
        />
        <Image
          src="/images/wandering.png"
          width={180}
          height={80}
          alt="Wandering Photographers"
          className="z-20 object-cover h-[130px] w-[130px]"
        />
        <Image
          src="/images/bridescom-badge.png"
          width={180}
          height={60}
          alt="As Featured on Brides"
          className="z-20 object-cover h-[130px] w-[130px]"
        />
      </div>
      <div className="flex mt-10 justify-center">
        <h1 className="text-center">WHAT TO EXPECT</h1>
      </div>
      <div className="flex mt-5 justify-center flex-col">
        <p className="text-center mx-auto w-[600px] mb-5">
          I am passionate about elopements. I fully believe that the smallest
          weddings can be the best ones, and so I specialize in elopements and
          intimate weddings with under 50 guests. Whether it’s running off to
          Santorini or saying your vows at that gorgeous lake by your house, I
          would love to capture the intimacy, emotion, and happiness of your
          day. Whatever your vision, I believe that every moment of your wedding
          day has beauty and deserves to be documented. I am here to help you
          have a relaxed, beautiful, and FUN wedding day so you can get back to
          focusing on what really matters: each other.
        </p>
        <p className="text-center mx-auto w-[600px] mb-5">
          If you are just looking for a photographer to show up and get those
          typical stiff prom poses where you’re just smiling at the camera all
          the time…we honestly might not be the best fit. And if you’re just
          shopping around trying to find the cheapest Utah photographer, you
          probably won’t value what I have to offer. Which is cool, because
          let’s be real, I want you to find the photographer that best meets
          your needs! But I want to be more than just another wedding vendor. I
          wanna be there to capture who you really are and what your
          relationship feels like.
        </p>
        <p className="text-center mx-auto w-[600px]">
          ​So. If you’re fueled by fresh mountain air and laughing till you
          *almost* pee, then keep reading. I pinky promise to make our time
          together as easy and fun as I can, even though I know you’ll show up
          saying that you’re “so awkward in front of a camera”. By the end of it
          you won’t even notice there’s a camera and you’ll just be so grateful
          for that weird awesome human you’re about to marry.
        </p>
      </div>
     <CustomButton text="Let's Talk"/>
    </div>
  );
};

export default InvestmentFeaturesAndAwards;
