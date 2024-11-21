"use client";

import { useMemo, useEffect, useState } from "react";
import Box from '../components/box';
import { Tweet } from 'app/(post)/components/tweet';
import Link from "next/link";
import { Suspense } from "react";
import useSWR from "swr";
import { JetBrains_Mono } from "next/font/google";
import SectionTitle from "./sectionTitle";
const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
});
interface TweetData {
  id: number;
  content: string;
  date: string;
  inverted: boolean;
}

// Add this extension to Date prototype at the top of your file
declare global {
  interface Date {
    toRelativeString(): string;
  }
}

Date.prototype.toRelativeString = function(): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - this.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return this.toLocaleDateString();
};

type SortSetting = ["date" | "views", "desc" | "asc"];

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Posts({ posts: initialPosts }) {
  const [tweets, setTweets] = useState<TweetData[]>([]);

  useEffect(() => {
    // Import the JSON file directly

  }, []);

  return (
    <>
    <Suspense fallback={null}>
      <main className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[40vw] font-jetbrains-bold mb-10 text-4xl text-left md:ml-[40px]">
          {/* <SectionTitle title="Latest Tweets" exponent={5} /> */}

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {tweets.map((tweet) => (
              <Box
                key={tweet.id}
                content={tweet.content}
                date={tweet.date}
                inverted={tweet.inverted}
              />
            ))}
          </div>

        </div>
      </main>
    </Suspense>
    </>
  )
}

function List({ posts, sort, onPostClick, highlightedPostId }) {
  const sortedPosts = useMemo(() => {
    const [sortKey, sortDirection] = sort;
    return [...posts].sort((a, b) => {
      if (sortKey === "date") {
        return sortDirection === "desc"
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return sortDirection === "desc" ? b.views - a.views : a.views - b.views;
      }
    });
  }, [posts, sort]);

  return (
    <ul>
      {sortedPosts.map((post, i: number) => {
        const year = getYear(post.date);
        const firstOfYear =
          !sortedPosts[i - 1] || getYear(sortedPosts[i - 1].date) !== year;
        const lastOfYear =
          !sortedPosts[i + 1] || getYear(sortedPosts[i + 1].date) !== year;

        return (
          <div key={post.id} onMouseEnter={() => onPostClick(post)}>
            <Link href={`/${new Date(post.date).getFullYear()}/${post.id}`}>
              <span
                className={`flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
                ${!firstOfYear ? "border-t-0" : ""}
                ${lastOfYear ? "border-b-0" : ""}
                ${highlightedPostId === post.id ? 'hover:#ff4500' : ""}
              `}
              >
                <span
                  className={`py-3 flex grow items-center ${
                    !firstOfYear ? "ml-14" : ""
                  }`}
                >
                  {firstOfYear && (
                    <span className="w-14 inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">
                      {year}
                    </span>
                  )}

                  <div className="grow text-right">
                    <span className="text-gray-500 dark:text-gray-500 text-xs block">
                      [{post.viewsFormatted}]
                    </span>
                    <span className={`dark:text-orangered block ${jetBrainsMono.className} font-bold `}>{post.title}</span>
                  </div>
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </ul>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}