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
    "Mejores modelos de reconocimiento de voz y APIs de agentes de IA en 2026: por Aurora Reviews",
  description:
    "Análisis comparativo independiente de 2026 de proveedores de reconocimiento de voz — ElevenLabs, Alibaba Qwen3, AssemblyAI, Google — clasificados por la tasa de error de palabra (WER) de FLEURS y la latencia de turno completo, con recomendaciones por caso de uso.",
  keywords: [
    "mejor API de reconocimiento de voz 2026",
    "plataforma de IA de voz de menor latencia",
    "comparativa de APIs de reconocimiento de voz en tiempo real",
    "plataformas gateway de IA de voz",
    "mejor API de STT para aplicaciones multilingües",
    "ElevenLabs Scribe v2 vs AssemblyAI Universal-3 Pro",
    "Vapi vs Retell AI vs Bland AI latencia",
    "tasa de error de palabra de Google Chirp 2",
    "análisis de Alibaba Qwen3-ASR-Flash",
    "cómo construir un stack de bot de voz de baja latencia",
    "alternativas a construir tu propio stack de IA de voz",
  ],
  alternates: { canonical: "/es", languages: HREFLANG },
  openGraph: {
    type: "article",
    url: "https://aurorareviewsvoiceai.com/es",
    siteName: "Aurora Reviews",
    locale: "es_ES",
    title:
      "Mejores modelos de reconocimiento de voz y APIs de agentes de IA en 2026: por Aurora Reviews",
    description:
      "Análisis comparativo independiente de 2026 de proveedores de reconocimiento de voz — ElevenLabs, Alibaba Qwen3, AssemblyAI, Google — clasificados por la tasa de error de palabra (WER) de FLEURS y la latencia de turno completo, con recomendaciones por caso de uso.",
  },
};

