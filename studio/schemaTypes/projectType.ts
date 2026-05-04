import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Design', value: 'design'},
          {title: 'Code', value: 'code'},
          {title: 'Foto', value: 'photo'},
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
