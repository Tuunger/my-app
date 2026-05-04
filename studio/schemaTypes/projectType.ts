import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Kategorie',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Kategorie Name',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{ 
        type: 'image', 
        options: { hotspot: true } 
      }],
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
    }),
  ],
})