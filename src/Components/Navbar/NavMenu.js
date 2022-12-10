import React from "react";
import { BsFileEarmarkPlus, BsFillCaretDownFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavMenu = ({ open }) => {
  return (
    <>
      <div className=" hidden md:flex  md:flex-col-reverse md:mr-3 lg:flex-row items-center gap-6 text-2xl   ">
        <div className="flex items-center gap-6 text-2xl text-primaryText ">
          <a href="/" className="relative">
            <IoMdNotificationsOutline className="" />
            <p
              className=" absolute px-[3px] py-[2px] text-center -top-2 -right-2 text-xs bg-yellow-500 
          rounded-full text-white"
            >
              12
            </p>
          </a>
          <a href="/" className=" relative">
            <MdMailOutline className=" " />{" "}
            <p
              className=" absolute px-[3px] py-[2px] text-center -top-2 -right-2 text-xs  bg-green-500
          rounded-full text-white"
            >
              85
            </p>
          </a>
          <a href="/" className="relative">
            <HiOutlineCalendar className=" " />{" "}
            <p
              className=" absolute px-[3px] py-[2px] text-center -top-2 -right-2 text-xs bg-active 
          rounded-full text-white"
            >
              25
            </p>
          </a>
        </div>

        <a
          href="/"
          className="flex items-center md:gap-1 lg:gap-3 bg-transparent border-2
     border-myColor md:py-1 lg:py-2 px-4 rounded-2xl text-myColor md:text-sm  lg:text-base "
        >
          <span>
            <BsFileEarmarkPlus className=" text-base lg:text-xl" />
          </span>
          <span className=" whitespace-pre">New Invoices</span> 
        </a>

        <div className="flex  items-center gap-4">
          <div>
            <h2 className=" text-base lg:text-lg font-bold">Pabel Ahmed</h2>
            <p className=" text-xs lg:text-sm text-primaryText">Super Admin</p>
          </div>
          <div className=" flex items-center text-[#C4C4C4] gap-2">
            <img
              className="w-12 h-12  bg-[#c4c4c4] border rounded-xl"
              src=""
              alt="user"
            />
            <a href="/"><BsFillCaretDownFill /></a> 
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={` w-[100%] px-1  rounded-xl mx-auto bg-white shadow-lg 
    transition 
    ${open ? "block" : "hidden"}`}
      >
        <div className=" grid grid-cols-2 mt-14 md:hidden  items-center gap-10 text-2xl   ">
          <div className="flex flex-col items-center justify-start gap-6 text-2xl text-primaryText mx-3 ">
            <a href="/" className="relative">
              <IoMdNotificationsOutline className="" />
              <p
                className=" absolute px-[3px] py-[2px] text-center -top-2 -right-2 text-xs bg-yellow-500 
          rounded-full text-white"
              >
                12
              </p>
            </a>
            <a href="/" className=" relative">
              <MdMailOutline className=" " />{" "}
              <p
                className=" absolute px-[3px] py-[2px] text-center -top-2 -right-2 text-xs  bg-green-500
          rounded-full text-white"
              >
                85
              </p>
            </a>
            <a href="/" className="relative">
              <HiOutlineCalendar className=" " />{" "}
              <p
                className=" absolute px-[3px] py-[2px] text-center -top-2 -right-2 text-xs bg-active 
          rounded-full text-white"
              >
                25
              </p>
            </a>
          </div>

          <div className="flex flex-col-reverse  items-center gap-4">
            <div>
              <h2 className=" text-base lg:text-lg font-bold">James Blunt</h2>
              <p className=" text-xs lg:text-sm text-primaryText">
                Super Admin
              </p>
            </div>
            <div className=" flex items-center text-[#C4C4C4] gap-2">
              <img
                className="w-12 h-12  bg-[#c4c4c4] border rounded-xl"
                src=""
                alt="user"
              />
              <BsFillCaretDownFill />
            </div>
          </div>
          {/* <div className=" col-span-2 w-[100%]"> */}
          <a
            href="/"
            className="w-[50%] flex items-center justify-center mb-4 ml-[20%]    bg-transparent border-2
     border-active px-[.5px] rounded-2xl text-active md:text-sm 
      lg:text-base col-span-3 "
          >
            <span>
              <BsFileEarmarkPlus className=" text-base lg:text-xl" />
            </span>
            New Invoices
          </a>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default NavMenu;
