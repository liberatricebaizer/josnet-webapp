import React, { useState, useRef } from "react";
import {
  FaHeart,
  FaCartPlus,
  FaShareAlt,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import Rating from "../Star";

const MovieInfo = ({ movie, setModalOpen }) => {
  const [selectedColor, setSelectedColor] = useState(movie?.colors?.[0] || "");
  const [mainImage, setMainImage] = useState(
    movie?.titleImage || movie?.images?.[selectedColor]
  );

  // Ref for the scrollable thumbnails container
  const thumbnailsRef = useRef(null);

  // Scroll the thumbnails up or down
  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = 100; // Adjust scroll amount as needed
      thumbnailsRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Handle color selection and update main image
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setMainImage(movie.images[color]);
  };

  return (
    <div className="w-full xl:h-screen text-white">
      <div className="xl:bg-white bg-[#fff] flex-colo">
        <div className="container flex gap-24 my-10 items-center">
          {/* Left side: Thumbnail images with scroll buttons */}
          <div className="relative flex flex-col items-center">
            {/* Scroll Up Button */}
            <button
              onClick={() => scrollThumbnails("up")}
              className="mb-2 p-1 rounded bg-gray-300 hover:bg-gray-400 text-black"
            >
              <FaArrowUp />
            </button>

            {/* Thumbnails container */}
            <div
              ref={thumbnailsRef}
              className="thumbnails flex flex-col gap-2 max-h-64 overflow-y-auto scrollbar-hidden"
            >
              {movie.colors.map((color) => (
                <img
                  key={color}
                  src={movie.images[color]}
                  alt={`${color} thumbnail`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer ${
                    selectedColor === color
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>

            {/* Scroll Down Button */}
            <button
              onClick={() => scrollThumbnails("down")}
              className="mt-2 p-1 rounded bg-gray-300 hover:bg-gray-400 text-black"
            >
              <FaArrowDown />
            </button>
          </div>

          {/* Main Product Image */}
          <div className="xl:col-span- xl:order-none order-last h-header rounded-lg overflow-hidden">
            <img
              src={mainImage}
              alt={movie?.name}
              className="w-96 h-96 object-cover"
            />
            <div className="flex gap-2 mt-6 items-center">
              <p className="text-gray-500 text-sm">Share</p>
              <button
                onClick={() => setModalOpen(true)}
                className="w-10 h-10 flex-colo rounded-lg bg-subMain bg-opacity-60"
              >
                <FaShareAlt />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-span-1 md:grid grid-cols-3 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-2">
              <h1 className="xl:text-4xl w-3/4 text-main capitalize font-sans text-2xl font-bold">
                {movie?.name}
              </h1>
              <p className="text-dry text-sm w-[35rem] leading-7">
                {movie?.desc}
              </p>
              <div className="flex gap-4">
                <div className="flex gap-1 text-star">
                  <Rating value={movie?.rate} />
                </div>
                <p className="text-[#ccc]">{movie.reviews} Reviewed</p>
              </div>
              <div className="flex gap-4 text-sm font-bold">
                <p className="line-through text-main">{movie?.estMoney}</p>
                <p className="text-[#FF3F07]">{movie?.money}</p>
              </div>

              {/* Color Selection */}
              <div className="text-main text-sm mt-8">
                <p className="font-bold text-xl">Select Color:</p>
                <div className="flex items-center gap-2 mt-2">
                  <p className="font-semibold text-gray-700">{selectedColor}</p>
                  <div className="flex gap-2">
                    {movie?.colors?.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorChange(color)}
                        className={`border-2 rounded ${
                          selectedColor === color
                            ? "border-main"
                            : "border-gray-400"
                        }`}
                      >
                        <img
                          src={movie.images[color]}
                          alt={`${color} thumbnail`}
                          className="w-14 h-14 object-cover rounded"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-main text-sm mt-8">
                <p className="font-bold text-xl">Product details</p>
                <div className="flex pt-3 text-main gap-28">
                  <p className="font-bold">Fabric type</p>
                  <p>{movie?.fabricType}</p>
                </div>
                <div className="flex pt-1 gap-28">
                  <p className="font-bold">Care instructions</p>
                  <p>{movie?.careInstructions}</p>
                </div>
                <div className="flex pt-1 gap-28">
                  <p className="font-bold">Origin</p>
                  <p>{movie?.origin}</p>
                </div>
                <div className="flex pt-1 gap-28">
                  <p className="font-bold">Closure type</p>
                  <p>{movie?.closureType}</p>
                </div>
                <div className="flex pt-1 gap-28">
                  <p className="font-bold">Country of Origin</p>
                  <p>{movie?.countryOrigin}</p>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-8 mt-4 items-center">
                <button className="h-9 w-9 text-sm flex-colo transitions text-main border-subMain border rounded hover:bg-subMain hover:text-white">
                  <FaHeart />
                </button>
                <button className="text-sm flex-colo transitions py-2 px-4 border-[#989EAF] text-main border rounded hover:bg-[#000000] hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Side Icons */}
          <div className="text-subMain">
            <div className="bg-[#ccc] rounded-sm p-4 mb-4">
              <FaHeart />
            </div>
            <div className="bg-[#ccc] rounded-sm p-4 mb-4">
              <FaCartPlus />
            </div>
            <div className="bg-[#ccc] rounded-sm p-4">
              <FaShareAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
