import React, { useState } from "react";
const Logo = "../../src/assets/Images/logo.png";
import { Divide as Hamburger } from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";
import Explore from "../Pages/Explore";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(true);
  const path = (route) => {
    if (route == location.pathname) return true;
  };
  return (
    <nav className=" bg-white shadow-md h-fit w-screen m-0 px-2">
      <header className="md:flex items-center justify-between max-w-6xl w-full mx-auto">
        <div className=" flex items-center justify-between">
          <img className="h-24 " src={Logo} alt="logo" />
          <div className="md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#04ff07"
              size={24}
            />
          </div>
        </div>
        <div className="">
          <ul
            className={`flex  absolute md:items-center px-6 space-y-2  ease-in-out  left-0 -mt-3 md:mt-0 py-2 bg-white  rounded-lg shadow-md transition-transform duration-500 
              justify-center md:relative md:space-y-0
            md:justify-between flex-col md:flex-row text-[#666666] md:space-x-10 font-menu ${
              !isOpen
                ? "hidden md:flex translate-x-full md:translate-x-0"
                : "block md:flex  translate-x-0"
            }`}
          >
            <li
              className={`cursor-pointer  hover:scale-110 transition duration-300 ease-in-out w-fit border-b-2 border-b-transparent ${
                path("/") && "border-b-[#04ff07] font-semibold"
              } `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <Explore
              className={`cursor-pointer  hover:scale-110 transition duration-300 ease-in-out w-fit border-b-2 border-b-transparent ${
                path("/explore") && "border-b-[#04ff07] font-semibold"
              } `}
              onClick={() => navigate("/explore")}
            />

            <li
              className={`cursor-pointer  hover:scale-110 transition duration-300 ease-in-out w-fit border-b-2 border-b-transparent ${
                path("/custom-app") && "border-b-[#04ff07] font-semibold"
              } `}
              onClick={() => navigate("/custom-app")}
            >
              Custom App Development
            </li>
            <li
              className={`cursor-pointer  hover:scale-110 transition duration-300 ease-in-out w-fit border-b-2 border-b-transparent ${
                path("/contact-us") && "border-b-[#04ff07] font-semibold"
              } `}
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </li>
            <li
              className={`cursor-pointer  hover:scale-110 transition duration-300 ease-in-out w-fit border-b-2 border-b-transparent ${
                path("/about-us") && "border-b-[#04ff07] font-semibold"
              } `}
              onClick={() => navigate("/about-us")}
            >
              About Us
            </li>
            <li
              className={`cursor-pointer  hover:scale-110 transition duration-300 ease-in-out w-fit border-b-2 border-b-transparent ${
                path("/register") && "border-b-[#04ff07] font-semibold"
              } `}
              onClick={() => navigate("/register")}
            >
              Register
            </li>
          </ul>
        </div>
      </header>
    </nav>
  );
}
