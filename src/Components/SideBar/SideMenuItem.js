import React, { useState } from "react";

import { HiOutlineChevronDown } from "react-icons/hi";
import { NavLink } from "react-router-dom";



const SideMenuItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {data && (
        <div className="mt-3">
          <div
            className="flex items-center justify-between hover:bg-lightMyColor
        hover:border-l-4 hover:border-myColor transition ease-in-out "
          >
            <NavLink
              to={ data?.link}
              className=" basis-[80%] py-2 px-4 flex items-center gap-3   
          "
            >
              {data?.icon && <data.icon className=" text-2xl text-myColor" />}
              <span className=" text-lg font-semibold text-primaryText">
                {data.name && data.name}
              </span>
            </NavLink>
            {data?.dropdown ?  (
              <button onClick={() => setOpen(!open)}>
                {open ? (
                  <HiOutlineChevronDown className=" rotate-180 text-lg text-primaryText mr-4" />
                ) : (
                  <HiOutlineChevronDown className=" text-lg text-primaryText mr-4" />
                )}
              </button>
            ):""}
          </div>
          <div className={`ml-10 mt-2 transition ${open ? "block" : "hidden"}`}>
            {
              data?.dropdown?.map((item, i) => {
                return (
                  <NavLink to={item.dropdownlink} className=" flex items-center gap-2 mt-2 p-1
                    " key={i}>
                    {<item.dropdownIcon className=" text-lg text-myColor" />}
                    <span className=" text-active text-base">
                      {item.dropdownname}
                    </span>
                  </NavLink>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenuItem;
