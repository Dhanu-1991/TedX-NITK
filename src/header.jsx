// src/components/Header.jsx
import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

export default function Header({ onMenuToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "HOME",
    "ABOUT",
    "SALON",
    "THEME",
    "PAST EDITIONS",
    "TALK ARCHIVES",
    "TEAM",
    "PARTNERS",
    "CONTACT",
    "GAME",
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${
          scrolled ? "py-2 shadow-md" : "py-4"
        } bg-neutral-50 dark:bg-neutral-900`}
        style={{ WebkitBackfaceVisibility: "hidden" }}
      >
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-red-600 tracking-tight">
                TEDx
              </span>
              <span className="text-base font-semibold text-neutral-900 dark:text-white">
                NITK Surathkal
              </span>
              <span className="text-[10px] text-neutral-600 dark:text-neutral-400">
                x = independently organized TED event
              </span>
            </div>
          </div>

          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-500"
              >
                {n}
              </a>
            ))}
          </nav>

          
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              onClick={() => {
                setMobileOpen((s) => !s);
                if (onMenuToggle) onMenuToggle();
              }}
              className="p-2 rounded border border-neutral-300 dark:border-neutral-700"
            >
              <HiMenu className="w-6 h-6 text-neutral-900 dark:text-white" />
            </button>
          </div>
        </div>
      </header>

      
      <div
        className={`md:hidden fixed top-[calc(4rem+1px)] left-0 right-0 z-50 transition-transform duration-200 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        } bg-neutral-50 dark:bg-neutral-900`}
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-base font-medium text-neutral-800 dark:text-neutral-200"
              onClick={() => setMobileOpen(false)}
            >
              {n}
            </a>
          ))}
        </div>
      </div>

      
      <div className={`h-16 md:h-20`} />
    </>
  );
}
