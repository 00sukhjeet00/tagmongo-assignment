import { MoreHorizontal, Play, Smile, MessageCircle } from "lucide-react";

export interface Post {
  id: number;
  author: string;
  avatar?: string;
  initials?: string;
  time: string;
  content: string;
  image?: string;
  reactions: string;
  comments: string;
  isYourSubmission?: boolean;
  isPinned?: boolean;
  postedIn?: string;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps): JSX.Element {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white dark:border-[#2B292D] dark:bg-[#1A191B]">
      {/* Profile Header */}
      <div className="flex items-start gap-2 overflow-hidden p-3">
        {/* Avatar */}
        {post.avatar ? (
          <div
            className="h-12 w-12 flex-shrink-0 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${post.avatar})` }}
          ></div>
        ) : (
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-medium text-white">
            {post.initials || "A"}
          </div>
        )}

        {/* Name & Time */}
        <div className="flex flex-1 flex-col justify-center gap-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-base font-semibold dark:text-white">
              {post.author}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground dark:text-[rgba(245,241,255,0.72)]">
            <span>{post.time}</span>
            {post.postedIn && (
              <>
                <span className="text-xs">•</span>
                <span>Posted in </span>
                <span className="font-semibold">{post.postedIn}</span>
              </>
            )}
          </div>
        </div>

        {/* More Button */}
        <button className="flex h-6 w-6 items-center justify-center rounded-full dark:text-[#EEEEF0]">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-2.5 px-6 pb-6">
        <p className="text-sm leading-5 dark:text-white">{post.content}</p>

        {/* Challenge Tasks - Only for pinned post */}
        {post.isPinned && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-[18px] w-[18px] flex-shrink-0 rounded bg-muted dark:bg-[#2B292D]"></div>
              <p className="text-sm dark:text-white">
                Minimum 20 minutes of sit-up
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[18px] w-[18px] flex-shrink-0 rounded bg-muted dark:bg-[#2B292D]"></div>
              <p className="text-sm dark:text-white">Mention Intensity</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[18px] w-[18px] flex-shrink-0 rounded bg-muted dark:bg-[#2B292D]"></div>
              <p className="text-sm dark:text-white">Upload Media (Optional)</p>
            </div>
          </div>
        )}
      </div>

      {/* Image */}
      {post.image && (
        <div className="relative h-[307px] w-full">
          <img src={post.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/10 backdrop-blur-lg">
              <Play className="h-5 w-5 fill-white text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Activity Bar */}
      <div className="flex items-start justify-between overflow-hidden px-6 py-3">
        <div className="flex items-center gap-1">
          {/* Reactions */}
          <div className="flex h-8 items-center gap-1 overflow-hidden rounded-full bg-muted px-3 py-0.5 dark:bg-[rgba(235,234,248,0.08)]">
            <span className="text-base leading-6">🙏</span>
            <span className="text-base leading-6">😍</span>
            <span className="text-sm font-medium leading-5 dark:text-white">
              {post.reactions}
            </span>
          </div>

          {/* Emoji Button */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted p-2 dark:border-[rgba(238,229,248,0.11)] dark:bg-[rgba(235,234,248,0.08)]">
            <Smile className="h-5 w-5 dark:text-[#EEEEF0]" />
          </button>

          {/* Comment Button */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted p-2 dark:border-[rgba(238,229,248,0.11)] dark:bg-[rgba(235,234,248,0.08)]">
            <MessageCircle className="h-5 w-5 dark:text-[#EEEEF0]" />
          </button>
        </div>

        {/* Comment Count */}
        <div className="flex items-center gap-1 rounded-full p-1">
          <span className="text-sm dark:text-white">
            {post.comments} Comments
          </span>
        </div>
      </div>
    </div>
  );
}
