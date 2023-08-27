import React from "react";
import { lion } from "../assets";

const Header = () => {
  return (
    <header className="py-8 flex ">
      <div className="container mx-auto justify-between flex  w-screen">
        <a href="#">
          <img src={lion} alt="lion" className="w-[111px] h-[111px]"></img>
        </a>
        <button
          className="rounded-3xl font-bold font-primary text-xl h-16"
          type="button"
        >
          Fun Time
        </button>
      </div>
    </header>
  );
};

export default Header;
