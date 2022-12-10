import React from "react";
import { MdChecklistRtl } from "react-icons/md";
const DropDownMenu = () => {
  return (
    <div className={`ml-10 mt-2 `}>
      <a href="/" className=" flex items-center gap-3">
        <MdChecklistRtl className=" text-lg text-primary" />
        <span className=" text-primaryText text-base">Customers List</span>
      </a>
    </div>
  );
};

export default DropDownMenu;
