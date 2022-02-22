import { z } from "zod";

export const assignPackageSchema = z.object({
  body: z.object({
    packages: z
      .object({
        trackingNumber: z.string({
          required_error: "trackingNumber is required",
        }),
        transporterDigit: z.string({
          required_error: "transporterDigit is required",
        }),
      })
      .array(),
  }),
});

export const arriveNoAssignSchema = z.object({
  body: z.object({
    packages: z
      .object({
        trackingNumber: z.string().optional(),
        transporterDigit: z.string({
          required_error: "transporterDigit is required",
        }),
        receiverId: z.number({
          required_error: "receiverId is required",
        }),
      })
      .array(),
  }),
});

export const PackageWithIdSchema = z.object({
  body: z.object({
    packages: z
      .object({
        id: z.number({
          required_error: "id is required",
        }),
      })
      .array(),
  }),
});

