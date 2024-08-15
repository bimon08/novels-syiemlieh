// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { Button } from "@/components/ui/button";

// const Featured = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen gap-16 bg-[#F5EBE0]">
//         <div className="text-4xl  translate-y-[-70px] antro-vectra-400">
//           featured
//           <span className="work-sans-400 text-[12px]"> POSTS </span>
//         </div>
//         <div className="flex justify-center gap-8 kumlien-400">
//           <div className="relative flex flex-col items-center">
//             <Image
//               src="/images/zion-national.jpg"
//               width={900}
//               height={700}
//               alt="Zion National Park, Utah Elopement"
//               className="w-[400px] h-[242px] object-cover translate-y-[-70px]" // add translate-y-[-20px] to move the image up
//             />
//             <div className="absolute bottom-0 flex flex-col items-center bg-[#B0A596] h-[200px] w-[350px] text-center p-4 translate-y-1/2">
//               <div className="text-xl">
//                 ZION NATIONAL
//                 <br /> PARK, UTAH
//                 <br /> ELOPEMENT
//               </div>
//               <span>Selena & Jonathan</span>
//               <br />
//               <span className=" cursor-pointer">VIEW POST</span>
//             </div>
//           </div>
//           <div className="relative flex flex-col items-center">
//             <Image
//               src="/images/DSC.jpg"
//               width={900}
//               height={700}
//               alt="How to Elope in Utah"
//               className="w-[400px] h-[242px] object-cover translate-y-[-70px]" // add translate-y-[-20px] to move the image up
//             />
//             <div className="absolute bottom-0 flex flex-col items-center bg-[#B0A596] h-[200px] w-[350px] text-center p-4 translate-y-1/2">
//               <div className="text-xl">
//                 HOW TO ELOPE
//                 <br /> IN
//                 <br /> UTAH
//               </div>
//               <br />
//               <span className=" cursor-pointer">VIEW POST</span>
//             </div>
//           </div>
//           <div className="relative flex flex-col items-center">
//             <Image
//               src="/images/big-sur-intimate-wedding-slider.jpg"
//               width={900}
//               height={700}
//               alt="Big Sur, California Elopement Wedding"
//               className="w-[400px] h-[242px] object-cover translate-y-[-70px]" // add translate-y-[-20px] to move the image up
//             />
//             <div className="absolute bottom-0 flex flex-col items-center bg-[#B0A596] h-[200px] w-[350px] text-center p-4 translate-y-1/2">
//               <div className="text-xl">
//                 BIG SUR, CALIFORNIA
//                 <br />
//                 ELOPEMENT
//                 <br /> WEDDING
//               </div>
//               <span>Patrick & Leslie</span>
//               <br />
//               <span className="text-[14px] cursor-pointer">VIEW POST</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <GirlSitsOnRock />
//       <Featured2 />
//       <KindWords />
//       <KindWords2 />
//       <AlrightThen />
//     </>
//   );
// };
// const GirlSitsOnRock = () => {
//   return (
//     <div className="relative h-screen">
//       <Image
//         width={900}
//         height={700}
//         src="/images/Girl sits on rock.jpg"
//         alt="Girl sits on rock"
//         className="object-cover h-[500px] w-full"
//       />
//       <div className="absolute bottom bg-[#F1EBE4] left-[500px] transform -translate-x-1/2 -translate-y-1/2  text-center">
//         <div className="flex transform -translate-x-1/2 -translate-y-1/2  absolute justify-center items-center mb-4">
//           <Image
//             src="/images/Icon-1.png"
//             alt="Icon"
//             width={100}
//             height={100}
//             className="w-30 h-30"
//           />
//         </div>
//         <h2 className="text-start px-14 text-4xl font-serif mb-6 kumlien-400 mt-12">
//           THE GIRL BEHIND{" "}
//           <span className="text-5xl antro-vectra-400 transform -translate-y-[1px ] absolute">
//             The Camera
//           </span>
//         </h2>
//         <p className="text-start px-14 goudy-300 text-[12px] tracking-[0.1em]  mb-8 space-y-2 ">
//           <span className="mb-1 block">
//             {" "}
//             Utah-based elopement & intimate wedding photographer capturing love
//             stories around the{" "}
//           </span>
//           <span className="mb-1 block"> globe.</span>
//           <span className="mb-1 block">
//             Can usually be found in the mountains, making really bad puns, or
//             binge-watching The Office.
//           </span>
//           <span className="mb-1 block">
//             Or all three. I love photographing couples I adore in meaningful
//             places, wherever that may be.
//           </span>
//           <span className="mb-1 block"> Let's hang!</span>
//         </p>
//       </div>{" "}
//       <Link
//         href="/about-me"
//         className="sm:absolute top-[580px] right-[120px] mt-3">
//         <Button className="work-sans-400 px-8 py-2 text-[14px] bg-[#5A4B2E] text-white">
//           GET TO KNOW ME
//         </Button>
//       </Link>
//     </div>
//   );
// };
// const Featured2 = () => {
//   return (
//     <div className="flex mt-4 ">
//       <div className="w-1/2 border relative">
//         <Image
//           src="/images/DSC-2.jpg"
//           width={400}
//           height={600}
//           alt=""
//           className="object-cover w-full h-auto"
//         />{" "}
//         <div className="absolute bottom-16 left-0 w-full  p-6 text-center text-white">
//           <h1 className="text-2xl font-bold mb-2 hover:opacity-80">
//             <Link href="/weddings">WEDDINGS</Link>
//           </h1>
//           <div className="bg-white w-full h-[1px] "></div>

