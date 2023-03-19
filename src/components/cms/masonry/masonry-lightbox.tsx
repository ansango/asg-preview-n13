import type { Template } from "tinacms";

import { aspectRatio, centerImage } from "../../image";
import {
  columnsDefault,
  columnsLg,
  columnsMd,
  columnsSm,
  columnsXl,
  gapDefault,
  gapLg,
  gapMd,
  gapSm,
  gapXl,
} from "../../masonry";

export const masonryLightBoxTemplate: Template = {
  label: "Masonry LightBox",
  name: "masonryLightBox",
  ui: {
    itemProps: (item) => {
      return { label: item?.label };
    },
  },
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
    },
    {
      name: "visible",
      label: "Visible",
      type: "boolean",
    },
    {
      name: "columns",
      label: "Columns",
      type: "object",
      fields: [
        {
          name: "default",
          label: "Default",
          type: "string",
          options: columnsDefault,
        },
        {
          name: "sm",
          label: "Small",
          type: "string",
          options: columnsSm,
        },
        {
          name: "md",
          label: "Medium",
          type: "string",
          options: columnsMd,
        },
        {
          name: "lg",
          label: "Large",
          type: "string",
          options: columnsLg,
        },
        {
          name: "xl",
          label: "Extra Large",
          type: "string",
          options: columnsXl,
        },
      ],
    },
    {
      name: "gap",
      label: "Gap",
      type: "object",
      fields: [
        {
          name: "default",
          label: "Default",
          type: "string",
          options: gapDefault,
        },
        {
          name: "sm",
          label: "Small",
          type: "string",
          options: gapSm,
        },
        {
          name: "md",
          label: "Medium",
          type: "string",
          options: gapMd,
        },
        {
          name: "lg",
          label: "Large",
          type: "string",
          options: gapLg,
        },
        {
          name: "xl",
          label: "Extra Large",
          type: "string",
          options: gapXl,
        },
      ],
    },
    {
      type: "object",
      label: "Images",
      name: "images",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
        defaultItem: {
          url: "https://asg-cms.s3.eu-west-3.amazonaws.com/43-junio-2022-kodak-gold-200-website/11.webp",
          alt: "Image",
          label: "Image",
          aspectRatio: "square",
          centerImage: "center",
        },
      },
      fields: [
        {
          type: "string",
          label: "Label",
          name: "label",
        },
        {
          name: "url",
          label: "URL",
          type: "image",
          required: true,
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
          required: true,
        },
        {
          name: "aspectRatio",
          label: "Aspect Ratio",
          type: "string",
          options: aspectRatio,
          required: true,
        },
        {
          name: "centerImage",
          label: "Center Image",
          type: "string",
          options: centerImage,
          required: true,
        },
      ],
    },
  ],
};
