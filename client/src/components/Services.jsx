import React from "react";
import AvatarImage from "../images/avatar.jpeg";
import { FaCar } from "react-icons/fa";
import { FcBusinessman, FcMoneyTransfer } from "react-icons/fc";

const Services = () => {
  return (
    <div className=" lg:flex  px-8  py-20  gap-14">
      <div className="shadow bg-[#FFF5E1] p-4 hidden  lg:flex gap-8 ">
        <div className="">
          <div className="flex items-center ">
            <span className=" bg-groon h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
            <span className="text-black italic text-sm   font-bold">
              Special Offer
            </span>
          </div>
          <h2 className=" mt-2 text-black text-lg">Best styles accessories</h2>
          <p className="text-sm   text-gray-400">
            Let what you wear describe you
          </p>
          <button className="px-4  rounded py-2 bg-black text-white text-sm  mt-4  ">
            Shop Now
          </button>
        </div>
        {/* <div className="bg-red-300"> */}{" "}
        <img src={AvatarImage} alt="" className="h-28" />
        {/* </div> */}
      </div>
      <div className="shadow bg-white border border-gray-200 mb-8 lg:w-[20%] p-4">
        <div className=" flex items-center text-3xl  justify-center">
          <FaCar className="text-[#F3B600]" />
        </div>
        <h2 className="text-center  font-bold pt-4">Quick Response</h2>
        <p className="text-sm text-center pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, amet.
        </p>
      </div>{" "}
      <div className="shadow bg-white mb-8 border border-gray-200 lg:w-[20%] p-4  ">
        <div className=" flex items-center text-3xl  justify-center">
          <FcBusinessman />
        </div>
        <h2 className="text-center font-bold pt-4">Customer Value</h2>
        <p className="text-sm text-center pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, amet.
        </p>
      </div>{" "}
      <div className="shadow bg-white border border-gray-200 lg:w-[20%] p-4  ">
        <div className=" flex items-center text-3xl  justify-center">
          <FcMoneyTransfer />
        </div>
        <h2 className="text-center font-bold pt-4">Money Quarantee</h2>
        <p className="text-sm text-center pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, amet.
        </p>
      </div>{" "}
    </div>
  );
};

export default Services;
