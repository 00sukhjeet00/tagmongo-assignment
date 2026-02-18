import { ChevronLeft, Info } from "lucide-react";

interface SubHeaderProps {
  currentDay?: number;
  totalDays?: number;
  challengeTitle?: string;
}

export function SubHeader({
  currentDay = 1,
  totalDays = 9,
  challengeTitle = "9-Day Fitness Challenge",
}: SubHeaderProps): JSX.Element {
  return (
    <div className="sticky top-[60px] z-40 flex h-14 items-center justify-between border-b border-border bg-card/80 px-3 backdrop-blur-sm dark:border-[#232225] dark:bg-[rgba(29,29,33,0.7)] sm:px-6">
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="flex items-center gap-1 overflow-hidden dark:text-[#EEEEF0] sm:gap-2">
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-sm font-semibold sm:text-base">Back</span>
        </button>
        <div className="h-12 w-px bg-border dark:bg-[rgba(241,230,253,0.19)]"></div>
        <h1 className="text-base font-semibold dark:text-white sm:text-lg">
          Day {currentDay} of {totalDays}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="hidden text-base font-semibold dark:text-white sm:inline">
          {challengeTitle}
        </span>
        <span className="text-sm font-semibold dark:text-white sm:hidden">
          Challenge
        </span>
        <Info className="h-5 w-5 dark:text-[#EEEEF0] sm:h-6 sm:w-6" />
      </div>
    </div>
  );
}
