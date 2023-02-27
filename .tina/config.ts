import { defineConfig } from 'tinacms';
import { seoSchemaField } from './schemas';
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
        label: 'Series',
        name: 'serie',
        path: 'src/content/series',
        format: 'mdx',
        fields: [
          { ...seoSchemaField },
          {
            label: 'Title',
            name: 'title',
            type: 'string',
            required: true,
          },
          {
            label: 'Description',
            name: 'description',
            type: 'string',
          },
        ],
        ui: {
          router: ({ document }) => `/series/${document._sys.filename}`,
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
          { ...seoSchemaField },
        ],
        ui: {
          router: ({ document }) => `/${document._sys.filename}`,
        },
      },
    ],
  },
});
