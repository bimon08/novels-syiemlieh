// components/CategoryNavbar.tsx
"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const CategoryNavbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#5A4B2E]">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <h1 className="text-3xl">Categories</h1>
        </div>
        <div className="hidden sm:flex sm:space-x-8 items-center font-kumlien">
          {["all", "elopements-weddings", "couples", "elopement-guides"].map(
            (category) => (
              <Link
                key={category}
                href={category === "all" ? "/all-categories" : `/${category}`}
                className={`inline-flex items-center px-1 pt-1 text-[12px] font-medium ${
                  (pathname === "/all-categories" && category === "all") ||
                  pathname === `/${category}`
                    ? "border-b-1 border-[#5A4B2E]"
                    : ""
                }`}>
                {category.toUpperCase().replace("-", "/")}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
