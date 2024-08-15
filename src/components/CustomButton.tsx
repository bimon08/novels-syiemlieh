import React from "react";
import { Button } from "./ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/utils/cn";

interface CustomButtonProps {
  text: string;
  additionalClasses?: ClassValue;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  additionalClasses,
}) => {
  const buttonClasses = cn(
    "work-sans-400 px-4 py-2 bg-[#5A4B2E] text-white inline-block hover:bg-[#3E321E] hover:text-[#E5E5E5] text-center",
    additionalClasses
  );

  return (
    <div className="flex justify-center mt-5">
      <Button className={buttonClasses}>{text}</Button>
    </div>
  );
};

export default CustomButton;

/* 
  Example usage:
  <div>
    <CustomButton text="Let's Talk" />
    <CustomButton text="Experience" additionalClasses="mt-10" />
  </div>
*/
