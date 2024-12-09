import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import SideBar from "../../screens/dashboard/SideBar";
import AvatarImage from "../../images/avatar.jpeg";
import AvatarImage2 from "../../images/avatar2.jpeg";
const Hero = () => {
  return (
    <div className=" lg:flex px-4 py-8  lg:p-8  gap-6">
      <SideBar />
      <div>
        <div className="flex mt-8 lg:mt-0  w-full  h-[50%] shadow border-gray-300  rounded-md bg-[#0B0414]">
          <div className="flex  justify-between     ">
            <div className=" p-4 lg:p-8    w-full">
              <h3 className="text-sm text-white">
                New Fashion Collection
                <span className="text-[#5DBBFF]">_2024</span>
              </h3>
              <h2 className="text-xl  text-white mt-4">
                Best styles accessories <br /> & New Look
              </h2>
              <p className="text-sm mt-4  text-gray-400">
                Let what you wear describe you
                <br /> (Show your characteristic)
              </p>
              <Link to="/products" className="inline-block">
                <div className={`${styles.button2} mt-5`}>
                  <span className="text-[#000000] font-[Poppins] text-[18px]">
                    Shop Now
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex bg-white   gap-4">
              <img src={AvatarImage} alt="" className=" lg:w-1/2" />
              <img
                src={AvatarImage2}
                alt=""
                className=" w-1/2  hidden md:flex"
              />
            </div>
          </div>
        </div>{" "}
        <div className=" lg:flex mt-14 gap-2 md:gap-32">
          <div className="flex  mb-4 lg:mb-0   lg:w-[60%] h-[20%]   shadow border-gray-300  rounded-md bg-[#EEE8DC]">
            <div className="flex  justify-between     ">
              <div className="p-4    w-full">
                <h2 className="text-xl  text-black font-bold  ">Big Sale</h2>
                <p className="text-sm pt-2   text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque dignissimos praesentium velit sequi sint veniam,
                  temporibus provident quae magnam autem
                </p>
                <button className="px-4 mt-2 rounded py-2 bg-[#5DBBFF]">
                  Shop Now
                </button>
              </div>

              <div className=" hidden lg:flex  bg-white   gap-4">
                <img src={AvatarImage} alt="" className="w-1/2" />
              </div>
            </div>
          </div>
          <div className="font-semibold">
            <div className="   p-4  lg:w-64  shadow border-gray-300  rounded-md bg-[#EEE8DC]">
              <h3 className="text-xl text-center">
                Get up to <span className="text-[#F3B600]"> 20%</span>
                <br />
                Off Headphones
              </h3>
            </div>
            <div className=" mt-4 p-4 lg:w-64     shadow border-gray-300  rounded-md bg-[#EEE8DC]">
              <h3 className="text-xl text-center">
                Get up to <span className="text-[#F3B600]"> 20%</span>
                <br />
                Off Headphones
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
