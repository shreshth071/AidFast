
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Moon, Sun, Info, Users, Goal, Handshake, Mail, Phone, MessageSquare, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // State for notification switches
  const [pushNotifications, setPushNotifications] = useState(false);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [appUpdates, setAppUpdates] = useState(true);

  // State for contact form
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      alert("Please fill out all fields in the contact form.");
      return;
    }
    alert(`Thank you for your message, ${contactName}! We will get back to you soon.`);
    // Reset form fields
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  if (!mounted) {
    return (
      <div className="bg-background min-h-screen">
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
           <div className="max-w-4xl mx-auto space-y-12">
             <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>
                    Customize the look and feel of the application.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="theme-switch" className="flex items-center gap-2">
                      <Sun className="size-5" />
                      <span>Dark Mode</span>
                    </Label>
                    <Switch
                      id="theme-switch"
                      disabled={true}
                    />
                  </div>
                </CardContent>
              </Card>
           </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <section className="text-center py-8">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4 ring-8 ring-primary/5">
            <Settings className="size-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
            Settings
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Manage your application preferences and learn more about AidFast.
          </p>
        </section>

        <div className="max-w-4xl mx-auto space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the look and feel of the application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Label htmlFor="theme-switch" className="flex items-center gap-2">
                  {theme === 'dark' ? <Moon className="size-5" /> : <Sun className="size-5" />}
                  <span>Dark Mode</span>
                </Label>
                <Switch
                  id="theme-switch"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  disabled={!mounted}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Bell className="size-6 text-primary" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>
                Manage how you receive notifications from AidFast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <Label htmlFor="push-notifications" className="flex flex-col gap-1">
                  <span>Push Notifications</span>
                  <span className="text-xs text-muted-foreground">Receive updates on your device.</span>
                </Label>
                <Switch id="push-notifications" checked={pushNotifications} onCheckedChange={setPushNotifications} />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <Label htmlFor="emergency-alerts" className="flex flex-col gap-1">
                  <span>Emergency Alerts</span>
                  <span className="text-xs text-muted-foreground">Get critical alerts for your area.</span>
                </Label>
                <Switch id="emergency-alerts" checked={emergencyAlerts} onCheckedChange={setEmergencyAlerts} />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <Label htmlFor="app-updates" className="flex flex-col gap-1">
                  <span>App Updates</span>
                  <span className="text-xs text-muted-foreground">Be notified when a new version is available.</span>
                </Label>
                <Switch id="app-updates" checked={appUpdates} onCheckedChange={setAppUpdates} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Mail className="size-6 text-primary" />
                <CardTitle>Contact Us</CardTitle>
              </div>
              <CardDescription>
                Have questions or feedback? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Get in Touch</h3>
                        <div className="flex items-center gap-3">
                            <Mail className="size-5 text-muted-foreground" />
                            <a href="mailto:scriptsquad2025@gmail.com" className="text-muted-foreground hover:text-primary">
                                scriptsquad2025@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="size-5 text-muted-foreground" />
                            <span className="text-muted-foreground">+91 9368225689</span>
                        </div>
                    </div>
                    <form className="space-y-4" onSubmit={handleContactSubmit}>
                        <Input placeholder="Your Name" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
                        <Input type="email" placeholder="Your Email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                        <Textarea placeholder="Your Message" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required />
                        <Button type="submit" className="w-full">
                            <MessageSquare className="mr-2"/>
                            Send Message
                        </Button>
                    </form>
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Info className="size-6 text-primary"/>
                    <CardTitle>About AidFast</CardTitle>
                </div>
              <CardDescription>
                Your reliable partner in emergency situations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold font-headline text-foreground">Our Story</h2>
                    <p className="text-muted-foreground">
                        AidFast was born from a simple idea: to make life-saving information accessible to everyone, anytime, anywhere. In critical moments, having a reliable guide can make all the difference. We are a team of passionate developers, first-responders, and healthcare professionals dedicated to empowering individuals with the knowledge to act confidently in emergencies.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                        <div className="mx-auto flex items-center justify-center size-12 rounded-full bg-primary/10 mb-2">
                            <Goal className="size-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Our Mission</h3>
                        <p className="text-muted-foreground text-sm">
                            To provide immediate and easy-to-understand first aid and emergency guidance to save lives and reduce suffering.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="mx-auto flex items-center justify-center size-12 rounded-full bg-primary/10 mb-2">
                            <Users className="size-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Our Vision</h3>
                        <p className="text-muted-foreground text-sm">
                            To build a world where everyone has the confidence and skills to be a first responder in their community.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="mx-auto flex items-center justify-center size-12 rounded-full bg-primary/10 mb-2">
                            <Handshake className="size-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">Our Values</h3>
                        <p className="text-muted-foreground text-sm">
                            Reliability, Accessibility, and Community. We are committed to accuracy and ensuring our platform is available to all.
                        </p>
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
