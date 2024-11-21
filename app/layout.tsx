import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";
import { HeaderBar } from "./headerbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "starsof landing page",
  description:
    "landing page for starsof ar, an app to augment intimacy",
  openGraph: {
    title: "starsof landing page",
    description:
      "landing page for starsof ar, an app to augment intimacy",
    url: "",
    siteName: "xer's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xerkdot",
    creator: "@xerkdot",
  },
  metadataBase: new URL("https://xerkdot.blog"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {/* <HeaderBar /> */}
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
