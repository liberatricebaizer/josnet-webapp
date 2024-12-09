import React from "react";
import { Movies, Testimonials } from "../data/MovieData";
export const Testimo = () => {
  return (
    <div className="lg:grid flex-wrap  gap-4 m-auto w-[90%] lg:w-[80%] pt-8 grid-cols-3 ">
      {Testimonials.map((testimo, index) => (
        <div
          key={index}
          className=" hover:scale-95 transitions mb-8 lg:mb-0  border shadow-md bg-white overflow-hidden"
        >
          <img
            src={`/images/${testimo?.image}`}
            alt={testimo?.name}
            className="  object-cover"
          />{" "}
          <div className="p-4">
            <h2 className="text-black text-lg pt-4 font-semibold">
              {testimo.title}
            </h2>
            <p className="pt-4 text-sm">{testimo.description}</p>
            <div className="flex pt-4 items-center justify-between">
              <img
                src={`/images/${testimo?.profileImage}`}
                alt={testimo?.name}
                className="w-20 h-20 rounded-full  object-cover"
              />
              <h3 className="text-[16px] font-bold ">{testimo.name}</h3>
              <span className=" bg-[#FF3F07] h-[1px] w-8  mx-1 my-2 :content-[''] inline-block font-semibold"></span>
              <p className="text-sm">{testimo.comment} comments</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
