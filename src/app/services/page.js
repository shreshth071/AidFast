
"use client";

import React from "react";
import {
  HelpCircle,
  ShieldAlert,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { TransitionLink } from "@/components/ui/transition-link";

const guideCategories = [
  {
    href: "/services/first-aid-guide",
    icon: HelpCircle,
    title: "First Aid Guide",
    description: "First aid for cuts, choking, and more.",
  },
  {
    href: "/services/disaster-preparedness",
    icon: ShieldAlert,
    title: "Disaster Guide",
    description: "Guides for earthquakes, floods, and more.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <section className="text-center py-8">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4 ring-8 ring-primary/5">
            <FileText className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Emergency Guides
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Quick access to step-by-step instructions for various situations.
          </p>
        </section>

        <section className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {guideCategories.map((category) => (
            <TransitionLink href={category.href} key={category.title}>
              <Card className="p-6 hover:bg-accent hover:border-primary/50 transition-all cursor-pointer group h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                      <category.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            </TransitionLink>
          ))}
        </section>
      </main>
    </div>
  );
}
