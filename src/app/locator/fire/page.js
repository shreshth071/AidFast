"use client";

import React, { useState } from "react";
import { ArrowLeft, Search, Flame, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/ui/transition-link";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { emergencyLocations } from "@/lib/data";

export default function FirePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const fireLocations = emergencyLocations.filter(l => l.type === 'fire');
  const [filteredLocations, setFilteredLocations] = useState(fireLocations);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      setFilteredLocations(
        fireLocations.filter(
          (location) =>
            location.name.toLowerCase().includes(term) ||
            location.address.toLowerCase().includes(term)
        )
      );
    } else {
      setFilteredLocations(fireLocations);
    }
  };

  const renderLocationList = (locations) => {
    if (locations.length === 0) {
      return (
        <p className="text-center text-muted-foreground mt-4">
          No fire stations found.
        </p>
      );
    }
    return (
      <div className="space-y-4">
        {locations.map((location) => (
          <Card key={location.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">{location.name}</h3>
                <p className="text-muted-foreground">{location.address}</p>
              </div>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ', ' + location.address)}`} target="_blank" rel="noopener noreferrer">
              <Button>
                <MapPin className="mr-2"/>
                View Map
              </Button>
            </a>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="mt-8 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for a fire station..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      {renderLocationList(filteredLocations)}
    </div>
  );
}