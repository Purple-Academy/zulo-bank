import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="w-full" aria-labelledby="sign-up-title">
      <section className="mt-6 text-center">
        <h2
          id="sign-up-title"
          className="text-[24px] font-bold leading-8 text-[#0D0D12]"
        >
          Create a new account
        </h2>

        <p className="mt-2 text-sm leading-5 text-[#6B7280]">
          Enter your details to register.
        </p>
      </section>
      <div className="w-full relative mt-8">
        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
        <label htmlFor="sign-up-name" className="sr-only">
          Full name
        </label>

        <input
          id="sign-up-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="John Doe"
          className="w-full h-12.5 rounded-[11px] border border-[#E5E7EB] bg-white pl-10 pr-4 text-[16px] text-[#272835] outline-none placeholder:text-[#6B7280] focus:border-[#1F2937]"
        />
      </div>
      <div className="w-full relative mt-8">
        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
        <label htmlFor="sign-up-email" className="sr-only">
          Email address
        </label>

        <input
          id="sign-up-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nunezserigala@gmail.com"
          className="w-full h-12.5 rounded-[11px] border border-[#E5E7EB] bg-white pl-10 pr-4 text-[16px] text-[#272835] outline-none placeholder:text-[#6B7280] focus:border-[#1F2937]"
        />
      </div>
      <div className="w-full relative mt-6 mb-6">
        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
        <label htmlFor="sign-up-password" className="sr-only">
          Password
        </label>

        <input
          id="sign-up-password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="12345678901234567890"
          className="w-full h-12.5 rounded-[11px] border border-[#E5E7EB] bg-white pl-10 pr-4 text-[16px] text-[#272835] outline-none placeholder:text-[#6B7280] focus:border-[#1F2937]"
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <FaEyeSlash className=" text-[16px] cursor-pointer" />
          ) : (
            <FaEye className=" text-[16px] cursor-pointer" />
          )}
        </button>
      </div>
      <section className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-1.75">
          <input
            id="sign-up-remember"
            type="checkbox"
            className="w-5 h-5 rounded-md cursor-pointer accent-[#0D0D12]"
          />

          <span className="text-sm leading-5 text-[#6B7280]">Remember me</span>
        </label>
        <button
          type="button"
          className="text-sm leading-5 text-[#1A1A1A] hover:underline cursor-pointer"
        >
          Forgot Password?
        </button>
      </section>
      <button
        type="submit"
        className="w-full mt-6 mb-6 py-3 rounded-lg bg-[#1F2937] text-[16px] font-medium text-white transition-colors hover:bg-[#272835] cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
};
