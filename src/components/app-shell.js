
"use client";

import React from "react";
import { usePathname } from 'next/navigation';
import { HeartPulse, LifeBuoy, MapPin, ShieldAlert, Settings, Info } from "lucide-react";
import { TransitionLink } from "./ui/transition-link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
    {
        href: '/',
        label: 'Home',
        icon: HeartPulse
    },
    {
        href: '/services',
        label: 'Guides',
        icon: LifeBuoy
    },
    {
        href: '/locator',
        label: 'Locator',
        icon: MapPin
    },
    {
        href: '/emergency',
        label: 'Emergency',
        icon: ShieldAlert
    },
    {
        href: '/settings',
        label: 'Settings',
        icon: Settings
    }
];

export function AppShell({ children }) {
    const pathname = usePathname();
    const showAuthButtons = pathname !== '/login' && pathname !== '/signup';

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center border-b bg-background px-4 md:px-6 z-50">
                <div className="flex-1 flex items-center">
                    <TransitionLink href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <HeartPulse className="h-6 w-6 text-primary" />
                        <span className="">AidFast</span>
                    </TransitionLink>
                </div>

                <nav className="hidden md:flex flex-1 justify-center items-center">
                    <div className="flex items-center gap-5 text-sm lg:gap-6">
                        {navItems.map((item) => (
                            <TransitionLink 
                                key={item.label} 
                                href={item.href} 
                                className={`flex items-center gap-2 transition-colors font-bold hover:text-foreground ${pathname === item.href && item.href !== '/' ? 'text-foreground' : (pathname === '/' && item.href === '/') ? 'text-foreground' : 'text-muted-foreground'}`}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.label}
                            </TransitionLink>
                        ))}
                    </div>
                </nav>
                
                <div className="md:hidden flex-1 flex justify-end">
                  <Sheet>
                      <SheetTrigger asChild>
                          <Button
                              variant="outline"
                              size="icon"
                              className="shrink-0"
                          >
                              <Menu className="h-5 w-5" />
                              <span className="sr-only">Toggle navigation menu</span>
                          </Button>
                      </SheetTrigger>
                      <SheetContent side="left">
                          <nav className="grid gap-6 text-lg font-medium">
                              <TransitionLink
                                  href="/"
                                  className="flex items-center gap-2 text-lg font-semibold"
                              >
                                  <HeartPulse className="h-6 w-6 text-primary" />
                                  <span className="">AidFast</span>
                              </TransitionLink>
                              {navItems.map((item) => (
                                  <TransitionLink 
                                      key={item.label} 
                                      href={item.href} 
                                      className={`flex items-center gap-4 hover:text-foreground ${pathname === item.href ? 'text-foreground' : 'text-muted-foreground'}`}
                                  >
                                      <item.icon className="h-6 w-6" />
                                      {item.label}
                                  </TransitionLink>
                              ))}
                               {showAuthButtons && (
                                <>
                                <div className="border-t border-border pt-4 mt-4">
                                  <TransitionLink href="/login">
                                      <Button variant="outline" className="w-full">Login</Button>
                                  </TransitionLink>
                                  <TransitionLink href="/signup">
                                      <Button className="w-full mt-2">Sign Up</Button>
                                  </TransitionLink>
                                </div>
                                </>
                               )}
                          </nav>
                      </SheetContent>
                  </Sheet>
                </div>

                <div className="flex-1 hidden md:flex justify-end">
                    {showAuthButtons && (
                        <div className="flex items-center gap-2">
                            <TransitionLink href="/login">
                                <Button variant="outline">Login</Button>
                            </TransitionLink>
                            <TransitionLink href="/signup">
                                <Button>Sign Up</Button>
                            </TransitionLink>
                        </div>
                    )}
                </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
