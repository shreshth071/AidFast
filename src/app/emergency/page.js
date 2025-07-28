
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Ambulance, ShieldAlert } from "lucide-react";

export default function EmergencyPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Emergency vehicle requested. Help is on the way!");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-background p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4 mx-auto ring-8 ring-primary/5">
            <Ambulance className="size-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Request Emergency Vehicle</CardTitle>
          <CardDescription>
            Fill out the form below to request an emergency vehicle.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Patient's Name</Label>
              <Input id="name" placeholder="Enter patient's name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="Enter contact number" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Pickup Location</Label>
              <Textarea id="address" placeholder="Enter the full pickup address" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vehicle">Vehicle Type</Label>
              <Select defaultValue="ambulance" required>
                <SelectTrigger id="vehicle">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ambulance">Ambulance</SelectItem>
                  <SelectItem value="advanced-life-support">Advanced Life Support</SelectItem>
                  <SelectItem value="patient-transport">Patient Transport Vehicle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="emergency-details">Emergency Details</Label>
              <Textarea
                id="emergency-details"
                placeholder="Briefly describe the emergency (e.g., accident, breathing issues)"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Request Vehicle
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
