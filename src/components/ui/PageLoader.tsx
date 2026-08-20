/** Full-page spinner shown during lazy-loaded route transitions. */
export default function PageLoader() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-violet-600" />
        </div>
        <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
          Loading...
        </p>
      </div>
    </div>
  );
}
