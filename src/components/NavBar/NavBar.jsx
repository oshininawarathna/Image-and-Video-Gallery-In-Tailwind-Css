import React, { useState } from "react";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between pt-5 ">
        {open ? (
          <FaRegTimesCircle
            className="z-20 fixed right-5 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FaBars
            className="z-20 fixed right-5 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          />
        )}

        <ul
          className={`bg-[#ffffff14] w-screen  backdrop-blur-lg md:pl-10 pr-28 z-10 duration-500 ease-linear text-white md:static fixed top-0  md:h-auto h-screen ${
            !open ? "right-[-100%]" : "right-0"
          }`}
        >
          <li className="md:inline-block md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <Link to="/" className=" md:py-5 py-3 inline-block">
              Home
            </Link>
          </li>
          <li className="md:inline-block md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <Link to="/images" className=" md:py-5 py-3 inline-block">
              Images
            </Link>
          </li>
          <li className="md:inline-block md:ml-10 ml-5  md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <Link to="/videos" className=" md:py-5 py-3 inline-block">
              Videos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
