import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Layout from "../layout/Layout";
import ReusableSlider from "../components/ReusableSlider";
import Movie from "../components/Movie";
import { KidsData } from "../data/MovieData";

const Kids = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];

  const menItems = [
    { path: "tees-tank-tops", label: "Kids's Tees & Tank Tops" },
    { path: "shirts", label: "Kids's Shirts" },
    { path: "pants", label: "Kids's Pants" },
    { path: "polos", label: "Kids's Polos" },
    { path: "graphic-collection", label: "Graphic Collection" },
    { path: "active", label: "Kids's Active" },
    { path: "shorts", label: "Kids's Shorts" },
    { path: "chic-collection", label: "Kids's Chic Collection" },
    { path: "hoodies-sweatshirts", label: "Kids's Hoodies & Sweatshirts" },
    { path: "outerwear", label: "Kids's Outerwear" },
    { path: "sweaters-cardigans", label: "Kids's Sweaters & Cardigans" },
    { path: "plus-size", label: "Kids's Plus Size" },
    { path: "sleepwear-loungewear", label: "Kids's Sleepwear & Loungewear" },
    { path: "accessories", label: "Kids's Accessories" },
    { path: "underwear", label: "Kids's Underwear" },
    { path: "clearance", label: "Clearance" },
    { path: "custom-clothing", label: "Kids's Custom Clothing" },
    { path: "christmas", label: "Kids's Christmas Clothing" },
  ];

  return (
    <Layout>
      <div className="flex gap-2 p-4">
        <NavLink to="/" className="text-sm text-[#6f6e6e] font-medium">
          Home &gt;
        </NavLink>
        <DropdownMenu
          title="Kids's Clothing"
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
          {KidsData.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Kids;
