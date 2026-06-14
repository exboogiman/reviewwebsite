const SITE = "https://aurorareviewsvoiceai.com";

// Explicitly welcome general crawlers and the major AI/answer-engine crawlers
// so the site is eligible for citation in ChatGPT, Perplexity, Claude, Gemini,
// Google AI Overviews and Bing Copilot.
export default function robots() {
  const allowAll = { allow: "/" };
  const aiAgents = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "Googlebot",
    "Bingbot",
    "Applebot-Extended",
    "CCBot",
  ];

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      ...aiAgents.map((userAgent) => ({ userAgent, ...allowAll })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
