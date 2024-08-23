// lib/contentful.ts
import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchEntries(contentType: string): Promise<Entry<any>[]> {
  const entries = await client.getEntries({ content_type: contentType });
  return entries.items;
}
