import React from "react";
import { lion } from "../assets";

const Header = () => {
  return (
    <header className="flex py-3 flex-1">
      <div className="container mx-auto justify-between flex items-center">
        <a href="#">
          <img
            src={lion}
            alt="lion"
            className="w-[100px] rounded-full z-50"
          ></img>
          {/* <h1 className=" font-primary text-green-700 text-[70px]">.Vibe</h1> */}
        </a>
        <button
          className="font-bold font-primary text-xl h-16 bg-gray-800 rounded-full"
          type="button"
        >
          Fun Time
        </button>
      </div>
    </header>
  );
};

export default Header;
