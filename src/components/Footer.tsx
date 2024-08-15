import { Facebook, Instagram, Youtube, SquareTerminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Footer = () => {
  const instagramImages = [
    { src: "/images/DSC-4.jpg", alt: "Image 1" },
    { src: "/images/DSC-5.jpg", alt: "Image 2" },
    { src: "/images/DSC-6.jpg", alt: "Image 3" },
    { src: "/images/DSC-7.jpg", alt: "Image 4" },
    { src: "/images/DSC-8.jpg", alt: "Image 5" },
    { src: "/images/DSC-9.jpg", alt: "Image 6" },
  ];

  return (
    <div className="relative">
      <h2 className="mb-4 kumlien-400 text-center mt-10">
        FOLLOW ME ON INSTAGRAM
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 sm:gap-4 py-8 px-4 md:px-8">
        {instagramImages.slice(0, 4).map((image, index) => (
          <Link
            key={index}
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              width={700}
              height={700}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            />
          </Link>
        ))}
        {instagramImages.slice(4).map((image, index) => (
          <Link
            key={index}
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block">
            <Image
              width={700}
              height={700}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            />
          </Link>
        ))}
      </div>
      <div className="text-center flex flex-col items-center justify-center py-8 px-4">
        <Image
          src="/images/Icon-2-Pine.png"
          width={40}
          height={40}
          alt="Icon 2"
          className="mb-4"
        />
        <p className="text-lg mb-4">
          LGBTQ-FRIENDLY | BIPOC INCLUSIVE | ALL SKIN COLORS & BODY SIZES ARE
          WELCOMED
        </p>
        <p className="text-gray-600 mb-2">
          Ashley Smith Photography, LLC | Adventure Elopement + Intimate Wedding
          + Engagement Photographer
        </p>
        <p className="text-gray-600 mb-8">Salt Lake City, UT + Worldwide</p>
        <Link href="/contact">
          <CustomButton text="CONTACT ME" additionalClasses="px-12 " />
          {/* <button className="bg-[#5A4B2E] text-white px-8 py-3 rounded-full font-sans tracking-wide hover:bg-[#453823] transition duration-300">
            CONTACT ME
          </button> */}
        </Link>
      </div>
      <footer className="py-4 px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Ashley Smith Photography
          </p>
          <div className="flex items-center space-x-6 mb-4 sm:mb-0 sm:absolute sm:left-[46%]">
            <Link
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#5A4B2E] transition duration-300">
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#5A4B2E] transition duration-300">
              <Facebook size={24} />
            </Link>
            <Link
              href="https://www.pinterest.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#5A4B2E] transition duration-300">
              <Youtube size={24} />
            </Link>
          </div>
          <Link
            href="https://www.squarespace.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#5A4B2E] transition duration-300">
            <SquareTerminal size={24} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
