import { Pin } from "lucide-react";
import { PostCard, Post } from "./PostCard";

interface PostFeedProps {
  posts: Post[];
}

export function PostFeed({ posts }: PostFeedProps): JSX.Element {
  const yourSubmission = posts.filter((post) => post.isYourSubmission);
  const pinnedPost = posts.filter((post) => post.isPinned);
  const regularPosts = posts.filter(
    (post) => !post.isPinned && !post.isYourSubmission,
  );

  return (
    <main className="flex-1 px-3 pt-6 sm:px-6">
      <div className="mx-auto max-w-[640px] space-y-6 pb-6">
        {/* Your Submission */}
        {yourSubmission.map((post) => (
          <div
            key={post.id}
            className="relative space-y-3 overflow-hidden rounded-3xl bg-[#E6F6EB] pt-3 dark:bg-[#132D21]"
          >
            <div className="relative z-10 px-6 text-center">
              {/* Background image with sparks */}
              <img
                src="/images/BG.png"
                alt=""
                className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-top"
              />
              <p className="text-sm font-semibold text-[#4CC38A]">
                Your Submission
              </p>
            </div>
            <div className="relative z-10">
              <PostCard post={post} />
            </div>
          </div>
        ))}

        {/* Others Section */}
        <div className="space-y-4 rounded-3xl border border-border bg-white p-4 dark:border-[#2B292D] dark:bg-[#1A191B]">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold leading-7 dark:text-white">
                See what others
              </h2>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border border-muted bg-accent dark:border-[#232225]"
                  ></div>
                ))}
              </div>
              <h2 className="text-xl font-semibold leading-7 dark:text-white">
                shared
              </h2>
            </div>
            <p className="text-sm dark:text-[rgba(245,241,255,0.72)]">
              <span className="font-bold dark:text-white">85+</span>{" "}
              participants already completed
            </p>
          </div>

          {/* Pinned Post */}
          {pinnedPost.map((post) => (
            <div key={post.id} className="space-y-3">
              <div className="flex items-center gap-2 text-xs dark:text-[rgba(245,241,255,0.72)]">
                <Pin className="h-3 w-3 fill-foreground dark:fill-[#EEEEF0]" />
                <span>This is a pinned post</span>
              </div>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Regular Posts */}
        {regularPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
