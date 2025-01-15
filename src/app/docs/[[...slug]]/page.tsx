import { notFound } from "next/navigation";
import { JSX } from "react";
import { siteConfig } from "@/config/site";

interface DocPage {
  default: () => JSX.Element;
  metadata: {
    title: string;
    description: string;
  };
}

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const page = await getDocContent(params.slug);
    const title = page.metadata?.title || formatTitle(params.slug[0]);
    const description =
      page.metadata?.description ||
      `${formatTitle(params.slug[0])} documentation page`;
    return {
      title: `${title} - ${siteConfig.name}`,
      description: page.metadata.description,
    };
  } catch {
    return {
      title: `Introduction - ${siteConfig.name}`,
      description: "Documentation page",
    };
  }
}
function formatTitle(slug: string = "introduction"): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
}

async function getDocContent(
  slug: string[] = ["introduction"]
): Promise<DocPage> {
  const pageName = slug[0] || "introduction";

  try {
    const page = (await import(`../content/${pageName}.tsx`)) as DocPage;
    if (!page.metadata) {
      page.metadata = {
        title: formatTitle(pageName),
        description: `${formatTitle(pageName)} documentation page`,
      };
    }
    return page;
  } catch (error) {
    notFound();
  }
}

export default async function DocsPage({ params }: PageProps) {
  const page = await getDocContent(params.slug);
  const Content = page.default;

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <Content />
    </article>
  );
}
