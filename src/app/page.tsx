"use client";

import { Heroes } from "@/components/blocks/heroes";
import { Header } from "@/components/header";
import { Hero } from "@/components/blocks/hero";
import { Cases } from "@/components/blocks/cases";
import { Testimonials } from "@/components/blocks/testimonials";
import { Features } from "@/components/blocks/features";
import { Pricings } from "@/components/blocks/pricings";
import { Stats } from "@/components/blocks/stats";
import { CTAs } from "@/components/blocks/ctas";
import { Blogs } from "@/components/blocks/blogs";
import { FAQs } from "@/components/blocks/faqs";
import { Contacts } from "@/components/blocks/contacts";
import { Footers } from "@/components/blocks/footers";
import { Headers } from "@/components/blocks/headers";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <PageHeader>
          <PageHeaderHeading>Build your component library</PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps. Made with Tailwind CSS. Open source.
          </PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href="/blocks">Browse Blocks</Link>
            </Button>
          </PageActions>
        </PageHeader>
        <Headers />
        <Heroes />
        <Cases />
        <Testimonials />
        <Features />
        <Pricings />
        <Stats />
        <CTAs />
        <Blogs />
        <FAQs />
        <Contacts />
        <Footers />
    </>
  );
}
