import React from "react";

import { BsCollectionFill } from "react-icons/bs";
import Movie from "./Movie";
import { Movies } from "../data/MovieData";
const FeatureProducts = () => {
  return (
    <div className="my-4">
      <div className="grid   xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-2">
        {Movies.slice(0, 8).map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
