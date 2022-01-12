import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "username is required",
    }),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(6, "Password too short - should be 6 chars minimum"),
  }),
});
