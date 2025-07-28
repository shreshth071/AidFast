
"use client";

import React, { useMemo, useState } from "react";
import {
  Hospital,
  Shield,
  Flame,
  UserPlus,
  Building,
  Tent,
  Search,
  MapPin,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { emergencyLocations } from "@/lib/data";
import { TransitionLink } from "@/components/ui/transition-link";

const locationTypeDetails = {
  hospital: { icon: Hospital },
  police: { icon: Shield },
  fire: { icon: Flame },
  "poison-control": { icon: UserPlus },
  disaster: { icon: Building },
  "relief-camp": { icon: Tent },
};

const LocationCard = ({ location }) => {
  const Icon = locationTypeDetails[location.type]?.icon || Building;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="font-headline">{location.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground">{location.address}</p>
        <Button asChild className="w-full">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              location.name + ", " + location.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="mr-2" />
            View on Map
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default function ReliefCampsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const locations = useMemo(() => {
    const allReliefCamps = emergencyLocations.filter((l) => l.type === "relief-camp");
    if (!searchTerm) return allReliefCamps;
    const term = searchTerm.toLowerCase();
    return allReliefCamps.filter(
      (location) =>
        location.name.toLowerCase().includes(term) ||
        location.address.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-4 mb-8">
            <TransitionLink href="/locator">
                <Button variant="outline" size="icon">
                    <ArrowLeft />
                </Button>
            </TransitionLink>
            <div>
                 <h1 className="text-3xl font-bold font-headline text-foreground">
                    Relief Camps
                </h1>
                <p className="text-muted-foreground">Find nearby relief camps and shelters.</p>
            </div>
        </div>

        <section className="my-2 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name or address..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>

        <section className="mt-8">
          {locations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground mt-12">
              No relief camps found for your search term.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
