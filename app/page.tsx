import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faBrain,
  faDatabase,
  faChartLine,
  faCheck,
  faBolt,
  faServer,
  faSnowflake,
  faLocationDot,
  faPaperPlane,
  faArrowRight,
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
    body: "Web, iOS, and Android applications built end to end — Next.js, React Native, and Supabase from concept to App Store, including review, release, and the unglamorous parts.",
  },
  {
    icon: faBrain,
    title: "Intelligent Features",
    body: "What separates a product from a CRUD app: demand forecasting, recommendations, churn and LTV models, LLM integration, and real-time personalization.",
  },
  {
    icon: faDatabase,
    title: "Data Infrastructure",
    body: "The pipes underneath. Snowflake, Microsoft Fabric, GCP, and Supabase — PySpark ETL and lakehouse architecture that survives contact with growth.",
  },
  {
    icon: faChartLine,
    title: "Analytics & Reporting",
    body: "Dashboards and decision support for the humans running the business. R/Shiny, embedded analytics, cohort and attribution reporting for executives.",
  },
];

const caseStudies = [
  {
    tag: "Consumer Startup",
    tagColor: "text-accent",
    title: "Full-Stack Social Application",
    body: "Architected and built a social productivity app from zero to App Store. React Native mobile apps, Next.js web platform, Supabase backend with realtime subscriptions, push notifications, and AI-powered features.",
    points: [
      "iOS & Android apps, live",
      "Realtime data architecture",
      "LLM integration in production",
    ],
  },
  {
    tag: "Regulated Commerce",
    tagColor: "text-brand",
    title: "Prescription Platform Analytics",
    body: "Led data science for a consumer prescription management platform in animal health — the models and infrastructure behind a product veterinary clinics and pet owners used directly, through a major platform migration.",
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
    body: "End-to-end analytics infrastructure for a subscription DTC brand. Microsoft Fabric lakehouse, PySpark ETL pipelines, and realtime Shiny dashboards for executive decision-making.",
    points: [
      "LTV & cohort analysis",
      "Multi-channel attribution",
      "Realtime sales dashboards",
    ],
  },
];

const stack = [
  { icon: faReact, name: "React · Next.js", desc: "Web applications" },
  { icon: faApple, name: "React Native · iOS", desc: "App Store, native modules" },
  { icon: faAndroid, name: "Android", desc: "Play Store releases" },
  { icon: faServer, name: "Supabase", desc: "Backend & realtime" },
  { icon: faSnowflake, name: "Snowflake", desc: "Warehousing & optimization" },
  { icon: faMicrosoft, name: "Microsoft Fabric · Azure", desc: "Lakehouse & ETL" },
  { icon: faGoogle, name: "Google Cloud", desc: "Data & ML services" },
  { icon: faPython, name: "Python · PySpark", desc: "Data engineering" },
  { icon: faRProject, name: "R · Shiny", desc: "Statistical computing" },
  { icon: faBolt, name: "LLM APIs", desc: "OpenAI, Gemini, Claude" },
];

