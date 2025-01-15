import { MainNavItem, SidebarNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Introduction",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/typography",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Headers",
          href: "/docs/components/headers",
          items: [],
        },
        {
          title: "Heroes",
          href: "/docs/components/heroes",
          items: [],
        },
        {
          title: "Cases",
          href: "/docs/components/cases",
          items: [],
        },
        {
          title: "Feature",
          href: "/docs/components/feature",
          items: [],
        },
        {
          title: "CTAs",
          href: "/docs/components/ctas",
          items: [],
        },
        {
          title: "Stats",
          href: "/docs/components/stats",
          items: [],
        },
        {
          title: "Pricing",
          href: "/docs/components/pricing",
          items: [],
        },
        {
          title: "FAQs",
          href: "/docs/components/faqs",
          items: [],
        },
        {
          title: "Blogs",
          href: "/docs/components/blogs",
          items: [],
        },
        {
          title: "Contacts",
          href: "/docs/components/contacts",
          items: [],
        },
        {
          title: "Footers",
          href: "/docs/components/footers",
          items: [],
        },
      ],
    },
  ],
}

