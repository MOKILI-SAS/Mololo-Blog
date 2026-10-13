// Source canonique du Moteur SEO MOKILI (Section 11 du MOKILI Site Vitrine Engine)

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishDate?: string;
  author?: string;
  keywords?: string[];
}

export const SITE_CONFIG = {
  name: 'Blog Mololo',
  tagline: 'Studio Média Culturel en Ligne',
  description: 'Le média de référence des cultures contemporaines africaines et de leur diaspora. Musique, créations, clubbing, séries & sessions exclusives.',
  url: 'https://mololo.media', // ou domaine de production
  author: 'Blog Mololo Studio',
  locale: 'fr_FR',
  twitterHandle: '@oyomololo',
  themeColor: '#e01a31',
  backgroundColor: '#fff1d9',
  defaultOgImage: '/images/og-mololo.png',
  legalCredit: 'Propulsé par MOKILI',
  legalCreditUrl: 'https://mokili.io',
};

/**
 * Formatage canonique du titre selon le budget MOKILI (50-60 caractères)
 */
export function formatTitle(title: string, addSuffix: boolean = true): string {
  if (!addSuffix) return title;
  const suffix = ` | ${SITE_CONFIG.name}`;
  if (title.includes(SITE_CONFIG.name)) return title;
  return `${title}${suffix}`;
}

/**
 * Génération des données structurées Schema.org pour l'Organisation / Studio
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: SITE_CONFIG.name,
    alternateName: 'Mololo Media Studio',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      'https://www.tiktok.com/@oyomololo',
      'https://www.instagram.com/oyomololo',
      'https://www.youtube.com/@oyomololo',
      'https://www.facebook.com/oyomololo',
      'https://x.com/oyomololo',
      'https://mololoplus.com'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial and partnerships',
      email: 'contact@mololo.media'
    }
  };
}

/**
 * Données structurées pour un Article / Format Média
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishDate: string;
  author: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: [article.image],
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`
      }
    },
    articleSection: article.category
  };
}
