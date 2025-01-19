import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    number: z.string(),
    category: z.string(),
    title: z.string(),
    description: z.string(),
    challenge: z.string(),
    solution: z.string(),
    tags: z.array(z.string()),
    color: z.enum(["purple", "rose", "emerald"]),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ),
    results: z.array(z.string()),
  }),
});

export const collections = {
  projects,
};
