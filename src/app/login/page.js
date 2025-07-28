
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
import { TransitionLink } from "@/components/ui/transition-link";
import { HeartPulse } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/10 mb-4 mx-auto ring-8 ring-primary/5">
                <HeartPulse className="size-8 text-primary" />
            </div>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Sign in</Button>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <TransitionLink href="/signup" className="underline">
              Sign up
            </TransitionLink>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
