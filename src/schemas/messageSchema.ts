import { z } from "zod";
export const messageSchema = z.object({
  content: z
    .string()
    .min(1, "Message is required")
    .max(200, "Message must be less than 200 characters"),
});
