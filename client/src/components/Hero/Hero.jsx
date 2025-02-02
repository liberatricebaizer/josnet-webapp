import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/styles";
import SideBar from "../../screens/dashboard/SideBar";
import AvatarImage from "../../images/avatar.jpeg";
import AvatarImage2 from "../../images/avatar2.jpeg";
import ReusableSlider from "../ReusableSlider";
const Hero = () => {
  const images = [
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
    { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
    // Add more images as needed
  ];
  return (
    <div className=" flex px-4 py-8  lgp-8  gap-2">
      <SideBar />
      <div className="relative max-w-[786px] rounded  z-[5]">
        <ReusableSlider images={images} slidesPerView={4} delay={4000} />
      </div>
      <div className="bg-groon rounded w-60 p-2 hidden lg:block h-52 flex-col">
        <div className="p-4">
          <h3 className="text-center text-xl text-white font-medium">
            Welcome
          </h3>
          <p className="text-sm text-white">Trust in Us For Your Style</p>
        </div>
        <div className="mb-2">
          <div className="bg-slate-50 text-center mb-2 rounded px-4 py-1">
            <NavLink to="/SignIn" className="text-[18px]  text-[#000000b7]">
              Sign In
            </NavLink>
          </div>
          <div className="bg-main rounded-md px-4 py-1 text-center text-white">
            <NavLink to="/sign-up" className="text-[18px]  ">
              Register
            </NavLink>
          </div>
        </div>
        <div className="bg-slate-200 rounded w-60 p-6 text-black mt-24 h-52 ">
          IMAGE
        </div>
      </div>
      {/* <div className="flex mt-8 lg:mt-0  h-[30.5rem]  shadow border-gray-300  rounded-md bg-[#0B0414]">
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
          <img src={AvatarImage} alt="" className=" w-full" />
          <img src={AvatarImage2} alt="" className=" w-1/2  hidden md:flex" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
