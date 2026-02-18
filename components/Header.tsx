import { Bell } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 flex h-[60px] items-center justify-between border-b border-border bg-white px-3 dark:border-[rgba(238,231,255,0.1)] dark:bg-[#1A191B] sm:px-6">
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Logo */}
        <img src="/images/logo.svg" alt="Logo" />
        <div className="font-logo text-lg font-bold leading-none sm:text-2xl">
          <span className="text-foreground dark:text-[#EEEEF0]">Backstage</span>
          <span className="text-primary dark:text-[#E0B669]">Pass</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak Counter */}
        <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 dark:bg-[rgba(235,234,248,0.08)] sm:px-3">
          <img src="/images/fire.svg" alt="" />
          <span className="text-sm font-medium dark:text-white sm:text-base">
            30
          </span>
        </div>

        {/* Notification Bell */}
        <button className="flex h-7 w-7 items-center justify-center rounded-full border border-border dark:border-[rgba(238,231,255,0.36)] sm:h-8 sm:w-8">
          <Bell className="h-4 w-4 dark:text-[#EEEEF0] sm:h-5 sm:w-5" />
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Avatar */}
        <div className="h-7 w-7 overflow-hidden rounded-full bg-primary sm:h-8 sm:w-8">
          <img
            src="/images/avatar.png"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
