"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import Balancer from "react-wrap-balancer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const toc = {
  items: [
    {
      title: "Introduction",
      url: "#Introduction",
      level: 1,
    },
    {
      title: "Common Questions",
      url: "#common-questions",
      level: 1,
    },
  ],
};

const faqData = [
  {
    question: "Why should I copy/paste instead of using a packaged dependency?",
    answer:
      "By copying and pasting a component, you gain complete control over it. This approach allows you to modify it according to your needs, address bugs as they come up, and ensure it stays compatible with your codebase without waiting for updates or worrying about potential breaking changes from dependencies.",
  },
  {
    question: "Are there plans to offer this as an npm package?",
    answer:
      "No, this isn't meant to be a component library and there's no intention to release it as an npm package. The aim is to offer a set of reusable components that you can freely copy and adjust for your applications.",
  },
  {
    question: "Which frameworks are compatible with this collection?",
    answer:
      "The components are designed using React and Tailwind CSS, and they work seamlessly with Next.js. They are adaptable for any React-based framework, and they can be integrated into any React project.",
  },
  {
    question: "Can I use these components in my own projects?",
    answer:
      "Absolutely! The components are open source and released under the MIT license. You're welcome to use them in both personal and commercial projects. You can also modify and tailor the code as needed to fit your specific requirements.",
  },
];

export default function Documentation() {
  return (
    <main className="px-6 lg:gap-10 lg:px-8">
      <div className="mx-auto w-full min-h-full max-w-3xl ">
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
              A collection of elegant, reusable components for easy integration into your projects. Accessible, customizable, and open for all.
            </Balancer>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="space-y-6">
            <p className="leading-7">
              This is <span className="font-semibold">NOT</span> a typical component library. It provides a set of pre-built components you can directly copy and paste into your projects.
            </p>

            <div className="space-y-4">
              <h2
                id="what-do-you-mean"
                className="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                What does "not a component library" mean?
              </h2>
              <p className="leading-7 text-muted-foreground">
                It means you don't need to install this as a dependency. It’s not distributed or available via npm.
              </p>
            </div>

            <p className="leading-7 text-muted-foreground">
              Select the components you need, copy the code into your project, and customize it however you want. The code is yours to modify.
            </p>

            <p className="leading-7 text-muted-foreground italic">
              Consider using this as a guide to create your own component libraries.
            </p>
          </div>

          <section className="space-y-6 pt-12">
            <h2
              id="common-questions"
              className="scroll-m-20 text-2xl font-semibold tracking-tight"
            >
              Common Questions
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
    </main>
  );
}
