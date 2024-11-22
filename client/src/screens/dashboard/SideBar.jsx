import React from "react";
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

const SideBar = ({ children }) => {
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
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-1 items-center py-2 px-20";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <div className="">
      <div className=" gap-10 items-start  ">
        <div className="col-span-2 sticky bg-white shadow  border border-gray-100  rounded-md ">
          <h1 className="bg-[#5DBBFF] p-2 flex text-2xl    font-medium items-center justify-center">
            All Categories
          </h1>
          <div className="px-10    py-4 ">
            {SideLinks.map((link, index) => (
              <NavLink to={link.link} key={index} className={Hover}>
                <p>{link.name}</p>
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
