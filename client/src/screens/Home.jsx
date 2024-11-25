import React, { useState } from "react";
import SideBar from "./dashboard/SideBar";
import Table from "../components/Table";
import { Movies, Testimonials } from "../data/MovieData";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FcBusinessman, FcMoneyTransfer } from "react-icons/fc";
import "./Home.css";
import Footer from "../layout/Footer";
import AvatarImage from "../images/avatar.jpeg";
import AvatarImage2 from "../images/avatar2.jpeg";
import AvatarImage3 from "../images/avatar2.jpeg";
import { FaCar, FaHome, FaRegMinusSquare } from "react-icons/fa";
import { BsBorderBottom } from "react-icons/bs";
import FeatureProducts from "../components/FeatureProducts";
import NewProducts from "../components/NewProducts";
import TopProducts from "../components/TopProducts";
import { Link, NavLink } from "react-router-dom";
import FriendlyPage from "../components/FriendlyPage";
import NavBar from "../layout/NavBar";
import Testimonial from "../components/Testimonial";
import FeaturedPro from "../components/FeaturedPro";
import Movie from "../components/Movie";
import DesignTestimonial from "../components/DesignTestimonial";
import Hero from "../components/Hero/Hero";
import Header from "../layout/Header";
import BestDeals from "../components/BestDeals/BestDeals";
import Events from "../components/Events/Events";
import Sponsored from "../components/Sponsored";
const Home = ({ toggleDrawer }) => {
  const [currentPage, setCurrentPage] = useState("women");
  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  const active = "bg-dryGray text-groon";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-1 items-center py-2 px-20";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <>
      <Header activeHeading={1} />
      <Hero />
      <BestDeals />
      <Events />
      <Sponsored />
      <div className=" md:flex px-8  py-20  gap-14">
        <div className="shadow bg-[#FFF5E1] p-4 hidden  md:flex gap-8 ">
          <div className="">
            <div className="flex items-center ">
              <span className=" bg-groon h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <span className="text-black italic text-sm   font-bold">
                Special Offer
              </span>
            </div>
            <h2 className=" mt-2 text-black text-lg">
              Best styles accessories
            </h2>
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
        <div className="shadow bg-white md:w-[20%] p-4">
          <div className=" flex items-center text-3xl  justify-center">
            <FaCar className="text-[#F3B600]" />
          </div>
          <h2 className="text-center  font-bold pt-4">Quick Response</h2>
          <p className="text-sm text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, amet.
          </p>
        </div>{" "}
        <div className="shadow bg-white md:w-[20%] p-4  ">
          <div className=" flex items-center text-3xl  justify-center">
            <FcBusinessman />
          </div>
          <h2 className="text-center font-bold pt-4">Customer Value</h2>
          <p className="text-sm text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, amet.
          </p>
        </div>{" "}
        <div className="shadow bg-white md:w-[20%] p-4  ">
          <div className=" flex items-center text-3xl  justify-center">
            <FcMoneyTransfer />
          </div>
          <h2 className="text-center font-bold pt-4">Money Quarantee</h2>
          <p className="text-sm text-center pt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, amet.
          </p>
        </div>{" "}
      </div>
      <div className="flex my-10 px-8 ">
        <div className="flex  justify-between  gap-2   ">
          <div className="flex gap-3">
            <div className="col-span-2 sticky bg-white shadow  border border-gray-100   rounded-md">
              {" "}
              <div className="flex bg-[#F3B600] justify-center items-center py-2 px-4">
                <div className="flex justify-center items-center gap-2">
                  <FaRegMinusSquare />
                  <h2>Deals of the Week</h2>
                </div>
                <div className="flex">
                  <GrPrevious />
                  <GrNext />
                </div>
              </div>
              <img src={AvatarImage3} alt="" className="w-full " />
              <h3 className="text-center font-bold pt-2">
                Select Everything you want
              </h3>
              <p className="font-bold text-sm  flex gap-4 justify-center  items-center  ">
                <span className="line-through"> 00.00$</span>
                <span className="text-[#FF3F07]"> 50.00$</span>
              </p>
              <div className="px-4 py-4">
                {" "}
                <div className="w-[80%] border border-black"></div>
                <p className="pt-2">Available : 40</p>
              </div>
              <p className="text-center font-bold">
                <span className="text-[#F4C033] text-2xl">Hurry Up!</span>{" "}
                offers end in:
              </p>
              <div className="flex  py-2 gap-2 justify-center items-center">
                <div>
                  <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                    40
                  </div>
                  <p className="text-[#989EAF] text-sm">Days</p>
                </div>{" "}
                <div>
                  <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                    16
                  </div>
                  <p className="text-[#989EAF] text-sm">Hours</p>
                </div>{" "}
                <div>
                  <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                    56
                  </div>
                  <p className="text-[#989EAF] text-sm">Munite</p>
                </div>{" "}
                <div>
                  <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                    30
                  </div>
                  <p className="text-[#989EAF] text-sm">Seconds</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex  gap-[24.5rem]">
              {" "}
              <div>Deals of the Week</div>
              <div className="flex gap-10">
                <Link className={Hover} onClick={() => navigateToPage("women")}>
                  Featured Products
                </Link>
                <Link className={Hover} onClick={() => navigateToPage("men")}>
                  New Arrivals
                </Link>
                <Link className={Hover} onClick={() => navigateToPage("kid")}>
                  Top Selling Products
                </Link>
              </div>
            </div>
            {currentPage === "women" && <FeatureProducts />}
            {currentPage === "men" && <NewProducts />}
            {currentPage === "kid" && <TopProducts />}
          </div>
        </div>
      </div>
      <FriendlyPage />
      <div className="home_feature">
        <div className="book__form ">
          <div className="">
            <div className="flex items-center ">
              <span className=" bg-[#FF3F07] h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <span className="text-black italic text-sm   font-bold">
                Quality products
              </span>
            </div>
            <h2 className=" mt-2 text-white font-bold  text-lg">
              Shopping the Way <br />
              You Like It
            </h2>

            <button className="px-4  rounded py-2 bg-black text-white text-sm  mt-4  ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="bg-[#F5F5F5]">
        <FeaturedPro />
      </div>
      <div className="my-16">
        <div className="flex justify-around ">
          <div>
            {" "}
            <div className="flex items-center ">
              <span className=" bg-[#FF3F07] h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <span className="text-[#FF3F07] italic text-sm   font-bold">
                News & Updates
              </span>
            </div>
            <h2 className=" mt-2 text-black font-bold  text-2xl">
              Stay Update With Us
            </h2>
          </div>
          <div className="text-sm w-[30%]">
            <p>
              if you're in e-commerce, you already know the value of online SMS
              marketinh ensures your customers have direct access to use those
              offers and stock updates you're sending them.
            </p>
          </div>
        </div>
        <div className="grid gap-4 m-auto  w-[80%] pt-8 grid-cols-3 ">
          {Testimonials.map((testimo, index) => (
            <div
              key={index}
              className=" hover:scale-95 transitions   border shadow-md bg-white overflow-hidden"
            >
              <img
                src={`/images/${testimo?.image}`}
                alt={testimo?.name}
                className="  object-cover"
              />
              <div className="p-4">
                <h2 className="text-black text-lg pt-4 font-semibold">
                  {testimo.title}
                </h2>
                <p className="pt-4 text-sm">{testimo.description}</p>
                <div className="flex pt-4 items-center justify-between">
                  <img
                    src={`/images/${testimo?.profileImage}`}
                    alt={testimo?.name}
                    className="w-20 h-20 rounded-full  object-cover"
                  />
                  <h3 className="text-[16px] font-bold ">{testimo.name}</h3>
                  <span className=" bg-[#FF3F07] h-[1px] w-8  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
                  <p className="text-sm">{testimo.comment} comments</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
