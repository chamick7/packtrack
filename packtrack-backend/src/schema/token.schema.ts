import { z } from "zod";

export const validateInviteTokenSchema = z.object({
  body: z.object({
    inviteToken: z.string({
      required_error: "inviteToken is required",
    }),
  }),
});
