import { notFound } from 'next/navigation';

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
    return {
      title: page.metadata.title,
      description: page.metadata.description,
    };
  } catch {
    return {
      title: 'Documentation',
      description: 'Documentation page',
    };
  }
}

async function getDocContent(slug: string[] = ['introduction']): Promise<DocPage> {
  const pageName = slug[0] || 'introduction';
  
  try {
    const page = await import(`../content/${pageName}.tsx`) as DocPage;
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