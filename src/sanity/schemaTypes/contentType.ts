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
      name: "nossaHistoriaImage",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "services",
      type: "array",
      of: [
        {
          type: "object",
          name: "servicesItem",
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
      validation: (rule) => rule.required().min(1),
    }),

    defineField({
      name: "LogoContact",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "contact",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactItem",
          fields: [
            defineField({
              name: "contactTitle",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "ContactImage",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
