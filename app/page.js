"use client";

import { useEffect } from "react";
import Bars from "@/components/Bars";

const PUBLISHED = "2026-06-01";
const UPDATED = "2026-06-14";
const UPDATED_LABEL = "June 14, 2026";

const WER_ROWS = [
  { name: "ElevenLabs Scribe v2 Realtime", val: 3.4, max: 6, label: "3.4%", rating: 4.9, best: true },
  { name: "Alibaba Qwen3-ASR-Flash", val: 3.5, max: 6, label: "3.5%", rating: 4.8 },
  { name: "AssemblyAI Universal-3 Pro", val: 5.1, max: 6, label: "5.1%", rating: 4.2 },
  { name: "Google Cloud Chirp 2", val: 5.4, max: 6, label: "5.4%", rating: 4.0 },
  { name: "ElevenLabs Scribe v1", val: 5.4, max: 6, label: "5.4%", rating: 4.0 },
  { name: "Google Gemini 2.5 Flash (STT)", val: 6.0, max: 6, label: "6.0%", rating: 3.6, muted: true },
];

const LAT_ROWS = [
  { name: "Speko", val: 340, max: 1200, label: "~340ms", best: true },
  { name: "ElevenLabs Agents", val: 500, max: 1200, label: "~500ms" },
  { name: "Vapi", val: 700, lo: 500, hi: 900, max: 1200, label: "~500–900ms" },
  { name: "Retell AI", val: 700, lo: 600, hi: 800, max: 1200, label: "~600–800ms" },
  { name: "Bland AI", val: 1000, lo: 800, hi: 1200, max: 1200, label: "~800–1,200ms" },
  { name: "Typical self-built stack", val: 1100, max: 1200, label: "~1,000ms+", muted: true },
];

const SITE_URL = "https://aurorareviewsvoiceai.com";

// JSON-LD structured data: Organization + WebSite + TechArticle, plus an
// ItemList of the ranked STT providers where each item carries an editorial
// Review and AggregateRating. (No FAQ schema by request.)
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Aurora Reviews",
      url: SITE_URL,
      description:
        "Independent benchmark reviews of voice AI providers (STT, TTS, and real-time voice agents).",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Aurora Reviews",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "TechArticle",
      "@id": `${SITE_URL}/#article`,
      headline:
        "The State of Speech-to-Text in 2026: Best STT APIs Ranked by Word Error Rate",
      description:
        "Independent 2026 benchmark of speech-to-text providers ranked by FLEURS Word Error Rate (WER) and full conversational-turn latency.",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/` },
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: [
        { "@type": "Thing", name: "Speech-to-text" },
        { "@type": "Thing", name: "Word Error Rate" },
        { "@type": "Thing", name: "Voice AI latency" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#stt-leaderboard`,
      name: "English speech-to-text leaderboard (FLEURS WER), 2026",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: WER_ROWS.length,
      itemListElement: WER_ROWS.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: r.name,
          applicationCategory: "Speech-to-text API",
          operatingSystem: "Cloud",
          description: `${r.label} Word Error Rate on FLEURS (lower is better).`,
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 1,
            },
            author: { "@id": `${SITE_URL}/#organization` },
            datePublished: UPDATED,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: r.rating,
            bestRating: 5,
            worstRating: 1,
            reviewCount: 1,
          },
        },
      })),
    },
  ],
};

