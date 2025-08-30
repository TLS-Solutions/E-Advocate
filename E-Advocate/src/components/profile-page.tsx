
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Camera, FilePen, Info, UserCircle, Shield, Briefcase, Settings, Star, Search, Users, HelpCircle, BookOpen, ChevronRight, Menu, Award, Ticket, ShieldCheck, GraduationCap, MapPin, CalendarClock, BookUser, CheckCircle, Edit, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { currentUser } from "@/lib/data";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
    { icon: UserCircle, title: "Personal Details", description: "Name, Age, Contact", route: "/dashboard/profile/personal-details" },
    { icon: GraduationCap, title: "Educational Details", description: "Degree, University, Enrollment", route: "/dashboard/profile/educational-details" },
    { icon: Briefcase, title: "Practice Information", description: "Court, Specialization, Experience", route: "/dashboard/profile/practice-information" },
    { icon: MapPin, title: "Location Details", description: "Address, City, Country", route: "/dashboard/profile/location-details" },
    { icon: BookUser, title: "Career & Info", description: "Firm, Position, Languages", route: "/dashboard/profile/career-info" },
    { icon: CalendarClock, title: "Availability", description: "Consultation, Hours, Days", route: "/dashboard/profile/availability" },
    { icon: Settings, title: "Account Settings", description: "Privacy, Password, Notifications", route: "/dashboard/profile/account-settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
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
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Profile Completeness</CardTitle>
            <span className="text-sm font-bold text-primary">70%</span>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <Progress value={70} aria-label="70% profile completeness" />
            <p className="text-xs text-muted-foreground mt-2">Complete your profile to get more visibility</p>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {profileSections.map((section, index) => (
            <Card key={index} className="p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/50" onClick={() => router.push(section.route)}>
              <div className="bg-muted p-3 rounded-lg">
                <section.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{section.title}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
              <Edit className="h-5 w-5 text-muted-foreground" />
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
