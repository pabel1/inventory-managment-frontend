import React from "react";
import logo from "../../Assets/image/inventory.png";
const SideBarLogo = () => {
  return (
    <div className=" border-b flex flex-col items-center py-3">
      <a href="/" className=" bg-white border border-myColor shadow-sm p-1 rounded-full">
        <img src={logo} alt="" className="w-12 p-1 " />
      </a>
      <span className=" hidden md:block">
        <p className=" text-[10px] text-primaryText">Admin Dashboard</p>
      </span>
    </div>
  );
};

export default SideBarLogo;
