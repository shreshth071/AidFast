
"use client";

import React, { useState, useMemo } from "react";
import { ArrowLeft, Search, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/ui/transition-link";
import { guides as allGuides } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const GuideList = ({ guides }) => {
  if (guides.length === 0) {
    return (
      <p className="text-center text-muted-foreground mt-8">
        No guides found for your search term.
      </p>
    );
  }
  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {guides.map((guide) => (
        <AccordionItem key={guide.id} value={guide.id} className="border rounded-lg bg-card">
          <AccordionTrigger className="p-6 hover:no-underline">
            <div className="flex items-center gap-4 flex-grow">
               <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                  <guide.icon className="w-6 h-6" />
               </div>
              <div>
                <h3 className="text-xl font-bold text-left">{guide.title}</h3>
                <Badge variant="secondary" className="mt-1">{guide.category}</Badge>
              </div>
            </div>
             {guide.youtubeUrl && (
              <a
                href={guide.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5 7.25C27.5 4.94975 25.5503 3 23.25 3H4.75C2.44975 3 0.5 4.94975 0.5 7.25V20.75C0.5 23.0503 2.44975 25 4.75 25H23.25C25.5503 25 27.5 23.0503 27.5 20.75V7.25Z"
                    fill="#FF0000"
                  />
                  <path d="M11 18V10L18 14L11 18Z" fill="white" />
                </svg>
              </a>
            )}
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0">
            <div className="space-y-4">
              {guide.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-md border bg-background">
                  <CheckCircle2 className="mt-1 text-primary flex-shrink-0"/>
                  <div className="grid gap-1.5 leading-none">
                    <p className="text-base font-medium">
                      Step {index + 1}: {step.title}
                    </p>
                    <p className="text-muted-foreground">{step.instruction}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default function MedicalEmergenciesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const guides = useMemo(() => {
    const emergencyGuides = allGuides.filter((g) => g.category === "Medical Emergencies");
    if (!searchTerm) return emergencyGuides;
    const term = searchTerm.toLowerCase();
    return emergencyGuides.filter(
      (guide) =>
        guide.title.toLowerCase().includes(term) ||
        guide.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-4 mb-8">
            <TransitionLink href="/services">
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
            </TransitionLink>
            <div>
                 <h1 className="text-3xl font-bold font-headline text-foreground">
                    Medical Emergencies
                </h1>
                <p className="text-muted-foreground">Guides for critical medical situations.</p>
            </div>
        </div>

        <section className="my-2 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search guides..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="mt-8">
          <GuideList guides={guides} />
        </section>
      </main>
    </div>
  );
}
