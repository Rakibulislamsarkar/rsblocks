"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const components: { title: string; description: string }[] = [
    {
      title: "Headers",
      description:
        "A collection of versatile header components for your SaaS website, customizable with themes and supporting both dark and light modes.",
    },
    {
      title: "Heroes",
      description:
        "Eye-catching hero sections designed to grab attention and communicate your value proposition effectively.",
    },
    {
      title: "Cases",
      description:
        "Showcase case studies or success stories with beautifully designed layouts.",
    },
    {
      title: "Feature",
      description:
        "Highlight the key features of your SaaS product with engaging and informative designs.",
    },
    {
      title: "CTAs",
      description:
        "Call-to-action components designed to drive user engagement and conversions.",
    },
    {
      title: "Stats",
      description:
        "Present important statistics or metrics in a visually appealing manner.",
    },
    {
      title: "Pricing",
      description:
        "Responsive and customizable pricing tables to showcase your product plans effectively.",
    },
    {
      title: "FAQs",
      description:
        "Answer common questions with easy-to-navigate and user-friendly FAQ sections.",
    },
    {
      title: "Blogs",
      description:
        "Blog components to highlight articles, news, or updates from your team.",
    },
    {
      title: "Contacts",
      description:
        "Contact sections designed to facilitate user inquiries and engagement with your team.",
    },
    {
      title: "Footers",
      description:
        "Customizable footer components to provide navigational links and additional information.",
    },
  ];

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background px-5">
      <div className="container relative mx-auto flex items-center justify-between min-h-20">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            RSBlocks
          </Link>
        </div>
       <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          rsblocks
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed website blocks for your SaaS
                          website.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Introduction">
                    Re-usable components built using shadcn.
                  </ListItem>

                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[700px] ">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button className="px-4 py-2 bg-secondary rounded-md text-sm font-medium">
          ShadcnThemes
        </button>
      </div>
    </header>
  );
};
