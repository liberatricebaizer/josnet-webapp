import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-whit flex justify-between flex-col  shadow-sm overflow-y-scrol sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="">
        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard" className="w-full flex items-center">
            <RxDashboard
              className="text-xl"
              color={`${active === 1 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 1 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Dashboard
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard-orders" className="w-full flex items-center">
            <FiShoppingBag
              className="text-xl"
              color={`${active === 2 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 2 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              All Orders
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard-products" className="w-full flex items-center">
            <FiPackage
              className="text-xl"
              color={`${active === 3 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 3 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              All Products
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link
            to="/dashboard-create-product"
            className="w-full flex items-center"
          >
            <AiOutlineFolderAdd
              className="text-xl"
              color={`${active === 4 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 4 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Create Product
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard-events" className="w-full flex items-center">
            <MdOutlineLocalOffer
              className="text-xl"
              color={`${active === 5 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 5 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              All Events
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link
            to="/dashboard-create-event"
            className="w-full flex items-center"
          >
            <VscNewFile
              className="text-xl"
              color={`${active === 6 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 6 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Create Event
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link
            to="/dashboard-withdraw-money"
            className="w-full flex items-center"
          >
            <CiMoneyBill
              className="text-xl"
              color={`${active === 7 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 7 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Withdraw Money
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard-messages" className="w-full flex items-center">
            <BiMessageSquareDetail
              className="text-xl"
              color={`${active === 8 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 8 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Shop Inbox
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard-coupouns" className="w-full flex items-center">
            <AiOutlineGift
              className="text-xl"
              color={`${active === 9 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 9 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Discount Codes
            </h5>
          </Link>
        </div>

        <div className="w-full flex items-center px-4 pt-3">
          <Link to="/dashboard-refunds" className="w-full flex items-center">
            <HiOutlineReceiptRefund
              className="text-xl"
              color={`${active === 10 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
                active === 10 ? "text-[crimson]" : "text-[#555]"
              }`}
            >
              Refunds
            </h5>
          </Link>
        </div>
      </div>
      <div className="w-full flex   items-center border-t p-3 ">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            className="text-xl"
            color={`${active === 11 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[14px] font-[400] ${
              active === 11 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
