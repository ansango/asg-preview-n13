import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID as string,
  token: process.env.TINA_TOKEN as string,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'src/content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        label: 'Pages',
        name: 'page',
        path: 'src/content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            name: 'seo',
            label: 'SEO',
            type: 'object',
            fields: [
              {
                name: 'title',
                label: 'Title',
                type: 'string',
              },
              {
                name: 'description',
                label: 'Description',
                type: 'string',
              },
            ],
          },
        ],
        ui: {
          router: ({ document }) => `/${document._sys.filename}`,
        },
      },
    ],
  },
});
