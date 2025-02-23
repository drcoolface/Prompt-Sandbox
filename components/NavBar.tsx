"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="w-full bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center h-12 md:h-16">
          <div className="w-20" />

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold">
            {path.startsWith("/sandbox") && path === "/sandbox"
              ? "Sandbox"
              : path
                  .substring(path.lastIndexOf("/") + 1)
                  .charAt(0)
                  .toUpperCase() +
                path.substring(path.lastIndexOf("/") + 1).slice(1)}
          </h1>

          <div className="ml-auto">
            <button
              onClick={toggleDarkMode}
              className={`relative w-20 h-10 rounded-full transition-colors duration-300 ${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <div
                className={`absolute top-1 left-1 w-8 h-8 rounded-full transform transition-transform duration-300 flex items-center justify-center ${
                  darkMode ? "translate-x-10 bg-gray-800" : "bg-white"
                }`}
              >
                <span className="text-lg">{darkMode ? "🌙" : "☀️"}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
