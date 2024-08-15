import React from "react";
import FeaturedPostCard from "./FeaturedPostCard";

const FeaturedPostsSection: React.FC = () => {
  const posts = [
    {
      image: "/images/zion-national.jpg",
      title: "ZION NATIONAL\nPARK, UTAH\nELOPEMENT",
      subtitle: "Selena & Jonathan",
    },
    {
      image: "/images/DSC.jpg",
      title: "HOW TO ELOPE\nIN\nUTAH",
    },
    {
      image: "/images/big-sur-intimate-wedding-slider.jpg",
      title: "BIG SUR, CALIFORNIA\nELOPEMENT\nWEDDING",
      subtitle: "Patrick & Leslie",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#F5EBE0] py-16">
      <div className="sm:text-4xl text-2xl  antro-vectra-400 mb-16">
        featured
        <span className="work-sans-400 text-[12px]"> POSTS </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 kumlien-400 sm:mx-16 mx-4">
        {posts.map((post, index) => (
          <FeaturedPostCard
            key={index}
            image={post.image}
            title={post.title}
            subtitle={post.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPostsSection;
