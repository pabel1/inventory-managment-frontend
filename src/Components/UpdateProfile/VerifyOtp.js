import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useVerifyOTPMutation } from "../../Redux/State/UserApiRequest/ApiRequest";
import { ErrorToast, SuccessToast } from "../HelperTools/RegivalidationTools";
import { getEmail } from "../HelperTools/userToken";
import { showLoader, hideLoader } from "../../Redux/State/SettingSlice";
const OTPInput = () => {
  const dispatch = useDispatch();
  const [verifyOTP] = useVerifyOTPMutation();
  let defaultInputStyle = {
    fontFamily: "monospace",
    MozAppearance: "textfield",
    margin: "4px",
    paddingLeft: "8px",
    width: "45px",
    borderRadius: "3px",
    height: "45px",
    fontSize: "32px",
    border: "1px solid lightskyblue",
    boxSizing: "border-box",
    color: "black",
    backgroundColor: "white",
    borderColor: "lightgrey",
  };

  const [otp, setOTP] = useState();
  const navigate = useNavigate();

  const handleOTP = async () => {
    const email = getEmail();

    try {
      if (otp.length === 6) {
        dispatch(showLoader());
        const res = await verifyOTP({ email, otp });
        dispatch(hideLoader());
        if (res.data) {
          SuccessToast("OTP Verification Successfull!");
          navigate("/recoverpassword");
        } else if (res.error) {
          ErrorToast(res.error.data.message);
        }
      } else {
        ErrorToast("OTP must be 6 digits!");
      }
    } catch (error) {
      ErrorToast("Something went Wrong!");
    }
  };

  return (
    <div className="  ">
      <div className=" bg-white shadow-lg w-2/4 mx-auto py-5  flex  flex-col items-center justify-center gap-4 mt-[10%]">
        <h1 className=" text-lg font-semibold">OTP Verification</h1>
        <p className="text-sm text-left my-2 font-semibold">
          Enter 6 digit OTP Code
        </p>

        <ReactCodeInput
          onChange={(value) => setOTP(value)}
          inputStyle={defaultInputStyle}
          fields={6}
        />
        <button
          onClick={handleOTP}
          type="submit"
          className="singin__btn my-2 w-[20%] px-5 py-3 rounded text-md text-white hover:bg-[#0052cccc] bg-[#0052cc] cursor-pointer"
          value="Next"
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default OTPInput;
