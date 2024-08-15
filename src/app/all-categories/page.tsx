// app/all.tsx
import React from "react";
import { getWeddingsData, getCouplesData } from "@/lib/data";
import CategoryNavbar from "@/components/CategoryNavbar";
import CategoryPreview from "@/components/CategoryPreview";

const AllCategories: React.FC = () => {
  const weddingsData = getWeddingsData();
  const couplesData = getCouplesData();

  const allCategories = [...weddingsData, ...couplesData];

  return (
    <div className="mx-14">
      <CategoryNavbar />
      <CategoryPreview categories={allCategories} />
    </div>
  );
};

export default AllCategories;
