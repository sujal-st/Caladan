import { type SchemaTypeDefinition } from 'sanity'
import {resort} from './resort';
import {blog} from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [resort,blog],
}
