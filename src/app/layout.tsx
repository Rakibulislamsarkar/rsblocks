import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSBlocks",
  description: "Free SaaS website blocks based on React with shadcn & Tailwind",
  keywords:
    "tailwindcss, react, shadcn, design, webdesign, website, saas templates, saas website templates",
  authors: [{ name: "Rakibul Islam Sarkar", url: "/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="RSBlocks - Free SaaS website blocks"
        />
        <meta
          property="og:description"
          content="Beautifully designed. Copy and paste into your apps. Open Source."
        />
        <meta
          property="og:image"
          content="https://github.com/Rakibulislamsarkar/rsblocks/blob/main/public/hero4.png?raw=true"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <div data-wrapper="" className="border-grid flex flex-1 flex-col px-4 ">
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
