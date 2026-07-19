import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faBrain,
  faDatabase,
  faCheck,
  faServer,
  faSnowflake,
  faLocationDot,
  faPaperPlane,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faApple,
  faAndroid,
  faPython,
  faMicrosoft,
  faGoogle,
  faRProject,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    icon: faMobileScreenButton,
    title: "Product Development",
    body: "Web, iOS, and Android applications built end to end with Next.js, React Native, and Supabase. Design, build, release, and the iteration after launch.",
  },
  {
    icon: faRobot,
    title: "Agentic AI",
    body: "Agents that do real work inside the product: multi-step workflows, tool use, orchestration, evals, and guardrails. Built on Claude, OpenAI, and Gemini.",
  },
  {
    icon: faBrain,
    title: "Machine Learning",
    body: "Demand forecasting, recommendations, churn and LTV models. Deployed inside the product and monitored in production.",
  },
  {
    icon: faDatabase,
    title: "Data & Analytics",
    body: "Snowflake, Microsoft Fabric, GCP, and Supabase. Pipelines and lakehouse architecture underneath, dashboards and reporting on top.",
  },
];

const caseStudies = [
  {
    tag: "Consumer Startup",
    tagColor: "text-accent",
    title: "Full-Stack Social Application",
    body: "Architected and built a social productivity app from zero to App Store. React Native mobile apps, Next.js web platform, Supabase backend with real-time subscriptions, push notifications, and AI-powered features.",
    points: [
      "iOS & Android apps (live)",
      "Real-time data architecture",
      "AI integration (OpenAI, Gemini)",
    ],
  },
  {
    tag: "Regulated Commerce",
    tagColor: "text-brand",
    title: "Prescription Platform Analytics",
    body: "Led data science for a consumer prescription management platform in animal health: the models and infrastructure behind a product veterinary clinics and pet owners used directly, through a major platform migration.",
    points: [
      "Churn prediction models",
      "Legacy system data alignment",
      "Snowflake optimization",
    ],
  },
  {
    tag: "DTC Subscription",
    tagColor: "text-accent-strong",
    title: "Subscription Analytics Platform",
    body: "End-to-end analytics infrastructure for a subscription DTC brand. Microsoft Fabric lakehouse, PySpark ETL pipelines, and real-time Shiny dashboards for executive decision-making.",
    points: [
      "LTV & cohort analysis",
      "Multi-channel attribution",
      "Real-time sales dashboards",
    ],
  },
];

