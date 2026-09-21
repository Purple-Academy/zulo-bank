import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { signInSchema, type SignInValues } from "./auth.validation";
import {
  inputBaseClass,
  inputBorderClass,
  ValidatedField,
} from "./ValidatedField";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: SignInValues) => {
    console.log("Sign in submit:", data);
  };

  return (
    <form
      className="w-full"
      aria-labelledby="sign-in-title"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <section className="mt-6 text-center">
        <h2
          id="sign-in-title"
          className="text-[24px] font-bold leading-8 text-[#0D0D12]"
        >
          Login to your account
        </h2>

        <p className="mt-2 text-sm leading-5 text-[#6B7280]">
          Enter your details to login.
        </p>
      </section>

      <ValidatedField error={errors.email} className="mt-8">
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-in-email" className="sr-only">
            Email address
          </label>

          <input
            id="sign-in-email"
            type="email"
            autoComplete="email"
            placeholder="nunezserigala@gmail.com"
            aria-invalid={!!errors.email}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.email)}`}
            {...register("email")}
          />
        </div>
      </ValidatedField>

      <ValidatedField error={errors.password} className="mt-6 mb-6">
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-in-password" className="sr-only">
            Password
          </label>

          <input
            id="sign-in-password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Password"
            aria-invalid={!!errors.password}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.password)}`}
            {...register("password")}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FaEyeSlash className="text-[16px] cursor-pointer" />
            ) : (
              <FaEye className="text-[16px] cursor-pointer" />
            )}
          </button>
        </div>
      </ValidatedField>

      <section className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-1.75">
          <input
            id="sign-in-remember"
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
        Sign In
      </button>
    </form>
  );
};
