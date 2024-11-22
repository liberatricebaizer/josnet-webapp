import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "./Star";
import Layout from "../layout/Layout";

const WomenProduct = ({ movie }) => {
  return (
    <div>
      <div className="    hover:scale-95 transitions   border shadow-md rounded-md overflow-hidden">
        <Link to={`/movie/${movie?.name}`} className="w-full h-full ">
          <img
            src={`${movie?.titleImage}`}
            alt={movie?.name}
            className="w-full h-48  object-cover"
          />
        </Link>

        <div className="p-4">
          <div className="flex gap-2  text-sm">
            <div className="flex gap-1 text-star">
              <Rating value={movie.rate} />
            </div>
            <p className="text-[#989EAF]">{movie?.reviews} Reviews</p>
          </div>
          <div className="flex-btn text-sm gap-2 pt-2  text-black  ">
            <h3 className="font-semibold truncate">{movie?.name}</h3>
          </div>
          <div className="flex gap-4 pt-4  text-sm  font-bold">
            <p className="line-through">${movie?.estMoney}</p>
            <p className="text-[#FF3F07]">${movie?.money}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenProduct;
