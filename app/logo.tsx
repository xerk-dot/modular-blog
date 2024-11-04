"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '800'],
  subsets: ['latin'],
});

export function Logo() {
  const pathname = usePathname();
  return (
    <span className={`text-4xl dark:text-orangered block ${jetBrainsMono.className} font-bold`}>
  {pathname === "/" ? (
        <span className="cursor-default pr-2">xerkdot</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-[background-color]"
        >
          xerkdot
        </Link>
      )}
    </span>
  );
}
