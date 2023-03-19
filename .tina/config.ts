import { defineConfig } from "tinacms";
import { optionsDark, optionsLight } from "../src/components/cms/backgrounds";
import { kebabCase } from "../src/lib";
import { metaSchema, masonrySchemaField, gallerySerieSchemaField } from "./schemas";
import {
  heroBaseTemplate,
  masonryBaseTemplate,
  allSeriesTemplate,
  contactFormTemplate,
  bodySimpleTemplate,
} from "./templates";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID as string,
  token: process.env.TINA_TOKEN as string,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    // @ts-ignore
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-s3");
      return pack.TinaCloudS3MediaStore;
    },
  },
  schema: {
    collections: [
      {
        label: "Series",
        name: "serie",
        path: "src/content/series",
        format: "mdx",
        ui: {
          filename: {
            readonly: true,
            slugify: ({ title, sequence }) => kebabCase(`${sequence}-${title}`),
          },
        },

        fields: [
          {
            name: "visible",
            label: "Visible",
            type: "boolean",
          },
          {
            type: "boolean",
            label: "Is Featured",
            name: "isFeatured",
          },
          {
            type: "image",
            name: "cover",
            label: "Cover Url",
          },
          {
            label: "Sequence",
            name: "sequence",
            type: "number",
            required: true,
            ui: {
              validate: (value: number) =>
                value < 1 ? "Sequence must be greater than 0" : undefined,
            },
          },
          {
            label: "Title",
            name: "title",
            type: "string",
            required: true,
            isTitle: true,
          },
          {
            label: "Description",
            name: "description",
            type: "string",
          },
          {
            label: "Summary",
            name: "summary",
            type: "string",
            required: true,
            ui: {
              component: "textarea",
            },
          },

          {
            type: "datetime",
            label: "Published At",
            name: "publishedAt",
          },

          { ...metaSchema },
          {
            ...gallerySerieSchemaField,
          },
          { ...masonrySchemaField },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "src/content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Blocks",
            ui: {
              visualSelector: true,
            },
            templates: [
              heroBaseTemplate,
              masonryBaseTemplate,
              allSeriesTemplate,
              contactFormTemplate,
              bodySimpleTemplate,
            ],
          },
        ],
      },
      {
        label: "Layout",
        name: "global",
        path: "src/content/global",
        format: "json",
        fields: [
          {
            type: "object",
            label: "Navigation",
            name: "navigation",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
              defaultItem: {
                href: "home",
                label: "Home",
              },
            },

            fields: [
              {
                type: "string",
                label: "Link",
                name: "href",
              },
              {
                type: "string",
                label: "Label",
                name: "label",
              },
            ],
          },
          {
            type: "object",
            label: "Social Links",
            name: "social",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.label };
              },
              defaultItem: {
                href: "home",
                label: "Home",
              },
            },

            fields: [
              {
                type: "string",
                label: "Link",
                name: "href",
              },
              {
                type: "string",
                label: "Label",
                name: "label",
              },
            ],
          },
          {
            type: "object",
            label: "Background",
            name: "background",
            fields: [
              {
                type: "string",
                label: "Light",
                name: "light",
                options: optionsLight,
              },
              {
                type: "string",
                label: "Dark",
                name: "dark",
                options: optionsDark,
              },
            ],
          },
        ],
      },
    ],
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (formConfig.id === "src/content/global/index.json") {
      return createGlobalForm(formConfig);
    }

    return createForm(formConfig);
  },
});
