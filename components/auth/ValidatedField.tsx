import type { FieldError } from "react-hook-form";
import type { ReactNode } from "react";

type ValidatedFieldProps = {
  error?: FieldError;
  children: ReactNode;
  className?: string;
};

export const inputBaseClass =
  "w-full h-12.5 rounded-[11px] border bg-white pl-10 pr-4 text-[16px] text-[#272835] outline-none placeholder:text-[#6B7280]";

export const inputBorderClass = (hasError: boolean) =>
  hasError
    ? "border-red-500 focus:border-red-500"
    : "border-[#E5E7EB] focus:border-[#1F2937]";

export const ValidatedField = ({
  error,
  children,
  className = "",
}: ValidatedFieldProps) => (
  <div className={`w-full ${className}`}>
    {children}
    {error?.message && (
      <p role="alert" className="mt-1 text-xs text-red-500">
        {error.message}
      </p>
    )}
  </div>
);
