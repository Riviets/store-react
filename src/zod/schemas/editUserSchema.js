import { z } from "zod";

export const editUserSchema = z.object({
  username: z
    .string()
    .min(4, { message: "At least 4 characters" })
    .max(12, { message: "No more than 12 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "At least 6 characters" })
    .max(12, { message: "No more than  12 characters" }),
});
