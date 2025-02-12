import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import Product from "../Product";
import Loader from "../../layout/Loader";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("All Products:", allProducts); // Log allProducts to see what is fetched

    const allProductsData = allProducts ? [...allProducts] : [];
    console.log("All Products Data:", allProductsData); // Log the data array

    const sortedData = allProductsData.sort((a, b) => b.sold_out - a.sold_out);
    console.log("Sorted Data:", sortedData); // Log sorted data

    const firstFive = sortedData.slice(0, 20);
    console.log("Top 20 Products:", firstFive); // Log the top 5 allProducts

    setData(firstFive);
  }, [allProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-8 mx-auto">
          <div className="text-[27px] font-[600] font-Roboto">
            <h1>Most-loved Categories</h1>
            <span className=" bg-[#FF3F07] h-[1px] w-14  mx-1  :content-[''] inline-block font-semibold"></span>
          </div>
          <div className="grid mt-8 grid-cols-1 gap-[20px] text-black md:grid-cols-2 md:gap-[20px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-4 xl:gap-[30px] mb-12 border-0">
            {/* <div> */}
            {data && data.length !== 0 ? (
              data.map((i, index) => <Product data={i} key={index} />)
            ) : (
              <p>No products available.</p> // Handle case where no products are found
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BestDeals;
