import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

const features = [
  {
    icon: (
      <svg className="h-7 w-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Blazing Fast",
    description: "Built on Vite with instant HMR. Your development experience is smooth and productive.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Fully Customizable",
    description: "Theme-aware with Tailwind CSS. Dark mode, colors, spacing — everything is configurable.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Type Safe",
    description: "Written in TypeScript with strict typing. Catch errors at compile time, not runtime.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25z" />
      </svg>
    ),
    title: "Developer Friendly",
    description: "Clean component architecture with reusable patterns. Scale with confidence.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Responsive Layout",
    description: "Mobile-first design that looks stunning on any screen size, from phones to ultrawides.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-violet-600 dark:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Secure by Default",
    description: "Protected routes, auth patterns, and security best practices built right in.",
  },
];

/** Home page: hero section, features grid, and CTA banner. */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>nexus-app - Build Beautiful Web Apps</title>
        <meta name="description" content="A modern React starter with responsive layout, dark mode, protected routes, and reusable components." />
      </Helmet>

      <div className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 blur-3xl dark:from-violet-600/10 dark:to-fuchsia-600/10" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-800 dark:bg-violet-950 dark:text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
              Built with React + Vite + Tailwind
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
              Build{" "}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Beautiful
              </span>{" "}
              Web Apps
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">
              A modern React starter with responsive layout, dark mode, protected routes,
              and reusable components. Ship faster with confidence.
            </p>

            {/* CTA buttons — use styled links to avoid <a> nesting <button> */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:bg-violet-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
              >
                Get Started
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-violet-600 px-8 py-3.5 text-lg font-semibold text-violet-600 transition-all duration-200 hover:bg-violet-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-950 dark:focus-visible:ring-offset-slate-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              title="Everything You Need"
              subtitle="A complete toolkit for building modern, production-ready React applications with best practices baked in."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-900/50">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 text-center shadow-2xl shadow-violet-500/25 sm:p-16">
              <div className="absolute inset-0 -z-10">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-4xl">
                Ready to Start Building?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-violet-100">
                Jump into the Dashboard and see everything in action. Your next project starts here.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-violet-700 shadow-lg transition-all duration-200 hover:bg-violet-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-600"
                >
                  Open Dashboard
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Button variant="ghost" size="lg" className="!text-white hover:!bg-white/20 focus-visible:ring-white/50">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
