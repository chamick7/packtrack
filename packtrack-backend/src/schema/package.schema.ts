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

export const arrivePackageSchema = z.object({
  body: z.object({
    packages: z
      .object({
        trackingNumber: z.string({
          required_error: "trackingNumber is required",
        }),
        transporterDigit: z.string({
          required_error: "transporterDigit is required",
        }),
        receiverId: z.number({
          required_error: "transporterDigit is required",
        }),
      })
      .array(),
  }),
});

export const pendingPackageSchema = z.object({
  body: z.object({
    packages: z
      .object({
        trackingNumber: z.string({
          required_error: "trackingNumber is required",
        }),
      })
      .array(),
  }),
});


export const receivePackageSchema = z.object({
  body: z.object({
    packages: z.object({
      trackingNumber: z.string({
          
      })
    })
  })
})