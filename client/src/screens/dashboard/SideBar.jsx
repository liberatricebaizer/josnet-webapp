import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaListAlt, FaUsers } from "react-icons/fa";
import {
  RiLockPasswordFill,
  RiLockPasswordLine,
  RiMovie2Fill,
} from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
// import Layout from "../../layout/Layout";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "../../layout/DropDown";
import { categoriesData } from "../../static/data";

const SideBar = ({ children }) => {
  // const [dropDown, setDropDown] = useState(false);
  const SideLinks = [
    { name: "Women", link: "/Women" },
    { name: "Men", link: "/men" },
    { name: "Wedding", link: "/wedding" },
    { name: "Shoes&Bags", link: "/shoesAndBags" },
    { name: "Home", link: "/homeProduct" },
    { name: "Hobbies", link: "/hobbies" },
    { name: "Electronics", link: "/electronics" },
    { name: "Kids", link: "/kids" },
    { name: "Sports", link: "/sports" },
    { name: "Beauty&Hair", link: "/beautyHair" },
    { name: "Computer", link: "/computer" },
    { name: "Phones", link: "/phones " },
  ];
  const active = "bg-dryGray text-groon";
  const hover = " hover:text-[#17dd1f] lg:hover:text-white  lg:hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex lg:gap-1 items-center py-2 mx-1 lg:px-20";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  // const displayedCategories = categoriesData.filter(
  //   (category) => category.id !== 10 && category.id !== 11
  // );
  return (
    <div className="hidden lg:flex">
      <div className=" gap-10 items-start  ">
        {/* categories */}
        {/* <div onClick={() => setDropDown(!dropDown)}> */}
        {/* <div className="relative h-[50px] mt-[px] w-[270px] hiden 1000px:block"> */}
        {/* <div className="bg-groon text-white p-2 flex items-center">
            <BiMenuAltLeft size={30} className="" />
            <button
              className={`h-[100%] w-full flex  items-center pl-10  font-sans text-lg font-[500] select-none rounded-t-md`}
            >
              All Categories
            </button>
          </div> */}
        {/* {dropDown ? ( */}
        {/* <DropDown
            categoriesData={categoriesData}
            // setDropDown={setDropDown}
          /> */}
        {/* ) : null} */}
        {/* </div> */}
        {/* </div> */}
        {/* <DropDown
          categoriesData={combinedCategoriesData}
          // setDropDown={setDropDown}
        /> */}
        <div className="col-span-2 sticky bg-white shadow-sm  border border-gray-100 w-[270px] rounded-md ">
          <h1 className="bg-[#5DBBFF] p-2 flex text-2xl    font-medium items-center justify-center">
            All Categories
          </h1>
          <div className="  flex lg:block justify-center flex-wrap lg:flex-row py-1 ">
            {/* {SideLinks.map((link, index) => (
              <NavLink to={link.link} key={index} className={Hover}>
                <p>{link.name}</p>
              </NavLink>
            ))} */}
            {categoriesData.map((category, index) => (
              <NavLink to={category.link} key={index} className={Hover}>
                <p>{category.title}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="10"
          data-aos-offset="100"
          className="col-span-6  rounded-md bg-dry border border-gray-800 "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
