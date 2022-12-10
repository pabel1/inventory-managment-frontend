import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import formIcon from "../../Assets/image/formIcon.png";
import { getToken } from "../HelperTools/UserDetails";
import {
  ErrorToast,
  getBase64,
  IsEmpty,
  IsNotEmail,
  SuccessToast,
} from "../HelperTools/ValidationHelper";
import { useUpdateCustomerMutation } from "../Redux/services/apiRequest";

const UpdateForm = ({ state }) => {
  let userImgView = useRef();
  const navigate=useNavigate()
  const [updateCustomer] = useUpdateCustomerMutation();
//   const [data, setData] = useState();

  const [newData, setNewData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  });

  //   useEffect(() => {

  //     setData(state)
  //   }, [])

  const imageInputHandle = (e) => {
    let imgFile = e.target.files[0];
    getBase64(imgFile).then((base64Img) => {
      userImgView.src = base64Img;
      //   console.log(base64Img);
      setNewData({
        ...newData,
        photo: base64Img,
      });
    });
  };
  //   console.log(newData);

  const handleSubmit = async (e) => {
    const token = getToken();
    const { name, email, address, phone, photo, _id } = state;
    e.preventDefault();
    console.log(newData);
    if (newData.name.length === 0) {
      setNewData({
        ...newData,
        name: name,
      });
    }

    if (newData.email.length === 0) {
      setNewData({
        ...newData,
        email: email,
      });
    }
    if (newData.address.length === 0) {
      setNewData({
        ...newData,
        address: address,
      });
    }
    if (newData.phone.length === 0) {
      setNewData({
        ...newData,
        phone: phone,
      });
    }
    if (newData.photo.length === 0) {
      setNewData({
        ...newData,
        photo: photo,
      });
    }
    console.log(newData);
    const res = await updateCustomer({ token, newData, _id });
    navigate("customers",{replace:true})
    console.log(res);
  };
  return (
    <div>
      {state && (
        <div className=" w-[95%] bg-white drop-shadow-lg p-4 px-6 rounded-md mx-auto my-4">
          <form className=" bg-transparent " onSubmit={handleSubmit}>
            <img
              className=" w-16  rounded-full"
              src={state.photo}
              ref={(input) => (userImgView = input)}
              alt=""
            />
            <hr className="border border-myColor mt-3" />
            <div className=" flex items-center justify-between gap-8 mt-5">
              <div className=" flex flex-col gap-2 basis-1/2">
                <label className=" text-base font-semibold">
                  Customer Picture{" "}
                  <span className=" text-red-600 text-xl">*</span>
                </label>
                <input
                  type="file"
                  placeholder="User Profile Picture"
                  className=" p-2  text-b border-b  outline-none border-myColor   "
                  // ref={(input)=>userImgRef=input}

                  onChange={imageInputHandle}
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/2 ">
                <label className=" text-base font-semibold">
                  Email <span className=" text-red-600 text-xl">*</span>{" "}
                </label>
                <input
                  // key={Date.now()}

                  placeholder="Customer Email"
                  className=" p-2  border-b  outline-none border-myColor text-base "
                  type="email"
                  defaultValue={state.email}
                  onChange={(e) =>
                    setNewData({
                      ...newData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className=" flex items-center justify-between gap-8 mt-5">
              <div className="flex flex-col gap-2 basis-1/2">
                <label className=" text-base font-semibold">
                  Customer Name <span className=" text-red-600 text-xl">*</span>
                </label>
                <input
                  // key={Date.now()}
                  placeholder="Customer Name"
                  className="p-2 border-b outline-none border-myColor  text-bas"
                  type="text"
                  defaultValue={state.name}
                  onChange={(e) =>
                    setNewData({
                      ...newData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/2">
                <label className=" text-base font-semibold">
                  Address <span className=" text-red-600 text-xl">*</span>
                </label>
                <input
                  // key={Date.now()}
                  placeholder="address"
                  className="p-2 border-b outline-none border-myColor  text-bas"
                  type="text"
                  defaultValue={state.address}
                  onChange={(e) =>
                    setNewData({
                      ...newData,
                      address: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className=" flex items-center justify-between gap-8 mt-5">
              <div className="flex flex-col gap-2 basis-1/2">
                <label className=" text-base font-semibold">
                  Mobile Number<span className=" text-red-600 text-xl">*</span>
                </label>
                <input
                  // key={Date.now()}
                  placeholder="Mobile"
                  className="p-2 border-b outline-none border-myColor text-bas"
                  type="text"
                  defaultValue={state.phone}
                  onChange={(e) =>
                    setNewData({
                      ...newData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className=" flex items-center justify-center my-5 ">
              <input
                type="submit"
                // onClick={UpdateMyProfile}
                className=" bg-myColor text-white text-base px-5 py-2 w-[30%] tracking-wide rounded
               hover:bg-fuchsia-900 cursor-pointer "
                value="Update Change"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateForm;
