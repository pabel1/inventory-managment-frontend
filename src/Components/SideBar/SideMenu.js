import React from "react";
import SideMenuItem from "./SideMenuItem";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
const SideMenu = () => {
  return (
    <div>
      <SideMenuItem
        data={{
          name: "Dashboard",
          link: "/dashboard",
          icon: MdOutlineDashboard,
        }}
      />
      <SideMenuItem
        data={{
          name: "Customers",
          link: "customers/",
          icon: FaUsers,
          dropdown:[
            {dropdownname:"New Customers ",dropdownIcon:FaUserPlus,dropdownlink:"createcustomer"},
            {dropdownname:"Customers List",dropdownIcon:MdChecklistRtl,dropdownlink:"customers/"},
            {dropdownname:"Customers update",dropdownIcon:MdChecklistRtl,dropdownlink:"updatecustomer"},
        ]
        }}
      />
      <SideMenuItem
        data={{
          name: "Expense",
          link: "expense",
          icon: FaUsers,
          dropdown:[
            {name:"New Expense ",dropdownIcon:FaUserPlus,link:"expense"},
            {name:"Expense List",dropdownIcon:MdChecklistRtl,link:"list"},
        ]
        }}
      />
      
    </div>
  );
};

export default SideMenu;
