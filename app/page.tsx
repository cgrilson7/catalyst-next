import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Catalyst"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight">Catalyst</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#expertise" className="hover:text-black transition-colors">Expertise</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#contact" className="gradient-bg text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Data that works{" "}
              <span className="gradient-text">for you.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              With Catalyst, you're not just managing data – you're harnessing its power.
              We help eCommerce businesses transform raw data into actionable insights
              that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="gradient-bg text-white text-center font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="border border-gray-200 text-center font-medium px-8 py-4 rounded-full hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            End-to-end data solutions for eCommerce businesses ready to scale.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Revenue reporting, demand forecasting, and real-time dashboards that give
                stakeholders clear visibility into business performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Modeling</h3>
              <p className="text-gray-600">
                Customer churn prediction, acquisition modeling, and lifetime value
                optimization to drive smarter marketing decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Infrastructure</h3>
              <p className="text-gray-600">
                Modern cloud data architecture with Microsoft Fabric, Snowflake, and
                Azure. Lakehouse design and ETL pipelines that scale with your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Analytics</h3>
              <p className="text-gray-600">
                Deep understanding of customer behavior to power targeted campaigns
                and reduce acquisition costs while growing lifetime value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
              <p className="text-gray-600">
                End-to-end application development with React, React Native, Next.js,
                and cloud backends. From concept to App Store.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Subscription & Retention</h3>
              <p className="text-gray-600">
                Cohort analysis, LTV modeling, and retention metrics for
                subscription businesses. Understand what keeps customers coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Platform Expertise</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Certified specialists in the tools that power modern data operations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Microsoft Fabric", desc: "Lakehouse & ETL" },
              { name: "Snowflake", desc: "Certified Partner" },
              { name: "Google Cloud", desc: "GCP Specialists" },
              { name: "R / Shiny", desc: "Statistical Computing" },
              { name: "Python / PySpark", desc: "Data Engineering" },
              { name: "React / Next.js", desc: "Full-Stack Apps" },
              { name: "Supabase", desc: "Backend & Realtime" },
              { name: "Azure", desc: "Cloud Infrastructure" },
            ].map((tech) => (
              <div key={tech.name} className="p-6 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Proven Results</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">25%</div>
              <p className="text-gray-600">Year-over-year growth driven by data-informed decisions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">30%+</div>
              <p className="text-gray-600">Increase in customer lifetime value through predictive modeling</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">15%</div>
              <p className="text-gray-600">Reduction in customer acquisition costs year-over-year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Select Work</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            A sample of the challenges we've helped solve.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-colors">
              <div className="text-sm font-medium text-purple-600 mb-3">Enterprise Healthcare</div>
              <h3 className="text-xl font-semibold mb-4">Consumer Platform Analytics</h3>
              <p className="text-gray-600 mb-6">
                Led data science for a consumer-facing prescription management platform.
                Built customer behavior models, demand forecasting systems, and
                cross-functional analytics during a major platform migration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Churn prediction models
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Legacy system data alignment
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Snowflake optimization
                </li>
              </ul>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-colors">
              <div className="text-sm font-medium mb-3" style={{ color: '#10B981' }}>DTC eCommerce</div>
              <h3 className="text-xl font-semibold mb-4">Subscription Analytics Platform</h3>
              <p className="text-gray-600 mb-6">
                Built end-to-end analytics infrastructure for a subscription-based
                DTC brand. Microsoft Fabric lakehouse, PySpark ETL pipelines, and
                real-time Shiny dashboards for executive decision-making.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  LTV & cohort analysis
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multi-channel attribution
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time sales dashboards
                </li>
              </ul>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-colors">
              <div className="text-sm font-medium text-coral mb-3" style={{ color: '#F97316' }}>Consumer Startup (Stealth)</div>
              <h3 className="text-xl font-semibold mb-4">Full-Stack Social Application</h3>
              <p className="text-gray-600 mb-6">
                Architected and built a social productivity app from zero to App Store.
                React Native mobile apps, Next.js web platform, Supabase backend with
                real-time subscriptions, push notifications, and AI-powered features.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  iOS & Android apps (live)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Real-time data architecture
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI integration (OpenAI, Gemini)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Colin</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Colin G. Wilson is the founder of Catalyst Data Science, bringing years
                of experience leading data science teams at scale. Based in Portland, Maine,
                he's worked across healthcare, eCommerce, and consumer tech – from
                enterprise platforms to subscription-based DTC brands and early-stage
                startups shipping their first products.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                His approach combines deep technical expertise in cloud data infrastructure
                with a practical focus on business outcomes. Whether it's building LTV models
                for subscription businesses, architecting lakehouse pipelines in Microsoft
                Fabric, or shipping interactive dashboards in R Shiny, the goal is always
                the same: turn data into decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
                  Snowflake Certified
                </span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
                  Microsoft Fabric
                </span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
                  Portland, ME
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 via-orange-50 to-yellow-50 rounded-2xl flex items-center justify-center">
                <div className="text-8xl font-bold gradient-text">CW</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Talk Data</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Whether you need help with analytics, infrastructure, or building
            something new – let's start a conversation.
          </p>
          <a
            href="mailto:colin@catalystdatascience.com"
            className="inline-block gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            colin@catalystdatascience.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Catalyst"
              width={24}
              height={24}
              className="rounded"
            />
            <span className="font-semibold">Catalyst Data Science</span>
          </div>
          <p className="text-sm text-gray-500">
            Portland, Maine · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
