import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration handling - Avoid initial rendering issues in SSR environment
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Display empty button before hydration to prevent layout shift
    return (
      <Button className="h-9 w-9 p-0" disabled size="sm" variant="ghost">
        <div className="h-4 w-4" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="h-9 w-9 p-0 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={toggleTheme}
      size="sm"
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      variant="ghost"
    >
      <div className="relative">
        <Sun
          className={`h-4 w-4 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </Button>
  );
}
