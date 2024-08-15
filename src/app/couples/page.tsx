// d:/Projects/code/novels-syiemlieh/src/app/couples/page.tsx
import CategoryNavbar from "@/components/CategoryNavbar";
import CategoryPreview from "@/components/CategoryPreview";
import React from "react";

const Couples: React.FC = () => {
  const categories = [
    {
      href: "/couples",
      src: "/images/wildflower-engagement-session-brin.jpg",
      title: "couples",
      description: "Wildflower Adventure Session | Lara & Scottie",
    },
    {
      href: "/couples",
      src: "/images/ash-mountain-wildflower-engagements-13.jpg",
      title: "couples",

      description: "Ash & Alex | Wildflower Engagement Photos",
    },
    {
      href: "/couples",
      src: "/images/vw-bus-engagements-desert-1.jpg",
      title: "couples",

      description: "Al & Ben | Adventurous Couples Shoot",
    },
    {
      href: "/couples",
      src: "/images/moody-forest-engagements-pnw-washington-4.jpg",
      title: "couples",

      description: "Mollie & Drew | Moody PNW Couples Session",
    },
    {
      href: "/couples",
      src: "/images/canyonlands-national-park-utah-engagements-14.jpg",
      title: "couples",

      description: "Emily & Dylan | Canyonlands National Park Engagements",
    },
    {
      href: "/couples",
      src: "/images/joshua-tree-national-park-couples-karen-19.jpg",
      title: "couples",

      description: "Karen & Ben | Joshua Tree National Park",
    },
    {
      href: "/couples",
      src: "/images/boho-palm-springs-desert-engagements-5.jpg",
      title: "couples",

      description: "Brooke & Jonathan | Palm Springs, CA",
    },
    {
      href: "/couples",
      src: "/images/mountain-proposal-candid-11.jpg",
      title: "couples",

      description: "Meagan & Nanu Proposal Story | Provo, Utah",
    },
  ];

  return (
    <div className="mx-14">
      <CategoryNavbar />
      <CategoryPreview categories={categories} />
    </div>
  );
};

export default Couples;
