import React from "react";

const SendOtp = () => {
  return (
    <div>
      <div className=" flex items-center justify-center gap-14 mt-10">
        <form
          className=" bg-transparent p-8 mt-8 rounded-lg w-[50%] 
         items-center justify-center shadow-lg"
          id="formId"
          //   onSubmit={handleSubmit}
        >
          <p className="text-sm text-left my-2 font-semibold">
            Please Enter your Email
          </p>
          <div className="my-3 w-[100%]">
            <input
              className=" py-3 px-5 border-2 w-full rounded-md outline-blue-700 mt-4"
              type="text"
              name="email"
              // required
              placeholder="Enter Your Email"
              //   onChange={(e) =>
              //     setNewData({
              //       ...newData,
              //       email: e.target.value,
              //     })
              //   }
            />
          </div>
          <input
            type="submit"
            className="singin__btn my-2 w-[20%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
            value="Next"
          />
        </form>
      </div>
    </div>
  );
};

export default SendOtp;
