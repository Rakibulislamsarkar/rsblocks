import Link from "next/link"

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
}

