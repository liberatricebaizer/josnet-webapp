import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Layout from "../layout/Layout";
import ReusableSlider from "../components/ReusableSlider";
import Movie from "../components/Movie";
import { ComputerData } from "../data/MovieData";

const Computer = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];

  const menItems = [
    { path: "tees-tank-tops", label: "Computer's Tees & Tank Tops" },
    { path: "shirts", label: "Computer's Shirts" },
    { path: "pants", label: "Computer's Pants" },
    { path: "polos", label: "Computer's Polos" },
    { path: "graphic-collection", label: "Graphic Collection" },
    { path: "active", label: "Computer's Active" },
    { path: "shorts", label: "Computer's Shorts" },
    { path: "chic-collection", label: "Computer's Chic Collection" },
    { path: "hoodies-sweatshirts", label: "Computer's Hoodies & Sweatshirts" },
    { path: "outerwear", label: "Computer's Outerwear" },
    { path: "sweaters-cardigans", label: "Computer's Sweaters & Cardigans" },
    { path: "plus-size", label: "Computer's Plus Size" },
    {
      path: "sleepwear-loungewear",
      label: "Computer's Sleepwear & Loungewear",
    },
    { path: "accessories", label: "Computer's Accessories" },
    { path: "underwear", label: "Computer's Underwear" },
    { path: "clearance", label: "Clearance" },
    { path: "custom-clothing", label: "Computer's Custom Clothing" },
    { path: "christmas", label: "Computer's Christmas Clothing" },
  ];

  return (
    <Layout>
      <div className="flex gap-2 p-4">
        <NavLink to="/" className="text-sm text-[#6f6e6e] font-medium">
          Home &gt;
        </NavLink>
        <DropdownMenu
          title="Computer's Clothing"
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
          {ComputerData.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Computer;
