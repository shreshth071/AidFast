"use client";

import React from "react";
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarProvider, SidebarTrigger, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { HeartPulse, LifeBuoy, MapPin } from "lucide-react";
import { TransitionLink } from "./ui/transition-link";

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
    }
];

export function AppShell({ children }) {
    const pathname = usePathname();
    return (
        <div className="flex min-h-screen w-full">
            <Sidebar variant="inset" collapsible="icon">
                <div className="flex h-full flex-col p-2">
                    <div className="flex h-12 items-center justify-center p-2">
                        <TransitionLink href="/" className="flex items-center gap-2 font-bold text-lg">
                            <HeartPulse className="size-7 text-primary" />
                            <span className="text-foreground group-data-[collapsible=icon]:hidden">AidFast</span>
                        </TransitionLink>
                    </div>
                    <SidebarMenu className="mt-8 flex-1">
                        {navItems.map((item) => (
                            <SidebarMenuItem key={item.label}>
                                <TransitionLink href={item.href}>
                                    <SidebarMenuButton isActive={pathname === item.href} tooltip={{children: item.label}} className="font-bold">
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </SidebarMenuButton>
                                </TransitionLink>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </div>
            </Sidebar>
            <SidebarInset>
                <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 md:hidden">
                    <TransitionLink href="/" className="flex items-center gap-2 font-bold text-lg">
                        <HeartPulse className="size-7 text-primary" />
                        <span className="text-foreground">AidFast</span>
                    </TransitionLink>
                    <SidebarTrigger />
                </header>
                {children}
            </SidebarInset>
        </div>
    );
}
