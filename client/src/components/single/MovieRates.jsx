import React, { useState } from "react";
import Titles from "../Titles";
import { BiSolidBookmarkStar } from "react-icons/bi";
import { Message, Select } from "../UsedInputs";
import Rating from "../Star";
import { FaStar } from "react-icons/fa";
import { UsersData } from "../../data/MovieData";

const MovieRates = ({ movie }) => {
  const Ratings = [
    { title: "0 - Poor", value: 0 },
    { title: "1 - Fair", value: 1 },
    { title: "2 - Good", value: 2 },
    { title: "3 - Very Good", value: 3 },
    { title: "4 - Excellent", value: 4 },
    { title: "5 - Masterpiece", value: 5 },
  ];
  const [rating, setRating] = useState(0);
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BiSolidBookmarkStar} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-[#f9f8f8] xs:p-10 py-10 px-2 sm:p-20 rounded">
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-main font-semibold">
            Review '{movie?.name}'
          </h3>
          <p className="text-sm leading-7 font-medium text-gray-600">
            Write your review of this this product. It will be posted here. fell
            free to write anything you want!
          </p>
          <div className="text-sm w-full">
            <Select
              label="Select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              <Rating value={rating} />
            </div>
          </div>
          <Message label="Your Message" placeholder="Enter your review..." />
          <button className="bg-groon text-white py-3 w-full rounded flex-colo">
            Submit
          </button>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <h3 className="text-xl text-main font-semibold flex gap-3 items-center ">
            <FaStar className="text-groon" /> Product Reviews(45)
          </h3>
          <div className="w-full flex flex-col bg-white gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll ">
            {UsersData.map((user, i) => (
              <div className="md:grid flex flex-col text-gray-800 w-full grid-cols-12 gap-6 bg-[#f9f8f8] border border-gray-50 rounded-lg ">
                <div className="col-span-2 hidden bg-[#f9f8f8] md:block">
                  <img
                    src={`/images/${user ? user.image : "user.jpg"}`}
                    alt={user.fullName}
                    className="w-full h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h2>{user?.fullName}</h2>{" "}
                  <p className="text-xs leading-6 font-medium text-text">
                    {user?.message}
                  </p>
                </div>
                <div className="col-span-3  flex-rows border-l  text-xs gap-1 text-star">
                  <Rating value={user?.rate} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRates;
