"use client";

import React from "react";
import { ArrowLeft, Hospital, Shield, Flame, MapPin, Building, Ambulance, ShieldAlert, UserPlus, Tent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TransitionLink } from "@/components/ui/transition-link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HospitalsPage from "./hospitals/page";
import PolicePage from "./police/page";
import FirePage from "./fire/page";
import PoisonControlPage from "./poison-control/page";
import DisasterReliefPage from "./disaster-relief/page";
import ReliefCampPage from "./relief-camp/page";

export default function LocatorPage() {
  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Tabs defaultValue="hospitals" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="hospitals">
              <Hospital className="mr-2" />
              Hospitals
            </TabsTrigger>
            <TabsTrigger value="police">
              <Shield className="mr-2" />
              Police
            </TabsTrigger>
            <TabsTrigger value="fire">
              <Flame className="mr-2" />
              Fire
            </TabsTrigger>
            <TabsTrigger value="poison-control">
              <UserPlus className="mr-2" />
              Poison Control
            </TabsTrigger>
            <TabsTrigger value="disaster-relief">
              <Building className="mr-2" />
              Disaster Relief
            </TabsTrigger>
            <TabsTrigger value="relief-camps">
              <Tent className="mr-2" />
              Relief Camps
            </TabsTrigger>
          </TabsList>
          <TabsContent value="hospitals" className="mt-6">
            <HospitalsPage />
          </TabsContent>
          <TabsContent value="police" className="mt-6">
            <PolicePage />
          </TabsContent>
          <TabsContent value="fire" className="mt-6">
            <FirePage />
          </TabsContent>
          <TabsContent value="poison-control" className="mt-6">
            <PoisonControlPage />
          </TabsContent>
          <TabsContent value="disaster-relief" className="mt-6">
            <DisasterReliefPage />
          </TabsContent>
          <TabsContent value="relief-camps" className="mt-6">
            <ReliefCampPage />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}