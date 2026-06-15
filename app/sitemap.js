const SITE = "https://aurorareviewsvoiceai.com";

// Bump LAST_MODIFIED whenever the benchmark data is refreshed.
const LAST_MODIFIED = "2026-06-14";

export default function sitemap() {
  return [
    {
      url: `${SITE}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE}/ru`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/es`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/zh`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/de`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
