import { defineConfig } from 'tinacms';
import { kebabCase } from '../src/lib';
import { seoSchemaField, metaSchema, defaultMeta, defaultSeo, masonrySchemaField } from './schemas';
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
        ui: {
          defaultItem: {
            sequence: 1,
            title: 'New serie',
            description: 'This is a short description',
            summary: 'This is a long description',
            seo: defaultSeo,
            meta: defaultMeta,
            cover: 'https://picsum.photos/2048/1365',
            publishedAt: new Date().toISOString(),
            isFeatured: false,
            masonry: {
              columns: { default: '1', sm: '1', md: '2', lg: '3', xl: '3' },
              gap: { default: '3', sm: '5', md: '5', lg: '5', xl: '5' },
            },
          },
          filename: {
            readonly: true,
            slugify: ({ title, sequence }) => kebabCase(`${sequence}-${title}`),
          },
          router: ({ document }) => `/serie/${document._sys.filename}`,
        },

        fields: [
          {
            label: 'Sequence',
            name: 'sequence',
            type: 'number',
            required: true,
            ui: {
              validate: (value: number) =>
                value < 1 ? 'Sequence must be greater than 0' : undefined,
            },
          },
          {
            label: 'Title',
            name: 'title',
            type: 'string',
            required: true,
            isTitle: true,
          },

          {
            label: 'Description',
            name: 'description',
            type: 'string',
          },
          {
            label: 'Summary',
            name: 'summary',
            type: 'string',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          { ...seoSchemaField },
          { ...metaSchema },
          {
            type: 'image',
            name: 'cover',
            label: 'Cover',
            required: true,
          },
          {
            type: 'datetime',
            label: 'Published At',
            name: 'publishedAt',
          },
          {
            type: 'boolean',
            label: 'Is Featured',
            name: 'isFeatured',
          },
          { ...masonrySchemaField },
        ],
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
