import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: ['/images/', '/images/personal/', '/images/professional/'],
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        disallow: ['/'],
      },
      {
        userAgent: 'Bingbot',
        disallow: ['/images/'],
      },
    ],
  };
}

