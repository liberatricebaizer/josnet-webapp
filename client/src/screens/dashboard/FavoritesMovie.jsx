import React from "react";
import SideBar from "./SideBar";
import Table from "../../components/Table";
import { Movies } from "../../data/MovieData";

const FavoritesMovie = () => {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold"> Favorites Movies</h2>
          <button className="bg-main font-medium transitions hover:bg-groon border border-groon text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>
        <Table data={Movies} admin={false} />
      </div>
    </SideBar>
  );
};

export default FavoritesMovie;
