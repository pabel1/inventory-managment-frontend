import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
// import Table from "../Table/Table";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" flex gap-4 scroll-smooth">
      <div className="  basis-2  md:basis-[20%] border-r min-h-screen ">
        <SideBar />
      </div>
      <div className=" basis-[80%]  md:mr-2 ">
        <div className=" w-full ">
            <Navbar />
        </div>
        <div className="  mx-auto pb-8 ">
          {/* <Table/> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
