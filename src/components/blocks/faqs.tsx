import Image from "next/image";
import Link from "next/link";

export const FAQs = () => (
  <div className="w-full py-20" id="faqs">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              FAQs
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Get answers to the most frequently asked questions with these
              components.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Link href="blocks/faqs/faq1" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md p-8 lg:p-20 h-full">
                <Image
                  src="/faq1.png"
                  alt="faq1"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
          <Link href="blocks/faqs/faq2" className="hover:opacity-70">
            <div className="flex flex-col h-full">
              <div className="bg-muted rounded-md p-8 lg:p-20 h-full">
                <Image
                  src="/faq2.png"
                  alt="faq2"
                  width={3600}
                  height={1972}
                  layout="responsive"
                  className="rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);