import { type SchemaTypeDefinition } from "sanity";
import { contentType } from "@/sanity/schemaTypes/contentType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contentType],
};