const stack = [
  { icon: faReact, name: "React · Next.js", desc: "Web applications" },
  { icon: faApple, name: "React Native · iOS", desc: "App Store, native modules" },
  { icon: faAndroid, name: "Android", desc: "Play Store releases" },
  { icon: faServer, name: "Supabase", desc: "Backend & realtime" },
  { icon: faRobot, name: "Claude · OpenAI · Gemini", desc: "Agent & LLM APIs" },
  { icon: faSnowflake, name: "Snowflake", desc: "Warehousing & optimization" },
  { icon: faMicrosoft, name: "Microsoft Fabric · Azure", desc: "Lakehouse & ETL" },
  { icon: faGoogle, name: "Google Cloud", desc: "Data & ML services" },
  { icon: faPython, name: "Python · PySpark", desc: "Data engineering" },
  { icon: faRProject, name: "R · Shiny", desc: "Statistical computing" },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-text-muted">
      <FontAwesomeIcon icon={faCheck} className="mt-1 h-3.5 w-3.5 shrink-0 text-brand" />
      {children}
    </li>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-text">
      {/* ================= Navigation ================= */}
      <nav className="on-dark fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Catalyst" width={30} height={30} className="rounded-sm" />
            <span className="text-lg font-extrabold tracking-tight text-on-ink">Catalyst</span>
          </a>
          <div className="flex items-center gap-8 text-sm font-semibold text-on-ink-muted">
            <a href="#services" className="hidden transition-colors hover:text-on-ink md:inline">Services</a>
            <a href="#work" className="hidden transition-colors hover:text-on-ink md:inline">Work</a>
            <a href="#stack" className="hidden transition-colors hover:text-on-ink md:inline">Stack</a>
            <a
              href="#contact"
              className="rounded-pill bg-accent px-5 py-2 font-bold text-white transition-colors hover:bg-accent-strong"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* ================= Hero ================= */}
      <header id="top" className="on-dark relative overflow-hidden bg-ink">
        {/* faint chart gridlines */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[20, 40, 60, 80].map((y) => (
            <div
              key={y}
              className="absolute left-0 right-0 border-t border-line-on-ink/40"
              style={{ top: `${y}%` }}
            />
          ))}
        </div>

        {/* the signal: brand gradient as data ink */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 1200 640"
          preserveAspectRatio="none"
          fill="none"
          style={{
            maskImage: "linear-gradient(to top, transparent 16%, black 34%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 16%, black 34%)",
          }}
        >
          <defs>
            <linearGradient id="signal" x1="0" y1="640" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#5B21B6" />
              <stop offset="0.55" stopColor="#F97316" />
              <stop offset="1" stopColor="#FACC15" />
            </linearGradient>
          </defs>
          <path
            className="signal-path"
            pathLength={1}
            d="M-20 560 L140 540 L230 556 L360 500 L470 516 L590 440 L700 462 L820 360 L930 384 L1040 260 L1120 276 L1210 170"
            stroke="url(#signal)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            opacity="0.85"
          />
          <circle className="signal-dot" cx="1120" cy="276" r="5" fill="#FACC15" />
        </svg>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 md:pb-32 md:pt-48">
          <p className="eyebrow mb-6 text-on-ink-muted">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-3 w-3 text-accent" />
            Portland, Maine
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-on-ink md:text-7xl">
            Intelligent applications for web, iOS, and Android.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-ink-muted md:text-xl">
            Catalyst designs and builds full-stack products with agentic AI,
            machine learning, and the data infrastructure behind them, from
            design through release.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-pill bg-accent px-8 py-4 text-center font-bold text-white transition-colors hover:bg-accent-strong"
            >
              Get in touch
            </a>
            <a
              href="#work"
              className="rounded-pill border border-line-on-ink px-8 py-4 text-center font-bold text-on-ink transition-colors hover:bg-ink-raised"
            >
              See the work
            </a>
          </div>
        </div>
      </header>

      {/* ================= Services ================= */}
      <section id="services" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brand">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            What Catalyst builds
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-lg border border-line bg-surface-raised p-8 transition-colors hover:border-line-strong"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-ink">
                  <FontAwesomeIcon icon={s.icon} className="h-5 w-5 text-highlight" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Work ================= */}
      <section id="work" className="scroll-mt-20 bg-surface-dim px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brand">Work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Selected work
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-lg border border-line bg-surface-raised p-8 transition-colors hover:border-line-strong"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p className={`eyebrow ${c.tagColor}`}>{c.tag}</p>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight">{c.title}</h3>
                <p className="mt-3 grow leading-relaxed text-text-muted">{c.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {c.points.map((pt) => (
                    <CheckItem key={pt}>{pt}</CheckItem>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Stack ================= */}
      <section id="stack" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brand">Stack</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Platform expertise
          </h2>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
            {stack.map((t) => (
              <div
                key={t.name}
                className="rounded-md border border-line p-5 transition-colors hover:border-line-strong"
              >
                <FontAwesomeIcon icon={t.icon} className="h-5 w-5 text-brand" />
                <h3 className="mt-3 text-sm font-extrabold">{t.name}</h3>
                <p className="mt-1 text-xs text-text-faint">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section id="contact" className="on-dark scroll-mt-20 bg-ink px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-on-ink-muted">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-ink md:text-4xl">
            Have a product in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-on-ink-muted">
            Start with an email.
          </p>
          <a
            href="mailto:team@catalystdatascience.com"
            className="mt-9 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-bold text-white transition-colors hover:bg-accent-strong"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
            team@catalystdatascience.com
          </a>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="border-t border-line px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Catalyst" width={22} height={22} className="rounded-sm" />
            <span className="text-sm font-bold">Catalyst Data Science</span>
          </div>
          <p className="text-sm text-text-faint">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1.5 h-3 w-3" />
            Portland, Maine · {new Date().getFullYear()}
          </p>
          <a
            href="https://github.com/cgrilson7"
            className="text-text-faint transition-colors hover:text-text"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
