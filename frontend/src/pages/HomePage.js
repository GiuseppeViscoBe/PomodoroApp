import React from "react";
import NavBar from "../components/NavBar";
import PomodoroCard from "../components/PomodoroCard";

const HomePage = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 bg-customRed">
      <NavBar />
      <div className=" ">
        <PomodoroCard />
      </div>
    </div>
  );
};

export default HomePage;
