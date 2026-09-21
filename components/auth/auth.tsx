import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

type AuthMode = "sign-in" | "sign-up";

export const Auth = ({ mode }: { mode: AuthMode }) => {
  const navigate = useNavigate();
  const isRegister = mode === "sign-up";

  const toggleAuthMode = () => {
    navigate(isRegister ? "/sign-in" : "/sign-up");
  };

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

      {isRegister ? <SignUp /> : <SignIn />}

      <div className="flex gap-1.25">
        <p className="text-sm leading-5 text-[#6B7280]">
          {isRegister ? "Have an account?" : "Don't have an account?"}
        </p>
        <button
          type="button"
          className="text-sm leading-5 text-[#1A1A1A] hover:underline cursor-pointer"
          onClick={toggleAuthMode}
        >
          {isRegister ? "Sign in" : "Sign up"}
        </button>
      </div>
    </div>
  );
};
