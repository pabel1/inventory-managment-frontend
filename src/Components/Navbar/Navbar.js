import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import NavMenu from "./NavMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex flex-col md:flex-row items-center justify-around py-6  ">
      <div className=" flex gap-3 md:flex-col lg:flex-row md:justify-start  md:gap-3 md:mr-4">
        <div className=" flex items-center gap-5">
          <BsArrowLeft className=" text-2xl font-extrabold  text-primaryText" />
          <h1 className=" text-lg md:text-2xl font-bold">Create Invoices</h1>
        </div>
        <div className=" flex items-center  bg-white py-2 px-5 text-primaryText rounded-xl">
          <input
            className=" text-base font-normal outline-none"
            type="text"
            placeholder="Search Here..."
          />
          <BsSearch className=" text-lg" />
        </div>

        <div>
          <button
            className="  text-xl text-active md:hidden "
            onClick={() => setOpen(!open)}
          >
            {open ? <ImCross /> : <AiOutlineMenuUnfold />}
          </button>
        </div>
      </div>

      {/* navmenu */}
      <NavMenu open={open} />
    </div>
  );
};

export default Navbar;