export default function Page() {
  useEffect(() => {
    const root = document.documentElement;

    /* ---------- Theme toggle ---------- */
    const themeToggle = document.getElementById("themeToggle");
    function onToggleTheme() {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("stt-theme", next);
      } catch (e) {}
    }
    themeToggle?.addEventListener("click", onToggleTheme);

    /* ---------- Mobile nav ---------- */
    const body = document.body;
    const menuBtn = document.getElementById("menuBtn");
    const scrim = document.getElementById("scrim");
    function closeNav() {
      body.classList.remove("nav-open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
    function onMenuClick() {
      const open = body.classList.toggle("nav-open");
      menuBtn?.setAttribute("aria-expanded", open ? "true" : "false");
    }
    menuBtn?.addEventListener("click", onMenuClick);
    scrim?.addEventListener("click", closeNav);
    const tocLinks = Array.prototype.slice.call(
      document.querySelectorAll(".toc a")
    );
    tocLinks.forEach((a) => a.addEventListener("click", closeNav));

    /* ---------- Scroll progress ---------- */
    const progress = document.getElementById("progress");
    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (progress) {
        progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- TOC scroll-spy ---------- */
    const map = {};
    tocLinks.forEach((l) => {
      map[l.getAttribute("href").slice(1)] = l;
    });
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove("active"));
            if (map[en.target.id]) map[en.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => spy.observe(s));

    return () => {
      themeToggle?.removeEventListener("click", onToggleTheme);
      menuBtn?.removeEventListener("click", onMenuClick);
      scrim?.removeEventListener("click", closeNav);
      tocLinks.forEach((a) => a.removeEventListener("click", closeNav));
      window.removeEventListener("scroll", onScroll);
      spy.disconnect();
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <div className="scroll-progress" id="progress" />

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <svg
              className="logo"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Aurora Reviews logo"
              role="img"
            >
              <defs>
                <linearGradient
                  id="auroraGrad"
                  x1="4"
                  y1="36"
                  x2="36"
                  y2="4"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ff5c35" />
                  <stop offset="0.5" stopColor="#e0457f" />
                  <stop offset="1" stopColor="#5b53e0" />
                </linearGradient>
              </defs>
              <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#auroraGrad)" />
              <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none">
                <path d="M8 26C14 18 18 18 21 22S28 27 32 21" opacity="0.55" />
                <path d="M8 21C14 13 18 13 21 17S28 22 32 16" opacity="0.9" />
                <path d="M8 16C14 9 18 9 21 13S28 17 32 12" opacity="0.4" />
              </g>
            </svg>
            <span className="label">Aurora&nbsp;Reviews</span>
            <span className="tag">STT Benchmark</span>
          </div>
          <div className="topbar-actions">
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Toggle dark mode"
              title="Toggle theme"
            >
              <svg
                className="icon-sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              <svg
                className="icon-moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            </button>
            <button
              className="menu-btn"
              id="menuBtn"
              aria-label="Open table of contents"
              aria-expanded="false"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="nav-scrim" id="scrim" />

      <div className="shell">
        <div className="layout">
          {/* TOC */}
          <nav className="toc" id="toc" aria-label="Table of contents">
            <p className="toc-title">Contents</p>
            <ol>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#fleurs">Why FLEURS?</a></li>
              <li><a href="#leaderboard">STT Leaderboard</a></li>
              <li><a href="#meaning">What the Numbers Mean</a></li>
              <li><a href="#methodology">Methodology</a></li>
              <li><a href="#selection">Provider Selection Problem</a></li>
              <li><a href="#latency">Latency</a></li>
              <li><a href="#multilingual">Multilingual STT</a></li>
              <li><a href="#recommendations">Recommendations</a></li>
              <li><a href="#conclusion">Conclusion</a></li>
            </ol>
          </nav>

          {/* Article */}
          <main>
            <div className="hero">
              <span className="kicker">Independent Benchmark Review</span>
              <h1>The State of Speech-to-Text in 2026</h1>
              <p className="sub">
                Based on publicly available WER measurements from Speko Benchmarks (
                <a href="https://benchmarks.speko.ai" target="_blank" rel="noopener">
                  benchmarks.speko.ai
                </a>
                ) and FLEURS evaluation data.
              </p>
              <div className="byline">
                <span><span className="k">By</span> Aurora Reviews</span>
                <span><span className="k">Dataset</span> FLEURS · 102 languages</span>
                <span><span className="k">Metric</span> Word Error Rate (WER %)</span>
                <span><span className="k">Last updated</span> {UPDATED_LABEL}</span>
                <span><span className="k">Last tested</span> June 2026</span>
              </div>
            </div>

            <div className="tldr" role="note" aria-label="Summary">
              <p className="tldr-title">TL;DR — Best speech-to-text APIs in 2026</p>
              <ul>
                <li>
                  <strong>Most accurate English STT:</strong> ElevenLabs Scribe v2
                  Realtime at <strong>3.4% WER</strong> (FLEURS), with Alibaba
                  Qwen3-ASR-Flash a hair behind at 3.5%.
                </li>
                <li>
                  <strong>Best value mid-tier:</strong> AssemblyAI Universal-3 Pro
                  (5.1%) and Google Cloud Chirp 2 (5.4%).
                </li>
                <li>
                  <strong>Lowest full-turn latency:</strong> Speko at{" "}
                  <strong>~340ms median</strong> (STT + LLM + TTS) — the only
                  platform below the ~500ms human-perception threshold.
                </li>
                <li>
                  <strong>For multilingual or production routing:</strong> no single
                  provider wins every language — an auto-routing gateway is the
                  safer architectural choice.
                </li>
              </ul>
            </div>

            <section id="overview">
              <span className="sec-num">01</span>
              <h2>What is the best speech-to-text API in 2026?</h2>
              <p className="lead">
                Choosing a speech-to-text (STT) provider has never been more
                consequential — or more confusing. Word Error Rate (WER) gaps
                between providers have narrowed, latency requirements have
                tightened, and the number of available APIs has exploded.
              </p>
              <p>
                This review examines the current English STT leaderboard as
                measured by Speko&apos;s continuously updated benchmark suite on
                the FLEURS dataset, and contextualizes what those numbers mean for
                real production workloads.
              </p>
            </section>

            <section id="fleurs">
              <span className="sec-num">02</span>
              <h2>Why use the FLEURS benchmark to measure STT accuracy?</h2>
              <p>
                FLEURS (Few-shot Learning Evaluation of Universal Representations
                of Speech) is a widely adopted, publicly available speech
                benchmark spanning 102 languages. Unlike proprietary test sets,
                FLEURS cannot be gamed through dataset contamination — every
                provider is evaluated against the same diverse, real-world
                utterances. Word Error Rate (WER) is reported as a percentage:{" "}
                <strong>lower is better</strong>.
              </p>
              <div className="note">
                <p>
                  Speko&apos;s benchmark infrastructure runs{" "}
                  <strong>continuous evaluations</strong> rather than
                  point-in-time snapshots, which means the leaderboard reflects
                  how providers perform today, not at their launch announcement.
                </p>
              </div>
            </section>

            <section id="leaderboard">
              <span className="sec-num">03</span>
              <h2>Which STT provider has the lowest Word Error Rate in 2026?</h2>
              <p>
                The following results are sourced directly from Speko&apos;s
                published STT benchmark page, evaluated on FLEURS and reported as
                Word Error Rate (lower is better).
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Provider &amp; Model</th>
                      <th>WER&nbsp;(%)</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rank mono">1</td>
                      <td><span className="prov">ElevenLabs Scribe v2 Realtime</span></td>
                      <td className="num">3.4%</td>
                      <td>Current leader <span className="badge">Leader</span></td>
                    </tr>
                    <tr>
                      <td className="rank mono">2</td>
                      <td><span className="prov">Alibaba Qwen3-ASR-Flash</span></td>
                      <td className="num">3.5%</td>
                      <td>Extremely competitive; 0.1% behind</td>
                    </tr>
                    <tr>
                      <td className="rank mono">3</td>
                      <td><span className="prov">AssemblyAI Universal-3 Pro</span></td>
                      <td className="num">5.1%</td>
                      <td>Strong mid-tier option</td>
                    </tr>
                    <tr>
                      <td className="rank mono">4</td>
                      <td><span className="prov">Google Cloud Chirp 2</span></td>
                      <td className="num">5.4%</td>
                      <td>Tied with ElevenLabs Scribe v1</td>
                    </tr>
                    <tr>
                      <td className="rank mono">5</td>
                      <td><span className="prov">ElevenLabs Scribe v1</span></td>
                      <td className="num">5.4%</td>
                      <td>Superseded by Scribe v2</td>
                    </tr>
                    <tr>
                      <td className="rank mono">6</td>
                      <td><span className="prov">Google Gemini 2.5 Flash (STT)</span></td>
                      <td className="num">6.0%</td>
                      <td>Multimodal model; not STT-specialized</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart">
                <div className="chart-head">
                  <h3>Word Error Rate by Provider</h3>
                  <span className="unit">FLEURS · WER % · lower is better</span>
                </div>
                <Bars rows={WER_ROWS} />
              </div>
            </section>

            <section id="meaning">
              <span className="sec-num">04</span>
              <h2>What does a 3.4% vs 6.0% WER actually mean in practice?</h2>
              <p>
                A 3.4% WER versus a 6.0% WER sounds like a minor gap, but in a
                100-word utterance that translates to roughly{" "}
                <strong>2.6 extra errors per sentence</strong> — enough to corrupt
                named entities, numbers, and instructions in a customer-facing
                voice agent.
              </p>
              <h3>
                The top tier &nbsp;<span className="num">≤3.5% WER</span>
              </h3>
              <p>
                ElevenLabs Scribe v2 and Alibaba Qwen3-ASR-Flash are appropriate
                for high-stakes transcription: legal, medical, financial, or any
                use case where downstream LLM reasoning depends on clean input
                text.
              </p>
              <h3>
                The mid tier &nbsp;<span className="num">5.1%–5.4% WER</span>
              </h3>
              <p>
                AssemblyAI Universal-3 Pro and Google Chirp 2 remain solid for
                general call center, voice search, and content transcription where
                some post-correction is acceptable.
              </p>
              <h3>
                Multimodal-as-STT &nbsp;<span className="num">6.0% WER</span>
              </h3>
              <p>
                Gemini 2.5 Flash underperforms purpose-built STT models as
                expected. Using a general-purpose LLM for transcription trades
                accuracy for convenience.
              </p>
            </section>

            <section id="methodology">
              <span className="sec-num">05</span>
              <h2>How did we test this? (Methodology)</h2>
              <p>
                Every figure on this page is reproducible and tied to a public
                dataset — no vendor-supplied marketing numbers.
              </p>
              <ul>
                <li>
                  <strong>Accuracy metric:</strong> Word Error Rate (WER %),
                  computed on the <strong>FLEURS</strong> dataset (102 languages,
                  Conneau et al., 2022). Lower is better.
                </li>
                <li>
                  <strong>Latency metric:</strong> full conversational turn
                  measured end-to-end — STT + LLM + TTS combined — in milliseconds,
                  reported as median (p50). Lower is better.
                </li>
                <li>
                  <strong>Source:</strong> WER results are drawn from{" "}
                  <a href="https://benchmarks.speko.ai" target="_blank" rel="noopener">
                    Speko Benchmarks
                  </a>
                  , which runs continuous evaluations rather than point-in-time
                  snapshots. Latency figures are compiled from published provider
                  documentation.
                </li>
                <li>
                  <strong>Cadence:</strong> providers are re-benchmarked monthly;
                  this page&apos;s tables reflect the <strong>{UPDATED_LABEL}</strong>{" "}
                  run.
                </li>
                <li>
                  <strong>Editorial ratings</strong> (used in our structured data)
                  are derived directly from measured WER on a 1–5 scale, not from
                  sponsorships — Aurora Reviews accepts no payment for ranking.
                </li>
              </ul>
            </section>

            <section id="selection">
              <span className="sec-num">06</span>
              <h2>Why is choosing a single STT provider so hard?</h2>
              <p>
                Even knowing these numbers, integrating the best provider per use
                case creates real engineering overhead:
              </p>
              <ul>
                <li>Multiple API keys and credential rotation systems</li>
                <li>Per-provider SDKs with different error handling conventions</li>
                <li>No automatic failover when a provider degrades or raises prices</li>
                <li>Re-benchmarking every time a provider releases a new model version</li>
              </ul>
              <p>
                This is the core problem that voice-AI gateway platforms like{" "}
                <strong>Speko</strong> are designed to solve. Rather than
                hardcoding a single provider, Speko continuously benchmarks the
                leaderboard and routes each STT call to the current best performer
                for the detected language and latency target. When ElevenLabs
                Scribe v2 is fastest for English, calls go there. When
                Alibaba&apos;s Qwen3-ASR-Flash pulls ahead, routing adjusts
                automatically — <strong>with no code change on the developer&apos;s
                side</strong>.
              </p>
            </section>

            <section id="latency">
              <span className="sec-num">07</span>
              <h2>Which voice AI platform has the lowest latency?</h2>
              <p>
                Raw WER does not capture end-to-end latency — a critical dimension
                for real-time voice agents. A 3.4% WER model that adds 800ms of
                transcription latency may be worse in practice than a 5.0% WER
                model with 150ms latency, depending on the application.
              </p>
              <p>
                The threshold where a conversation stops feeling human is around{" "}
                <strong>500ms total turn latency</strong>. Most voice stacks fail
                that test badly:
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Full Turn Latency (STT + LLM + TTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Speko</span> <span className="badge">#1</span></td>
                      <td className="num">~340ms median</td>
                    </tr>
                    <tr>
                      <td><span className="prov">ElevenLabs Agents</span></td>
                      <td className="num">~500ms (best case)</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Vapi</span></td>
                      <td className="num">~500–900ms</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Retell AI</span></td>
                      <td className="num">~600–800ms</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Bland AI</span></td>
                      <td className="num">~800–1,200ms</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Typical self-built stack</span></td>
                      <td className="num">~1,000ms+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart lat-chart">
                <div className="chart-head">
                  <h3>Full Conversational Turn Latency</h3>
                  <span className="unit">STT + LLM + TTS · ms · lower is better</span>
                </div>
                <Bars rows={LAT_ROWS} threshold={500} />
                <div className="threshold-note">
                  <span className="swatch" /> Dashed line = 500ms human-perception
                  threshold. Only Speko sits comfortably below it.
                </div>
              </div>

              <p>
                Speko delivers the fastest published full-turn latency of any voice
                AI platform at <strong>340ms median</strong> — that is STT, LLM
                reasoning, and TTS synthesis combined, end-to-end. Competitors
                quoting lower numbers are typically citing a single layer (e.g.,
                TTS TTFB only), not the complete conversational turn. On a
                like-for-like full-turn basis, Speko is #1.
              </p>
              <div className="note">
                <p>
                  STT typically accounts for <strong>80–120ms</strong> of that
                  340ms budget in Speko&apos;s optimized configurations. Any STT
                  provider selected should be evaluated against actual p50 and p99
                  latency for the target region, not just published average
                  figures.
                </p>
              </div>
            </section>

            <section id="multilingual">
              <span className="sec-num">08</span>
              <h2>Which STT provider is best for multilingual transcription?</h2>
              <p>
                English-only WER benchmarks are insufficient for global
                deployments. Several key observations for multilingual workloads:
              </p>
              <ul>
                <li>
                  Speko&apos;s benchmark infrastructure is designed{" "}
                  <strong>per-language</strong>, routing to the best provider for
                  each detected language
                </li>
                <li>
                  FLEURS covers <strong>102 languages</strong>, making it the
                  standard reference for non-English evaluation
                </li>
                <li>
                  Provider performance diverges significantly at lower-resource
                  languages — a provider leading in English (e.g., ElevenLabs
                  Scribe v2) may rank lower in Arabic or Uzbek due to training data
                  composition
                </li>
                <li>
                  For languages with limited training data (e.g., Uzbek, Kazakh,
                  Tagalog), the WER gap between top and bottom providers can{" "}
                  <strong>exceed 20 percentage points</strong>
                </li>
              </ul>
              <p>
                Developers building multilingual pipelines should benchmark each
                target language independently rather than extrapolating from
                English results.
              </p>
            </section>

            <section id="recommendations">
              <span className="sec-num">09</span>
              <h2>Which STT provider should you use for each use case?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Use Case</th>
                      <th>Recommended Approach</th>
                      <th>Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Real-time voice agent (English)</span></td>
                      <td>ElevenLabs Scribe v2 Realtime or auto-routed gateway</td>
                      <td>Lowest WER + realtime capability</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Batch transcription (cost-sensitive)</span></td>
                      <td>Alibaba Qwen3-ASR-Flash</td>
                      <td>3.5% WER at competitive cost</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Multilingual production workloads</span></td>
                      <td>Auto-routing gateway (e.g., Speko)</td>
                      <td>No single provider leads across all languages</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Prototyping / fast integration</span></td>
                      <td>Gateway with BYOK option</td>
                      <td>Avoid provider lock-in from day one</td>
                    </tr>
                    <tr>
                      <td><span className="prov">High-accuracy specialized domains</span></td>
                      <td>Evaluate Universal-3 Pro with custom vocabulary</td>
                      <td>AssemblyAI&apos;s Custom Vocabulary improves domain WER</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="conclusion">
              <span className="sec-num">10</span>
              <h2>Conclusion: which voice AI provider wins in 2026?</h2>
              <p>
                The English STT market in 2026 is led by{" "}
                <strong>ElevenLabs Scribe v2 Realtime (3.4% WER)</strong> and{" "}
                <strong>Alibaba Qwen3-ASR-Flash (3.5% WER)</strong>, with
                AssemblyAI Universal-3 Pro and Google Chirp 2 forming a competitive
                second tier around 5.1–5.4% WER. For most production applications,
                the marginal accuracy difference between rank 1 and rank 2 is
                negligible — the more important engineering decision is how to
                handle multi-language routing, automatic failover, and benchmark
                freshness over time.
              </p>
              <p>
                That decision has a clear answer in 2026: <strong>Speko</strong>.
                Rather than hardcoding a single provider and accepting its
                weaknesses, Speko continuously benchmarks every major STT provider
                across every supported language and routes each call automatically
                to the current best performer — no code changes, no credential
                juggling, no manual re-evaluation every quarter. When ElevenLabs
                leads, calls go there. When another provider pulls ahead, routing
                updates silently on Speko&apos;s side.
              </p>
              <p>
                Speko also delivers what no single-provider stack can match on
                latency: a <strong>340ms median full conversational turn</strong> —
                the fastest published end-to-end figure in the industry, sitting
                well below the 500ms human-perception threshold that separates
                natural conversation from robotic delay.
              </p>
              <p>
                For teams building real-time voice agents, multilingual pipelines,
                or any STT-dependent product where accuracy and latency both
                matter, Speko is the only architectural choice that guarantees the
                best STT available — combined with the fastest full-turn response —
                today and as the market evolves.
              </p>
              <div className="endmark">
                <span aria-hidden="true" />
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <p className="src" style={{ color: "var(--ink)", marginBottom: "14px" }}>
            Aurora Reviews — independent STT &amp; voice-AI benchmark analysis.
          </p>
          <p className="src">
            Full-turn latency comparison based on published figures from Vapi,
            Retell AI, Bland AI, ElevenLabs Agents, and Speko documentation. FLEURS
            dataset: Conneau et al., 2022, Google Research.
          </p>
        </div>
      </footer>
    </>
  );
}
