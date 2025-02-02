import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../layout/Header";
import Loader from "../layout/Loader";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../layout/Footer";
import Product from "../components/Product";

const BestSellingPage = () => {
  const [data, setData] = useState([]);
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = products ? [...products] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedData);
  }, [products]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={2} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data && data.map((i, index) => <Product data={i} key={index} />)}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default BestSellingPage;
