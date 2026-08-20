import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Card with border, rounded corners, and hover lift animation. */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-violet-500/10 ${className}`}
    >
      {children}
    </div>
  );
}
