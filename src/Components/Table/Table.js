import React from "react";

import { BiEdit, BiShow } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import {Link, useNavigate } from "react-router-dom";
const Table = ({ tableData }) => {
  console.log(tableData);

  const navigate=useNavigate()


// edit handler
  

  return (
    <div className=" mt-4">
      <table className="table-auto w-full text-left mx-auto rounded-lg">
        {/* <!-- head --> */}
        <thead className=" bg-bgSecondary border-b-2 text-primaryText">
          <tr className="">
            <th className="p-4  ">
              <label>
                <input type="checkbox" className="" />
              </label>
            </th>
            <th className="p-4 ">No.</th>
            <th className="p-4 ">User</th>
            <th className="p-4 ">Email</th>
            <th className="p-4 ">Phone</th>
            <th className="p-4 ">Actions</th>
          </tr>
        </thead>
        <tbody className=" font-semibold text-zinc-700">
          {/* <!-- row 1 --> */}
          {tableData?.map((item, i) => (
            <tr className=" border-b-2 hover:bg-bgColor " key={i}>
              <td className="p-4">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </td>
              <td className="p-4">
                <h2>{i + 1} </h2>
              </td>
              <td className="p-4">
                <div className="flex items-center space-x-3">
                  <img
                    className=" w-10 rounded-full ring-2 ring-myColor"
                    src={item.photo}
                    alt="user"
                  />
                  <h2>{item.name}</h2>
                </div>
              </td>
              <td className="p-4">
                <h1>{item.email}</h1>
              </td>
              <td className="p-4">{item.phone}</td>
              <td className="py-4 flex items-center space-x-3">
                <Link  to={'updatecustomer'} state={item}
                  className=" text-xl p-1  border border-purple-800 rounded-lg 
                 text-purple-800 "
                  
                >
                  <BiEdit />
                </Link>
                <button
                  className=" text-xl p-1  border border-sky-600 rounded-lg
                 text-sky-600"
                 
                >
                  <BiShow />
                </button>
                <button
                  className=" text-xl p-1  border border-red-500 rounded-lg 
                 text-red-500"
                 onClick={()=>navigate("deletecustomer")}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
