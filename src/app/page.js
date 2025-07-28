"use client";

import React, { useState } from "react";
import { HeartPulse, Phone, Shield, LifeBuoy, MapPin, Ambulance, Search } from "lucide-react";
import { emergencyContacts as allEmergencyContacts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AidFastPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(allEmergencyContacts);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      setFilteredContacts(
        allEmergencyContacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(term) ||
            contact.description.toLowerCase().includes(term)
        )
      );
    } else {
      setFilteredContacts(allEmergencyContacts);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <section className="text-center py-8">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4 ring-8 ring-primary/5">
                <HeartPulse className="size-8 text-primary" />
            </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Welcome to AidFast
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Your quick and reliable guide for first aid and emergencies. Get instant access to essential information when you need it most.
          </p>
        </section>

        <section className="my-2 max-w-2xl mx-auto">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search for an emergency contact..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={handleSearch}
                />
            </div>
        </section>

        <section className="mt-8">
           <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline text-foreground">
              Emergency Contacts
            </h2>
            <p className="text-muted-foreground mt-2">
              Quick access to emergency services in India.
            </p>
          </div>

          {filteredContacts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContacts.map((contact) => (
                <Card key={contact.id} className="flex flex-col">
                    <CardHeader>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                        <contact.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="font-headline">{contact.name}</CardTitle>
                    </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground">{contact.description}</p>
                    <Button asChild className="w-full">
                        <a href={`tel:${contact.number}`}>
                        <Phone className="mr-2" /> Call {contact.number}
                        </a>
                    </Button>
                    </CardContent>
                </Card>
                ))}
            </div>
           ) : (
            <p className="text-center text-muted-foreground mt-8">
              No contacts found for your search term.
            </p>
           )}


           <Card className="mt-8 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-500/30">
            <CardHeader className="flex flex-row items-center gap-4">
              <Shield className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              <CardTitle className="text-amber-900 dark:text-amber-200 font-headline">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 dark:text-amber-300">
                The phone numbers provided are for general emergency services in India.
                Always verify and use the specific local emergency numbers for your area. In a life-threatening situation, always dial your local emergency number immediately.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}