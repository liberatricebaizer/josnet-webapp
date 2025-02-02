import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { products } = useSelector((state) => state.products);
  const { events } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = events && events.find((i) => i._id === id);
      setData(data);
    } else {
      const data = products && products.find((i) => i._id === id);
      setData(data);
    }
  }, [products, events]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!eventData && <>{data && <SuggestedProduct data={data} />}</>}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
