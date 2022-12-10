import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storeToken } from "../HelperTools/UserDetails";
import { ErrorToast, IsEmpty, IsNotEmail, SuccessToast } from "../HelperTools/ValidationHelper";
import { useCreateUserMutation } from "../Redux/services/apiRequest";

const Registration = () => {

    const navigate=useNavigate()
    const [createUser]=useCreateUserMutation()
  const [newData, setNewData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    photo:
      "data:image/png;base64,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",
    phone: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (newData.firstname.length === 0) {
      ErrorToast("FirstName Required!");
    }

    else if (newData.lastname.length === 0) {
      ErrorToast("LastName Required!");
    }
    else if (IsNotEmail(newData.email)) {
      ErrorToast("Valid  Email Required!");
    }
    else if (IsEmpty(newData.password)) {
      ErrorToast("Password  Required!");
    } else if (
      newData.firstname &&
      newData.lastname &&
      newData.email &&
      newData.password &&
      newData.phone
      
    ) {
    //   dispatch(showLoader())
      const res = await createUser(newData);
      // if(resInfo.isLoading){
      //   dispatch(showLoader());
      // }
    //   dispatch(hideLoader())
      console.log(res);
      if (res.data) {
        SuccessToast("Registration Success!");
        storeToken(res.data.acces_token);
        navigate("/dashboard");
      } else if (!res.data) {
        document.getElementById("formId").reset();
        ErrorToast("Email Already Exist!");
      }
    }
  };
  return (
    <div>
      <div className=" flex items-center justify-center gap-14">
        {/* <div className="w-[30%] bg-transparent">
          <img className="  text-transparent" src={illus} alt="" />
        </div> */}
        <form
          className=" bg-white drop-shadow-lg p-12 my-24 rounded-lg w-[50%]  items-center justify-center"
            onSubmit={handleSubmit}
          id="formId"
        >
          <h1 className="text-3xl text-left font-bold text-[#0052cc]">
            Create Account
          </h1>
          <p className="text-sm text-left my-5">
            Fill in the details below to create an account
          </p>
          <div className="my-5 w-[100%]">
            <input
              className=" py-3 px-5 border-none w-full rounded-md  focus:outline-none mt-4"
              type="text"
              name="firstName"
              id=""
              placeholder="Enter Your First Name"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  firstname: e.target.value,
                })
              }
            />
            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="text"
              name="lastName"
              id=""
              placeholder="Enter Your Last Name"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  lastname: e.target.value,
                })
              }
            />

            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  email: e.target.value,
                })
              }
            />
            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="text"
              name="phone"
              placeholder="Mobile Number"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  phone: e.target.value,
                })
              }
            />

            <input
              className=" py-3 px-5 border-none w-full rounded-md focus:outline-none mt-4"
              type="password"
              name="password"
              id=""
              placeholder="Password"
              onChange={(e) =>
                setNewData({
                  ...newData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <p className="text-right mt-4 mb-1">
            Forget Password?{" "}
            <Link
              className="text-[#0052cc] cursor-pointer font-semibold"
              to="/forgetpassword"
            >
              Find Here
            </Link>
          </p>
          <button
            type="submit"
            className="singin__btn my-5 w-[100%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Create Account"
          >
            Create Account
          </button>
          <p className="text-center my-4">
            Already have an account?{" "}
            <Link className="text-[#0052cc] cursor-pointer" to="/">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
