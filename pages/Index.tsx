import { Header } from "@/components/Header";
import { SubHeader } from "@/components/SubHeader";
import { DaysSidebar } from "@/components/DaysSidebar";
import { PostFeed } from "@/components/PostFeed";
import type { DayItem } from "@/components/DaysSidebar";
import type { Post } from "@/components/PostCard";

export default function Index() {
  // Mock data
  const days: DayItem[] = [
    { day: 1, completed: true, locked: false },
    { day: 2, completed: false, locked: true },
    { day: 3, completed: false, locked: true },
    { day: 4, completed: false, locked: true },
    { day: 5, completed: false, locked: true },
    { day: 6, completed: false, locked: true },
    { day: 7, completed: false, locked: true },
    { day: 8, completed: false, locked: true },
    { day: 9, completed: false, locked: true },
  ];

  const posts: Post[] = [
    {
      id: 1,
      author: "Ashraf Idrishi",
      avatar: "/images/workout.png",
      time: "1s",
      content: "Today's challenge workout completed—feeling stronger already",
      image: "/images/workout.png",
      reactions: "18",
      comments: "10",
      isYourSubmission: true,
    },
    {
      id: 2,
      author: "Russell Brunson",
      avatar: "/images/workout.png",
      time: "3 hrs ago",
      content:
        "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
      isPinned: true,
      reactions: "18",
      comments: "10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SubHeader currentDay={1} totalDays={9} />

      {/* Main Content */}
      <div className="flex">
        <DaysSidebar days={days} currentDay={1} />
        <PostFeed posts={posts} />
      </div>
    </div>
  );
}
