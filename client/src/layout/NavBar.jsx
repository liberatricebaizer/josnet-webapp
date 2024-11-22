import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../static/data";
import styles from "../styles/styles";

const NavBar = ({ active }) => {
  return (
    <div className="block md:flex pt-8 md:pt-0 items-center text-sm justify-center gap-6">
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex ">
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#17dd1f]"
                  : "text-black 800px:text-[#fff]"
              }  800px:pb-0 font-[500] pb-3 md:pb-0 flex gap-8 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default NavBar;
