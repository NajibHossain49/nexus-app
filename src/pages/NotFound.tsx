import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/** 404 page shown for unmatched routes. */
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | nexus-app</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-8xl font-bold tracking-tighter text-violet-600 dark:text-violet-400 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-slate-500 dark:text-slate-400">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:bg-violet-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-violet-600 px-8 py-3.5 text-lg font-semibold text-violet-600 transition-all duration-200 hover:bg-violet-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-950"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </>
  );
}
