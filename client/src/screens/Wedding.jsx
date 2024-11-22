import React from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import Layout from "../layout/Layout";
import ReusableSlider from "../components/ReusableSlider";
import Movie from "../components/Movie";
import { WeddingData } from "../data/MovieData";

const Wedding = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];

  const weddingItems = [
    { path: "mother-of-the-bride", label: "Mother of the Bride" },
    { path: "wedding-store", label: "The Wedding Store" },
    { path: "tuxedos-suits", label: "Tuxedos & Suits" },
    { path: "special-occasion-dresses", label: "Special Occasion Dresses" },
    { path: "wedding-party-accessories", label: "Wedding & Party Accessories" },
    { path: "dancewear-dance-shoes", label: "Dancewear & Dance Shoes" },
    { path: "new-arrivals", label: "New Arrivals" },
    { path: "hot-sale", label: "Hot Sale" },
    { path: "trending-2024", label: "Trending 2024" },
  ];

  return (
    <Layout>
      <div className="flex gap-2 p-4">
        <NavLink to="/" className="text-sm text-[#6f6e6e] font-medium">
          Home &gt;
        </NavLink>
        <DropdownMenu
          title="Wedding's Clothing"
          basePath="/mens-clothing"
          itemCount="3000"
          items={weddingItems}
        />
      </div>

      <div className="relative z-[5]">
        <ReusableSlider images={images} slidesPerView={4} delay={4000} />
      </div>

      <div className="my-4">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {WeddingData.slice(0, 8).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wedding;
