import { Lock } from "lucide-react";

export interface DayItem {
  day: number;
  completed: boolean;
  locked: boolean;
}

interface DaysSidebarProps {
  days: DayItem[];
  currentDay?: number;
}

export function DaysSidebar({
  days,
  currentDay = 1,
}: DaysSidebarProps): JSX.Element {
  return (
    <aside className="sticky top-[114px] hidden h-[calc(100vh-114px)] w-[280px] overflow-hidden bg-[#F2F0F5] p-3 dark:bg-[rgba(235,234,248,0.08)] lg:block">
      <nav className="flex flex-col pt-[48px] gap-1">
        {days.map((item) => (
          <div
            key={item.day}
            className={`relative flex items-center justify-between rounded-full px-4 py-3 transition-colors ${
              item.day === currentDay
                ? "bg-[#faf8fb] font-medium text-gray-900 dark:bg-[#050505] dark:text-white"
                : "font-normal text-gray-600 hover:bg-white/50 dark:text-[rgba(245,241,255,0.72)]"
            }`}
          >
            {item.day === currentDay && (
              <>
                {/* Light theme top curve */}
                <svg
                  className="connector-svg absolute right-[-12px] top-[-26px] block dark:hidden"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="bg-top-light"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#faf8fb" />
                      <stop offset="100%" stopColor="#faf8fb" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="30" fill="transparent" />
                  <path
                    d="M245,30 Q300,30 300,0 L300,30 Z"
                    fill="url(#bg-top-light)"
                  />
                </svg>

                {/* Dark theme top curve */}
                <svg
                  className="connector-svg absolute right-[-12px] top-[-26px] hidden dark:block"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="bg-top-dark"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#050505" />
                      <stop offset="100%" stopColor="#050505" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="30" fill="transparent" />
                  <path
                    d="M245,30 Q300,30 300,0 L300,30 Z"
                    fill="url(#bg-top-dark)"
                  />
                </svg>

                <div className="absolute right-[-20px] bottom-0 top-0 h-full w-[40px] bg-[#faf8fb] dark:bg-[#050505]"></div>

                {/* Light theme bottom curve */}
                <svg
                  className="connector-svg absolute right-[-12px] bottom-[-26px] block dark:hidden"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="bg-bottom-light"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#faf8fb" />
                      <stop offset="100%" stopColor="#faf8fb" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="30" fill="transparent" />
                  <path
                    d="M245,0 Q300,0 300,30 L300,0 Z"
                    fill="url(#bg-bottom-light)"
                  />
                </svg>

                {/* Dark theme bottom curve */}
                <svg
                  className="connector-svg absolute right-[-12px] bottom-[-26px] hidden dark:block"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="bg-bottom-dark"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#050505" />
                      <stop offset="100%" stopColor="#050505" />
                    </linearGradient>
                  </defs>
                  <rect width="300" height="30" fill="transparent" />
                  <path
                    d="M245,0 Q300,0 300,30 L300,0 Z"
                    fill="url(#bg-bottom-dark)"
                  />
                </svg>
              </>
            )}
            <span>Day - {item.day}</span>
            {item.day === currentDay ? (
              <div className="flex h-5 w-5 mr-2 items-center justify-center rounded-full bg-emerald-500 dark:bg-[#30A46C]">
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            ) : item.locked ? (
              <Lock className="h-4 w-4 text-gray-500 dark:text-[rgba(245,241,255,0.72)]" />
            ) : null}
          </div>
        ))}
      </nav>
    </aside>
  );
}
