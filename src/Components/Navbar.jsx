import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container flex mx-auto items-center justify-center">
        <div className="w-full bg-black/25 h-[96px] rounded-full max-w-[460px] mx-auto px-5 flex justify-between backdrop-blur-sm items-center text-2xl text-white/50">
          <Link to="Banner">
            <BiHomeAlt className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center" />
          </Link>
          <Link to="About">
            <BiUser className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center" />
          </Link>
          <Link to="Services">
            <BsClipboardData className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center" />
          </Link>
          <Link to="Projects">
            <BsBriefcase className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center" />
          </Link>
          <Link to="Contact">
            <BsChatSquare className="cursor-pointer w-[30px] h-[30px] flex items-center justify-center" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
Navbar;
