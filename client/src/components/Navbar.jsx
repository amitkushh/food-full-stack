import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";

function Navbar() {
  return (
    <header>
      <div className="flex justify-between items-center bg-green-400 px-6 py-4 md:px-20 lg:px-20">
        <div className="flex justify-center items-center">
          <Link to="/">
            <p className="text-white font-bold text-2xl">
              Fooddy<span className="text-4xl">.</span>
            </p>
          </Link>
        </div>
        <nav className="hidden md:flex lg:flex">
          <ul className="flex justify-center items-center text-white gap-6 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-green-200" : "text-white"}`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-green-200" : "text-white"}`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/all-food"
              className={({ isActive }) =>
                `${isActive ? "text-green-200" : "text-white"}`
              }
            >
              <li>ALL Food</li>
            </NavLink>
            <div>
              <NavLink to="/sign-up">
                <button className="bg-green-300 py-1 px-4 rounded-full shadow-sm shadow-white hover:bg-green-400 cursor-pointer">
                  Get Started
                </button>
              </NavLink>
            </div>
          </ul>
        </nav>
        <div className="md:hidden lg:hidden">
          <TbMenu3 className="text-white h-8 w-8" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
