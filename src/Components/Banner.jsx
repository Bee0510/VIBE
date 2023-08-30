import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/avatar.svg";
import pic from "../assets/portpic.png";

const Banner = () => {
  return (
    <section
      id="Services"
      className="mt-20 lg:mt-10 overflow-y-scroll w-screen overflow-hidden"
    >
      <div className=" flex flex-col lg:flex-row items-center mx-auto container lg:mt-10 justify-between">
        <div className="lg:w-1/2 flex flex-col">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              VISHAL <span>BEHERA</span>
            </h1>
            <div className="mb-4 text-xl lg:text-3xl font-semibold uppercase mt-4">
              <span className="mr-2 font-primary">Hi, I am</span>
              <TypeAnimation
                sequence={[
                  "an App Developer",
                  2000,
                  "a Web Developer",
                  2000,
                  "a Footballer",
                  2000,
                ]}
                speed={60}
                repeat={Infinity}
                wrapper="span"
                className="text-purple-500"
              />
            </div>
          </div>
          <div className="mb-8 max-w-lg mx-auto lg:mx-0 p-2 lg:p-0 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id
            iusto, dolorem, voluptatem aperiam, eaque saepe nostrum aliquam
            quaerat illo tempore recusandae voluptas vel. Sequi voluptas
            adipisci libero voluptatum distinctio?
          </div>
          <div className="flex flex-col gap-4 lg:flex-row items-center">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full">
              Contact Me
            </button>
            <a
              href="#"
              className="text-red-400 text-sm lg:text-base mt-4 lg:mt-0"
            >
              My Portfolio
            </a>
          </div>
          <div className="flex w-screen justify-evenly text-2xl lg:justify-start lg:gap-10 lg:mt-6 mt-8">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
          <img src={Image} alt="Profile" className="w-full" />
        </div>
        <div className="lg:hidden flex-1 max-w-[320px] mt-8">
          <img src={pic} alt="Profile" className="w-full " />
        </div>
      </div>
    </section>
  );
};

export default Banner;
