import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const InvestmentDestinationWeddings: React.FC = () => {
  return (
    <>
      <section className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative h-full">
            <Image
              src="/images/big-sur-intimate-wedding-slider.jpg"
              layout="fill"
              objectFit="cover"
              alt="pine"
              className="z-10"
            />
          </div>
          <div className="flex flex-col justify-start items-start bg-[#5A4B2E] p-16">
            <h1 className="text-4xl mb-4 text-white text-start goudy-300 tracking-[0.1em]">
              WORLDWIDE DESTINATION INTIMATE WEDDINGS & ELOPEMENTS
            </h1>
            <h2 className="text-xl text-white mb-2 text-start goudy-300 tracking-[0.1em]">
              Customized Package Available
            </h2>
            <ul className="list-none text-[12px] text-white text-start pl-4 goudy-300 tracking-[0.1em]">
              <li className="mb-2">
                - Wedding coverage anywhere in the world! Maldives, Iceland, you
                name it
              </li>
              <li className="mb-2">
                - 100+ page elopement resource guide that includes tips for
                picking a ceremony location, how to tell your family you're
                eloping, how to choose activities for
              </li>
              <li className="mb-2">
                - Custom vendor recommendation guide based on location
              </li>
              <li className="mb-2">
                - Lodging recommendations (aka insanely cool Airbnb stays)
              </li>
              <li className="mb-2">
                - Unlimited communication by phone and email
              </li>
              <li className="mb-2">- Timeline crafting guidance</li>
              <li>- Location scouting</li>
            </ul>
            <h2 className="text-xl text-white text-start goudy-300 mt-8 tracking-[0.1em]">
              Starting At
            </h2>
            <h2 className="text-xl text-white mb-2 text-start goudy-300 mt-1 tracking-[0.1em]">
              $6000
            </h2>
            <CustomButton text="Contact" additionalClasses="bg-[#B0A596]" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex-row-reverse">
          <div className="flex flex-col justify-start items-start bg-[#5A4B2E] p-16">
            <h1 className="text-4xl mb-4 text-white text-start goudy-300 tracking-[0.1em]">
              ANYWHERE IN THE USA INTIMATE WEDDINGS & ELOPEMENTS
            </h1>
            <h2 className="text-xl text-white mb-2 text-start goudy-300 tracking-[0.1em]">
              Customized Package Available
            </h2>
            <ul className="list-none text-[12px] text-white text-start pl-4 goudy-300 tracking-[0.1em]">
              <li className="mb-2">
                - Wedding coverage anywhere in the United States, travel fees
                included
              </li>
              <li className="mb-2">
                - 100+ page elopement resource guide that includes tips for
                picking a ceremony location, how to tell your family you're
                eloping, how to choose activities for your day, what to pack,
                and more!
              </li>
              <li className="mb-2">
                - Custom vendor recommendation guide based on location
              </li>
              <li className="mb-2">
                - Lodging recommendations (aka insanely cool Airbnb stays)
              </li>
              <li className="mb-2">
                - Unlimited communication by phone and email
              </li>
              <li className="mb-2">- Timeline crafting guidance</li>
              <li>- Location scouting</li>
            </ul>
            <h2 className="text-xl text-white text-start goudy-300 mt-8 tracking-[0.1em]">
              Starting At
            </h2>
            <h2 className="text-xl text-white mb-2 text-start goudy-300 mt-1 tracking-[0.1em]">
              $4800
            </h2>
            <CustomButton text="Contact" additionalClasses="bg-[#B0A596]" />
          </div>
          <div className="relative h-full">
            <Image
              src="/images/DSC-10.jpg"
              layout="fill"
              objectFit="cover"
              alt="pine"
              className="z-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative h-full">
            <Image
              src="/images/DSC-11.jpg"
              layout="fill"
              objectFit="cover"
              alt="pine"
              className="z-10"
            />
          </div>
          <div className="flex flex-col justify-start items-start bg-[#5A4B2E] p-16">
            <h1 className="text-4xl mb-4 text-white text-start goudy-300 tracking-[0.1em]">
              UTAH INTIMATE WEDDINGS & ELOPEMENTS
            </h1>
            <h2 className="text-xl text-white mb-2 text-start goudy-300 tracking-[0.1em]">
              Customized Package Available
            </h2>
            <ul className="list-none text-[12px] text-white text-start pl-4 goudy-300 tracking-[0.1em]">
              <li className="mb-2">
                - Wedding coverage anywhere in the state of Utah, travel fees
                included
              </li>
              <li className="mb-2">
                - 100+ page elopement resource guide that includes tips for
                picking a ceremony location, how to tell your family you're
                eloping, how to choose activities for your day, what to pack,
                and more!
              </li>
              <li className="mb-2">
                - Custom vendor recommendation guide based on location
              </li>
              <li className="mb-2">
                - Lodging recommendations (aka insanely cool Airbnb stays)
              </li>
              <li className="mb-2">
                - Unlimited communication by phone and email
              </li>
              <li className="mb-2">- Timeline crafting guidance</li>
              <li>- Location scouting</li>
            </ul>
            <h2 className="text-xl text-white text-start goudy-300 mt-8 tracking-[0.1em]">
              Starting At
            </h2>
            <h2 className="text-xl text-white mb-2 text-start goudy-300 mt-1 tracking-[0.1em]">
              $7000
            </h2>
            <CustomButton text="Contact" additionalClasses="bg-[#B0A596]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestmentDestinationWeddings;
