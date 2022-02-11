export default {
  name: 'about_me',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'profile_image',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'facts',
      type: 'object',
      fields: [
        {
          name: 'fact_one',
          title: 'First fact',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
        {
          name: 'fact_two',
          title: 'Second fact',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
        {
          name: 'fact_three',
          title: 'Third fact',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'questions',
      type: 'object',
      fields: [
        {
          name: 'question_one',
          title: 'First Question',
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
            },
            {
              name: 'answer',
              type: 'text',
            },
          ],
        },
        {
          name: 'question_two',
          title: 'Second Question',
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
            },
            {
              name: 'answer',
              type: 'text',
            },
          ],
        },
        {
          name: 'question_third',
          title: 'Third Question',
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
            },
            {
              name: 'answer',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
};
