import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineBarChart } from "react-icons/ai";
import "../styles/NavBar.css"
import { TbSquareLetterGFilled } from "react-icons/tb";



const NavBar = () => {
  return (
    <section>
      <header>
        <div className="navbar-container border-none">
          <div className="flex items-center">
            <FaCheckCircle className="navbar-icon" />
            <span className="ml-1 text-lg text-white">Pomofocus</span>
          </div>
          <div className="flex">
            <div className="navbar-icon-text">
              <AiOutlineBarChart className="navbar-icon" />
              <span className="navbar-secondary-text hidden sm:inline">Report</span>
            </div>
            <div className="navbar-icon-text">
              <IoMdSettings className="navbar-icon" />
              <span className="navbar-secondary-text hidden sm:inline">Settings</span>
            </div>
            <div className="flex items-center w-9 h-9 mr-3 rounded-md backdrop-blur-lg bg-white/25">
              <TbSquareLetterGFilled  className="w-full h-full text-white" />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
