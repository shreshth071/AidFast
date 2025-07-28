
"use client";

import React from "react";
import { HeartPulse, MapPin, Mail, Phone, Facebook, MessageCircle } from "lucide-react";
import { TransitionLink } from "./ui/transition-link";
import Image from "next/image";

const services1 = [
  { name: "Doctor" },
  { name: "Diagnostic" },
  { name: "Blood Bank" },
  { name: "Dental" },
  { name: "Ambulance" },
  { name: "Pharmacy" },
];

const services2 = [
  { name: "Blog" },
  { name: "Physiotherapy Center" },
  { name: "Nursing Care Home" },
  { name: "Eye Care Center" },
  { name: "Safe Haven for Drug Recovery" },
  { name: "Hearing Care Center" },
];

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <HeartPulse className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">AidFast</span>
            </div>
            <p className="text-sm">
              The one and only trusted destination for reliable healthcare services — the AidFast healthcare platform
            </p>
            <p className="text-sm font-semibold">Download AidFast App</p>
            <a href="#" className="inline-block">
              <Image src="https://placehold.co/180x54.png" alt="Get it on Google Play" width={180} height={54} className="rounded" data-ai-hint="google play" />
            </a>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-foreground">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ul className="space-y-2">
                {services1.map((service) => (
                  <li key={service.name}>
                    <TransitionLink href="#" className="hover:text-primary text-sm">{service.name}</TransitionLink>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {services2.map((service) => (
                  <li key={service.name}>
                    <TransitionLink href="#" className="hover:text-primary text-sm">{service.name}</TransitionLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Address</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>Dhaka-1209, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@aidfastbd.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+88017386548662</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="inline-block border-2 border-border rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="inline-block border-2 border-border rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>Copyright © 2025 All rights reserved AidFast</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <TransitionLink href="#" className="hover:text-primary">Privacy & Policy</TransitionLink>
            <TransitionLink href="#" className="hover:text-primary">Terms & Conditions</TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
