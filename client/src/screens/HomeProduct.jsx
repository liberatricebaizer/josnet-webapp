import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Layout from "../layout/Layout";
import ReusableSlider from "../components/ReusableSlider";
import Movie from "../components/Movie";
import { HomeProductData } from "../data/MovieData";

const HomeProduct = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];

  const menItems = [
    { path: "tees-tank-tops", label: "HomeProduct's Tees & Tank Tops" },
    { path: "shirts", label: "HomeProduct's Shirts" },
    { path: "pants", label: "HomeProduct's Pants" },
    { path: "polos", label: "HomeProduct's Polos" },
    { path: "graphic-collection", label: "Graphic Collection" },
    { path: "active", label: "HomeProduct's Active" },
    { path: "shorts", label: "HomeProduct's Shorts" },
    { path: "chic-collection", label: "HomeProduct's Chic Collection" },
    {
      path: "hoodies-sweatshirts",
      label: "HomeProduct's Hoodies & Sweatshirts",
    },
    { path: "outerwear", label: "HomeProduct's Outerwear" },
    { path: "sweaters-cardigans", label: "HomeProduct's Sweaters & Cardigans" },
    { path: "plus-size", label: "HomeProduct's Plus Size" },
    {
      path: "sleepwear-loungewear",
      label: "HomeProduct's Sleepwear & Loungewear",
    },
    { path: "accessories", label: "HomeProduct's Accessories" },
    { path: "underwear", label: "HomeProduct's Underwear" },
    { path: "clearance", label: "Clearance" },
    { path: "custom-clothing", label: "HomeProduct's Custom Clothing" },
    { path: "christmas", label: "HomeProduct's Christmas Clothing" },
  ];

  return (
    <Layout>
      <div className="flex gap-2 p-4">
        <NavLink to="/" className="text-sm text-[#6f6e6e] font-medium">
          Home &gt;
        </NavLink>
        <DropdownMenu
          title="HomeProduct's Clothing"
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
          {HomeProductData.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomeProduct;
