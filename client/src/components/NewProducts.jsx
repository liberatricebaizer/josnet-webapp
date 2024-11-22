import React from "react";

import { BsCollectionFill } from "react-icons/bs";
import NewArrival from "./NewArrival";
import { NewProductsData } from "../data/MovieData";
const NewProducts = () => {
  return (
    <div className="my-4">
      <div className="grid   xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4">
        {NewProductsData.slice(0, 8).map((movie, index) => (
          <NewArrival key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
