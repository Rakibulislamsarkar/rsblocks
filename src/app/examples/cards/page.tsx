"use client";

import DisplayCards from "@/components/ui/display-cards";

export default function DisplayCardsBasic() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards />
      </div>
    </div>
  );
}