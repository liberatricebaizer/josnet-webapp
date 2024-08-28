import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Star";
import { FaArrowRightArrowLeft, FaHeart } from "react-icons/fa6";
import { GrView } from "react-icons/gr";

const ProductFea = ({ movie }) => {
  return (
    <div className="">
      <div className="   hover:scale-95 transitions   border shadow-md bg-white overflow-hidden">
        <div className="flex justify-between items-start">
          <Link to={`/movie/${movie?.name}`} className=" bg-black ">
            <img
              src={`/images/${movie?.titleImage}`}
              alt={movie?.name}
              className="w-28 h-28   object-cover"
            />
          </Link>
          <div className="p-2">
            <div className="flex-btn text-sm gap-2 pt-2  text-black  ">
              <h3 className="font-semibold truncate">{movie?.name}</h3>
            </div>

            <div className="flex gap-1 pt-2 text-star">
              <Rating value={movie.rate} />
            </div>

            <div className="flex gap-8 mt-4 items-center">
              <div className="flex gap-4 pt-4  text-sm  font-bold">
                <p className="text-[#FF3F07]">{movie?.money}</p>
              </div>
              <button className=" text-sm flex-colo transitions py-2 px-4 border-[#989EAF]  border rounded hover:bg-[#000000] hover:text-white  ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFea;
