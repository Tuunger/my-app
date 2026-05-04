import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '6910424u', // Ersetze dies durch deine tatsächliche Projekt-ID
  dataset: 'production',
  useCdn: true, // `false` für Echtzeit-Daten, `true` für schnellere Cache-Antworten
  apiVersion: '2023-10-01', // Ein gültiges Datum (YYYY-MM-DD)
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);