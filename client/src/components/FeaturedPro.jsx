import React from "react";

import { BsCollectionFill } from "react-icons/bs";
// import Movie from "./Movie";
import { FeaturedProducts } from "../data/MovieData";
import ProductFea from "./ProductFea";
import AvatarImage from "../images/watch.png";

import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
const FeaturedPro = () => {
  return (
    <div className=" py-8 flex justify-center  gap-4">
      <div className="px-4 py-8 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl text-black font-bold">Featured Products</h1>
          </div>
          <div className="flex gap-4">
            {" "}
            <button className="h-9 w-9 text-sm flex-colo transitions  border-black  border rounded hover:bg-black hover:text-white  ">
              <FaArrowRightArrowLeft />
            </button>{" "}
            <button className="h-9 w-9 text-sm flex-colo transitions  border rounded bg-black text-white hover:bg-transparent  hover:border-black  hover:text-black  ">
              <GrView />
            </button>{" "}
          </div>
        </div>
        <div className="grid   xl:grid-cols-2 pt-8 lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-4">
          {FeaturedProducts.slice(0, 6).map((movie, index) => (
            <ProductFea key={index} movie={movie} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="bg-black py-8 rounded px-4">
          {" "}
          <div className="">
            <div className="flex items-center ">
              <span className=" bg-[#FF3F07] h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <span className="text-white italic text-sm   font-bold">
                Special Offer
              </span>
            </div>
            <h2 className=" mt-2 text-white font-bold  text-2xl">
              Smart Watch
            </h2>
            <p className="text-sm text-white">
              Electronics Products Discount{" "}
              <span className="text-[#ff3f07]">40% OFF</span>
            </p>
            <button className="px-4  rounded py-2 bg-star text-black text-sm  mt-4  ">
              Shop Now
            </button>
          </div>
          <div className=" flex justify-end">
            <img src={AvatarImage} alt="" className=" w-32 h-32" />
          </div>
        </div>
        <div className="bg-[#FAE4E5] flex  px-4 py-8 mt-4 rounded ">
          <div className="">
            <div className="flex items-center ">
              <span className=" bg-[#FF3F07] h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <span className="text-[#FF3F07] italic text-sm   font-bold">
                Special Offer
              </span>
            </div>
            <h2 className=" mt-2 text-black font-bold  text-2xl">
              Smart Watch
            </h2>
            <p className="text-sm text-[#9F9595]">
              Electronics Products Discount{" "}
              <span className="text-[#ff3f07]">40% OFF</span>
            </p>
            <button className="px-4  rounded py-2 bg-black text-white text-sm  mt-4  ">
              Shop Now
            </button>
          </div>
          <div className=" flex justify-end">
            <img
              src="https://m.media-amazon.com/images/I/71KEG1lRMUL._AC_SL1500_.jpg"
              alt="smart watch"
              className=" w-32 h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPro;
