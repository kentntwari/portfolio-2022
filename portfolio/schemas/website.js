export default {
  name: 'website',
  title: 'Website',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'image',
    },
    {
      name: 'trailer',
      title: 'Trailer',
      type: 'text',
      rows: 3,
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 5,
    },
    {
      name: 'features',
      title: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
