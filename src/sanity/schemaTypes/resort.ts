import { defineField, defineType } from 'sanity'

export const resort = defineType({
  name: 'resort',
  title: 'Resort',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      description: 'e.g. "90 ft2"',
    }),
    defineField({
      name: 'beds',
      title: 'Beds',
      type: 'number',
    }),
    defineField({
      name: 'guests',
      title: 'Guests',
      type: 'number',
    }),
  ],
})