"use client";

import { Feature9 } from "@/blocks/feature/feature9";
import { CopyCodeButton } from "@/components/copy-code-button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Block() {
  const code = `import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

export const Feature9 = () => {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Something new!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-4 w-4 select-none" />
                </button>
              </div>
              <Image
                src="/feature8.png"
                alt="feature8"
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <Image
                src="/darkmode-feature8.png"
                alt="darkmode-feature8.png"
                width={1920}
                height={1080}
                priority
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};`;

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="mt-20 w-full">
        <div className="container items-center text-secondary-foreground text-sm text-center py-4 flex flex-row justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Blocks</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/#features">Features</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Feature9</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="flex bg-background justify-center items-start flex-1">
        <div className="w-full max-w-8xl relative">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
            <CopyCodeButton code={code} />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Terminal className="w-4 h-4" />
                  Show code
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[800px]">
              <SyntaxHighlighter
                  language="javascript"
                  className="rounded-md max-h-[70vh]"
                  style={vscDarkPlus}
                >
                  {code}
                </SyntaxHighlighter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="rounded-md bg-background">
            <Feature9 />
          </div>
        </div>
      </div>
    </div>
  );
}