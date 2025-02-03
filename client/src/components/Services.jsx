import React from "react";
import AvatarImage from "../images/avatar.jpeg";
import { FaCar } from "react-icons/fa";
import { FcBusinessman, FcMoneyTransfer } from "react-icons/fc";

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    // <div className=" lg:flex  px- justify-center  py-20  gap-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="shadow bg-[#FFF5E1] p-4 hidden  lg:flex justify-center gap-8 ">
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
      <div
        className="bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={() => handleCardClick("/quick-response")}
      >
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img src="/taxi.svg" alt="Quick Response" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
          <p className="text-gray-600">
            Get a quick response from our team to address your needs.
          </p>
        </div>
      </div>

      <div
        className="bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={() => handleCardClick("/customer-value")}
      >
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img
              src="/customer.svg"
              alt="Customer Value"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Value</h3>
          <p className="text-gray-600">
            Discover the value we provide to our customers.
          </p>
        </div>
      </div>

      <div
        className="bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={() => handleCardClick("/money-guarantee")}
      >
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img src="/money.svg" alt="Money Guarantee" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Money Guarantee</h3>
          <p className="text-gray-600">
            We guarantee your money's worth with our services.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Services;
