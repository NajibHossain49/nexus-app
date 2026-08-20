import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";

/** About page: mission/stack cards with a CTA link to Contact. */
export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | nexus-app</title>
        <meta name="description" content="Learn about nexus-app - a modern React starter with Tailwind CSS, dark mode, and reusable components." />
      </Helmet>

      <div className="flex-1 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="About nexus-app"
            subtitle="We build modern web applications using cutting-edge technologies."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Create beautiful, performant web experiences that delight users and empower developers.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Our Stack</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                React, TypeScript, Vite, and Tailwind CSS — the modern toolkit for building at scale.
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-violet-600 px-8 py-3.5 text-lg font-semibold text-violet-600 transition-all duration-200 hover:bg-violet-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-950"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
