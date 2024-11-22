import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Layout from "../layout/Layout";
import ReusableSlider from "../components/ReusableSlider";
import Movie from "../components/Movie";
import { ShoesAndBagsData } from "../data/MovieData";

const ShoesAndBags = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];
  const menItems = [
    { path: "hot-sale", label: "Hot Sale" },
    { path: "women-shoes", label: "Women'Shoes" },
    { path: "men-shoes", label: "Men's Shoes" },
    { path: "bags", label: "Bags" },
    { path: "dance-shoes", label: "Dance Shoes" },
    { path: "kids-shoes", label: "Kids' Shoes" },
    { path: "Graphic-printShoes&Bags", label: "Graphic Print Shoes & Bags" },
    { path: "fashion-accessories", label: "Fashion Accessories" },
    { path: "shoes-accessories", label: "Shoes Accessories" },
    { path: "boots", label: "Boots" },
  ];
  return (
    <Layout>
      <div className="flex gap-2 p-4">
        <NavLink to="/" className="text-sm text-[#6f6e6e] font-medium">
          Home &gt;
        </NavLink>
        <DropdownMenu
          title="ShoesAndBags's Clothing"
          basePath="/mens-clothing"
          itemCount="3000"
          items={menItems}
        />
      </div>

      <div className="relative z-[5]">
        <ReusableSlider images={images} slidesPerView={4} delay={4000} />
      </div>

      <div className="my-4">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {ShoesAndBagsData.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShoesAndBags;
