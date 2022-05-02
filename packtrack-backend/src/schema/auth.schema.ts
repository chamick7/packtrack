import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "email is required",
      })
      .email({ message: "Must be a valid email" }),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(6, "Password too short - should be 6 chars minimum"),
  }),
});

export const registerWithTokenSchema = z.object({
  body: z.object({
    inviteToken: z.string({
      required_error: "inviteToken is required",
    }),
    user: z.object({
      email: z
        .string({
          required_error: "user email is required",
        })
        .email({ message: "Must be a valid email" }),
      password: z
        .string({
          required_error: "user password is required",
        })
        .min(6, "Password too short - should be 6 chars minimum"),
      firstName: z.string({
        required_error: "user firstName is required",
      }),
      lastName: z.string({
        required_error: "user lastName is required",
      }),
      mobile: z
        .string({
          required_error: "user mobile is required",
        })
        .length(10, "mobile must be 10 character length"),
      notification: z
        .string({
          required_error: "user notification is required",
        })
        .array()
        .min(1)
        .max(3),
    }),
  }),
});
