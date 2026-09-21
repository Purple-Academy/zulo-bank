import { z } from "zod";

const emailSchema = z.string().trim().email("Enter a valid email address");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Za-z]/, "Password must contain a letter")
  .regex(/\d/, "Password must contain a number");

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z
  .object({
    name: z.string().trim().min(2, "Name is too short"),
    personalId: z
      .string()
      .trim()
      .regex(/^\d{11}$/, "Personal number must be 11 digits"),
    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine((value) => {
        const age =
          (Date.now() - new Date(value).getTime()) /
          (1000 * 60 * 60 * 24 * 365.25);
        return age >= 18;
      }, "You must be at least 18 years old"),
    phone: z
      .string()
      .trim()
      .regex(/^\+?\d{9,15}$/, "Enter a valid phone number"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    terms: z.boolean().refine((value) => value, {
      message: "You must accept the Terms and Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
