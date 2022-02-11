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
      type: 'object',
      fields: [
        {
          name: 'general_view',
          title: 'General View',
          type: 'image',
        },
        {
          name: 'on_resize',
          title: 'On resize',
          type: 'image',
        },
        {
          name: 'code_view',
          title: 'Code View',
          type: 'image',
        },
      ],
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
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
