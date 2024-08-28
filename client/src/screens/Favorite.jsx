import React from "react";
import NavBar from "../layout/NavBar";

import SideBar from "./dashboard/SideBar";
import Table from "../components/Table";
import { Movies } from "../data/MovieData";

const Favorite = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar></SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold"> Favorites Products</h2>
            <button className="bg-main font-medium transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded">
              Delete All
            </button>
          </div>
          <Table data={Movies} admin={false} />
        </div>
      </div>
    </>
  );
};

export default Favorite;
