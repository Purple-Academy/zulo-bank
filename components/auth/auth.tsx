import { FaUser } from "react-icons/fa";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

export const Auth = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full max-w-md rounded-xl shadow-[0px_10px_15px_0px_#0000001A] border border-[#E5E7EB] p-8">
      <div className="flex justify-center items-center w-20 h-20 rounded-full bg-[#F3F4F6] relative">
        <FaUser className="text-[#6B7280] w-5.25 h-6" />
        <button
          type="button"
          className="flex justify-center items-center w-6 h-6 rounded-full bg-[#1A1A1A] absolute cursor-pointer top-[70%] left-[70%]"
        >
          <span className="text-[#E5E7EB] text-sm leading-none">+</span>
        </button>
      </div>
      <SignIn />
      <SignUp />
    </div>
  );
};
