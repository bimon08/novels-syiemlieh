// d:/Projects/code/novels-syiemlieh/src/app/elopements-weddings/page.tsx
import CategoryNavbar from "@/components/CategoryNavbar";
import CategoryPreview from "@/components/CategoryPreview";
import React from "react";


const ElopementsWeddings: React.FC = () => {
  const categories = [
    {
      href: "/weddings",
      src: "/images/utah-mountain-wedding-elopement.jpg",
      title: "Elopment Guides",
      description: "Eloping In Utah? Here's 7 Places to Say I Do!",
    },
    {
      href: "/wedding-guides",
      src: "/images/great-salt-lake-elopement-brin.jpg",
      title: "Elopments/Weddings",
      description: "Brin & Jackson | Great Salt Lake First Look",
    },
    {
      href: "/wedding-guides",
      src: "/images/utah-desert-wedding.jpg",
      title: "Elopments/Weddings",
      description: "Mike & Kelsy | West Desert Elopement",
    },
    {
      href: "/wedding-guides",
      src: "/images/yosemite-national-park-wedding-elopement.jpg",
      title: "Elopments/Weddings",
      description: "Yosemite National Park Intimate Wedding",
    },
    {
      href: "/wedding-guides",
      src: "/images/utah-mountain-wedding-elopement-1.jpg",
      title: "Elopements/Weddings",
      description: "Hayley & Dallin | First Look",
    },
    {
      href: "/wedding-guides",
      src: "/images/patagonia-chile-same-sex-elopement-9.jpg",
      title: "Elopements/Weddings",
      description: "Hannah & Stephanie | Patagonia Elopement",
    },
    {
      href: "/wedding-guides",
      src: "/images/zion-national-park-utah-elopement-10.jpg",
      title: "Elopements/Weddings",
      description: "Selena & Jonathan | Zion National Park Elopement",
    },
    {
      href: "/wedding-guides",
      src: "/images/redwoods-california-elopement-7.jpg",
      title: "Elopements/Weddings",
      description: "Meagan & Nanu | Redwoods",
    },
    {
      href: "/wedding-guides",
      src: "/images/monument-valley-utah-boho-elopement-17.jpg",
      title: "Elopements/Weddings",
      description: "Mauri & Kenna | Monument Valley, UT",
    },
  ];

  return (
    <div className="mx-14">
      <CategoryNavbar />
      <CategoryPreview categories={categories} />
    </div>
  );
};

export default ElopementsWeddings;
