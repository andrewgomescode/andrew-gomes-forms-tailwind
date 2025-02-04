"use client";
import { Sun } from "lucide-react";
import { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="rounded bg-gray-300 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      onClick={toggleMode}
    >
      <Sun />
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
