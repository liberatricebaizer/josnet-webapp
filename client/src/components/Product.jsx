import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Star";
import { FaArrowRightArrowLeft, FaHeart } from "react-icons/fa6";
import { GrView } from "react-icons/gr";

const Product = ({ movie }) => {
  return (
    <>
      <div className="    hover:scale-95 transitions   border shadow-md rounded-md overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="bg-[#FF3F07] text-[10px]  text-white w-24 flex justify-center items-center px-2    m-4 rounded ">
            On Sale
          </div>
          <Link to={`/movie/${movie?.name}`} className="w-full ">
            <img
              src={`/images/${movie?.titleImage}`}
              alt={movie?.name}
              className="w-full h-36   object-cover"
            />
          </Link>
          <div className="flex flex-col gap-2 p-4 text-black">
            {" "}
            <button className="h-9 w-9 text-sm flex-colo transitions  border-subMain  border rounded hover:bg-subMain hover:text-white  ">
              <FaArrowRightArrowLeft />
            </button>{" "}
            <button className="h-9 w-9 text-sm flex-colo transitions  border-subMain  border rounded hover:bg-subMain hover:text-white  ">
              <GrView />
            </button>{" "}
            <button className="h-9 w-9 text-sm flex-colo transitions  border-subMain  border rounded hover:bg-subMain hover:text-white  ">
              <FaHeart />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2  text-sm">
            <div className="flex gap-1 text-star">
              <Rating value={movie.rate} />
            </div>
            <p className="text-[#989EAF]">{movie?.reviews}K Reviews</p>
          </div>
          <div className="flex-btn text-sm gap-2 pt-2  text-black  ">
            <h3 className="font-semibold truncate">{movie?.name}</h3>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-4 pt-4  text-sm  font-bold">
              <p className="line-through">{movie?.estMoney}</p>
              <p className="text-[#FF3F07]">{movie?.money}</p>
            </div>
            <button className=" text-sm flex-colo transitions py-2 px-4 border-[#989EAF]  border rounded hover:bg-[#000000] hover:text-white  ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
