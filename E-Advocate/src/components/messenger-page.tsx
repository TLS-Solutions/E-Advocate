
"use client";

import React, { useState } from "react";
import { Users, Bell, Search, History, MessagesSquare, Ticket, Menu, FilePen, Star, Briefcase, Settings, Shield, HelpCircle, BookOpen, ChevronRight, EyeOff, Award } from "lucide-react";
import { currentUser } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


function AppSidebar() {
  const router = useRouter();

  const menuItems = [
    { icon: FilePen, text: "Edit Profile", route: "/dashboard/profile" },
    { icon: Users, text: "Search Preferences", route: "/dashboard/search-preferences" },
    { icon: Star, text: "Featured Profiles", route: "/dashboard/featured-profiles" },
    { icon: Ticket, text: "Upgrade", route: "/dashboard/upgrade" },
    { icon: Settings, text: "Account & Settings", route: "/dashboard/profile/account-settings" },
    { icon: Shield, text: "Safety Center", route: "/dashboard/safety-center" },
    { icon: HelpCircle, text: "Help & Support", route: "/dashboard/help-support" },
    { icon: BookOpen, text: "Blogs", route: "/dashboard/blogs" },
    { icon: Award, text: "Credits", route: "/dashboard/credits" },
  ];

  return (
    <div className="flex flex-col h-full bg-card text-card-foreground">
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-16 w-16">
            <AvatarImage src={currentUser.image} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">{currentUser.name}</p>
            <p className="text-sm text-muted-foreground">ID - {currentUser.id}</p>
          </div>
        </div>
        <Button onClick={() => router.push('/dashboard/upgrade')} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Upgrade Membership</Button>
        <p className="text-xs text-center text-muted-foreground">UPTO 53% OFF ALL MEMBERSHIP PLANS</p>
      </div>
      <Separator />
      <div className="flex-1 overflow-y-auto">
        <nav className="py-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a onClick={() => item.route && router.push(item.route)} className="flex items-center justify-between px-4 py-3 hover:bg-muted cursor-pointer">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{item.text}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
       <Separator />
    </div>
  );
}


export function MessengerPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
            <div className="relative">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={currentUser.image} alt={currentUser.name} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                 <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="absolute -bottom-2 -right-2 h-6 w-6 bg-background rounded-full border">
                            <Menu className="h-4 w-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 w-[300px] sm:w-[300px]">
                        <SheetHeader className="p-4">
                          <SheetTitle className="sr-only">Menu</SheetTitle>
                        </SheetHeader>
                        <AppSidebar />
                    </SheetContent>
                </Sheet>
            </div>
          <h1 className="text-xl font-bold font-headline">Messenger</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">My Conversations</h2>
             <Tabs defaultValue="accepted" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 border-b">
                    <TabsTrigger value="accepted" className="pb-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent">Accepted</TabsTrigger>
                    <TabsTrigger value="interests" className="pb-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent">Interests</TabsTrigger>
                    <TabsTrigger value="calls" className="pb-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-transparent">Calls</TabsTrigger>
                </TabsList>
                <TabsContent value="accepted" className="mt-6">
                   <div className="text-center p-8 mt-16">
                       <EyeOff className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                       <h3 className="font-bold text-lg">Your profile is under screening for upto 24hrs</h3>
                       <p className="text-muted-foreground text-sm max-w-xs mx-auto">To maintain safety standards, we're manually screening your profile. You can access your messenger once it's live.</p>
                   </div>
                </TabsContent>
                 <TabsContent value="interests">
                    <p className="text-center text-muted-foreground p-8">No interests yet.</p>
                 </TabsContent>
                 <TabsContent value="calls">
                    <p className="text-center text-muted-foreground p-8">No calls yet.</p>
                 </TabsContent>
            </Tabs>
        </div>
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t z-10">
        <div className="flex justify-around items-center h-16">
          <Button variant="ghost" className="flex flex-col h-auto p-2 text-muted-foreground" onClick={() => router.push('/dashboard/results')}>
            <Users className="h-6 w-6" />
            <span className="text-xs mt-1">Matches</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto p-2 text-muted-foreground" onClick={() => router.push('/dashboard/activity')}>
            <History className="h-6 w-6" />
            <span className="text-xs mt-1">Activity</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto p-2 text-primary" onClick={() => router.push('/dashboard/messenger')}>
            <MessagesSquare className="h-6 w-6" />
            <span className="text-xs mt-1">Messenger</span>
          </Button>
          <Button variant="ghost" className="flex flex-col h-auto p-2 text-muted-foreground" onClick={() => router.push('/dashboard/my-cases')}>
            <Briefcase className="h-6 w-6" />
            <span className="text-xs mt-1">My Cases</span>
          </Button>
        </div>
      </footer>
    </div>
  );
}
