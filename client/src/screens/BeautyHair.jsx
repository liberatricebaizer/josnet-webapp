import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Layout from "../layout/Layout";
import ReusableSlider from "../components/ReusableSlider";
import Movie from "../components/Movie";
import { BeautyHairData } from "../data/MovieData";
import { categoriesData } from "../static/data";

const BeautyHair = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];

  const beautyHairCategory = categoriesData.find(
    (category) => category.id === 10
  ); // Find the "Women" category

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <div className="flex gap-2 p-4">
        <NavLink to="/" className="text-sm text-[#6f6e6e] font-medium">
          Home &gt;
        </NavLink>
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <NavLink
            to="/beautyHair"
            className="text-black font-bold text-sm no-underline hover:text-red-500"
          >
            Beauty&Hair's Clothing{" "}
            <span className="text-sm text-[#6f6e6e] font-medium">
              (3000 products)
            </span>
          </NavLink>
          {isOpen && (
            <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-10 p-2 w-64">
              <ul className="list-none p-0 m-0">
                {beautyHairCategory?.items.map((item, index) => (
                  <li key={index} className="my-1">
                    <NavLink
                      to={`/products?category=${item.title}`}
                      className="text-gray-700 text-sm hover:text-black hover:underline font-normal"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-[5]">
        <ReusableSlider images={images} slidesPerView={4} delay={4000} />
      </div>

      <div className="my-4">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {BeautyHairData.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BeautyHair;
