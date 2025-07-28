"use client";

import { HeartPulse } from "lucide-react";
import { useLoading } from "@/hooks/use-loading";
import { cn } from "@/lib/utils";

export function LoadingTransition() {
  const { loading } = useLoading();

  return (
    <div
      className={cn(
        "fixed inset-0 z-[101] flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative">
        <HeartPulse className="animate-ping-slow absolute inline-flex h-24 w-24 text-primary" />
        <HeartPulse className="relative inline-flex h-24 w-24 text-primary" />
      </div>
    </div>
  );
}
