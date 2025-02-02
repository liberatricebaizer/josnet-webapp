// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import styles from "../../styles/styles";
// // import ProductCard from "../ProductCard/ProductCard";
// import Product from "../Product";
// import Loader from "../../layout/Loader";

// const BestDeals = () => {
//   const [data, setData] = useState([]);
//   const { allProducts, isLoading } = useSelector((state) => state.products);
//   useEffect(() => {
//     const allProductsData = allProducts ? [...allProducts] : [];
//     const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
//     const firstFive = sortedData && sortedData.slice(0, 5);
//     setData(firstFive);
//   }, [allProducts]);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className={`${styles.section} mt-56`}>
//           <div className={`${styles.heading}`}>
//             <h1>Best Deals</h1>
//           </div>
//           <div className="grid grid-cols-1 gap-[20px] text-black md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//             {data && data.length !== 0 && (
//               <>
//                 {data &&
//                   data.map((i, index) => <Product data={i} key={index} />)}
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BestDeals;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import Product from "../Product";
import Loader from "../../layout/Loader";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("All Products:", products); // Log products to see what is fetched

    const allProductsData = products ? [...products] : [];
    console.log("All Products Data:", allProductsData); // Log the data array

    const sortedData = allProductsData.sort((a, b) => b.sold_out - a.sold_out);
    console.log("Sorted Data:", sortedData); // Log sorted data

    const firstFive = sortedData.slice(0, 5);
    console.log("Top 5 Products:", firstFive); // Log the top 5 products

    setData(firstFive);
  }, [products]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`${styles.section} mt-56`}>
          <div className={`${styles.heading}`}>
            <h1>Best Deals</h1>
          </div>
          <div className="flex mt-8 grid-cols-1 gap-[20px] text-black md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
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
