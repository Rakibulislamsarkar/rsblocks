"use client";

import { Footer1 } from "@/blocks/footer/footer1";
import { CopyCodeButton } from "@/components/copy-code-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Block() {
  const code = `import Link from "next/link"

const navigationItems = [
  {
    title: "Product",
    items: [
      { title: "Reports", href: "/reports" },
      { title: "Statistics", href: "/statistics" },
      { title: "Dashboards", href: "/dashboards" },
      { title: "Recordings", href: "/recordings" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About us", href: "/about" },
      { title: "Fundraising", href: "/fundraising" },
      { title: "Investors", href: "/investors" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
]

export function Footer1() {
  return (
    <footer className="w-full py-20 bg-foreground text-background">
      <div className="container px-6 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <span className="text-3xl font-bold tracking-tighter">RSBlocks™</span>
              </Link>
              <p className="text-lg text-muted-foreground">
                Managing a small business today is already tough.
              </p>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <address className="not-italic text-base">
                <p className="leading-relaxed">1 Tailwind Way</p>
                <p className="leading-relaxed">Menlo Park</p>
                <p className="leading-relaxed">CA 94025</p>
              </address>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {navigationItems.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xl font-medium">{section.title}</h3>
                <nav className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 pt-8 border-t">
          <p className="text-center text-base text-muted-foreground">
            © {new Date().getFullYear()} RSBlocks™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}`;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="mt-20 w-full">
        <div className="container items-center text-secondary-foreground text-sm text-center py-4 flex flex-row justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Blocks</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/#footers">Footers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Footer1</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex bg-background justify-center items-center relative flex-1">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
          <CopyCodeButton code={code} />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Terminal className="w-4 h-4" />
                Show code
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[800px]">
            <SyntaxHighlighter
                  language="javascript"
                  className="rounded-md max-h-[70vh]"
                  style={vscDarkPlus}
                >
                  {code}
                </SyntaxHighlighter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-full max-w-8xl mt-20 relative">
          <div className="rounded-md bg-background">
            <Footer1 />
          </div>
        </div>
      </div>
    </div>
  );
}