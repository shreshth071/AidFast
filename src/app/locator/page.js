
"use client";

import React from "react";
import {
  Hospital,
  Shield,
  Flame,
  Building,
  UserPlus,
  Tent,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { TransitionLink } from "@/components/ui/transition-link";

const serviceCategories = [
  {
    href: "/locator/hospitals",
    icon: Hospital,
    title: "Hospitals",
    description: "Find nearby medical centers.",
  },
  {
    href: "/locator/police",
    icon: Shield,
    title: "Police Stations",
    description: "Locate law enforcement.",
  },
  {
    href: "/locator/firestations",
    icon: Flame,
    title: "Fire Stations",
    description: "Find fire departments.",
  },
  {
    href: "/locator/poison-control",
    icon: UserPlus,
    title: "Poison Control",
    description: "Get urgent poison assistance.",
  },
  {
    href: "/locator/disaster",
    icon: Building,
    title: "Disaster Centers",
    description: "Locate management centers.",
  },
  {
    href: "/locator/relief-camps",
    icon: Tent,
    title: "Relief Camps",
    description: "Find temporary shelters.",
  },
];

export default function LocatorPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <section className="text-center py-8">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4 ring-8 ring-primary/5">
            <MapPin className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Emergency Locator
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find nearby hospitals, police stations, fire stations, and other essential services quickly.
          </p>
        </section>

        <section className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((category) => (
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
