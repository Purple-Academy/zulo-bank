import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaLock,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { signUpSchema, type SignUpValues } from "./auth.validation";
import {
  inputBaseClass,
  inputBorderClass,
  ValidatedField,
} from "./ValidatedField";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
  });

  const onSubmit = (data: SignUpValues) => {
    console.log("Sign up submit:", data);
  };

  return (
    <form
      className="w-full"
      aria-labelledby="sign-up-title"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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

      {/* Full name */}
      <ValidatedField error={errors.name} className="mt-8">
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-name" className="sr-only">
            Full name
          </label>

          <input
            id="sign-up-name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.name)}`}
            {...register("name")}
          />
        </div>
      </ValidatedField>

      {/* Personal / ID number */}
      <ValidatedField error={errors.personalId} className="mt-6">
        <div className="relative">
          <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-personal-id" className="sr-only">
            Personal number
          </label>

          <input
            id="sign-up-personal-id"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Personal number (ID)"
            aria-invalid={!!errors.personalId}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.personalId)}`}
            {...register("personalId")}
          />
        </div>
      </ValidatedField>

      {/* Date of birth */}
      <ValidatedField error={errors.dateOfBirth} className="mt-6">
        <div className="relative">
          <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-dob" className="sr-only">
            Date of birth
          </label>

          <input
            id="sign-up-dob"
            type="date"
            autoComplete="bday"
            aria-invalid={!!errors.dateOfBirth}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.dateOfBirth)}`}
            {...register("dateOfBirth")}
          />
        </div>
      </ValidatedField>

      {/* Phone number */}
      <ValidatedField error={errors.phone} className="mt-6">
        <div className="relative">
          <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-phone" className="sr-only">
            Phone number
          </label>

          <input
            id="sign-up-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+995 5XX XX XX XX"
            aria-invalid={!!errors.phone}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.phone)}`}
            {...register("phone")}
          />
        </div>
      </ValidatedField>

      {/* Email */}
      <ValidatedField error={errors.email} className="mt-6">
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-email" className="sr-only">
            Email address
          </label>

          <input
            id="sign-up-email"
            type="email"
            autoComplete="email"
            placeholder="nunezserigala@gmail.com"
            aria-invalid={!!errors.email}
            className={`${inputBaseClass} ${inputBorderClass(!!errors.email)}`}
            {...register("email")}
          />
        </div>
      </ValidatedField>

      {/* Password */}
      <ValidatedField error={errors.password} className="mt-6">
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-password" className="sr-only">
            Password
          </label>

          <input
            id="sign-up-password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
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

      {/* Confirm password */}
      <ValidatedField error={errors.confirmPassword} className="mt-6 mb-6">
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] text-[16px]" />
          <label htmlFor="sign-up-confirm-password" className="sr-only">
            Confirm password
          </label>

          <input
            id="sign-up-confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Confirm password"
            aria-invalid={!!errors.confirmPassword}
            className={`${inputBaseClass} ${inputBorderClass(
              !!errors.confirmPassword,
            )}`}
            {...register("confirmPassword")}
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <FaEyeSlash className="text-[16px] cursor-pointer" />
            ) : (
              <FaEye className="text-[16px] cursor-pointer" />
            )}
          </button>
        </div>
      </ValidatedField>

      {/* Terms & consent */}
      <section className="mb-6">
        <div className="flex items-start gap-2">
          <input
            id="sign-up-terms"
            type="checkbox"
            aria-invalid={!!errors.terms}
            className="mt-0.5 w-5 h-5 rounded-md cursor-pointer accent-[#0D0D12] shrink-0"
            {...register("terms")}
          />
          <label
            htmlFor="sign-up-terms"
            className="text-sm leading-5 text-[#6B7280] cursor-pointer"
          >
            I agree to the{" "}
            <span className="text-[#1A1A1A] underline">Terms of Service</span>{" "}
            and <span className="text-[#1A1A1A] underline">Privacy Policy</span>
          </label>
        </div>
        {errors.terms?.message && (
          <p role="alert" className="mt-1 text-xs text-red-500">
            {errors.terms.message}
          </p>
        )}
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