const proof = [
  { icon: faMobileScreenButton, text: "iOS & Android apps live in the App Store" },
  { icon: faBolt, text: "Realtime backends running in production" },
  { icon: faBrain, text: "ML models shipping inside products" },
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
            <a href="#about" className="hidden transition-colors hover:text-on-ink md:inline">About</a>
            <a
              href="#contact"
              className="rounded-pill bg-accent px-5 py-2 font-bold text-white transition-colors hover:bg-accent-strong"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </nav>

      {/* ================= Hero ================= */}
      <header id="top" className="on-dark relative overflow-hidden bg-ink">
        {/* faint chart gridlines — the hero is a reading */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {[20, 40, 60, 80].map((y) => (
            <div
              key={y}
              className="absolute left-0 right-0 border-t border-line-on-ink/40"
              style={{ top: `${y}%` }}
            />
          ))}
        </div>

        {/* the signal — brand gradient as data ink */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 1200 640"
          preserveAspectRatio="none"
          fill="none"
          style={{
            // fade the line out toward the bottom so it never runs through
            // the proof strip — the signal reads as emerging, not clipped
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

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-40 md:pb-24 md:pt-48">
          <p className="eyebrow mb-6 text-on-ink-muted">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 h-3 w-3 text-accent" />
            Portland, Maine — product &amp; data studio
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-on-ink md:text-7xl">
            Data-driven products, shipped.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-ink-muted md:text-xl">
            Catalyst builds web, iOS, and Android applications with the intelligence
            built in — forecasting, personalization, and machine learning designed
            into the product from the first commit, not bolted on afterward.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-pill bg-accent px-8 py-4 text-center font-bold text-white transition-colors hover:bg-accent-strong"
            >
              Start a conversation
            </a>
            <a
              href="#work"
              className="rounded-pill border border-line-on-ink px-8 py-4 text-center font-bold text-on-ink transition-colors hover:bg-ink-raised"
            >
              See the work
            </a>
          </div>

          {/* proof strip — true statements, not vanity stats */}
          <ul className="mt-16 flex flex-col gap-4 border-t border-line-on-ink pt-8 sm:flex-row sm:gap-10">
            {proof.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-sm font-semibold text-on-ink-muted">
                <FontAwesomeIcon icon={p.icon} className="h-4 w-4 text-highlight" />
                {p.text}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ================= Services ================= */}
      <section id="services" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brand">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            One studio, both layers.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            App studios and data consultancies rarely live under one roof — almost
            never in one person. Catalyst carries a product from data model to App
            Store, so the seam between &ldquo;the app&rdquo; and &ldquo;the data&rdquo;
            never exists.
          </p>

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
          <p className="eyebrow text-brand">Select work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Proof, in production.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
            A sample of what Catalyst has built and the problems behind it.
          </p>

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
            Tools chosen for production, not novelty.
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

      {/* ================= About ================= */}
      <section id="about" className="scroll-mt-20 bg-surface-dim px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow text-brand">About</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Catalyst is Colin Wilson.
            </h2>
            <div className="signal-underline mt-6 w-16" />
            <p className="mt-6 leading-relaxed text-text-muted">
              A Portland, Maine practice building intelligent applications. Colin has
              led data science teams at scale across regulated commerce, DTC
              subscription brands, and early-stage consumer products — the
              through-line is building things people actually use: prescription
              platforms, subscription analytics, social apps on the App Store.
            </p>
            <p className="mt-5 leading-relaxed text-text-muted">
              Working with Catalyst means working with the principal. No account
              manager, no handoff between the team that models your data and the
              team that ships your app — because they&rsquo;re the same person.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Data science leadership", "Full-stack delivery", "Portland, ME"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-pill border border-line bg-surface px-4 py-2 text-sm font-semibold text-text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="flex aspect-square items-center justify-center rounded-lg bg-ink">
              <span className="text-7xl font-extrabold text-on-ink">
                C<span className="text-accent">W</span>
              </span>
            </div>
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
            Whether you&rsquo;re building something new or making an existing product
            smarter — start with an email. You&rsquo;ll get a reply from the person
            who&rsquo;d do the work.
          </p>
          <a
            href="mailto:colin@catalystdatascience.com"
            className="mt-9 inline-flex items-center gap-3 rounded-pill bg-accent px-8 py-4 font-bold text-white transition-colors hover:bg-accent-strong"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
            colin@catalystdatascience.com
          </a>
          <p className="mt-6 text-sm text-on-ink-muted">
            Prefer specifics first?{" "}
            <a href="#work" className="font-semibold text-on-ink underline decoration-accent underline-offset-4">
              See the work
              <FontAwesomeIcon icon={faArrowRight} className="ml-1.5 h-3 w-3" />
            </a>
          </p>
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
