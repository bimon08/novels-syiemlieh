import Image from "next/image";
import React from "react";

interface FeaturedPostCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="relative flex flex-col items-center  mb-[9rem] sm:mb-24">
      <Image
        src={image}
        width={900}
        height={700}
        alt={title}
        className="w-[400px] h-[242px] object-cover"
      />
      <div className="absolute  bottom-[-180px] sm:right-auto right-0 flex flex-col text-start sm:text-center items-start bg-[#B0A596] h-[200px] sm:w-[350px] w-[300px] sm:items-center p-4 ">
        <div className="text-xl text-start sm:text-center whitespace-pre-wrap">
          {title}
        </div>
        {subtitle && <span className="mt-1">{subtitle}</span>}
        <br />
        <span className="cursor-pointer text-start">VIEW POST</span>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
