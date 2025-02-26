import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/styles";
import SideBar from "../../screens/dashboard/SideBar";
import AvatarImage from "../../images/avatar.jpeg";
import AvatarImage2 from "../../images/avatar2.jpeg";
import ReusableSlider from "../ReusableSlider";
const Hero = () => {
  // const images = [
  //   { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
  //   { url: "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg" },
  //   { url: "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg" },
  //   // Add more images as needed
  // ];
  const cards = [
    {
      title: "Stylish Dress",
      description: "Perfect for winter wear.",
      imageUrl:
        "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg",
      date: "  Storewide Sale Until 02/28/2025",
    },
    {
      title: "Elegant Dress",
      description: "Look stunning at any event.",
      imageUrl:
        "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg",
      date: "  Storewide Sale Until 03/4/2025",
    },
    {
      title: "Shoes",
      description: "Comfort meets style.",
      imageUrl:
        "https://m.media-amazon.com/images/I/91rGokbdWVL._AC_SY500_.jpg",
      date: "  Storewide Sale Until 03/1/2025",
    },
    {
      title: "Trendy Sunglasses",
      description: "Complete your look.",
      imageUrl:
        "https://m.media-amazon.com/images/I/51s+YXXvXYL._AC_SY575_.jpg",
      date: "  Storewide Sale Until 03/3/2025",
    },
  ];
  return (
    <div className=" flex  py-8  lgp-8  gap-3">
      <SideBar />
      <div className="relative max-w-[696px] rounded  z-[5]">
        <ReusableSlider cards={cards} slidesPerView={4} delay={4000} />
      </div>
      <div className="   hidden lg:block  flex-col">
        <div className="py-4 px-4 bg-groon rounded">
          <div className="py-2">
            <h3 className="text-center text-xl text-white font-medium">
              Welcome
            </h3>
            <p className="text-sm text-center text-white">
              Trust in Us For Your Style
            </p>
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
        </div>
        <div className="bg-slate-200 rounded h-36 p-6 text-black  mt-4 ">
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
