
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, MessageCircle, Sparkles, Users, Bell, Search, Filter, History, MessagesSquare, Menu, FilePen, Star, Briefcase, Settings, Shield, HelpCircle, BookOpen, ChevronRight, Edit, Handshake, Bookmark, Award, ShieldCheck, Ticket } from "lucide-react";
import { profiles, currentUser, UserProfile } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IcebreakerModal } from "@/components/icebreaker-modal";
import { Chat } from "@/components/chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
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


export function DashboardPage() {
  const router = useRouter();
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [isIcebreakerModalOpen, setIcebreakerModalOpen] = useState(false);
  const [chattingWith, setChattingWith] = useState<UserProfile | null>(null);

  const handleIcebreaker = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setIcebreakerModalOpen(true);
  };

  const handleMessage = (profile: UserProfile) => {
    setChattingWith(profile);
  };

  if (chattingWith) {
    return <Chat user={chattingWith} onBack={() => setChattingWith(null)} />;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
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

        <main className="flex-1 p-4 md:p-6">
          <div className="flex justify-end mb-4">
             <Button variant="outline" size="icon">
                <Filter className="h-5 w-5" />
             </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <Card key={profile.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardHeader className="p-0 relative">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
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
                        {profile.verified && profile.barCouncilId && (
                          <div className="flex items-center gap-1.5 text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <ShieldCheck className="h-5 w-5 text-blue-400" />
                            <span>{profile.barCouncilId}</span>
                          </div>
                        )}
                      </div>
                   </div>
                </CardHeader>

                <CardFooter className="p-2 bg-background grid grid-cols-4 gap-1">
                  <Button variant="ghost" className="flex flex-col h-auto p-2">
                    <Handshake className="h-5 w-5" />
                    <span className="text-xs">Interest</span>
                  </Button>
                  <Button variant="ghost" className="flex flex-col h-auto p-2">
                    <Star className="h-5 w-5" />
                    <span className="text-xs">Super Interest</span>
                  </Button>
                  <Button variant="ghost" className="flex flex-col h-auto p-2">
                    <Bookmark className="h-5 w-5" />
                    <span className="text-xs">Shortlist</span>
                  </Button>
                  <Button variant="ghost" className="flex flex-col h-auto p-2" onClick={() => handleMessage(profile)}>
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-xs">Chat</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
        
        <footer className="fixed bottom-0 left-0 right-0 bg-card border-t z-10">
          <div className="flex justify-around items-center h-16">
            <Button variant="ghost" className="flex flex-col h-auto p-2 text-primary" onClick={() => router.push('/dashboard/results')}>
              <Users className="h-6 w-6" />
              <span className="text-xs mt-1">Matches</span>
            </Button>
            <Button variant="ghost" className="flex flex-col h-auto p-2 text-muted-foreground" onClick={() => router.push('/dashboard/activity')}>
              <History className="h-6 w-6" />
              <span className="text-xs mt-1">Activity</span>
            </Button>
            <Button variant="ghost" className="flex flex-col h-auto p-2 text-muted-foreground" onClick={() => router.push('/dashboard/messenger')}>
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
      {isIcebreakerModalOpen && selectedProfile && (
        <IcebreakerModal
          user={selectedProfile}
          onOpenChange={setIcebreakerModalOpen}
        />
      )}
    </>
  );
}
