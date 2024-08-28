import React, { Fragment, useState } from "react";
import {
  FaAppStore,
  FaAppStoreIos,
  FaApple,
  FaGooglePay,
  FaGooglePlay,
} from "react-icons/fa6";
import Watch from "../images/watch.png";

import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";
import HeadPhone from "./HeadPhone";
import Skirts from "./Skirts";
import Computer from "./Computer";
import Speaker from "./Speaker";
const FriendlyPage = () => {
  const [currentPage, setCurrentPage] = useState("AllProducts");
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
    <Fragment>
      <div className="flex px-8  py-20 gap-8">
        <div className="py-10  rounded  px-4  shadow-md  w-[27rem]   ">
          <h2 className="text-3xl  font-semibold">
            JosNetExpress Use Friendly App Available
          </h2>
          <p className="text-sm pt-4 text-[#989898]">
            Appropriately monetize one-to-one interfaces rather than Competently
            disinter mediate backward
          </p>
          <div className="flex pt-8    gap-8">
            <div className="flex px-8   gap-2 rounded py-2 items-center bg-[#F3B600]">
              <FaGooglePlay />
              <div>
                <h3 className="text-[10px]">Get it on</h3>
                <h3 className="text-sm">Google Play</h3>
              </div>
            </div>
            <div className="flex px-8   gap-2 text-white py-2 rounded  items-center bg-[#121328]">
              <FaApple />
              <div>
                <h3 className="text-[10px]">Download on the</h3>
                <h3 className="text-sm">App Store</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 rounded flex gap-60 px-20 bg-[#070707] w-[55rem] ">
          <div>
            <div className="flex items-center   gap-2 ">
              <span className=" bg-[#F3B600] h-[1px] w-16  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <span className="text-white italic text-sm   font-bold">
                Weekly Best Selling
              </span>
            </div>
            <h2 className="text-2xl  text-white pt-4">
              WOO!<span className="text-[#F3B600]">Flash Sale</span>
            </h2>{" "}
            <div className="flex items-center text-white py-4 gap-2 ">
              <div>
                <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                  40
                </div>
                <p className="text-[#989EAF] text-sm">Days</p>
              </div>{" "}
              :
              <div>
                <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                  16
                </div>
                <p className="text-[#989EAF] text-sm">Hours</p>
              </div>{" "}
              :
              <div>
                <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                  56
                </div>
                <p className="text-[#989EAF] text-sm">Munite</p>
              </div>{" "}
              :
              <div>
                <div className="w-12 flex justify-center   items-center h-12 border border-[#FFECC1] rounded-full">
                  30
                </div>
                <p className="text-[#989EAF] text-sm">Seconds</p>
              </div>
            </div>{" "}
            <button className="px-6  rounded py-2 bg-[#F3B600]   text-white text-sm  mt-4  ">
              Shop Now
            </button>
          </div>
          <div>
            <img src={Watch} alt="" className="w-40" />
          </div>
        </div>
      </div>
      <div className="p-12">
        <div className="flex  gap-[24.5rem]">
          {" "}
          <div>Top Categories Products</div>
          <div className="flex gap-10">
            <Link
              className={Hover}
              onClick={() => navigateToPage("AllProducts")}
            >
              All Products
            </Link>
            <Link className={Hover} onClick={() => navigateToPage("HeadPhone")}>
              Head Phone
            </Link>
            <Link className={Hover} onClick={() => navigateToPage("Skirts")}>
              Skirts
            </Link>{" "}
            <Link className={Hover} onClick={() => navigateToPage("Computer")}>
              Computer
            </Link>{" "}
            <Link className={Hover} onClick={() => navigateToPage("Speaker")}>
              Wireless Speaker
            </Link>{" "}
          </div>
        </div>
        {currentPage === "AllProducts" && <AllProducts />}
        {currentPage === "HeadPhone" && <HeadPhone />}
        {currentPage === "Skirts" && <Skirts />}
        {currentPage === "Computer" && <Computer />}
        {currentPage === "Speaker" && <Speaker />}
      </div>
    </Fragment>
  );
};

export default FriendlyPage;
