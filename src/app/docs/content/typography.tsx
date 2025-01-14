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
      url: "#introduction",
      level: 1,
    },
    {
      title: "Typography Best Practices",
      url: "#typography-best-practices",
      level: 1,
    },
  ],
};

const faqData = [
  {
    question: "What is Typography in Web Design?",
    answer:
      "Typography is the art of arranging type to make written language legible, readable, and visually appealing. It plays a crucial role in web design by enhancing user experience and accessibility.",
  },
  {
    question: "Why is readability and accessibility important?",
    answer:
      "Choosing legible typefaces, using appropriate font sizes, and providing sufficient line spacing makes content accessible to all users, improving their reading experience and reducing eye strain.",
  },
  {
    question: "What is Visual Hierarchy in Typography?",
    answer:
      "Visual hierarchy helps guide users through content by employing different font weights and sizes. A well-structured visual hierarchy improves readability and user navigation.",
  },
  {
    question: "How does typography contribute to brand identity?",
    answer:
      "The choice of typeface communicates a brand’s personality and tone. Consistency in typography across platforms ensures a cohesive and professional brand experience.",
  },
  {
    question: "How can typography be responsive?",
    answer:
      "Typography should adapt to different screen sizes and resolutions to maintain readability. Using relative units like ems or percentages for font sizes ensures proper scaling across devices.",
  },
  {
    question: "What are the best practices for typography?",
    answer:
      "Best practices include limiting font usage, maintaining optimal line length, using contrast wisely, and implementing responsive typography for scalability on different devices.",
  },
];

export default function Documentation() {
  return (
    <main className="px-6 lg:gap-10 lg:px-8">
      <div className="mx-auto w-full min-h-full max-w-3xl">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <div className="truncate">Docs</div>
          <ChevronRight className="h-3.5 w-3.5" />
          <div className="text-foreground">Typography</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            Key Aspects of Typography in Web Design
          </h1>
          <p className="text-base text-muted-foreground">
            <Balancer>
              Typography is crucial for creating accessible, readable, and visually appealing websites. This guide will walk you through the key aspects of typography in web design.
            </Balancer>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="space-y-6">
            <p className="leading-7">
              Typography impacts the readability, accessibility, and visual appeal of a website. Here’s how to get it right:
            </p>

            <div className="space-y-4">
              <h2
                id="readability-accessibility"
                className="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                Readability and Accessibility
              </h2>
              <ul className="leading-7 text-muted-foreground">
                <li>
                  <strong>Legible Typefaces:</strong> Choose clear, easy-to-read fonts to ensure content is accessible to all users. (Source: ELEARNING INDUSTRY)
                </li>
                <li>
                  <strong>Appropriate Font Sizes:</strong> Use suitable font sizes to prevent eye strain and enhance the reading experience.
                </li>
                <li>
                  <strong>Line Spacing (Leading):</strong> Proper spacing between lines of text improves readability and reduces visual clutter.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2
                id="visual-hierarchy"
                className="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                Visual Hierarchy
              </h2>
              <ul className="leading-7 text-muted-foreground">
                <li>
                  <strong>Consistent Use of Fonts:</strong> Limiting the number of fonts ensures a clean and professional look. (Source: UX PLANET)
                </li>
                <li>
                  <strong>Strategic Font Weight and Size:</strong> Varying font weights and sizes helps create a clear hierarchy, guiding users through content effectively.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2
                id="brand-identity"
                className="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                Brand Identity and Tone
              </h2>
              <ul className="leading-7 text-muted-foreground">
                <li>
                  <strong>Typeface Selection:</strong> The choice of typeface communicates a brand's personality and tone. (Source: ALPHA EFFICIENCY)
                </li>
                <li>
                  <strong>Consistency Across Platforms:</strong> Consistent typography across all pages and devices reinforces brand identity and ensures a cohesive user experience.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2
                id="responsive-design"
                className="scroll-m-20 text-xl font-semibold tracking-tight"
              >
                Responsive Design
              </h2>
              <ul className="leading-7 text-muted-foreground">
                <li>
                  <strong>Adaptability:</strong> Typography should adjust seamlessly across screen sizes and resolutions, ensuring readability on all devices.
                </li>
                <li>
                  <strong>Testing:</strong> Regular testing on different devices and browsers helps identify and resolve typography-related issues.
                </li>
              </ul>
            </div>

            <section className="space-y-6 pt-12">
              <h2
                id="best-practices"
                className="scroll-m-20 text-2xl font-semibold tracking-tight"
              >
                Best Practices for Typography
              </h2>
              <ul className="leading-7 text-muted-foreground">
                <li>
                  <strong>Limit Font Usage:</strong> Using more than three different fonts can make a website look unstructured and unprofessional. (Source: UX PLANET)
                </li>
                <li>
                  <strong>Maintain Line Length:</strong> Optimal line length enhances readability, preventing lines that are too long or too short.
                </li>
                <li>
                  <strong>Use Contrast Wisely:</strong> Ensure sufficient contrast between text and background for better legibility.
                </li>
                <li>
                  <strong>Implement Responsive Typography:</strong> Use relative units like ems or percentages instead of fixed units like pixels for scalable text on different devices.
                </li>
              </ul>
            </section>

            <p className="leading-7">
              By adhering to these typography principles, you can create websites that are visually appealing, user-friendly, and accessible to all users.
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
    </main>
  );
}
