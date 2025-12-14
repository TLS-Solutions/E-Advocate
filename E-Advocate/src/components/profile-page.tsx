"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Camera, FilePen, Info, UserCircle, Shield, Briefcase, Settings, Star, Search, Users, Ticket, HelpCircle, BookOpen, Award, ChevronRight, CheckCircle, Clock, Edit, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { currentUser } from "@/lib/data";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

function AppSidebar() {
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
                <Link href={item.route} prefetch={true} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
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

export function ProfilePage() {
  const router = useRouter();
  const [profileStatus, setProfileStatus] = React.useState<"verified" | "review">("verified");

  React.useEffect(() => {
    const status = sessionStorage.getItem('profileStatus') as "verified" | "review";
    if (status) {
      setProfileStatus(status);
    }
  }, []);

  const profileSections = [
    { icon: UserCircle, title: "Basic Information", description: "Name, age, location" },
    { icon: Briefcase, title: "Career Info", description: "Profession, education" },
    { icon: Info, title: "About Me", description: "Bio, interests, hobbies" },
    { icon: Shield, title: "Verification", description: "ID proof, selfie" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 border-b border-border bg-background">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">My Profile</h1>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image
              src={currentUser.image}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-primary"
              data-ai-hint="person avatar"
            />
            <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{currentUser.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              {profileStatus === 'verified' ? (
                <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Verified
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  <Clock className="h-4 w-4 mr-1" />
                  Under Review
                </Badge>
              )}
              {currentUser.verified && currentUser.barCouncilId && (
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                  <span>{currentUser.barCouncilId}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Profile Completeness</CardTitle>
            <span className="text-sm font-bold text-primary">70%</span>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <Progress value={70} aria-label="70% profile completeness" />
            <p className="text-xs text-muted-foreground mt-2">Complete your profile to get more matches</p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {profileSections.map((section, index) => (
            <Link key={index} href={section.route} className="block">
              <Card className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="bg-muted p-3 rounded-lg">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <Edit className="h-5 w-5 text-muted-foreground" />
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
