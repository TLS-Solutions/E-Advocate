"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, MessageCircle, Sparkles, Users, Bell, Search, Filter, History, MessagesSquare, FilePen, Star, Ticket, Settings, Shield, HelpCircle, BookOpen, Award, ChevronRight, Menu, Briefcase, ShieldCheck, Handshake } from "lucide-react";
import { profiles, currentUser, UserProfile } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IcebreakerModal } from "@/components/icebreaker-modal";
import { Chat } from "@/components/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

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
        <Link href="/dashboard/upgrade" prefetch={true}>
          <Button className="w-full bg-primary">
            <p className="text-xs text-center text-muted-foreground">UPTO 53% OFF ALL MEMBERSHIP</p>
          </Button>
        </Link>
      </div>
      <Separator />
      <div className="flex-1 overflow-y-auto">
        <nav className="py-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.route} prefetch={true} className="flex items-center justify-between px-4 py-3 hover:bg-muted cursor-pointer rounded-lg mx-2">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{item.text}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Separator />
    </div>
  );
}

export function DashboardPage() {
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInterest = (profile: UserProfile) => {
    console.log("Interested in:", profile.name);
  };

  const handleSuperInterest = (profile: UserProfile) => {
    console.log("Super interested in:", profile.name);
  };

  const handleShortlist = (profile: UserProfile) => {
    console.log("Shortlisted:", profile.name);
  };

  const handleChat = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setIsChatOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b border-border">
        <div className="flex items-center gap-2">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[300px] sm:w-[300px]">
              <SheetHeader className="p-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <AppSidebar />
            </SheetContent>
          </Sheet>
          <div>
            <h1 className="text-xl font-bold font-headline">My matches</h1>
          </div>
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

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:flex md:flex-col md:w-[280px] border-r border-border">
          <AppSidebar />
        </aside>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="flex justify-end mb-4">
            <Button variant="outline" size="icon">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {profiles.map((profile) => (
              <Card key={profile.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-card">
                <CardHeader className="p-0 relative">
                  <div className="relative h-80 w-full">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover"
                      data-ai-hint="portrait person"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                      <div className="flex justify-between items-end">
                        <div>
                          <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
                          <p className="text-sm">{profile.location}</p>
                          <p className="text-sm">5+ years experience</p>
                          <p className="text-sm">Civil, Criminal Law</p>
                        </div>
                        {profile.verified && (
                          <div className="flex items-center gap-1.5 text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <ShieldCheck className="h-5 w-5 text-blue-400" />
                            <span>{profile.barCouncilId || "BAR123"}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardFooter className="p-2 bg-background grid grid-cols-4 gap-1 border-t border-border">
                  <IcebreakerModal onSend={(message) => console.log(message)}>
                    <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-2">
                      <Handshake className="h-5 w-5 mb-1" />
                      <span className="text-xs">Interest</span>
                    </Button>
                  </IcebreakerModal>

                  <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-2" onClick={() => handleSuperInterest(profile)}>
                    <Star className="h-5 w-5 mb-1" />
                    <span className="text-xs">Super Interest</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-2" onClick={() => handleShortlist(profile)}>
                    <Sparkles className="h-5 w-5 mb-1" />
                    <span className="text-xs">Shortlist</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="flex flex-col items-center h-auto py-2" onClick={() => handleChat(profile)}>
                    <MessagesSquare className="h-5 w-5 mb-1" />
                    <span className="text-xs">Chat</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 bg-card border-t z-10 md:hidden">
          <div className="grid grid-cols-4 h-16">
            <Link href="/dashboard/results" prefetch={true} className="flex flex-col items-center justify-center gap-1 text-primary hover:bg-muted/50">
              <Users className="h-5 w-5" />
              <span className="text-xs">Matches</span>
            </Link>
            <Link href="/dashboard/activity" prefetch={true} className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground hover:bg-muted/50">
              <History className="h-5 w-5" />
              <span className="text-xs">Activity</span>
            </Link>
            <Link href="/dashboard/messenger" prefetch={true} className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground hover:bg-muted/50">
              <MessagesSquare className="h-5 w-5" />
              <span className="text-xs">Messenger</span>
            </Link>
            <Link href="/dashboard/my-cases" prefetch={true} className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground hover:bg-muted/50">
              <Briefcase className="h-5 w-5" />
              <span className="text-xs">My Cases</span>
            </Link>
          </div>
        </footer>
      </div>

      {selectedProfile && (
        <Chat
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          recipientName={selectedProfile.name}
          recipientImage={selectedProfile.image}
        />
      )}
    </div>
  );
}
