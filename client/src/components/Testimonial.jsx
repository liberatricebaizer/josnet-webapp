import React from "react";
import Group from "../images/Group.png";
import DesignTestimonial from "./DesignTestimonial";
import { Testimonials } from "../data/MovieData";
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <div>
      <div className="lg:flex  justify-around py-20 bg-[#FAFAFA]">
        <div className="py-[8rem]  lg:mb-0 lg:px-[10rem">
          <div className="flex items-center ">
            <span className=" bg-[#FFC12E] h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
            <span className="text-[#FFC12E] italic text-sm   font-bold">
              Customer Feedback
            </span>
          </div>
          <h2 className=" mt-2 text-[#08090C] font-bold  text-lg">
            We are Loyal With
            <br />
            Our <span className="text-[#FFAF00]">Customer</span>
          </h2>
          <p className="text-sm lg:w-96 pt-4">
            It's why SMS marketing is the perfect way to diversify your
            marketing channels.As the battle for directly with customers.
          </p>
          <Link to="/products" className="inline-block">
            <button className="px-6  rounded py-2 bg-[#121328] text-white text-sm  mt-4  ">
              Shop Now
            </button>
          </Link>
        </div>
        <img src={Group} alt="" className="lg:w-[40%]" />
      </div>
    </div>
  );
};

export default Testimonial;
