"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight, ExternalLink } from 'lucide-react'
import Balancer from "react-wrap-balancer"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { DashboardTableOfContents } from "@/components/toc"

const toc = {
  items: [
    {
      title: "Introduction",
      url: "#introduction",
      level: 1,
    },
    {
      title: "FAQ",
      url: "#faq",
      level: 1,
    },
  ],
}

const faqData = [
    {
      question: "Why copy/paste and not packaged as a dependency?",
      answer: "When you copy and paste a component, you have complete control over it. You can modify it to match your needs, fix bugs as they arise, and ensure it stays up-to-date with your codebase. There's no need to wait for upstream changes or worry about breaking changes in dependencies."
    },
    {
      question: "Do you plan to publish it as an npm package?",
      answer: "No. This is not a component library and there are no plans to publish it as an npm package. The goal of this project is to provide a collection of components that you can copy and paste into your apps and customize to your needs."
    },
    {
      question: "Which frameworks are supported?",
      answer: "The components are built using React and Tailwind CSS. They are designed to work with Next.js and can be adapted to work with any React-based framework. The components are framework-agnostic and can be used in any React project."
    },
    {
      question: "Can I use this in my project?",
      answer: "Yes! The code is open source and available under the MIT license. You can use it in your personal or commercial projects. You can modify the code and customize it to your needs. The code is yours."
    }
  ]

export default function Documentation() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 max-w-2xl">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            Introduction
          </h1>
          <p className="text-base text-muted-foreground">
            <Balancer>
              Beautifully designed components that you can copy and paste into your
              apps. Accessible. Customizable. Open Source.
            </Balancer>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="space-y-6">
            <p className="leading-7">
              This is <span className="font-semibold">NOT</span> a component
              library. It's a collection of re-usable components that you can copy
              and paste into your apps.
            </p>

            <div className="space-y-4">
              <h2
                id="what-do-you-mean"
                className="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                What do you mean by not a component library?
              </h2>
              <p className="leading-7 text-muted-foreground">
                I mean you do not install it as a dependency. It is not available
                or distributed via npm.
              </p>
            </div>

            <p className="leading-7 text-muted-foreground">
              Pick the components you need. Copy and paste the code into your
              project and customize to your needs. The code is yours.
            </p>

            <p className="leading-7 text-muted-foreground italic">
              Use this as a reference to build your own component libraries.
            </p>
          </div>

          <section className="space-y-6 pt-12">
            <h2
              id="faq"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              FAQ
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </div>
    </main>
  )
}

