export default {
  name: 'tech',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'tech_name',
      title: 'Tech Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'tech_name',
        maxLength: 96,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
