import { MainNavItem, NavItemWithChildren, SidebarNavItem } from "@/types/nav"

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
      href: "/docs/components/headers",
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

// Helper functions
export function getFirstComponentRoute(): string {
  const componentsSection = docsConfig.sidebarNav.find(
    (section) => section.title === "Components"
  )
  return componentsSection?.items[0]?.href ?? "/docs/components/headers"
}

export function getComponentsConfig() {
  return docsConfig.sidebarNav.find((section) => section.title === "Components")
}

export function getNavItemByHref(href: string): NavItemWithChildren | null {
  for (const section of docsConfig.sidebarNav) {
    const item = section.items.find((item) => item.href === href)
    if (item) return item
  }
  return null
}