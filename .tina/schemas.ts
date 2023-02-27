import { SchemaField } from 'tinacms';
import { cameras, films, tags } from '../src/constants';
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
} from '../src/components/masonry';
import { aspectRatio, centerImage } from '../src/components/image';

export const seoSchemaField: SchemaField = {
  name: 'seo',
  label: 'Seo',
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
};

export const defaultSeo = {
  title: 'New serie',
  description: 'This is a new serie',
};

export const metaSchema: SchemaField = {
  type: 'object',
  name: 'meta',
  label: 'Meta',
  fields: [
    {
      label: 'Camera',
      name: 'camera',
      type: 'string',
      required: true,
      options: cameras,
    },
    {
      label: 'Film',
      name: 'film',
      type: 'string',
      required: true,
      options: films,
    },

    {
      type: 'object',
      label: 'Shot period',
      name: 'shot',
      fields: [
        {
          label: 'Start',
          name: 'start',
          type: 'datetime',
          required: true,
        },
        {
          label: 'End',
          name: 'end',
          type: 'datetime',
          required: true,
        },
      ],
    },
    {
      label: 'Tags',
      name: 'tags',
      type: 'string',
      list: true,
      options: tags,
    },
  ],
};

export const defaultMeta = {
  camera: cameras[1],
  film: films[1],
  shot: {
    start: new Date().toISOString(),
    end: new Date().toISOString(),
  },
  tags: [tags[0], tags[6]],
};

export const masonrySchemaField: SchemaField = {
  label: 'Masonry',
  name: 'masonry',
  type: 'object',
  fields: [
    {
      name: 'columns',
      label: 'Columns',
      type: 'object',
      fields: [
        {
          name: 'default',
          label: 'Default',
          type: 'string',
          options: columnsDefault,
        },
        {
          name: 'sm',
          label: 'Small',
          type: 'string',
          options: columnsSm,
        },
        {
          name: 'md',
          label: 'Medium',
          type: 'string',
          options: columnsMd,
        },
        {
          name: 'lg',
          label: 'Large',
          type: 'string',
          options: columnsLg,
        },
        {
          name: 'xl',
          label: 'Extra Large',
          type: 'string',
          options: columnsXl,
        },
      ],
    },
    {
      name: 'gap',
      label: 'Gap',
      type: 'object',
      fields: [
        {
          name: 'default',
          label: 'Default',
          type: 'string',
          options: gapDefault,
        },
        {
          name: 'sm',
          label: 'Small',
          type: 'string',
          options: gapSm,
        },
        {
          name: 'md',
          label: 'Medium',
          type: 'string',
          options: gapMd,
        },
        {
          name: 'lg',
          label: 'Large',
          type: 'string',
          options: gapLg,
        },
        {
          name: 'xl',
          label: 'Extra Large',
          type: 'string',
          options: gapXl,
        },
      ],
    },
    {
      type: 'object',
      label: 'Images',
      name: 'images',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.alt };
        },
        defaultItem: {
          url: 'https://asg-cms.s3.eu-west-3.amazonaws.com/43-junio-2022-kodak-gold-200-website/11.webp',
          alt: 'Image',
          label: 'Image',
          aspectRatio: 'square',
          centerImage: 'center',
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Label',
          name: 'label',
        },
        {
          name: 'url',
          label: 'URL',
          type: 'image',
          required: true,
        },
        {
          name: 'alt',
          label: 'Alt Text',
          type: 'string',
          required: true,
        },
        {
          name: 'aspectRatio',
          label: 'Aspect Ratio',
          type: 'string',
          options: aspectRatio,
          required: true,
        },
        {
          name: 'centerImage',
          label: 'Center Image',
          type: 'string',
          options: centerImage,
          required: true,
        },
      ],
    },
  ],
};
