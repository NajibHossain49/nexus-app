import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/dashboard", label: "Dashboard" },
];

/** Shared nav link class — active state highlighted, focus-visible ring for keyboard nav. */
const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 ${
    isActive
      ? "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
  }`;

/** App shell: sticky header, responsive mobile nav, dark mode toggle, footer. */
export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="rounded-lg text-xl font-bold tracking-tight text-violet-600 outline-none transition-colors hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:text-violet-400 dark:hover:text-violet-300"
            onClick={closeMenu}
          >
            ReactApp
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side: Dark Mode toggle + Hamburger */}
          <div className="flex items-center gap-2">
            <DarkModeToggle />

            {/* Hamburger — only visible on mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-violet-500/50 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden cursor-pointer outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile overlay backdrop */}
        {menuOpen && (
          <div className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={closeMenu} />
        )}

        {/* Mobile slide-in nav */}
        <div
          className={`fixed top-16 right-0 z-50 w-72 border-l border-slate-200 bg-white transition-transform duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={closeMenu} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content — rendered by child routes */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        &copy; {new Date().getFullYear()} ReactApp. All rights reserved.
      </footer>
    </div>
  );
}
