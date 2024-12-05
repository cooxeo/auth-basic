import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Atleast 2 char must be entered")
      .max(30, "char shd be no more than 30"),
    email: z.string().email("Please enter a valid email"),
    age: z
      .number()
      .min(18, "Age should be atleast 18 yrs")
      .max(80, "Age should be no more than 80 yrs"),
    password: z
      .string()
      .min(4, "Password shuold be at least 4 char")
      .max(20, "Password shuold be no more than 20 char"),
    conformPassword: z
      .string()
      .min(4, "Password shuold be at least 4 char")
      .max(20, "Password shuold be no more than 20 char"),
  })
  .refine((data) => data.password === data.conformPassword, {
    message: "password do not match",
    path: ["conformPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(4, "Please enter your password")
    .max(20, "Please enter valid password"),
});
