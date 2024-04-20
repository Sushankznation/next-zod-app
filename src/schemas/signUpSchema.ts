import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "User Name must includes two Characters")
  .regex(/^[a-zA-Z0-9]+$/, "User Name can only include letters and numbers");

export const signUpSchema = z.object({
  userName: userNameValidation,
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6)
    .max(20, { message: "Password must be between 6 and 20 characters" }),
});
