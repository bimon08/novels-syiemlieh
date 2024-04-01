import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex justify-center mt-20 mx-12 border ">
        <div className="flex flex-col">
          <Image
            src="/images/alesha.jpg"
            width={700}
            height={700}
            alt="hero"
            className="w-[800px] h-[800px]"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="flex flex-col relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
              <div className="text-sm text-center work-sans-400 tracking-[0.2em] text-[#5A4B2E]">
                INTIMATE WEDDINGS
                <br /> AND ELOPEMENTS
                <br /> IN UTAH AND WORLDWIDE
              </div>
            </div>
            <div className="absolute top-14 left-0 right-0 bottom-0 flex flex-col items-start">
              <Image
                src="/images/ScreenShot.png"
                width={320}
                height={500}
                alt="hero"
                className="h-[450px]"
              />
            </div>
            <div className="absolute top-96 right-0  bottom-0 flex flex-col items-start">
              <Image
                src="/images/alesha2.jpg"
                width={500}
                height={100}
                alt="hero"
                className="h-[200px] w-[300px] object-cover"
              />
            </div>
            <div className="absolute right-[10px] top-[670px] flex flex-col  ">
              <span className="kumlien-400 text-8xl text-[#F1EBE4]">
                REIMAGINE
              </span>
              <div className="flex items-center  ">
                <span className="work-sans-400 ml-28">YOUR</span>
                <br />
                <span className="ml-4 kumlien-400 text-8xl text-[#B0A596]">
                  ELOPEMENT
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="mt-32">
        <p className="kumlien-400 text-center text-transform: capitalize">
          You deserve the wildly unforgettable, meaningful, love-filled <br />{" "}
          wedding of your dreams.
          <br /> I'm here to help make that happen.
        </p>
      </div>
    </>
  );
}
