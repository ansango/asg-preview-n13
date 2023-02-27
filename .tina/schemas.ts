import { SchemaField } from 'tinacms';
import { cameras, films, tags } from '../src/constants';

export const seoSchemaField: SchemaField = {
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
      label: 'Shot Period',
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
