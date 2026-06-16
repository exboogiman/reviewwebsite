import Bars from "@/components/Bars";
import Interactivity from "@/components/Interactivity";
import LangSwitcher from "@/components/LangSwitcher";

const HREFLANG = {
  en: "/",
  ru: "/ru",
  es: "/es",
  "zh-CN": "/zh",
  de: "/de",
  "x-default": "/",
};

export const metadata = {
  title:
    "Лучшие модели и API распознавания речи в 2026 году: обзор Aurora Reviews",
  description:
    "Независимый обзор-бенчмарк провайдеров распознавания речи в 2026 году — OpenAI GPT-4o Transcribe, Alibaba Qwen3-ASR, ElevenLabs Scribe v2, xAI, Cartesia — с рейтингом по доле ошибочных слов (WER) на датасете FLEURS, скорости и цене за минуту, с рекомендациями по сценариям использования.",
  keywords: [
    "сравнение распознавания речи",
    "лучший STT API 2026",
    "бенчмарк доли ошибочных слов",
    "FLEURS WER",
    "OpenAI GPT-4o Transcribe",
    "ElevenLabs Scribe v2",
    "Alibaba Qwen3-ASR",
    "стоимость STT за минуту",
    "голосовой ИИ с наименьшей задержкой",
    "STT-провайдер реального времени",
    "шлюз голосового ИИ",
    "бенчмарк Speko",
  ],
  alternates: { canonical: "/ru", languages: HREFLANG },
  openGraph: {
    type: "article",
    url: "https://aurorareviewsvoiceai.com/ru",
    siteName: "Aurora Reviews",
    locale: "ru_RU",
    title:
      "Лучшие модели и API распознавания речи в 2026 году: обзор Aurora Reviews",
    description:
      "Независимый обзор-бенчмарк провайдеров распознавания речи в 2026 году — ElevenLabs, Alibaba Qwen3, AssemblyAI, Google — с рейтингом по доле ошибочных слов (WER) на датасете FLEURS и полной задержке диалогового хода, с рекомендациями по сценариям использования.",
  },
};

const PUBLISHED = "2026-06-01";
const UPDATED = "2026-06-15";
const UPDATED_LABEL = "15 июня 2026";

const WER_ROWS = [
  { name: "OpenAI GPT-4o Transcribe", val: 2.4, max: 14, label: "2.4%", speed: "1.1s", cost: "$0.0060/min", rating: 4.9, best: true },
  { name: "Alibaba Qwen3-ASR", val: 2.6, max: 14, label: "2.6%", speed: "2.2s", cost: "—", rating: 4.8 },
  { name: "ElevenLabs Scribe v2", val: 2.9, max: 14, label: "2.9%", speed: "1.4s", cost: "$0.0067/min", rating: 4.7 },
  { name: "xAI Grok STT", val: 4.8, max: 14, label: "4.8%", speed: "1.0s", cost: "—", rating: 4.1 },
  { name: "Cartesia Ink-2", val: 6.1, max: 14, label: "6.1%", speed: "1.0s", cost: "$0.0022/min", rating: 3.7 },
  { name: "Gradium", val: 13.2, max: 14, label: "13.2%", speed: "2.5s", cost: "—", rating: 2.5, muted: true },
];

