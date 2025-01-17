"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
} from "@/components/ui/floating-action-panel";
import { ProjectStatusCard } from "@/components/ui/expandable-card";
import { Plus, Upload, Palette, Share2, BookMarked } from "lucide-react";
import Link from "next/link";
import { Cursor1 } from "@/blocks/cards/card-1";
import DisplayCards from "./ui/display-cards";
import { AppleStyleDock } from "./apple-style-dock";

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function FeatureCard({ title, description, children }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="relative rounded-xl border bg-background"
    >
      <div className="p-8">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="p-8 pt-0">{children}</div>
    </motion.div>
  );
}

function FloatingActionPanelDemo() {
  return (
    <FloatingActionPanelRoot>
      {(context) => (
        <>
          <FloatingActionPanelTrigger title="Actions" mode="actions">
            <Plus className="mr-2 h-4 w-4" />
            <span>Add new item</span>
          </FloatingActionPanelTrigger>

          <FloatingActionPanelContent className="w-[240px]">
            <div className="p-2 space-y-1">
              <FloatingActionPanelButton>
                <Upload className="h-4 w-4" />
                Upload files
              </FloatingActionPanelButton>
              <FloatingActionPanelButton>
                <Palette className="h-4 w-4" />
                Change theme
              </FloatingActionPanelButton>
              <FloatingActionPanelButton>
                <Share2 className="h-4 w-4" />
                Share project
              </FloatingActionPanelButton>
              <FloatingActionPanelButton>
                <BookMarked className="h-4 w-4" />
                Add to bookmarks
              </FloatingActionPanelButton>
            </div>
          </FloatingActionPanelContent>
        </>
      )}
    </FloatingActionPanelRoot>
  );
}

function ExpandableCardDemo() {
  const demoData = {
    title: "PrismUI Components",
    progress: 75,
    dueDate: "Dec 31, 2025",
    contributors: [
      { name: "Christer Hagen" },
      { name: "Jane Smith" },
      { name: "Alex Johnson" },
    ],
    tasks: [
      { title: "Design System Setup", completed: true },
      { title: "Component Development", completed: true },
      { title: "Documentation", completed: false },
    ],
    githubStars: 1200,
    openIssues: 5,
  };

  return <ProjectStatusCard {...demoData} />;
}

export function MainFeatures() {
  return (
    <section className="container relative py-10">
      <div className="text-start mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Link href={"/docs"}>
            <Button variant="outline" className="rounded-full mb-4">
              Components
            </Button>
          </Link>
          <h2 className="text-3xl leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Everything you need to build modern apps
          </h2>
          <p className="max-w-2xl text-balance text-base font-light text-foreground">
            risFR/UI provides a comprehensive set of UI components and features
            to help you build beautiful, responsive, and accessible
            applications.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <FeatureCard
          title="Display Cards"
          description="Beautiful, animated display cards with skewed design and hover effects. Perfect for showcasing featured content or important updates."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50 p-8 overflow-hidden">
            <div className="scale-[0.80] origin-center -mt-16">
                <DisplayCards />
            </div>
          </div>
        </FeatureCard>

        <FeatureCard
          title="Expandable Card"
          description="An interactive card component that expands to reveal more content. Perfect for project status, user profiles, and more."
        >
          <div className="hidden md:flex md:items-center md:justify-center md:min-h-[300px] md:rounded-lg md:bg-muted/50 md:p-8">
            <ExpandableCardDemo />
          </div>
          <div className="md:hidden">
            <ExpandableCardDemo />
          </div>
        </FeatureCard>

        <FeatureCard
          title="Floating Action Panel"
          description="A beautiful floating panel that appears from any trigger element. Perfect for contextual actions and quick forms."
        >
          <div className="flex items-center justify-center min-h-[300px] rounded-lg bg-muted/50">
            <FloatingActionPanelDemo />
          </div>
        </FeatureCard>

        <FeatureCard
          title="Dock"
          description="A versatile UI element that provides a flexible and customizable way to organize and display menu items within your application."
        >
          <div className="flex items-center justify-start min-h-[300px] rounded-lg bg-muted/50">
            <AppleStyleDock />
          </div>
        </FeatureCard>

        
        

        <FeatureCard
          title="Form Components"
          description="A collection of form components with built-in validation, error handling, and accessibility features."
        >
          <div className="grid grid-cols-2 gap-4 min-h-[300px] rounded-lg bg-muted/50 p-8">
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse" />
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse delay-75" />
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse delay-150" />
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse delay-300" />
          </div>
        </FeatureCard>

        <FeatureCard
          title="More Components"
          description="Explore our growing collection of beautifully designed components, from data tables to complex data visualization tools."
        >
          <div className="grid grid-cols-2 gap-4 min-h-[300px] rounded-lg bg-muted/50 p-8">
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse" />
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse delay-75" />
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse delay-150" />
            <div className="h-24 rounded-lg bg-primary/20 animate-pulse delay-300" />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}