import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import formIcon from "../../Assets/image/formIcon.png";
import { getToken } from "../HelperTools/UserDetails";
import {
  ErrorToast,
  getBase64,
  IsEmpty,
  IsNotEmail,
  SuccessToast,
} from "../HelperTools/ValidationHelper";
import { useCreateCustomerMutation } from "../Redux/services/apiRequest";
const CreateForm = () => {
  const [createCustomer] = useCreateCustomerMutation();
  const navigate=useNavigate()
  let userImgView = useRef();
  const [newData, setNewData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  });

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
    // console.log(newData)
    const token = getToken();
    e.preventDefault();
    if (newData.name.length === 0) {
      ErrorToast("Name Required!");
    } else if (newData.phone.length === 0) {
      ErrorToast("Phone Number Are Required!");
    } else if (IsNotEmail(newData.email)) {
      ErrorToast("Valid  Email Required!");
    } else if (IsEmpty(newData.address)) {
      ErrorToast("Password  Required!");
    } else if (
      newData.name &&
      newData.phone &&
      newData.email &&
      newData.address &&
      newData.photo
    ) {
      //   dispatch(showLoader())
      const res = await createCustomer({ newData, token });
      // if(resInfo.isLoading){
      //   dispatch(showLoader());
      // }
      //   dispatch(hideLoader())
      console.log(res);
      if (res.data) {
        SuccessToast("Customer Create Success!");

        navigate("customers", {replace:true});
      } else if (!res.data) {
        document.getElementById("formId").reset();
        ErrorToast("Something went wrong!");
      }
    }
  };

  return (
    <div>
      <div className=" w-[95%] bg-white drop-shadow-lg p-4 px-6 rounded-md mx-auto my-4">
        <form className=" bg-transparent " onSubmit={handleSubmit}>
          <img
            className=" w-16 pb-2"
            src={formIcon}
            ref={(input) => (userImgView = input)}
            alt=""
          />
          <hr className="border border-myColor" />
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
              value="Create New"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
