import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

/**
 * Demo-only auth gate. Protects child routes behind a password check.
 * Password is stored in env for non-demo use; defaults to "admin" for this demo.
 * NOTE: This is client-side only — not suitable for production auth.
 */
const DEMO_PASSWORD = import.meta.env.VITE_AUTH_PASSWORD || "admin";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Logged in successfully!");
      // Reload to rehydrate auth state across the app
      window.location.reload();
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully!");
    window.location.reload();
  }

  if (!isLoggedIn) {
    return (
      <div className="flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-sm text-center">
          <svg className="mx-auto mb-4 h-12 w-12 text-violet-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Access Protected</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            This page requires authentication.
          </p>

          <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4 text-left">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-200">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:bg-violet-700 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 cursor-pointer"
            >
              Login
            </button>
          </form>

          <button
            onClick={() => navigate("/")}
            className="mt-4 text-sm font-medium text-violet-600 transition-colors hover:text-violet-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:text-violet-400 dark:hover:text-violet-300 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-slate-200 bg-violet-50 px-6 py-2.5 text-sm text-slate-900 dark:border-slate-800 dark:bg-violet-950/50 dark:text-slate-200">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          You are logged in
        </span>
        <button
          onClick={handleLogout}
          className="rounded-lg px-3 py-1 text-sm font-medium text-violet-600 transition-colors hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:text-violet-400 dark:hover:bg-violet-900/50 cursor-pointer"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
}
