"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Globe, Plus, Square, ArrowUp } from 'lucide-react';

interface CardItem {
  title: string;
  subtitle: string;
  gradient: string;
  type: 'video' | 'chat' | 'search';
}

const CARD_ITEMS: CardItem[] = [
  {
    title: "Sora is here",
    subtitle: "Sora",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    type: "video"
  },
  {
    title: "Introducing ChatGPT Pro",
    subtitle: "ChatGPT",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
    type: "chat"
  },
  {
    title: "Introducing ChatGPT search",
    subtitle: "ChatGPT",
    gradient: "bg-gradient-to-br from-blue-300 to-blue-500",
    type: "search"
  }
];

function FeatureCard({ item }: { item: CardItem }) {
  return (
    <Card className={`relative overflow-hidden h-[600px] rounded-3xl border-0 ${item.gradient}`}>
      <CardHeader className="absolute top-0 left-0 z-10 p-6">
        <h3 className="text-lg font-medium text-white/90">{item.subtitle}</h3>
      </CardHeader>
      
      <CardContent className="h-full flex flex-col justify-between p-6">
        {item.type === 'video' && (
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 mt-auto mb-20 flex items-center gap-4">
            <Plus className="h-5 w-5 text-white" />
            <Square className="h-5 w-5 text-white" />
            <span className="text-white text-sm">16:9</span>
            <span className="text-white text-sm">480p</span>
            <Square className="h-5 w-5 text-white" />
            <ArrowUp className="h-5 w-5 text-white" />
          </div>
        )}
        
        {item.type === 'chat' && (
          <div className="bg-white rounded-2xl p-4 mt-auto mb-20 max-w-xs">
            <p className="text-sm text-gray-600">deadlock source and fix in C++</p>
            <p className="text-xs text-gray-400">Issues with mutexes...</p>
            <div className="flex justify-end mt-2">
              <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Details</span>
            </div>
          </div>
        )}
        
        {item.type === 'search' && (
          <div className="bg-white rounded-full p-4 mt-auto mb-20 flex items-center gap-2 max-w-xs">
            <Globe className="h-6 w-6 text-blue-500" />
            <span className="text-lg text-gray-700">Search</span>
          </div>
        )}
        
        <h2 className="text-3xl font-medium text-white z-10">{item.title}</h2>
      </CardContent>
    </Card>
  );
}

export default function LandingPage() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <h1 className="text-4xl font-medium text-white mb-12">Products</h1>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {CARD_ITEMS.map((item, index) => (
              <CarouselItem key={index} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                <FeatureCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-transparent border-0 text-white hover:bg-white/10 hover:text-white">
            <ChevronLeft className="h-8 w-8" />
          </CarouselPrevious>
          <CarouselNext className="right-4 bg-transparent border-0 text-white hover:bg-white/10 hover:text-white">
            <ChevronRight className="h-8 w-8" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}

