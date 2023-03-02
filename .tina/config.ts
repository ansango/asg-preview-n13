import { defineConfig } from "tinacms";
import { kebabCase } from "../src/lib";
import { seoSchemaField, metaSchema, defaultMeta, defaultSeo, masonrySchemaField } from "./schemas";
import { heroBaseTemplate, masonryBaseTemplate } from "./templates";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID as string,
  token: process.env.TINA_TOKEN as string,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        label: "Series",
        name: "serie",
        path: "src/content/series",
        format: "mdx",
        ui: {
          defaultItem: {
            sequence: 1,
            title: "New serie",
            description: "This is a short description",
            summary: "This is a long description",
            seo: defaultSeo,
            meta: defaultMeta,
            cover: "/43-junio-2022-kodak-gold-200-website/11.webp",
            publishedAt: new Date().toISOString(),
            isFeatured: false,
            masonry: {
              columns: { default: "1", sm: "1", md: "2", lg: "3", xl: "3" },
              gap: { default: "3", sm: "5", md: "5", lg: "5", xl: "5" },
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
          { ...seoSchemaField },
          { ...metaSchema },
          {
            type: "string",
            name: "cover",
            label: "Cover Url",
          },
          {
            type: "datetime",
            label: "Published At",
            name: "publishedAt",
          },
          {
            type: "boolean",
            label: "Is Featured",
            name: "isFeatured",
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
          { ...seoSchemaField },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Blocks",
            ui: {
              visualSelector: true,
            },
            templates: [heroBaseTemplate, masonryBaseTemplate],
          },
        ],
      },
      {
        label: "Global",
        name: "global",
        path: "src/content/global",
        format: "json",
        fields: [
          {
            type: "object",
            label: "Default Bucket",
            name: "defaultBucket",
            fields: [
              {
                type: "string",
                label: "Base URL",
                name: "baseUrl",
              },
            ],
          },
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
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
            ],
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "object",
                label: "Links",
                name: "links",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "",
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
                    href: "/",
                    label: "Twitter",
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
