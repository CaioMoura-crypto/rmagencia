import { defineField, defineType } from "sanity";

export const contentType = defineType({
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroDescription",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroWorks",
      type: "array",
      of: [
        {
          type: "object",
          name: "heroWork",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).max(16),
    }),
    defineField({
      name: "nossaHistoriaTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nossaHistoriaDescription",
      type: "string",
      validation: (rule) => rule.required(),
    }),
      defineField({
        name: "services",
        type: "image",
        options: {
        hotspot: true,
        },
        validation: (rule) => rule.required(),
        }),
  ],
});
