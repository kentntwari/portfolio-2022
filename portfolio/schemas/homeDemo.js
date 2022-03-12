export default {
  name: 'demo',
  title: 'Website Demo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title of Demo',
      type: 'string',
    },
    {
      name: 'snippet_1',
      title: 'First snippet',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'snippet',
          title: 'Snippet',
          type: 'image',
        },
        {
          name: 'context',
          title: 'Context',
          type: 'text',
          rows: 5,
        },
      ],
    },
    {
      name: 'snippet_2',
      title: 'Second snippet',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'snippet',
          title: 'Snippet',
          type: 'image',
        },
        {
          name: 'context',
          title: 'Context',
          type: 'text',
        },
      ],
    },
    {
      name: 'snippet_3',
      title: 'Third snippet',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'snippet',
          title: 'Snippet',
          type: 'image',
        },
        {
          name: 'context',
          title: 'Context',
          type: 'text',
        },
      ],
    },
  ],
};
