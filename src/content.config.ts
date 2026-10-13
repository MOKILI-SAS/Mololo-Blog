import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Collection des Articles & Reportages éditoriaux (Esprit Pan African Music x Mololo)
const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    format: z.enum([
      'MOLOLO SESSION',
      'MOLOLO CLUB',
      'MOLOLO RADAR',
      'MOLOLO NEWS',
      'MOLOLO+',
      'MOLOLO EPISODE',
      'MOLOLO PLAYLIST',
      'MOLOLO ORIGINAL'
    ]),
    category: z.string(), // Musique, Scènes, Clubbing, Révolution, Portraits, Cinéma
    author: z.string(),
    city: z.string(), // Kinshasa, Dakar, Lagos, Abidjan, Johannesburg, Londres, Paris, etc.
    publishDate: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    leadStory: z.boolean().default(false),
    coverImage: z.string(),
    audioPreviewUrl: z.string().optional(),
    audioTitle: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
  })
});

// Collection des Formats Officiels du Studio (issus de MOLOLO CHARTE & CO)
const formats = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/formats" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    badgeColor: z.string(),
    order: z.number(),
    frequency: z.string(),
    iconName: z.string()
  })
});

// Collection des Playlists & Sélections Musicales
const playlists = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/playlists" }),
  schema: z.object({
    title: z.string(),
    curator: z.string(),
    city: z.string(),
    tracksCount: z.number(),
    duration: z.string(),
    coverImage: z.string(),
    spotifyUrl: z.string().optional(),
    appleMusicUrl: z.string().optional(),
    featuredTrack: z.object({
      title: z.string(),
      artist: z.string(),
      previewUrl: z.string()
    }).optional(),
    description: z.string()
  })
});

export const collections = {
  articles,
  formats,
  playlists
};
