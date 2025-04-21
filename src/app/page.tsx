"use client"

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return prev + 1;
      })
    }, 30);

    return () => clearTimeout(timer)

  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Smart Ambulance Route Optimization System</h1>

        <Progress value={progress} indicator={cn("bg-black", progress < 100 ? "bg-amber-400" : "bg-green-400")} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>&copy; SAROS</span>
      </footer>
    </div>
  );
}
