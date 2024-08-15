// d:/Projects/code/novels-syiemlieh/src/app/couples/page.tsx
import CategoryNavbar from "@/components/CategoryNavbar";
import CategoryPreview from "@/components/CategoryPreview";
import React from "react";

const EnlopementGuides: React.FC = () => {
  const categories = [
    {
      href: "/elopement-guides",
      src: "/images/Dog-kissing.jpg",
      title: "Elopement Guides",
      description: "20 Dog Friendly Elopement Locations in the US",
    },
    {
      href: "/elopement-guides",
      src: "/images/Dog-beach.jpg",
      title: "Elopement Guides",

      description: "All About Elopement Permits",
    },
    {
      href: "/elopement-guides",
      src: "/images/sand-couple-smilling.jpg",
      title: "Elopement Guides",

      description: "How to Tell Your Family and Friends You’re Eloping",
    },
    {
      href: "/elopement-guides",
      src: "/images/patagonia-chile-same-sex-elopement-5.jpg",
      title: "Elopement Guides",

      description: "The Ultimate Elopement Packing List",
    },
    {
      href: "/elopement-guides",
      src: "/images/mountains.jpg",
      title: "Elopement Guides",

      description: "The 10 Best Countries to Elope In",
    },
    {
      href: "/elopement-guides",
      src: "/images/west-desert-elopement-3.jpg",
      title: "Elopement Guides",

      description: "21 Wedding Trends for 2021",
    },
    {
      href: "/elopement-guides",
      src: "/images/yosemite-national-park-wedding-elopement-2.jpg",
      title: "Elopement Guides",

      description: "The Ultimate Elopement Checklist",
    },
    {
      href: "/elopement-guides",
      src: "/images/utah-mountain-wedding-elopement.jpg",
      title: "Elopement Guides",

      description: "Eloping In Utah? Here’s 7 Places to Say I Do!",
    },
    {
      href: "/elopement-guides",
      src: "/images/monument-valley-utah-boho-elopement-21.jpg",
      title: "Elopement Guides",

      description: "How To Elope In Utah",
    },
    {
      href: "/elopement-guides",
      src: "/images/moody-forest-engagements-pnw-washington-12.jpg",
      title: "Elopement Guides",

      description: "6 Tips To Rock Your Engagement Session",
    },
  ];

  return (
    <div className="mx-14">
      <CategoryNavbar />
      <CategoryPreview categories={categories} />
    </div>
  );
};

export default EnlopementGuides;