//           <p className="text-sm mt-2 kumlien-400">
//             INTIMATE WEDDINGS & ADVENTUROUS ELOPEMENTS
//           </p>
//         </div>
//       </div>
//       <div className="w-1/2 border flex flex-col">
//         <div className="flex-grow flex flex-col h-[70%] justify-center items-center relative">
//           <div>
//             <Image
//               src="/images/wildflower-engagement-session-brin.jpg"
//               width={450}
//               height={450}
//               alt=""
//               className="object-cover "
//             />
//             <div className=" bottom-0 left-0 w-full py-4 mt-8 text-start">
//               <h1 className="text-2xl font-bold mb-2 text-[#968B77] hover:opacity-80">
//                 <Link href="/couples">COUPLES</Link>
//               </h1>
//               <div className="bg-black w-full h-[1px] "></div>
//               <p className="text-sm mt-2 kumlien-400">
//                 ENGAGEMENTS & ADVENTUROUS SESSIONS
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center bg-[#5A4B2E] h-[30%] relative">
//           <div className="flex-1 relative">
//             <div className="absolute top-1/2 left-20 transform -translate-y-1/2 text-start p-4">
//               <h1 className="text-2xl font-bold text-white mb-2 hover:opacity-80">
//                 <Link href="/wedding-guides">WEDDING GUIDES</Link>
//               </h1>
//               <div className="bg-white w-full h-[1px] mb-4"></div>
//               <p className="text-sm text-white">
//                 NEED HELP PLANNING YOUR BIG DAY?
//               </p>
//             </div>
//           </div>
//           <div className="w-1/3 flex absolute bottom-0 right-0 items-end justify-end">
//             <Image
//               src="/images/DSC-3.jpg"
//               width={500}
//               height={500}
//               alt=""
//               className="object-cover h-[350px] w-[600px]"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const KindWords = () => {
//   return (
    // <div className="flex flex-col items-center justify-center mt-20 gap-16 bg-[#F5EBE0] text-center text[#5C6F73]">
    //   <p className="text-6xl kumlien-400">KIND WORDS</p>
    //   <p className="text-centre px-14 goudy-300 text-[12px] tracking-[0.1em] space-y-1 ">
    //     <span className=" block">
    //       "AMAZING! Seriously, speechlessly stunning. It's rare to find a
    //       photographer that sends you final photos where you love
    //     </span>
    //     <span className=" block">
    //       and are impressed with every single one of them. But even a year later
    //       I STILL look and post mine in complete AWE of
    //     </span>{" "}
    //     <span className=" block">
    //       how they came out. Amazing raw talent, amazing personality. I
    //       literally wouldn't book anyone else."
    //     </span>
    //   </p>
    //   <p className="text-5xl antro-vectra-400">- Al Fox Carraway</p>
    //   <div className="bg-black mx-14 w-[1000px] h-[1px] mb-4"></div>
    // </div>
//   );
// };
// export default Featured;

// const KindWords2 = () => {
//   return (
    // <div className="relative h-screen">
    //   <Image
    //     src="/images/Linen-with-Cadet.png"
    //     layout="fill"
    //     objectFit="cover"
    //     alt="Your image description"
    //   />
    //   <div className="absolute items-center justify-center inset-0 flex flex-col md:flex-row">
    //     <div className="flex items-center justify-center ">
    //       <div className="absolute flex items-center justify-center left-24 w-1/2">
    //         <Image
    //           src="/images/patagonia-chile-same-sex-elopement.webp"
    //           width={700}
    //           height={700}
    //           alt="Your image description"
    //           className="w-full h-[550px] object-cover"
    //         />
    //       </div>
    //       <div className="w-[460px]  bg-gray-100 p-8 absolute right-48 h-[500px] flex flex-col justify-center text-center ">
    //         <h2 className="text-4xl font-bold mb-4 kumlien-400">
    //           AN EPIC ELOPEMENT IN PATAGONIA
    //         </h2>
    //         <p className="text-centre  goudy-300 text-[12px] tracking-[0.1em] space-y-2 ">
    //           <span className=" block">
    //             "We hiked through the pouring rain to the perfect spot
    //           </span>{" "}
    //           <span className=" block">
    //             overlooking a glacial lake with towering mountains in the
    //           </span>
    //           <span className=" block">
    //             distance. I'm tellin ya...Patagonia does not suck."
    //           </span>
    //         </p>
    //         <Link href="/patagonia-elopement" className="mt-8">
    //           <Button className="work-sans-400 px-8 py-2 text-[14px] hover:bg-[#5A4B2E] bg-[#5A4B2E] text-white">
    //             Read More
    //           </Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// const AlrightThen = () => {
//   return (
    // <div className="relative w-full h-70">
    //   <Image
    //     src="/images/california-coast-elopement-at-sunset-slider-2.jpg"
    //     width={700}
    //     height={700}
    //     alt="hero"
    //     className="w-full h-[500px] object-cover"
    //   />
    //   <div className="absolute items-center justify-center inset-0 flex flex-col text-center   text-white">
    //     <h2 className="text-8xl font-bold mb-4 antro-vectra-400">
    //       alrighty then
    //     </h2>
    //     <p className="text-centre  font-bold text-3xl tracking-[0.1em] work-sans-400">
    //       <span className=" block">READY TO MAKE YOUR DREAM</span>{" "}
    //       <span className=" block">WEDDING A REALITY?</span>
    //     </p>
    //     <p className="text-centre mt-10 font-bold text-md  work-sans-400 space-y-2">
    //       <span className=" block">
    //         HEAD ON OVER TO MY CONTACT PAGE TO SHOOT ME A MESSAGE
    //       </span>{" "}
    //       <span className=" block">AND LET'S MAKE SOME MAGIC HAPPEN!</span>
    //     </p>{" "}
    //     <Link href="/contact" className="mt-8">
    //       <Button className="work-sans-400 px-8 py-2 text-[14px] hover:bg-[#5A4B2E] bg-[#a79a81] text-white">
    //         LET'S GET MARRIED
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
//   );
// };

import React from "react";
import PhotographerSection from "./PhotographerSection";
import WeddingsAndCouplesSection from "./WeddingsAndCouplesSection";
import TestimonialSection from "./TestimonialSection";
import PatagoniaElopementSection from "./PatagoniaElopementSection";
import CallToActionSection from "./CallToActionSection";
import FeaturedPostsSection from "./FeaturedPostsSection";

const FeaturedPage: React.FC = () => {
  return (
    <>
      <FeaturedPostsSection />
      <PhotographerSection />
      <WeddingsAndCouplesSection />
      <TestimonialSection />
      <PatagoniaElopementSection />
      <CallToActionSection />
    </>
  );
};

export default FeaturedPage;
