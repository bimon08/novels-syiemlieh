// components/CategoryPreview.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Category {
  href: string;
  src: string;
  title: string;
  description: string;
}

interface CategoryPreviewProps {
  categories: Category[];
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ categories }) => {
  return (
    <div className="w-full sm:w-1/2 flex flex-col mt-20">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex-grow flex flex-col h-[70%] justify-center items-center relative">
          <Image
            src={category.src}
            width={600}
            height={400}
            alt={category.title}
            className="object-cover w-[600px] h-[400px]"
          />
          <div className="text-center mt-8 kumlien-400 mb-16">
            <h1 className="text-[12px] mb-1 text-[#968B77]">
              <Link href={category.href}>{category.title}</Link>
            </h1>
            <p className="text-sm mt-2 kumlien-400">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPreview;
