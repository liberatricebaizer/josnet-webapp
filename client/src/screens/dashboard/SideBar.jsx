import React from "react";
import { NavLink } from "react-router-dom";
import { categoriesData } from "../../static/data";

const SideBar = ({ children }) => {
  const active = "bg-dryGray text-groon";
  const hover = "hover:text-black hover:bg-slate-100";
  const inActive =
    " font-medium text-sm transitions flex lg:gap-1 items-center py-2 mx- lg:px-20";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <div className="hidden lg:flex">
      <div className="gap-10 items-start">
        <div className="col-span-2 sticky bg-white shadow-sm border border-gray-100 w-[270px] rounded-md">
          <h1 className="bg-[#5DBBFF] text-white p-2 flex text-2xl font-medium items-center justify-center">
            All Categories
          </h1>
          <div className="flex lg:block justify-center flex-wrap lg:flex-row py-1">
            {categoriesData.map((category, index) => (
              <NavLink to={category.link} key={index} className={Hover}>
                <p>{category.title}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-span-6 rounded-md bg-dr border border-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
