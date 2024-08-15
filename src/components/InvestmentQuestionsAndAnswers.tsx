import React from "react";
import Image from "next/image";

const QuestionAnswer: React.FC<{
  number: string;
  question: string;
  answer: string;
}> = ({ number, question, answer }) => (
  <div className="mb-8 flex mt-10 px-10 text-white">
    <h1 className="mr-16 text-2xl font-bold">{number}</h1>
    <div>
      <h2 className="text-2xl font-bold kumlien-400 flex">{question}</h2>
      <p className="text-sm goudy-400 tracking-[0.1em] mt-2 space-y-16">
        {answer}
      </p>
    </div>
  </div>
);

const InvestmentQuestionsAndAnswers: React.FC = () => {
  return (
    <div className="relative h-[230vh] mt-16">
      <Image
        src="/images/utah-mountain-elopement-faq.jpg"
        layout="fill"
        objectFit="cover"
        alt="Utah Mountain Elopement"
      />
      <div className="absolute inset-0 flex flex-col md:flex-row overflow-hidden mt-40 sm:mt-0 sm:justify-center items-center">
        <div className="flex items-center justify-center">
          <div className="sm:w-[800px] bg-[#B0A596] p-8 top-24 absolute sm:right-20 sm:h-[200vh] h-[500px] flex flex-col justify-center">
            <QuestionAnswer
              number="01"
              question="WHERE ARE YOU BASED OUT OF AND DO YOU TRAVEL?"
              answer="I'm based in Salt Lake City, Utah, and I am always down to travel! I've shot weddings from Yosemite to Patagonia and everywhere in between. I love to explore new places, but if you're down to make a little vacation out of your photos, Utah has some BREATHTAKING scenery like Zion National Park, the Salt Flats, and some stunningly pretty mountains I can introduce you to!"
            />
            <QuestionAnswer
              number="02"
              question="DO WE HAVE TO DO A SUPER LONG HIKE TO GET COOL PHOTOS?"
              answer="Absolutely not! An adventure shoot doesn't have to mean traipsing for five miles through the wilderness. I know plenty of gorgeous spots, both well known and hidden gems. Whether you envision eloping in Iceland or in the backyard of your cabin, I'll be there to capture the emotions, scenery, and story of your day."
            />
            <QuestionAnswer
              number="03"
              question="OKAY BUT WHAT IF WE SUCK AT POSING?"
              answer={`People so often come to me saying "oh, we're so awkward in front of a camera, we aren't the picture-taking type". My friend, I've got news for you: absolutely nobody knows what to do in front of a camera. But that's where the magic comes in.
              I'm not out here to capture you in stiff, forced poses. I'm here to create moments with you so we can capture FEELINGS. And those kinds of moments are what I'm here to document so you can remember them forever. So deep breaths. Don't worry, I'll direct you every step of the way so you never have to guess and you'll be shocked at how natural it will feel.`}
            />
            <QuestionAnswer
              number="04"
              question="WHAT'S YOUR WEDDING DAY INVOLVEMENT STYLE?"
              answer="If you're looking for a photographer that will just melt into the background so you don't even notice they're there...I might not be your girl. I'll never distract from the day or the moments at hand, but I'll also be there to remind you to drink water, feed you snacks, help you keep a timeline straight, have a bottle of hairspray on hand, whatever you need! (And you better believe I know how to get people on a dance floor.) I find that truly becoming friends with my clients and their loved ones helps to make everyone much more comfortable with a camera around and the day goes much smoother!"
            />
          </div>
        </div>

        <div className="-mt-4 absolute sm:left-10 top-0 justify-center work-sans-400">
          <div className="text-center font-bold">
            <p className="text-white text-2xl mb-1">QUESTIONS & ANSWERS</p>
            <p className="text-white text-2xl">QUESTIONS & ANSWERS</p>
            <p className="text-white text-2xl mt-1">QUESTIONS & ANSWERS</p>
            <div className="bg-white w-full h-[2px] mt-1" />
          </div>
        </div>

        <div className="-mb-4 absolute sm:left-10 bottom-0 justify-center work-sans-400">
          <div className="text-center font-bold">
            <p className="text-white text-2xl mb-1">QUESTIONS & ANSWERS</p>
            <p className="text-white text-2xl">QUESTIONS & ANSWERS</p>
            <p className="text-white text-2xl mt-1">QUESTIONS & ANSWERS</p>
            <div className="bg-white w-full h-[2px] mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentQuestionsAndAnswers;
