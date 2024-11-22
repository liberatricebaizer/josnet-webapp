import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ title, basePath, itemCount, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={basePath}
        className="text-black font-bold no-underline text-sm hover:text-red-500"
      >
        {title}{" "}
        <span className="text-sm text-[#6f6e6e] font-medium">
          ({itemCount} products)
        </span>
      </NavLink>
      {isOpen && (
        <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-10 p-2 w-64">
          <ul className="list-none p-0 m-0">
            {items.map((item) => (
              <li key={item.path} className="my-1">
                <NavLink
                  to={`${basePath}/${item.path}`}
                  className="text-gray-700 no-underline text-sm hover:text-black hover:underline font-normal hover:font-extrabold"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
