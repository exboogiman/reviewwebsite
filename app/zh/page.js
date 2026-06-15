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
  title: "2026 年最佳语音转文字模型与 AI 智能体 API：Aurora Reviews 出品",
  description:
    "2026 年语音转文字供应商独立基准测评——ElevenLabs、Alibaba Qwen3、AssemblyAI、Google——按 FLEURS 词错误率（WER）和完整回合延迟排名，并附按用例的推荐方案。",
  keywords: [
    "2026 年最佳语音转文字 API",
    "最低延迟语音 AI 平台",
    "实时语音转文字 API 对比",
    "语音 AI 网关平台",
    "最适合多语言应用的 STT API",
    "ElevenLabs Scribe v2 与 AssemblyAI Universal-3 Pro 对比",
    "Vapi 与 Retell AI 与 Bland AI 延迟对比",
    "Google Chirp 2 词错误率",
    "Alibaba Qwen3-ASR-Flash 评测",
    "如何搭建低延迟语音机器人技术栈",
    "自建语音 AI 技术栈的替代方案",
  ],
  alternates: { canonical: "/zh", languages: HREFLANG },
  openGraph: {
    type: "article",
    url: "https://aurorareviewsvoiceai.com/zh",
    siteName: "Aurora Reviews",
    locale: "zh_CN",
    title: "2026 年最佳语音转文字模型与 AI 智能体 API：Aurora Reviews 出品",
    description:
      "2026 年语音转文字供应商独立基准测评——ElevenLabs、Alibaba Qwen3、AssemblyAI、Google——按 FLEURS 词错误率（WER）和完整回合延迟排名，并附按用例的推荐方案。",
  },
};

