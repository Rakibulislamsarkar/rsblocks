"use client";

import { useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, LogIn, MoveRight } from "lucide-react";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Constants
const FAQ_ITEMS = [
  {
    question: "What is Solaris and how can it help me?",
    answer:
      "Solaris brings the power of conversational AI to your documents, letting you chat with your PDFs as easily as using ChatGPT. Whether you're studying, researching, or analyzing documents, our platform helps you understand and extract information in seconds, backed up by the latest PDF AI technology.",
  },
  {
    question: "Is Solaris free?",
    answer:
      "Absolutely! We offer a free plan that lets you analyze 5 documents every day. For power users, our Solaris Plus plan provides unlimited document analysis, and more advanced features.",
  },
  {
    question: "Why use Solaris instead of ChatGPT for PDF analysis?",
    answer:
      "Solaris is purpose-built for document analysis with features you won't find in general AI tools. Our intuitive side-by-side interface displays your chat and document together, while clickable citations instantly scroll to the exact source in your PDF. This specialized design makes document understanding faster and more reliable than anywhere else.",
  },
  {
    question: "Is my data secure and confidential?",
    answer:
      "We implement the highest security standards. Your documents are protected by SSL encryption during transfer and remain encrypted while stored. Our SOC2 Type II certified storage provider ensures enterprise-level security, while you maintain full control over your data - with the ability to delete your documents at any time.",
  },
];

const USER_CARDS = [
  {
    title: "For Researchers",
    description:
      "Explore scientific papers, academic articles, and books to get the information you need for your research.",
    image: "/researchers.png",
  },
  {
    title: "For Students",
    description:
      "Study for exams, get help with homework, and answer multiple choice questions faster than your classmates.",
    image: "/students.png",
  },
  {
    title: "For Professionals",
    description:
      "Navigate legal contracts, financial reports, manuals, and training material. Ask questions to any PDF to stay ahead.",
    image: "/professionals.png",
  },
];

const UserCard = memo(function UserCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="p-4 shadow-lg rounded-lg flex flex-col items-center text-center sm:text-left h-full">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-xl">{title}</CardTitle>
        <CardDescription className="text-base sm:text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Image
          src={image}
          alt={title.toLowerCase()}
          width={400}
          height={300}
          className="shadow-xl w-full h-auto sm:w-3/4 lg:w-full object-cover rounded-lg"
        />
      </CardContent>
    </Card>
  );
});

const FAQSection = memo(function FAQSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="mx-auto max-w-5xl w-full px-4">
        <h1 className="text-3xl md:text-4xl font-soehne mb-12">
          Frequently Asked Questions
        </h1>
        {FAQ_ITEMS.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
});

export default function Home() {
  // Optimized Hero Section
  const renderHero = () => (
    <section className="flex flex-col gap-10 items-center text-center py-20 px-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <Badge variant="outline">Solaris is now public</Badge>
        <h1 className="max-w-6xl text-2xl md:text-5xl lg:text-[53.94px] leading-8 tracking-[-0.2px] sm:leading-[40px] md:tracking-[0.5px] md:leading-[50px] lg:tracking-[-2.0788px] lg:leading-[60.334px]">
          Instant Conversations with Your Documents—Upload, Ask, and Discover
          Answers Effortlessly
        </h1>
        <p className="text-base md:text-lg lg:text-xl tracking-[-0.2px] leading-[22px] font-[customFont] max-w-2xl">
          Effortlessly explore insights and find the information you need in
          seconds.
        </p>
      </div>
      <div className="flex gap-6 md:gap-10 mt-5">
        <Button className="cursor-pointer px-6 py-5" asChild>
          <Link href="/dashboard">
            Get Started
            <LogIn className="ml-3" />
          </Link>
        </Button>

        <Button
          className="cursor-pointer px-6 py-5 hover:underline"
          asChild
          variant="outline"
        >
          <Link href="/upgrade">
            Try Premium <MoveRight className="ml-3" />
          </Link>
        </Button>
      </div>
    </section>
  );

  // Optimized Product Preview Section
  const renderProductPreview = () => (
    <section className="min-h-screen flex items-center justify-center py-24">
      <div className="relative isolate w-full">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-secondary p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 shadow-2xl">
              <Image
                src="/1.png"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                priority
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
          <p className="text-base md:text-2xl lg:text-[23.97px] md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[28px] tracking-[-0.3px] leading-[20px] mt-10 mb-10 font-[customFont] max-w-3xl mx-auto text-center">
            Solaris empowers you to effortlessly extract insights from your
            documents, enabling precise answers to your questions with unmatched
            clarity and speed, thanks to its advanced AI-driven capabilities.
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <main className="overflow-x-hidden">
      {renderHero()}
      {renderProductPreview()}

      <section className="min-h-screen flex items-center justify-center py-24">
        <div className="mx-auto max-w-5xl w-full px-4">
          <div className="mb-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mt-2 font-soehne text-4xl sm:text-5xl">
                Get answers from your documents in seconds
              </h2>
              <p className="mt-4 text-lg md:tracking-[-0.13485px] md:leading-[28px] lg:tracking-[-0.13485px] lg:leading-[34px] tracking-[-0.3px] leading-[22px] font-soehne">
                Lorem ipsum dolor sit amet. Consectetur adipiscing elit. In
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-between">
            {USER_CARDS.map((card, index) => (
              <UserCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-secondary rounded-lg mx-auto w-full max-w-4xl sm:max-w-2xl lg:max-w-5xl min-h-[400px] sm:min-h-[450px] md:min-h-[500px] px-4 lg:px-0 py-12 sm:py-16 md:py-20 flex items-center justify-center my-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="col-span-12 flex flex-col gap-2 md:col-span-8 md:col-start-3">
            <h2 className="font-medium text-xl sm:text-2xl md:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[43.2px] tracking-[-0.2px] sm:tracking-[-0.3px] md:tracking-[-0.36px] mb-4 w-full sm:w-3/4 flex justify-center mx-auto text-center text-h4 text-balance font-[customFont]">
              Instant answers. Greater productivity. Endless inspiration.
            </h2>
            <div className="flex items-center justify-center flex-row gap-1 sm:gap-2 md:gap-3 flex-wrap">
              <Button
                className="px-4 py-3 rounded-full text-base sm:text-sm font-medium"
                asChild
              >
                <Link href="/dashboard" className="flex">
                  Try app <ArrowUpRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FAQSection />

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div>
              <h2 className="text-lg font-semibold mb-6">Quick Links</h2>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-sm hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-6">Contact Us</h2>
              <address className="not-italic text-sm space-y-4">
                <p>123 Web Dev Lane,Internet City, Digital State 12345</p>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-6">Legal</h2>
              <ul className="space-y-4">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Use", href: "/terms" },
                  { label: "Brand Guidelines", href: "/brand" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "GitHub" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="hover:text-gray-500 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} App name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}