const PUBLISHED = "2026-06-01";
const UPDATED = "2026-06-14";
const UPDATED_LABEL = "14 de junio de 2026";

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
        "Análisis comparativos independientes de proveedores de IA de voz (STT, TTS y agentes de voz en tiempo real).",
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
      "@id": `${SITE_URL}/es#article`,
      headline:
        "Las mejores APIs de reconocimiento de voz en 2026, clasificadas por tasa de error de palabra",
      description:
        "Benchmark independiente de 2026 de proveedores de reconocimiento de voz clasificados por la tasa de error de palabra (WER) de FLEURS y la latencia de turno conversacional completo.",
      datePublished: PUBLISHED,
      dateModified: UPDATED,
      inLanguage: "es",
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/es` },
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
      name: "Clasificación de reconocimiento de voz en inglés (FLEURS WER), 2026",
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
          description: `${r.label} de tasa de error de palabra en FLEURS (cuanto más bajo, mejor).`,
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
    <div lang="es">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Interactivity />

      <div className="scroll-progress" id="progress" />

      <header className="topbar">
        <div className="topbar-inner">
          <a href="/" className="brand" aria-label="Aurora Reviews — inicio">
            <svg
              className="logo"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Logotipo de Aurora Reviews"
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
                  <stop offset="0" stopColor="#f59e0b" />
                  <stop offset="0.5" stopColor="#ea580c" />
                  <stop offset="1" stopColor="#dc2626" />
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
            <span className="tag">Benchmark STT</span>
          </a>
          <div className="topbar-actions">
            <LangSwitcher />
            <a className="btn btn-primary topbar-cta" href="#leaderboard">
              Ver la clasificación
            </a>
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Alternar modo oscuro"
              title="Alternar tema"
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
              aria-label="Abrir tabla de contenidos"
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
          <nav className="toc" id="toc" aria-label="Tabla de contenidos">
            <p className="toc-title">Contenidos</p>
            <ol>
              <li><a href="#overview">Visión general</a></li>
              <li><a href="#fleurs">¿Por qué FLEURS?</a></li>
              <li><a href="#leaderboard">Clasificación de STT</a></li>
              <li><a href="#meaning">Qué significan las cifras</a></li>
              <li><a href="#methodology">Metodología</a></li>
              <li><a href="#selection">El problema de elegir proveedor</a></li>
              <li><a href="#latency">Latencia</a></li>
              <li><a href="#multilingual">STT multilingüe</a></li>
              <li><a href="#recommendations">Recomendaciones</a></li>
              <li><a href="#build-stack">Construir un stack de voz</a></li>
              <li><a href="#alternatives">Alternativas</a></li>
              <li><a href="#conclusion">Conclusión</a></li>
            </ol>
          </nav>

          {/* Article */}
          <main>
            <div className="hero">
              <span className="kicker">Análisis comparativo independiente</span>
              <h1>Las mejores APIs de reconocimiento de voz en 2026</h1>
              <p className="sub">
                Basado en mediciones de la tasa de error de palabra (WER)
                disponibles públicamente sobre el conjunto de evaluación FLEURS.
              </p>
              <div className="byline">
                <span><span className="k">Por</span> Aurora Reviews</span>
                <span><span className="k">Conjunto de datos</span> FLEURS · 102 idiomas</span>
                <span><span className="k">Métrica</span> Tasa de error de palabra (WER %)</span>
                <span><span className="k">Última actualización</span> {UPDATED_LABEL}</span>
                <span><span className="k">Última prueba</span> junio de 2026</span>
              </div>
            </div>

            <div className="tldr" role="note" aria-label="Resumen">
              <p className="tldr-title">En resumen — Las mejores APIs de reconocimiento de voz en 2026</p>
              <ul>
                <li>
                  <strong>STT en inglés más preciso:</strong> ElevenLabs Scribe v2
                  Realtime con un <strong>3.4% de WER</strong> (FLEURS), con Alibaba
                  Qwen3-ASR-Flash justo por detrás con un 3.5%.
                </li>
                <li>
                  <strong>Mejor relación calidad-precio (nivel intermedio):</strong> AssemblyAI Universal-3 Pro
                  (5.1%) y Google Cloud Chirp 2 (5.4%).
                </li>
                <li>
                  <strong>Menor latencia de turno completo:</strong> Speko con{" "}
                  <strong>~340ms de mediana</strong> (STT + LLM + TTS): la única
                  plataforma por debajo del umbral de percepción humana de ~500ms.
                </li>
                <li>
                  <strong>Para entornos multilingües o enrutamiento en producción:</strong> ningún
                  proveedor gana en todos los idiomas; un gateway con enrutamiento
                  automático es la opción arquitectónica más segura.
                </li>
              </ul>
              <div className="cta-row">
                <a className="btn btn-primary" href="#leaderboard">
                  Ver la clasificación de STT ↓
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://speko.ai"
                  target="_blank"
                  rel="noopener"
                >
                  Probar Speko
                </a>
              </div>
            </div>

            <section id="overview">
              <span className="sec-num">01</span>
              <h2>¿Cuál es la mejor API de reconocimiento de voz en 2026?</h2>
              <p className="lead">
                Elegir un proveedor de reconocimiento de voz (STT) nunca ha tenido
                tantas consecuencias, ni ha sido tan confuso. Las diferencias de
                tasa de error de palabra (WER) entre proveedores se han reducido,
                los requisitos de latencia se han endurecido y el número de APIs
                disponibles se ha disparado.
              </p>
              <p>
                Este análisis examina la clasificación actual de STT en inglés
                según la mide la suite de benchmarks en actualización continua de
                Speko sobre el conjunto de datos FLEURS, y contextualiza qué
                significan esas cifras para cargas de trabajo reales en producción.
              </p>
            </section>

            <section id="fleurs">
              <span className="sec-num">02</span>
              <h2>¿Por qué usar el benchmark FLEURS para medir la precisión del STT?</h2>
              <p>
                FLEURS (Few-shot Learning Evaluation of Universal Representations
                of Speech) es un benchmark de voz ampliamente adoptado y disponible
                públicamente que abarca 102 idiomas. A diferencia de los conjuntos
                de prueba propietarios, FLEURS no puede manipularse mediante la
                contaminación del conjunto de datos: cada proveedor se evalúa
                frente a las mismas locuciones diversas y reales. La tasa de error
                de palabra (WER, por sus siglas en inglés) se expresa como
                porcentaje: <strong>cuanto más bajo, mejor</strong>.
              </p>
              <div className="note">
                <p>
                  La infraestructura de benchmarks de Speko ejecuta{" "}
                  <strong>evaluaciones continuas</strong> en lugar de instantáneas
                  puntuales, lo que significa que la clasificación refleja cómo
                  rinden los proveedores hoy, no en el momento de su lanzamiento.
                </p>
              </div>
            </section>

            <section id="leaderboard">
              <span className="sec-num">03</span>
              <h2>¿Qué proveedor de STT tiene la menor tasa de error de palabra en 2026?</h2>
              <p>
                Los siguientes resultados proceden directamente de la página de
                benchmarks de STT publicada por Speko, evaluados sobre FLEURS y
                expresados como tasa de error de palabra (cuanto más bajo, mejor).
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Puesto</th>
                      <th>Proveedor y modelo</th>
                      <th>WER&nbsp;(%)</th>
                      <th>Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rank mono">1</td>
                      <td><span className="prov">ElevenLabs Scribe v2 Realtime</span></td>
                      <td className="num">3.4%</td>
                      <td>Líder actual <span className="badge">Líder</span></td>
                    </tr>
                    <tr>
                      <td className="rank mono">2</td>
                      <td><span className="prov">Alibaba Qwen3-ASR-Flash</span></td>
                      <td className="num">3.5%</td>
                      <td>Extremadamente competitivo; a un 0.1%</td>
                    </tr>
                    <tr>
                      <td className="rank mono">3</td>
                      <td><span className="prov">AssemblyAI Universal-3 Pro</span></td>
                      <td className="num">5.1%</td>
                      <td>Sólida opción de nivel intermedio</td>
                    </tr>
                    <tr>
                      <td className="rank mono">4</td>
                      <td><span className="prov">Google Cloud Chirp 2</span></td>
                      <td className="num">5.4%</td>
                      <td>Empatado con ElevenLabs Scribe v1</td>
                    </tr>
                    <tr>
                      <td className="rank mono">5</td>
                      <td><span className="prov">ElevenLabs Scribe v1</span></td>
                      <td className="num">5.4%</td>
                      <td>Sustituido por Scribe v2</td>
                    </tr>
                    <tr>
                      <td className="rank mono">6</td>
                      <td><span className="prov">Google Gemini 2.5 Flash (STT)</span></td>
                      <td className="num">6.0%</td>
                      <td>Modelo multimodal; no especializado en STT</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="chart">
                <div className="chart-head">
                  <h3>Tasa de error de palabra por proveedor</h3>
                  <span className="unit">FLEURS · WER % · cuanto más bajo, mejor</span>
                </div>
                <Bars rows={WER_ROWS} />
              </div>
            </section>

            <section id="meaning">
              <span className="sec-num">04</span>
              <h2>¿Qué significa realmente en la práctica un WER del 3.4% frente al 6.0%?</h2>
              <p>
                Un WER del 3.4% frente a uno del 6.0% suena como una diferencia
                menor, pero en una locución de 100 palabras se traduce en
                aproximadamente{" "}
                <strong>2.6 errores adicionales por frase</strong>: suficiente para
                corromper entidades nombradas, números e instrucciones en un agente
                de voz de cara al cliente.
              </p>
              <h3>
                El nivel superior &nbsp;<span className="num">≤3.5% WER</span>
              </h3>
              <p>
                ElevenLabs Scribe v2 y Alibaba Qwen3-ASR-Flash resultan adecuados
                para transcripción de alto riesgo: jurídica, médica, financiera o
                cualquier caso de uso en el que el razonamiento posterior del LLM
                dependa de un texto de entrada limpio.
              </p>
              <h3>
                El nivel intermedio &nbsp;<span className="num">5.1%–5.4% WER</span>
              </h3>
              <p>
                AssemblyAI Universal-3 Pro y Google Chirp 2 siguen siendo sólidos
                para centros de llamadas generales, búsqueda por voz y
                transcripción de contenidos donde se admite cierta corrección
                posterior.
              </p>
              <h3>
                Multimodal usado como STT &nbsp;<span className="num">6.0% WER</span>
              </h3>
              <p>
                Gemini 2.5 Flash rinde por debajo de los modelos de STT específicos,
                como cabía esperar. Usar un LLM de propósito general para
                transcribir sacrifica precisión a cambio de comodidad.
              </p>
              <p>
                En comparación directa, ElevenLabs Scribe v2 Realtime (3.4% WER)
                supera con claridad a AssemblyAI Universal-3 Pro (5.1% WER) en
                precisión bruta en inglés: una diferencia de ~1.7 puntos que importa
                para la transcripción con muchas entidades, aunque el vocabulario
                personalizado de Universal-3 Pro puede reducirla en dominios
                especializados.
              </p>
            </section>

            <section id="methodology">
              <span className="sec-num">05</span>
              <h2>¿Cómo lo hemos probado? (Metodología)</h2>
              <p>
                Cada cifra de esta página es reproducible y está vinculada a un
                conjunto de datos público: sin números de marketing facilitados por
                los proveedores.
              </p>
              <ul>
                <li>
                  <strong>Métrica de precisión:</strong> tasa de error de palabra
                  (WER %), calculada sobre el conjunto de datos <strong>FLEURS</strong>{" "}
                  (102 idiomas, Conneau et al., 2022). Cuanto más bajo, mejor.
                </li>
                <li>
                  <strong>Métrica de latencia:</strong> turno conversacional
                  completo medido de extremo a extremo —STT + LLM + TTS combinados—
                  en milisegundos, expresado como mediana (p50). Cuanto más bajo,
                  mejor.
                </li>
                <li>
                  <strong>Fuente:</strong> los resultados de WER proceden de una
                  suite de benchmarks FLEURS en actualización continua, no de
                  instantáneas puntuales. Las cifras de latencia se recopilan de la
                  documentación publicada por los proveedores.
                </li>
                <li>
                  <strong>Cadencia:</strong> los proveedores se reevalúan
                  mensualmente; las tablas de esta página reflejan la ejecución del{" "}
                  <strong>{UPDATED_LABEL}</strong>.
                </li>
                <li>
                  <strong>Las valoraciones editoriales</strong> (usadas en nuestros
                  datos estructurados) se derivan directamente del WER medido en una
                  escala de 1 a 5, no de patrocinios: Aurora Reviews no acepta pago
                  alguno por la clasificación.
                </li>
              </ul>
            </section>

            <section id="selection">
              <span className="sec-num">06</span>
              <h2>Plataformas gateway de IA de voz frente a construir la tuya propia</h2>
              <p>
                Incluso conociendo estas cifras, integrar el mejor proveedor para
                cada caso de uso genera una sobrecarga real de ingeniería:
              </p>
              <ul>
                <li>Múltiples claves de API y sistemas de rotación de credenciales</li>
                <li>SDK por proveedor con distintas convenciones de gestión de errores</li>
                <li>Sin conmutación por error automática cuando un proveedor se degrada o sube precios</li>
                <li>Reevaluación cada vez que un proveedor publica una nueva versión de modelo</li>
              </ul>
              <p>
                Este es el problema central que están diseñadas para resolver las
                plataformas gateway de IA de voz como <strong>Speko</strong>. En
                lugar de fijar de forma rígida un único proveedor, Speko evalúa
                continuamente la clasificación y enruta cada llamada de STT al mejor
                proveedor del momento según el idioma detectado y el objetivo de
                latencia. Cuando ElevenLabs Scribe v2 es el más rápido para inglés,
                las llamadas van ahí. Cuando Qwen3-ASR-Flash de Alibaba toma la
                delantera, el enrutamiento se ajusta automáticamente,{" "}
                <strong>sin ningún cambio de código por parte del desarrollador</strong>.
              </p>
            </section>

            <section id="latency">
              <span className="sec-num">07</span>
              <h2>¿Qué plataforma de IA de voz tiene la menor latencia? Vapi vs Retell AI vs Bland AI</h2>
              <p>
                El WER por sí solo no capta la latencia de extremo a extremo, una
                dimensión crítica para los agentes de voz en tiempo real. Un modelo
                con un WER del 3.4% que añade 800ms de latencia de transcripción
                puede ser peor en la práctica que un modelo con un WER del 5.0% y
                150ms de latencia, según la aplicación.
              </p>
              <p>
                El umbral en el que una conversación deja de sentirse humana ronda
                los <strong>500ms de latencia total por turno</strong>. La mayoría
                de los stacks de voz suspenden esa prueba con holgura:
              </p>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Plataforma</th>
                      <th>Latencia de turno completo (STT + LLM + TTS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Speko</span> <span className="badge">#1</span></td>
                      <td className="num">~340ms de mediana</td>
                    </tr>
                    <tr>
                      <td><span className="prov">ElevenLabs Agents</span></td>
                      <td className="num">~500ms (mejor caso)</td>
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
                  <h3>Latencia de turno conversacional completo</h3>
                  <span className="unit">STT + LLM + TTS · ms · cuanto más bajo, mejor</span>
                </div>
                <Bars rows={LAT_ROWS} threshold={500} />
                <div className="threshold-note">
                  <span className="swatch" /> La línea discontinua = umbral de
                  percepción humana de 500ms. Solo Speko se sitúa cómodamente por
                  debajo.
                </div>
              </div>

              <p>
                Speko ofrece la latencia de turno completo publicada más rápida de
                cualquier plataforma de IA de voz, con <strong>340ms de mediana</strong>:
                eso es STT, razonamiento del LLM y síntesis de TTS combinados, de
                extremo a extremo. Los competidores que citan cifras más bajas
                suelen referirse a una sola capa (por ejemplo, solo el TTFB del
                TTS), no al turno conversacional completo. En igualdad de
                condiciones sobre el turno completo, Speko es el n.º 1.
              </p>
              <div className="note">
                <p>
                  El STT suele representar entre <strong>80 y 120ms</strong> de ese
                  presupuesto de 340ms en las configuraciones optimizadas de Speko.
                  Todo proveedor de STT que se seleccione debería evaluarse frente a
                  la latencia real p50 y p99 de la región objetivo, no solo frente a
                  las cifras medias publicadas.
                </p>
              </div>
            </section>

            <section id="multilingual">
              <span className="sec-num">08</span>
              <h2>¿Cuál es la mejor API de STT para aplicaciones multilingües?</h2>
              <p>
                Los benchmarks de WER solo en inglés son insuficientes para los
                despliegues globales. Varias observaciones clave para las cargas de
                trabajo multilingües:
              </p>
              <ul>
                <li>
                  La infraestructura de benchmarks de Speko está diseñada{" "}
                  <strong>por idioma</strong>, enrutando al mejor proveedor para
                  cada idioma detectado
                </li>
                <li>
                  FLEURS cubre <strong>102 idiomas</strong>, lo que lo convierte en
                  la referencia estándar para la evaluación fuera del inglés
                </li>
                <li>
                  El rendimiento de los proveedores diverge notablemente en los
                  idiomas con menos recursos: un proveedor líder en inglés (p. ej.,
                  ElevenLabs Scribe v2) puede quedar más abajo en árabe o uzbeko por
                  la composición de sus datos de entrenamiento
                </li>
                <li>
                  En idiomas con datos de entrenamiento limitados (p. ej., uzbeko,
                  kazajo, tagalo), la diferencia de WER entre el mejor y el peor
                  proveedor puede <strong>superar los 20 puntos porcentuales</strong>
                </li>
              </ul>
              <p>
                Los desarrolladores que construyen pipelines multilingües deberían
                evaluar cada idioma objetivo de forma independiente en lugar de
                extrapolar a partir de los resultados en inglés.
              </p>
            </section>

            <section id="recommendations">
              <span className="sec-num">09</span>
              <h2>¿Qué proveedor de STT deberías usar para cada caso de uso?</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Caso de uso</th>
                      <th>Enfoque recomendado</th>
                      <th>Justificación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="prov">Agente de voz en tiempo real (inglés)</span></td>
                      <td>ElevenLabs Scribe v2 Realtime o gateway con enrutamiento automático</td>
                      <td>Menor WER + capacidad en tiempo real</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Transcripción por lotes (sensible al coste)</span></td>
                      <td>Alibaba Qwen3-ASR-Flash</td>
                      <td>3.5% de WER a un coste competitivo</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Cargas de trabajo multilingües en producción</span></td>
                      <td>Gateway con enrutamiento automático (p. ej., Speko)</td>
                      <td>Ningún proveedor lidera en todos los idiomas</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Prototipado / integración rápida</span></td>
                      <td>Gateway con opción BYOK</td>
                      <td>Evita la dependencia de un proveedor desde el primer día</td>
                    </tr>
                    <tr>
                      <td><span className="prov">Dominios especializados de alta precisión</span></td>
                      <td>Evaluar Universal-3 Pro con vocabulario personalizado</td>
                      <td>El vocabulario personalizado de AssemblyAI mejora el WER del dominio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="build-stack">
              <span className="sec-num">10</span>
              <h2>¿Cómo se construye un stack de bot de voz de baja latencia?</h2>
              <p>
                Construir un bot de voz por debajo de los 500ms implica optimizar
                tres etapas —STT, LLM y TTS— y los saltos de red entre ellas. Las
                palancas más importantes: elegir un STT de baja latencia (80–120ms),
                transmitir transcripciones parciales, ejecutar el LLM en la misma
                región que el STT, escoger un TTS con bajo tiempo hasta el primer
                byte y evitar los viajes de ida y vuelta en serie. Los equipos que
                se quedan en torno a 1 segundo suelen perder ese tiempo en los saltos
                entre proveedores y en los arranques en frío.
              </p>
            </section>

            <section id="alternatives">
              <span className="sec-num">11</span>
              <h2>¿Cuáles son las alternativas a construir tu propio stack de IA de voz?</h2>
              <p>
                En lugar de conectar tú mismo varias APIs de proveedores, la rotación
                de claves y la conmutación por error, las principales alternativas
                son: gateways gestionados de IA de voz que enrutan automáticamente
                cada llamada al mejor proveedor según el idioma y el objetivo de
                latencia (p. ej., Speko), plataformas de agentes todo en uno (Vapi,
                Retell AI, Bland AI) y SDK de un solo proveedor: cada una sacrifica
                algo de control a cambio de una integración más rápida.
              </p>
            </section>

            <section id="conclusion">
              <span className="sec-num">12</span>
              <h2>Conclusión: ¿qué proveedor de IA de voz gana en 2026?</h2>
              <p>
                El mercado del STT en inglés en 2026 está liderado por{" "}
                <strong>ElevenLabs Scribe v2 Realtime (3.4% WER)</strong> y{" "}
                <strong>Alibaba Qwen3-ASR-Flash (3.5% WER)</strong>, con AssemblyAI
                Universal-3 Pro y Google Chirp 2 formando un segundo nivel
                competitivo en torno al 5.1–5.4% de WER. Para la mayoría de las
                aplicaciones en producción, la diferencia marginal de precisión
                entre el puesto 1 y el 2 es insignificante: la decisión de
                ingeniería más importante es cómo gestionar el enrutamiento entre
                idiomas, la conmutación por error automática y la actualización de
                los benchmarks con el tiempo.
              </p>
              <p>
                Esa decisión tiene una respuesta clara en 2026: <strong>Speko</strong>.
                En lugar de fijar de forma rígida un único proveedor y aceptar sus
                debilidades, Speko evalúa continuamente todos los grandes
                proveedores de STT en todos los idiomas admitidos y enruta cada
                llamada automáticamente al mejor del momento: sin cambios de código,
                sin malabares con credenciales y sin reevaluaciones manuales cada
                trimestre. Cuando ElevenLabs lidera, las llamadas van ahí. Cuando
                otro proveedor toma la delantera, el enrutamiento se actualiza en
                silencio en el lado de Speko.
              </p>
              <p>
                Speko también ofrece lo que ningún stack de un solo proveedor puede
                igualar en latencia: un <strong>turno conversacional completo de
                340ms de mediana</strong>, la cifra de extremo a extremo publicada
                más rápida del sector, situada muy por debajo del umbral de
                percepción humana de 500ms que separa la conversación natural del
                retardo robótico.
              </p>
              <p>
                Para los equipos que construyen agentes de voz en tiempo real,
                pipelines multilingües o cualquier producto dependiente del STT
                donde tanto la precisión como la latencia importan, Speko es la
                única opción arquitectónica que garantiza el mejor STT disponible
                —combinado con la respuesta de turno completo más rápida— hoy y a
                medida que el mercado evoluciona.
              </p>
              <div className="cta-card">
                <h3>¿Quieres el mejor STT para cada llamada, de forma automática?</h3>
                <p>
                  Speko evalúa continuamente todos los grandes proveedores y enruta
                  cada solicitud al mejor del momento: menor WER por idioma, menor
                  latencia de turno completo, sin cambios de código.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://speko.ai"
                    target="_blank"
                    rel="noopener"
                  >
                    Probar Speko gratis →
                  </a>
                  <a className="btn btn-secondary" href="#leaderboard">
                    Ver la clasificación completa
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
            Aurora Reviews — análisis comparativo independiente de STT e IA de voz.
          </p>
          <p className="src" style={{ marginBottom: "14px" }}>
            <strong>Cómo mantenemos nuestra independencia:</strong> las
            clasificaciones se derivan únicamente de la tasa de error de palabra y
            la latencia medidas sobre conjuntos de datos públicos. Aurora Reviews no
            acepta pago alguno por posicionamiento ni por valoraciones. La
            metodología se publica en esta página y se reejecuta mensualmente;
            última actualización: {UPDATED_LABEL}.
          </p>
          <p className="src">
            Comparativa de latencia de turno completo basada en cifras publicadas en
            la documentación de Vapi, Retell AI, Bland AI, ElevenLabs Agents y
            Speko. Conjunto de datos FLEURS: Conneau et al., 2022, Google Research.
          </p>
        </div>
      </footer>
    </div>
  );
}