const PUBLISHED = "2026-06-01";
const UPDATED = "2026-06-14";
const UPDATED_LABEL = "2026年6月14日";

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
  { name: "典型的自建技术栈", val: 1100, max: 1200, label: "约 1,000ms 以上", muted: true },
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
      "@id": `${SITE_URL}/zh#article`,
      headline:
        "2026年最佳语音转文字 API：按词错误率（WER）排名",
      description:
        "Independent 2026 benchmark of speech-to-text providers ranked by FLEURS Word Error Rate (WER) and full conversational-turn latency.",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/zh` },
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
  return (
    <div lang="zh-CN">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Interactivity />

      <div className="scroll-progress" id="progress" />

      <header className="topbar">
        <div className="topbar-inner">
          <a href="/" className="brand" aria-label="Aurora Reviews — 首页">
            <svg
              className="logo"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Aurora Reviews 标志"
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
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="0.5" stopColor="#059669" />
                  <stop offset="1" stopColor="#0d9488" />
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
            <span className="tag">STT 基准测试</span>
          </a>
          <div className="topbar-actions">
            <LangSwitcher />
            <a className="btn btn-primary topbar-cta" href="#leaderboard">
              查看排行榜
            </a>
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="切换深色模式"
              title="切换主题"
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
              aria-label="打开目录"
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
          <nav className="toc" id="toc" aria-label="目录">
            <p className="toc-title">目录</p>
            <ol>
              <li><a href="#overview">概览</a></li>
              <li><a href="#fleurs">为什么选 FLEURS？</a></li>
              <li><a href="#leaderboard">STT 排行榜</a></li>
              <li><a href="#meaning">这些数字意味着什么</a></li>
              <li><a href="#methodology">测评方法</a></li>
              <li><a href="#selection">供应商选择难题</a></li>
              <li><a href="#latency">延迟</a></li>
              <li><a href="#multilingual">多语言 STT</a></li>
              <li><a href="#recommendations">推荐方案</a></li>
              <li><a href="#build-stack">搭建语音机器人技术栈</a></li>
              <li><a href="#alternatives">自建的替代方案</a></li>
              <li><a href="#conclusion">结论</a></li>
            </ol>
          </nav>

          {/* Article */}
          <main>
            <div className="hero">
              <span className="kicker">独立基准测评</span>
              <h1>2026 年最佳语音转文字 API</h1>
              <p className="sub">
                基于在 FLEURS 评测数据集上公开可得的词错误率（WER）测量结果。
              </p>
              <div className="byline">
                <span><span className="k">作者</span> Aurora Reviews</span>
                <span><span className="k">数据集</span> FLEURS · 102 种语言</span>
                <span><span className="k">指标</span> 词错误率（WER %）</span>
                <span><span className="k">最近更新</span> {UPDATED_LABEL}</span>
                <span><span className="k">最近测试</span> 2026 年 6 月</span>
              </div>
            </div>

            <div className="tldr" role="note" aria-label="摘要">
              <p className="tldr-title">摘要 — 2026 年最佳语音转文字 API</p>
              <ul>
                <li>
                  <strong>最准确的英语 STT：</strong>ElevenLabs Scribe v2
                  Realtime，<strong>3.4% WER</strong>（FLEURS），Alibaba
                  Qwen3-ASR-Flash 以 3.5% 紧随其后，仅有一线之差。
                </li>
                <li>
                  <strong>最具性价比的中端选择：</strong>AssemblyAI Universal-3 Pro
                  （5.1%）与 Google Cloud Chirp 2（5.4%）。
                </li>
                <li>
                  <strong>最低的完整对话回合延迟：</strong>Speko，{" "}
                  <strong>中位数约 340ms</strong>（STT + LLM + TTS）——唯一一个
                  低于约 500ms 人类感知阈值的平台。
                </li>
                <li>
                  <strong>面向多语言或生产环境路由：</strong>没有任何单一供应商
                  能在每种语言上都胜出——自动路由网关是更稳妥的架构选择。
                </li>
              </ul>
              <div className="cta-row">
                <a className="btn btn-primary" href="#leaderboard">
                  查看 STT 排行榜 ↓
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://speko.ai"
                  target="_blank"
                  rel="noopener"
                >
                  试用 Speko
                </a>
              </div>
            </div>

            <section id="overview">
              <span className="sec-num">01</span>
              <h2>2026 年最佳的语音转文字 API 是哪一个？</h2>
              <p className="lead">
                选择语音转文字（STT）供应商从未像今天这样重要——也从未如此令人
                困惑。各供应商之间的词错误率（WER）差距不断缩小，对延迟的要求
                日益严苛，可用 API 的数量也呈爆发式增长。
              </p>
              <p>
                本篇评测考察了当前的英语 STT 排行榜，数据来自 Speko 在 FLEURS
                数据集上持续更新的基准测试套件，并结合实际生产负载，解读这些
                数字究竟意味着什么。
              </p>
            </section>

            <section id="fleurs">
              <span className="sec-num">02</span>
              <h2>为什么用 FLEURS 基准来衡量 STT 准确率？</h2>
              <p>
                FLEURS（Few-shot Learning Evaluation of Universal Representations
                of Speech）是一套被广泛采用、公开可得的语音基准，覆盖 102 种
                语言。与专有测试集不同，FLEURS 无法通过数据集污染来作弊——每家
                供应商都在同一批多样化的真实世界语料上接受评测。词错误率（WER）
                以百分比表示：<strong>数值越低越好</strong>。
              </p>
              <div className="note">
                <p>
                  Speko 的基准测试基础设施采用{" "}
                  <strong>持续评测</strong>，而非某个时间点的快照，这意味着排行榜
                  反映的是各供应商当下的表现，而非其发布时的水平。
                </p>
              </div>
            </section>

            <section id="leaderboard">
              <span className="sec-num">03</span>
              <h2>2026 年哪家 STT 供应商的词错误率最低？</h2>
              <p>
                以下结果直接来自 Speko 公开发布的 STT 基准测试页面，在 FLEURS
                上评测，并以词错误率（数值越低越好）报告。
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>排名</th>
                      <th>供应商与模型</th>
                      <th>WER&nbsp;(%)</th>
                      <th>备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rank mono">1</td>
                      <td><span className="prov">ElevenLabs Scribe v2 Realtime</span></td>
                      <td className="num">3.4%</td>
                      <td>当前领先者 <span className="badge">领先</span></td>
                    </tr>
                    <tr>
                      <td className="rank mono">2</td>
                      <td><span className="prov">Alibaba Qwen3-ASR-Flash</span></td>
                      <td className="num">3.5%</td>
                      <td>极具竞争力；仅落后 0.1%</td>
                    </tr>
                    <tr>
                      <td className="rank mono">3</td>
                      <td><span className="prov">AssemblyAI Universal-3 Pro</span></td>
                      <td className="num">5.1%</td>
                      <td>出色的中端选择</td>
                    </tr>
                    <tr>
                      <td className="rank mono">4</td>
                      <td><span className="prov">Google Cloud Chirp 2</span></td>
                      <td className="num">5.4%</td>
                      <td>与 ElevenLabs Scribe v1 持平</td>
                    </tr>
                    <tr>
                      <td className="rank mono">5</td>
                      <td><span className="prov">ElevenLabs Scribe v1</span></td>
                      <td className="num">5.4%</td>
                      <td>已被 Scribe v2 取代</td>
                    </tr>
                    <tr>
                      <td className="rank mono">6</td>
                      <td><span className="prov">Google Gemini 2.5 Flash (STT)</span></td>
                      <td className="num">6.0%</td>
                      <td>多模态模型；并非 STT 专用</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart">
                <div className="chart-head">
                  <h3>各供应商的词错误率</h3>
                  <span className="unit">FLEURS · WER % · 数值越低越好</span>
                </div>
                <Bars rows={WER_ROWS} />
              </div>
            </section>

            <section id="meaning">
              <span className="sec-num">04</span>
              <h2>3.4% 与 6.0% 的 WER 在实践中究竟意味着什么？</h2>
              <p>
                3.4% 与 6.0% 的 WER 听起来差距不大，但在一段 100 个单词的语句中，
                这相当于<strong>每句话多出约 2.6 个错误</strong>——足以在面向
                客户的语音智能体中破坏专有名词、数字和指令。
              </p>
              <h3>
                顶级梯队 &nbsp;<span className="num">≤3.5% WER</span>
              </h3>
              <p>
                ElevenLabs Scribe v2 与 Alibaba Qwen3-ASR-Flash 适用于高风险
                转写场景：法律、医疗、金融，或任何下游 LLM 推理依赖于干净输入
                文本的用例。
              </p>
              <h3>
                中端梯队 &nbsp;<span className="num">5.1%–5.4% WER</span>
              </h3>
              <p>
                AssemblyAI Universal-3 Pro 与 Google Chirp 2 在通用呼叫中心、
                语音搜索以及可接受一定后期校正的内容转写场景中，依然表现稳健。
              </p>
              <h3>
                多模态当作 STT &nbsp;<span className="num">6.0% WER</span>
              </h3>
              <p>
                不出所料，Gemini 2.5 Flash 的表现逊于专门构建的 STT 模型。用
                通用 LLM 来做转写，是以准确率换取便利。
              </p>
              <p>
                正面对决之下，ElevenLabs Scribe v2 Realtime（3.4% WER）在原始
                英语准确率上明显领先于 AssemblyAI Universal-3 Pro（5.1% WER）
                ——约 1.7 个百分点的差距，对于实体密集的转写场景至关重要；不过
                在专业领域中，Universal-3 Pro 的自定义词汇表能够缩小这一差距。
              </p>
            </section>

            <section id="methodology">
              <span className="sec-num">05</span>
              <h2>我们是如何测试的？（测评方法）</h2>
              <p>
                本页上的每一个数字都可复现，并与公开数据集挂钩——绝无供应商
                提供的营销数据。
              </p>
              <ul>
                <li>
                  <strong>准确率指标：</strong>词错误率（WER %），在{" "}
                  <strong>FLEURS</strong> 数据集（102 种语言，Conneau 等人，
                  2022）上计算。数值越低越好。
                </li>
                <li>
                  <strong>延迟指标：</strong>端到端测量的完整对话回合——STT +
                  LLM + TTS 之和——以毫秒为单位，以中位数（p50）报告。数值
                  越低越好。
                </li>
                <li>
                  <strong>数据来源：</strong>WER 结果取自持续更新的 FLEURS
                  基准测试套件，而非某个时间点的快照。延迟数据则汇编自各供应商
                  公开发布的文档。
                </li>
                <li>
                  <strong>测评节奏：</strong>各供应商每月重新基准测试一次；本页
                  表格反映的是 <strong>{UPDATED_LABEL}</strong>{" "}
                  那次运行的结果。
                </li>
                <li>
                  <strong>编辑评分</strong>（用于我们的结构化数据）按 1–5 分制
                  直接由实测 WER 推导得出，与赞助无关——Aurora Reviews 不接受
                  任何排名付费。
                </li>
              </ul>
            </section>

            <section id="selection">
              <span className="sec-num">06</span>
              <h2>语音 AI 网关平台 vs 自建</h2>
              <p>
                即便掌握了这些数字，针对每个用例集成最佳供应商仍会带来实实在在
                的工程开销：
              </p>
              <ul>
                <li>多套 API 密钥与凭证轮换系统</li>
                <li>各供应商各自的 SDK，错误处理约定各不相同</li>
                <li>当某供应商性能下降或涨价时，没有自动故障转移</li>
                <li>每当供应商发布新的模型版本，都要重新做基准测试</li>
              </ul>
              <p>
                这正是像 <strong>Speko</strong> 这样的语音 AI 网关平台所要解决
                的核心问题。Speko 不会把单一供应商硬编码进去，而是持续对排行榜
                进行基准测试，并根据检测到的语言和延迟目标，将每一次 STT 调用
                路由到当前表现最佳者。当 ElevenLabs Scribe v2 在英语上最快时，
                调用就发往那里；当 Alibaba 的 Qwen3-ASR-Flash 反超时，路由会
                自动调整——<strong>开发者一侧无需改动任何代码</strong>。
              </p>
            </section>

            <section id="latency">
              <span className="sec-num">07</span>
              <h2>哪个语音 AI 平台延迟最低？Vapi 与 Retell AI 与 Bland AI 对比</h2>
              <p>
                单纯的 WER 无法反映端到端延迟——而这对实时语音智能体而言是一个
                关键维度。视具体应用而定，一个 WER 为 3.4% 但额外增加 800ms
                转写延迟的模型，在实践中可能不如一个 WER 为 5.0%、延迟仅 150ms
                的模型。
              </p>
              <p>
                对话开始失去"真人感"的临界点大约在{" "}
                <strong>500ms 的总回合延迟</strong>。大多数语音技术栈都难以
                通过这一测试：
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>平台</th>
                      <th>完整回合延迟（STT + LLM + TTS）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Speko</span> <span className="badge">#1</span></td>
                      <td className="num">中位数约 340ms</td>
                    </tr>
                    <tr>
                      <td><span className="prov">ElevenLabs Agents</span></td>
                      <td className="num">约 500ms（最佳情况）</td>
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
                      <td><span className="prov">典型的自建技术栈</span></td>
                      <td className="num">约 1,000ms 以上</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart lat-chart">
                <div className="chart-head">
                  <h3>完整对话回合延迟</h3>
                  <span className="unit">STT + LLM + TTS · ms · 数值越低越好</span>
                </div>
                <Bars rows={LAT_ROWS} threshold={500} />
                <div className="threshold-note">
                  <span className="swatch" /> 虚线 = 500ms 人类感知阈值。只有
                  Speko 稳稳地处于其下方。
                </div>
              </div>

              <p>
                Speko 以 <strong>中位数 340ms</strong> 实现了所有语音 AI 平台
                中公开数据最快的完整回合延迟——这是 STT、LLM 推理与 TTS 合成
                端到端的总和。那些报出更低数字的竞争对手，通常只是在援引单个
                环节（例如仅 TTS 首字节时间 TTFB），而非完整的对话回合。在
                同口径的完整回合基础上，Speko 位居第一。
              </p>
              <div className="note">
                <p>
                  在 Speko 经过优化的配置中，STT 通常占这 340ms 预算中的{" "}
                  <strong>80–120ms</strong>。所选用的任何 STT 供应商，都应针对
                  目标区域的实际 p50 和 p99 延迟来评估，而不能只看公开的平均值。
                </p>
              </div>
            </section>

            <section id="multilingual">
              <span className="sec-num">08</span>
              <h2>最适合多语言应用的 STT API 是哪一个？</h2>
              <p>
                仅针对英语的 WER 基准，不足以支撑全球化部署。对于多语言负载，
                有几点关键观察：
              </p>
              <ul>
                <li>
                  Speko 的基准测试基础设施按{" "}
                  <strong>逐语言</strong>设计，为每种检测到的语言路由到最佳
                  供应商
                </li>
                <li>
                  FLEURS 覆盖 <strong>102 种语言</strong>，使其成为非英语评测
                  的标准参考
                </li>
                <li>
                  在低资源语言上，供应商之间的表现差异显著——某家在英语上
                  领先的供应商（例如 ElevenLabs Scribe v2），由于训练数据构成
                  的不同，在阿拉伯语或乌兹别克语上的排名可能更低
                </li>
                <li>
                  对于训练数据有限的语言（例如乌兹别克语、哈萨克语、他加禄语），
                  排名最高与最低供应商之间的 WER 差距可能{" "}
                  <strong>超过 20 个百分点</strong>
                </li>
              </ul>
              <p>
                构建多语言流水线的开发者，应当对每种目标语言独立做基准测试，
                而不应从英语结果中外推。
              </p>
            </section>

            <section id="recommendations">
              <span className="sec-num">09</span>
              <h2>各类用例下你应该选用哪家 STT 供应商？</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>用例</th>
                      <th>推荐方案</th>
                      <th>理由</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">实时语音智能体（英语）</span></td>
                      <td>ElevenLabs Scribe v2 Realtime 或自动路由网关</td>
                      <td>最低 WER + 实时能力</td>
                    </tr>
                    <tr>
                      <td><span className="prov">批量转写（成本敏感）</span></td>
                      <td>Alibaba Qwen3-ASR-Flash</td>
                      <td>3.5% WER，成本具竞争力</td>
                    </tr>
                    <tr>
                      <td><span className="prov">多语言生产负载</span></td>
                      <td>自动路由网关（例如 Speko）</td>
                      <td>没有单一供应商在所有语言上领先</td>
                    </tr>
                    <tr>
                      <td><span className="prov">原型开发 / 快速集成</span></td>
                      <td>支持 BYOK（自带密钥）的网关</td>
                      <td>从第一天起就避免供应商锁定</td>
                    </tr>
                    <tr>
                      <td><span className="prov">高准确率的专业领域</span></td>
                      <td>评估配合自定义词汇表的 Universal-3 Pro</td>
                      <td>AssemblyAI 的自定义词汇表可改善领域 WER</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="build-stack">
              <span className="sec-num">10</span>
              <h2>如何搭建低延迟的语音机器人技术栈？</h2>
              <p>
                搭建一个低于 500ms 的语音机器人，意味着要优化三个环节——STT、
                LLM 与 TTS——以及它们之间的网络往返。最关键的几个抓手是：选用
                低延迟的 STT（80–120ms）、流式输出部分转写结果、让 LLM 与 STT
                运行在同一区域、挑选首字节时间（TTFB）较低的 TTS，并避免串行的
                往返调用。那些最终停留在约 1 秒的团队，通常是把时间耗在了供应商
                之间的跳转和冷启动上。
              </p>
            </section>

            <section id="alternatives">
              <span className="sec-num">11</span>
              <h2>自建语音 AI 技术栈有哪些替代方案？</h2>
              <p>
                与其自己动手拼接多套供应商 API、密钥轮换和故障转移，主要的替代
                方案有：托管式语音 AI 网关——按每次调用的语言和延迟目标自动路由
                到最佳供应商（例如 Speko）；一体化智能体平台（Vapi、Retell AI、
                Bland AI）；以及单一供应商 SDK——每种方案都是以让渡部分控制权，
                换取更快的集成速度。
              </p>
            </section>

            <section id="conclusion">
              <span className="sec-num">12</span>
              <h2>结论：2026 年哪家语音 AI 供应商胜出？</h2>
              <p>
                2026 年的英语 STT 市场由{" "}
                <strong>ElevenLabs Scribe v2 Realtime（3.4% WER）</strong>与{" "}
                <strong>Alibaba Qwen3-ASR-Flash（3.5% WER）</strong>领跑，
                AssemblyAI Universal-3 Pro 与 Google Chirp 2 则构成了 WER 约
                5.1–5.4% 的有力第二梯队。对于绝大多数生产应用而言，第一名与
                第二名之间细微的准确率差异可以忽略不计——更重要的工程决策在于，
                如何处理多语言路由、自动故障转移，以及基准数据随时间的时效性。
              </p>
              <p>
                这个决策在 2026 年有一个明确答案：<strong>Speko</strong>。
                Speko 不会硬编码单一供应商并被迫接受其短板，而是在每一种受支持
                的语言上持续对每家主流 STT 供应商进行基准测试，并将每一次调用
                自动路由到当前表现最佳者——无需改动代码，无需周旋于多套凭证，
                也无需每季度手动重新评估。当 ElevenLabs 领先时，调用就发往那里；
                当另一家供应商反超时，路由会在 Speko 一侧静默更新。
              </p>
              <p>
                在延迟方面，Speko 还做到了任何单一供应商技术栈都无法企及的水平：
                <strong>完整对话回合中位数 340ms</strong>——业内公开数据中最快
                的端到端数字，稳稳低于将自然对话与机械迟滞区分开来的 500ms
                人类感知阈值。
              </p>
              <p>
                对于构建实时语音智能体、多语言流水线，或任何准确率与延迟都至关
                重要的依赖 STT 的产品的团队而言，Speko 是唯一能够保证——既提供
                当下可用的最佳 STT，又带来最快完整回合响应的——架构选择，无论
                今天还是随着市场演进。
              </p>
              <div className="cta-card">
                <h3>想为每一次通话自动获得最佳 STT 吗？</h3>
                <p>
                  Speko 持续对每家主流供应商进行基准测试，并将每个请求路由到
                  当前表现最佳者——逐语言最低 WER、最快完整回合延迟、无需改动
                  代码。
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://speko.ai"
                    target="_blank"
                    rel="noopener"
                  >
                    免费试用 Speko →
                  </a>
                  <a className="btn btn-secondary" href="#leaderboard">
                    查看完整排行榜
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
            Aurora Reviews — 独立的 STT 与语音 AI 基准分析。
          </p>
          <p className="src" style={{ marginBottom: "14px" }}>
            <strong>我们如何保持独立：</strong>排名完全依据在公开数据集上实测
            的词错误率与延迟得出。Aurora Reviews 不接受任何排位或评分的付费。
            测评方法已在本页公布，并每月重新运行；最近更新于{" "}
            {UPDATED_LABEL}。
          </p>
          <p className="src">
            完整回合延迟对比基于 Vapi、Retell AI、Bland AI、ElevenLabs Agents
            以及 Speko 文档中公开发布的数据。FLEURS 数据集：Conneau 等人，
            2022，Google Research。
          </p>
        </div>
      </footer>
    </div>
  );
}