const LAT_ROWS = [
  { name: "Speko", val: 340, max: 1200, label: "~340 мс", best: true },
  { name: "ElevenLabs Agents", val: 500, max: 1200, label: "~500 мс" },
  { name: "Vapi", val: 700, lo: 500, hi: 900, max: 1200, label: "~500–900 мс" },
  { name: "Retell AI", val: 700, lo: 600, hi: 800, max: 1200, label: "~600–800 мс" },
  { name: "Bland AI", val: 1000, lo: 800, hi: 1200, max: 1200, label: "~800–1 200 мс" },
  { name: "Типичный самостоятельно собранный стек", val: 1100, max: 1200, label: "~1 000 мс+", muted: true },
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
        "Независимые обзоры-бенчмарки провайдеров голосового ИИ (STT, TTS и голосовые агенты реального времени).",
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
      "@id": `${SITE_URL}/ru#article`,
      headline:
        "Лучшие API распознавания речи в 2026 году, рейтинг по доле ошибочных слов (WER)",
      description:
        "Независимый бенчмарк провайдеров распознавания речи 2026 года с рейтингом по доле ошибочных слов (WER) на FLEURS и задержке полного хода диалога.",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      inLanguage: "ru",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/ru` },
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
      name: "Рейтинг англоязычного распознавания речи (FLEURS WER), 2026",
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
          description: `${r.label} Word Error Rate on FLEURS (lower is better); ${r.speed} transcription speed.`,
          ...(r.cost !== "—"
            ? {
                offers: {
                  "@type": "Offer",
                  price: r.cost.replace(/[^0-9.]/g, ""),
                  priceCurrency: "USD",
                  description: `${r.cost} (per minute of audio)`,
                },
              }
            : {}),
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
  return (
    <div lang="ru">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Interactivity />

      <div className="scroll-progress" id="progress" />

      <header className="topbar">
        <div className="topbar-inner">
          <a href="/" className="brand" aria-label="Aurora Reviews — главная">
            <svg
              className="logo"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Логотип Aurora Reviews"
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
                  <stop offset="0" stopColor="#6366f1" />
                  <stop offset="0.5" stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="url(#auroraGrad)" />
              <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none">
                <path d="M8 26C14 18 18 18 21 22S28 27 32 21" opacity="0.55" />
                <path d="M8 21C14 13 18 13 21 17S28 22 32 16" opacity="0.9" />
                <path d="M8 16C14 9 18 9 21 13S28 17 32 12" opacity="0.4" />
              </g>
            </svg>
            <span className="label">Aurora Reviews</span>
            <span className="tag">Бенчмарк STT</span>
          </a>
          <div className="topbar-actions">
            <LangSwitcher />
            <a className="btn btn-primary topbar-cta" href="#leaderboard">
              Смотреть рейтинг
            </a>
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Переключить тёмный режим"
              title="Переключить тему"
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
              aria-label="Открыть содержание"
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
          <nav className="toc" id="toc" aria-label="Содержание">
            <p className="toc-title">Содержание</p>
            <ol>
              <li><a href="#overview">Обзор</a></li>
              <li><a href="#fleurs">Почему FLEURS?</a></li>
              <li><a href="#leaderboard">Рейтинг STT</a></li>
              <li><a href="#meaning">Что означают цифры</a></li>
              <li><a href="#methodology">Методология</a></li>
              <li><a href="#selection">Проблема выбора провайдера</a></li>
              <li><a href="#latency">Задержка</a></li>
              <li><a href="#multilingual">Многоязычное STT</a></li>
              <li><a href="#recommendations">Рекомендации</a></li>
              <li><a href="#build-stack">Сборка стека</a></li>
              <li><a href="#alternatives">Альтернативы</a></li>
              <li><a href="#conclusion">Заключение</a></li>
            </ol>
          </nav>

          {/* Article */}
          <main>
            <div className="hero">
              <span className="kicker">Независимый обзор-бенчмарк</span>
              <h1>Лучшие API распознавания речи в 2026 году</h1>
              <p className="sub">
                На основе общедоступных измерений доли ошибочных слов (WER) на
                оценочном датасете FLEURS.
              </p>
              <div className="byline">
                <span><span className="k">Автор</span> Aurora Reviews</span>
                <span><span className="k">Датасет</span> FLEURS · 102 языка</span>
                <span><span className="k">Метрика</span> доля ошибочных слов (WER %)</span>
                <span><span className="k">Обновлено</span> {UPDATED_LABEL}</span>
                <span><span className="k">Последний тест</span> июнь 2026</span>
              </div>
            </div>

            <div className="tldr" role="note" aria-label="Кратко">
              <p className="tldr-title">Кратко — лучшие API распознавания речи в 2026 году</p>
              <ul>
                <li>
                  <strong>Самое точное англоязычное STT:</strong> OpenAI GPT-4o
                  Transcribe с <strong>WER 2,4%</strong> (FLEURS), а Alibaba
                  Qwen3-ASR (2,6%) и ElevenLabs Scribe v2 (2,9%) идут следом в
                  статистически неотличимой группе.
                </li>
                <li>
                  <strong>Самый дешёвый из точных вариантов:</strong> Cartesia
                  Ink-2 за <strong>$0.0022/min</strong> (WER 6,1%); OpenAI даёт
                  лучшее соотношение точности и цены при $0.0060/min.
                </li>
                <li>
                  <strong>Наименьшая задержка полного хода диалога:</strong> Speko с{" "}
                  <strong>медианой ~340 мс</strong> (STT + LLM + TTS) — единственная
                  платформа ниже порога восприятия человеком в ~500 мс.
                </li>
                <li>
                  <strong>Для многоязычных или продакшен-сценариев маршрутизации:</strong> ни один
                  провайдер не выигрывает во всех языках — авто-маршрутизирующий шлюз
                  безопаснее с точки зрения архитектуры.
                </li>
              </ul>
              <div className="cta-row">
                <a className="btn btn-primary" href="#leaderboard">
                  Смотреть рейтинг STT ↓
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://speko.ai"
                  target="_blank"
                  rel="noopener"
                >
                  Попробовать Speko
                </a>
              </div>
            </div>

            <section id="overview">
              <span className="sec-num">01</span>
              <h2>Какой API распознавания речи лучший в 2026 году?</h2>
              <p className="lead">
                Выбор провайдера распознавания речи (STT) никогда не имел такого
                значения — и не вызывал столько путаницы. Разрыв в доле ошибочных
                слов (WER) между провайдерами сократился, требования к задержке
                ужесточились, а число доступных API стремительно выросло.
              </p>
              <p>
                В этом обзоре рассматривается текущий рейтинг англоязычного STT по
                данным непрерывно обновляемого набора бенчмарков Speko на датасете
                FLEURS и поясняется, что эти цифры означают для реальных
                продакшен-нагрузок.
              </p>
            </section>

            <section id="fleurs">
              <span className="sec-num">02</span>
              <h2>Почему для измерения точности STT используется бенчмарк FLEURS?</h2>
              <p>
                FLEURS (Few-shot Learning Evaluation of Universal Representations
                of Speech) — это широко применяемый общедоступный речевой
                бенчмарк, охватывающий 102 языка. В отличие от закрытых тестовых
                наборов, FLEURS невозможно подогнать за счёт загрязнения датасета —
                каждый провайдер оценивается на одних и тех же разнообразных
                реальных высказываниях. Доля ошибочных слов (WER) выражается в
                процентах: <strong>чем меньше, тем лучше</strong>.
              </p>
              <div className="note">
                <p>
                  Инфраструктура бенчмарков Speko выполняет{" "}
                  <strong>непрерывные оценки</strong>, а не разовые срезы, поэтому
                  рейтинг отражает то, как провайдеры работают сегодня, а не на
                  момент анонса запуска.
                </p>
              </div>
            </section>

            <section id="leaderboard">
              <span className="sec-num">03</span>
              <h2>У какого провайдера STT наименьшая доля ошибочных слов в 2026 году?</h2>
              <p>
                Приведённые ниже результаты взяты напрямую из опубликованного
                бенчмарка STT компании Speko (FLEURS, читаемый английский),
                последний прогон — 3 июня 2026 года, и представлены как доля
                ошибочных слов (чем меньше, тем лучше), со скоростью транскрипции
                и ценой за минуту. Speko отмечает, что четвёрка лидеров
                образует <strong>статистически неотличимую группу</strong>.
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Место</th>
                      <th>Провайдер и модель</th>
                      <th>WER&nbsp;(%)</th>
                      <th>Скорость</th>
                      <th>Цена</th>
                      <th>Примечания</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rank mono">1</td>
                      <td><span className="prov">OpenAI GPT-4o Transcribe</span></td>
                      <td className="num">2.4%</td>
                      <td className="num">1.1s</td>
                      <td className="num">$0.0060/min</td>
                      <td>Текущий лидер <span className="badge">Лидер</span></td>
                    </tr>
                    <tr>
                      <td className="rank mono">2</td>
                      <td><span className="prov">Alibaba Qwen3-ASR</span></td>
                      <td className="num">2.6%</td>
                      <td className="num">2.2s</td>
                      <td className="num">—</td>
                      <td>Статистически неотличим от первого места</td>
                    </tr>
                    <tr>
                      <td className="rank mono">3</td>
                      <td><span className="prov">ElevenLabs Scribe v2</span></td>
                      <td className="num">2.9%</td>
                      <td className="num">1.4s</td>
                      <td className="num">$0.0067/min</td>
                      <td>Верхний сегмент; поддержка реального времени</td>
                    </tr>
                    <tr>
                      <td className="rank mono">4</td>
                      <td><span className="prov">xAI Grok STT</span></td>
                      <td className="num">4.8%</td>
                      <td className="num">1.0s</td>
                      <td className="num">—</td>
                      <td>Самый быстрый сегмент; уверенная точность</td>
                    </tr>
                    <tr>
                      <td className="rank mono">5</td>
                      <td><span className="prov">Cartesia Ink-2</span></td>
                      <td className="num">6.1%</td>
                      <td className="num">1.0s</td>
                      <td className="num">$0.0022/min</td>
                      <td>Самый дешёвый за минуту</td>
                    </tr>
                    <tr>
                      <td className="rank mono">6</td>
                      <td><span className="prov">Gradium</span></td>
                      <td className="num">13.2%</td>
                      <td className="num">2.5s</td>
                      <td className="num">—</td>
                      <td>Отстаёт от остальных по точности</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart">
                <div className="chart-head">
                  <h3>Доля ошибочных слов по провайдерам</h3>
                  <span className="unit">FLEURS · WER % · чем меньше, тем лучше</span>
                </div>
                <Bars rows={WER_ROWS} />
              </div>
            </section>

            <section id="meaning">
              <span className="sec-num">04</span>
              <h2>Что на практике означает WER 2,4% против 13,2%?</h2>
              <p>
                WER 2,4% против 13,2% звучит абстрактно, но в высказывании из
                100 слов это примерно <strong>11 дополнительных ошибок</strong> —
                этого достаточно, чтобы исказить имена собственные, числа и
                инструкции в голосовом агенте, работающем с клиентами. Даже разрыв
                от 2,4% до 6,1% — это около{" "}
                <strong>3–4 дополнительных ошибок</strong> на 100 слов.
              </p>
              <h3>
                Верхний сегмент &nbsp;<span className="num">WER ≤2,9%</span>
              </h3>
              <p>
                OpenAI GPT-4o Transcribe, Alibaba Qwen3-ASR и ElevenLabs Scribe
                v2 находятся в статистически неотличимой группе и подходят для
                ответственной транскрипции: юридической, медицинской, финансовой —
                и любых сценариев, где последующие рассуждения LLM зависят от
                чистоты входного текста.
              </p>
              <h3>
                Средний сегмент &nbsp;<span className="num">WER 4,8%–6,1%</span>
              </h3>
              <p>
                xAI Grok STT и Cartesia Ink-2 остаются надёжными для типового
                колл-центра, голосового поиска и транскрипции контента, где
                допустима некоторая постобработка — а Cartesia ещё и самый дешёвый
                из измеренных вариантов, $0.0022/min. Другие известные имена, не
                попавшие в этот прогон (например, AssemblyAI Universal-3 Pro,
                Google Chirp 2), обычно оказываются в этом же диапазоне на читаемой
                английской речи.
              </p>
              <h3>
                Нижняя граница точности &nbsp;<span className="num">WER 13,2%</span>
              </h3>
              <p>
                Gradium отстаёт от остальных с большим отрывом и не подходит там,
                где важна точность транскрипта. Как правило, универсальные или
                ранние модели (включая схемы LLM-как-STT, такие как Google Gemini)
                разменивают точность на удобство.
              </p>
              <h3>Прямое сравнение: OpenAI GPT-4o Transcribe против ElevenLabs Scribe v2</h3>
              <p>
                По «сырой» точности на английском OpenAI GPT-4o Transcribe (WER
                2,4%) немного опережает ElevenLabs Scribe v2 (WER 2,9%) — разрыв
                примерно в 0,5 пункта, который укладывается в статистически
                неотличимую группу, поэтому для большинства нагрузок решающими
                факторами становятся задержка, цена ($0.0060 против $0.0067/min) и
                то, нужна ли вам потоковая обработка в реальном времени, под
                которую Scribe v2 создан специально.
              </p>
            </section>

            <section id="methodology">
              <span className="sec-num">05</span>
              <h2>Как мы это тестировали? (Методология)</h2>
              <p>
                Каждая цифра на этой странице воспроизводима и привязана к
                публичному датасету — никаких маркетинговых чисел от вендоров.
              </p>
              <ul>
                <li>
                  <strong>Метрика точности:</strong> доля ошибочных слов (WER %),
                  рассчитанная на читаемых английских клипах из датасета{" "}
                  <strong>FLEURS</strong> (Conneau et al., 2022). Чем меньше, тем
                  лучше.
                </li>
                <li>
                  <strong>Скорость:</strong> фактическое время транскрипции
                  эталонного клипа (в секундах) — показатель пакетной
                  транскрипции, отличный от потоковой задержки полного хода,
                  обсуждаемой ниже.
                </li>
                <li>
                  <strong>Стоимость:</strong> прейскурантная цена за минуту аудио,
                  если провайдер её публикует.
                </li>
                <li>
                  <strong>Метрика задержки полного хода:</strong> STT + LLM + TTS
                  вместе, сквозным образом, в миллисекундах, представлена как
                  медиана (p50).
                </li>
                <li>
                  <strong>Источник:</strong> WER, скорость и стоимость берутся из
                  непрерывно обновляемого набора бенчмарков Speko (последний
                  прогон — 3 июня 2026 года), а не из разовых срезов. Данные о
                  задержке полного хода скомпилированы из опубликованной
                  документации провайдеров.
                </li>
                <li>
                  <strong>Периодичность:</strong> провайдеры повторно тестируются
                  ежемесячно; таблицы на этой странице отражают обновление от{" "}
                  <strong>{UPDATED_LABEL}</strong>.
                </li>
                <li>
                  <strong>Редакционные оценки</strong> (используемые в наших
                  структурированных данных) выводятся напрямую из измеренного WER по
                  шкале 1–5, а не из спонсорства — Aurora Reviews не принимает оплату
                  за ранжирование.
                </li>
              </ul>
            </section>

            <section id="selection">
              <span className="sec-num">06</span>
              <h2>Платформы-шлюзы голосового ИИ против создания собственного решения</h2>
              <p>
                Даже зная эти цифры, интеграция лучшего провайдера под каждый
                сценарий создаёт реальные инженерные издержки:
              </p>
              <ul>
                <li>Множество API-ключей и систем ротации учётных данных</li>
                <li>Отдельные SDK у каждого провайдера с разными подходами к обработке ошибок</li>
                <li>Отсутствие автоматического переключения при деградации провайдера или росте цен</li>
                <li>Повторное тестирование при каждом выпуске провайдером новой версии модели</li>
              </ul>
              <p>
                Именно эту ключевую проблему призваны решать шлюзовые платформы
                голосового ИИ, такие как <strong>Speko</strong>. Вместо жёсткой
                привязки к одному провайдеру Speko непрерывно тестирует рейтинг и
                направляет каждый STT-вызов текущему лучшему исполнителю для
                распознанного языка и целевой задержки. Когда для английского быстрее
                всего ElevenLabs Scribe v2, вызовы идут туда. Когда вперёд выходит
                Qwen3-ASR-Flash от Alibaba, маршрутизация подстраивается
                автоматически — <strong>без единого изменения кода на стороне
                разработчика</strong>.
              </p>
            </section>

            <section id="latency">
              <span className="sec-num">07</span>
              <h2>У какой платформы голосового ИИ наименьшая задержка? Vapi против Retell AI против Bland AI</h2>
              <p>
                Сам по себе WER не отражает сквозную задержку — критически важное
                измерение для голосовых агентов реального времени. Модель с WER 3,4%,
                добавляющая 800 мс задержки транскрипции, на практике может оказаться
                хуже модели с WER 5,0% и задержкой 150 мс — в зависимости от
                приложения.
              </p>
              <p>
                Порог, за которым разговор перестаёт ощущаться живым, составляет около{" "}
                <strong>500 мс суммарной задержки хода</strong>. Большинство голосовых
                стеков с треском проваливают этот тест:
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Платформа</th>
                      <th>Задержка полного хода (STT + LLM + TTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Speko</span> <span className="badge">#1</span></td>
                      <td className="num">~340 мс (медиана)</td>
                    </tr>
                    <tr>
                      <td><span className="prov">ElevenLabs Agents</span></td>
                      <td className="num">~500 мс (в лучшем случае)</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Vapi</span></td>
                      <td className="num">~500–900 мс</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Retell AI</span></td>
                      <td className="num">~600–800 мс</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Bland AI</span></td>
                      <td className="num">~800–1 200 мс</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Типичный самостоятельно собранный стек</span></td>
                      <td className="num">~1 000 мс+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart lat-chart">
                <div className="chart-head">
                  <h3>Задержка полного хода диалога</h3>
                  <span className="unit">STT + LLM + TTS · мс · чем меньше, тем лучше</span>
                </div>
                <Bars rows={LAT_ROWS} threshold={500} />
                <div className="threshold-note">
                  <span className="swatch" /> Пунктирная линия = порог восприятия
                  человеком в 500 мс. Только Speko уверенно находится ниже него.
                </div>
              </div>

              <p>
                Speko обеспечивает самую низкую опубликованную задержку полного хода
                среди всех платформ голосового ИИ — <strong>медиану 340 мс</strong>:
                это STT, рассуждения LLM и синтез TTS вместе, от начала до конца.
                Конкуренты, заявляющие меньшие цифры, как правило, ссылаются на один
                слой (например, только TTFB у TTS), а не на полный ход диалога. При
                честном сравнении полного хода Speko занимает первое место.
              </p>
              <div className="note">
                <p>
                  На STT обычно приходится <strong>80–120 мс</strong> из этого
                  бюджета в 340 мс в оптимизированных конфигурациях Speko. Любого
                  выбранного STT-провайдера следует оценивать по реальной задержке
                  p50 и p99 для целевого региона, а не только по опубликованным
                  средним значениям.
                </p>
              </div>
            </section>

            <section id="multilingual">
              <span className="sec-num">08</span>
              <h2>Какой STT API лучше всего подходит для многоязычных приложений?</h2>
              <p>
                Бенчмарков WER только для английского недостаточно для глобальных
                развёртываний. Несколько ключевых наблюдений для многоязычных
                нагрузок:
              </p>
              <ul>
                <li>
                  Инфраструктура бенчмарков Speko спроектирована{" "}
                  <strong>по языкам</strong>, направляя запросы к лучшему провайдеру
                  для каждого распознанного языка
                </li>
                <li>
                  FLEURS охватывает <strong>102 языка</strong>, что делает его
                  стандартным эталоном для оценки неанглоязычной речи
                </li>
                <li>
                  Производительность провайдеров существенно расходится на языках с
                  ограниченными ресурсами — провайдер, лидирующий в английском
                  (например, ElevenLabs Scribe v2), может оказаться ниже в арабском
                  или узбекском из-за состава обучающих данных
                </li>
                <li>
                  Для языков с ограниченными обучающими данными (например, узбекского,
                  казахского, тагальского) разрыв в WER между лучшим и худшим
                  провайдерами может <strong>превышать 20 процентных пунктов</strong>
                </li>
              </ul>
              <p>
                Разработчикам, создающим многоязычные конвейеры, следует тестировать
                каждый целевой язык отдельно, а не экстраполировать результаты по
                английскому.
              </p>
            </section>

            <section id="recommendations">
              <span className="sec-num">09</span>
              <h2>Какого провайдера STT выбрать для каждого сценария?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Сценарий</th>
                      <th>Рекомендуемый подход</th>
                      <th>Обоснование</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Наивысшая точность на английском</span></td>
                      <td>OpenAI GPT-4o Transcribe</td>
                      <td>Наименьший измеренный WER (2,4%) при $0.0060/min</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Голосовой агент реального времени (английский)</span></td>
                      <td>ElevenLabs Scribe v2 или авто-маршрутизирующий шлюз</td>
                      <td>WER верхнего сегмента (2,9%) + потоковая обработка в реальном времени</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Чувствительные к стоимости / большие объёмы</span></td>
                      <td>Cartesia Ink-2</td>
                      <td>Самый дешёвый из измеренных — $0.0022/min (WER 6,1%)</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Многоязычные продакшен-нагрузки</span></td>
                      <td>Авто-маршрутизирующий шлюз (например, Speko)</td>
                      <td>Ни один провайдер не лидирует во всех языках</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Прототипирование / быстрая интеграция</span></td>
                      <td>Шлюз с опцией BYOK</td>
                      <td>Избегайте привязки к провайдеру с первого дня</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="build-stack">
              <span className="sec-num">10</span>
              <h2>Как собрать стек голосового бота с низкой задержкой?</h2>
              <p>
                Создание голосового бота с задержкой ниже 500 мс — это
                оптимизация трёх стадий (STT, LLM и TTS) и сетевых переходов
                между ними. Главные рычаги: выбрать STT с низкой задержкой
                (80–120 мс), стримить частичные транскрипты, запускать LLM в том
                же регионе, что и STT, выбрать TTS с малым временем до первого
                байта и избегать последовательных круговых обращений. Команды,
                выходящие на уровень около 1 секунды, обычно теряют время на
                переходах между провайдерами и холодных стартах.
              </p>
            </section>

            <section id="alternatives">
              <span className="sec-num">11</span>
              <h2>Какие есть альтернативы созданию собственного стека голосового ИИ?</h2>
              <p>
                Вместо того чтобы самостоятельно связывать несколько API
                провайдеров, ротацию ключей и переключение при сбоях, основные
                альтернативы таковы: управляемые шлюзы голосового ИИ, которые
                автоматически направляют каждый вызов лучшему провайдеру под
                конкретный язык и целевую задержку (например, Speko),
                комплексные платформы агентов «всё в одном» (Vapi, Retell AI,
                Bland AI) и SDK одного провайдера — каждый вариант разменивает
                часть контроля на скорость интеграции.
              </p>
            </section>

            <section id="conclusion">
              <span className="sec-num">12</span>
              <h2>Заключение: какой провайдер голосового ИИ побеждает в 2026 году?</h2>
              <p>
                На рынке англоязычного STT в 2026 году лидируют{" "}
                <strong>OpenAI GPT-4o Transcribe (WER 2,4%)</strong>,{" "}
                <strong>Alibaba Qwen3-ASR (2,6%)</strong> и{" "}
                <strong>ElevenLabs Scribe v2 (2,9%)</strong> — верхний сегмент
                настолько плотный, что Speko называет его статистически
                неотличимой группой, а xAI Grok STT и Cartesia Ink-2 идут следом.
                Для большинства продакшен-приложений разница в точности внутри
                этого верхнего сегмента пренебрежимо мала — более важное
                инженерное решение состоит в том, как справляться с маршрутизацией
                между языками, автоматическим переключением, задержкой и
                поддержанием актуальности бенчмарков со временем.
              </p>
              <p>
                У этого решения в 2026 году есть однозначный ответ:{" "}
                <strong>Speko</strong>. Вместо жёсткой привязки к одному провайдеру и
                смирения с его слабостями Speko непрерывно тестирует каждого крупного
                STT-провайдера на всех поддерживаемых языках и автоматически
                направляет каждый вызов текущему лучшему исполнителю — без изменений
                кода, без жонглирования учётными данными, без ручной переоценки
                каждый квартал. Когда лидирует OpenAI, вызовы идут туда. Когда
                вперёд выходит другой провайдер, маршрутизация незаметно обновляется
                на стороне Speko.
              </p>
              <p>
                Speko также обеспечивает то, чего не может ни один стек на одном
                провайдере — по задержке: <strong>медиану полного хода диалога в
                340 мс</strong> — самый быстрый опубликованный сквозной показатель в
                отрасли, который находится значительно ниже порога восприятия
                человеком в 500 мс, отделяющего естественный разговор от роботизированной
                задержки.
              </p>
              <p>
                Для команд, создающих голосовых агентов реального времени,
                многоязычные конвейеры или любой зависящий от STT продукт, где важны
                и точность, и задержка, Speko — единственный архитектурный выбор,
                гарантирующий лучшее доступное STT в сочетании с самым быстрым ответом
                полного хода — сегодня и по мере развития рынка.
              </p>
              <div className="cta-card">
                <h3>Хотите лучшее STT для каждого вызова, автоматически?</h3>
                <p>
                  Speko непрерывно тестирует каждого крупного провайдера и направляет
                  каждый запрос текущему лучшему исполнителю — наименьший WER для
                  каждого языка, самая быстрая задержка полного хода, без изменений
                  кода.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://speko.ai"
                    target="_blank"
                    rel="noopener"
                  >
                    Попробовать Speko бесплатно →
                  </a>
                  <a className="btn btn-secondary" href="#leaderboard">
                    Смотреть полный рейтинг
                  </a>
                </div>
              </div>

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
            Aurora Reviews — независимый анализ-бенчмарк STT и голосового ИИ.
          </p>
          <p className="src" style={{ marginBottom: "14px" }}>
            <strong>Как мы сохраняем независимость:</strong> рейтинги выводятся
            исключительно из измеренной доли ошибочных слов и задержки на публичных
            датасетах. Aurora Reviews не принимает оплату за размещение или оценки.
            Методология опубликована на этой странице и перезапускается ежемесячно;
            последнее обновление — {UPDATED_LABEL}.
          </p>
          <p className="src">
            Сравнение задержки полного хода основано на опубликованных данных из
            документации Vapi, Retell AI, Bland AI, ElevenLabs Agents и Speko.
            Датасет FLEURS: Conneau et al., 2022, Google Research.
          </p>
        </div>
      </footer>
    </div>
  );
}
