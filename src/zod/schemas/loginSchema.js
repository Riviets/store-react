import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(4, { message: "At least 4 characters" })
    .max(16, { message: "No more than 16 characters" }),
  password: z
    .string()
    .min(4, { message: "At least 4 characters" })
    .max(16, { message: "No more than16 characters" }),
});
