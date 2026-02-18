import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle(): JSX.Element {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-transparent transition-colors hover:bg-muted sm:h-8 sm:w-8"
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-foreground sm:h-5 sm:w-5" />
      ) : (
        <Moon className="h-4 w-4 text-foreground sm:h-5 sm:w-5" />
      )}
    </button>
  );
}
