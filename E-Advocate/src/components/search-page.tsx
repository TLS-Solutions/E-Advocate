
"use client"

import React, { useState } from "react"
import { Menu, Plus, UserCircle2, FilePen, Users, Star, Search, Briefcase, Settings, Shield, HelpCircle, BookOpen, ChevronRight, Award, Ticket } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { currentUser } from "@/lib/data"


function SelectField({ label, placeholder, items }: { label: string; placeholder: string; items: string[] }) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item.toLowerCase()}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

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

const AdvocateSearchForm = () => (
    <div className="space-y-6">
      <div className="space-y-1">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="Enter city or state" />
      </div>
      <SelectField
        label="Case Category"
        placeholder="Select case category"
        items={["Civil Law", "Criminal Law", "Family Law", "Corporate Law", "Labor Law", "Tax Law"]}
      />
      <SelectField
        label="Language"
        placeholder="Select language"
        items={["English", "Spanish", "Hindi", "Bengali", "Mandarin", "French"]}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="min-experience">Min. Experience</Label>
          <Input id="min-experience" placeholder="e.g., 5 years" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="max-experience">Max. Experience</Label>
          <Input id="max-experience" placeholder="e.g., 20 years" />
        </div>
      </div>
      <SelectField
        label="Court"
        placeholder="Select court type"
        items={["District Court", "High Court", "Supreme Court"]}
      />
      <div className="flex justify-between items-center">
        <p className="font-medium">MORE OPTIONS</p>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
);

const ClientSearchForm = () => (
    <div className="space-y-6">
        <div className="space-y-1">
            <Label htmlFor="client-location">Location</Label>
            <Input id="client-location" placeholder="Enter city or state" />
        </div>
        <SelectField
            label="Legal Issue Category"
            placeholder="Select category"
            items={["Criminal Law", "Civil Law", "Family Law", "Corporate / Company Law", "Constitutional Law"]}
        />
        <SelectField
            label="Preferred Consultation Mode"
            placeholder="Select mode"
            items={["Phone", "Video", "In-person"]}
        />
        <SelectField
            label="Preferred Advocate Type"
            placeholder="Select type"
            items={["Any", "Junior", "Senior"]}
        />
         <SelectField
            label="Preferred Language"
            placeholder="Select language"
            items={["English", "Hindi", "Spanish", "French"]}
        />
    </div>
);


export function SearchPage() {
  const router = useRouter()
  const [searchFor, setSearchFor] = useState('advocate');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b">
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
        <Button variant="link" onClick={() => router.push("/login?tab=register")}>
          REGISTER
        </Button>
      </header>

      <main className="flex-1 p-4">
        <Tabs defaultValue="criteria">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 mb-4">
            <TabsTrigger
              value="criteria"
              className="pb-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              SEARCH BY CRITERIA
            </TabsTrigger>
            <TabsTrigger
              value="profileId"
              className="pb-2 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              SEARCH BY PROFILE ID
            </TabsTrigger>
          </TabsList>
          <TabsContent value="criteria">
            <div className="space-y-6">
               <div className="space-y-1">
                <Label>I am looking for an</Label>
                <Select value={searchFor} onValueChange={setSearchFor}>
                    <SelectTrigger className="w-full">
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="advocate">Advocate</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              {searchFor === 'advocate' ? <AdvocateSearchForm /> : <ClientSearchForm />}

              <Button className="w-full h-12" onClick={() => router.push("/dashboard/results")}>SEARCH</Button>
            </div>
          </TabsContent>
          <TabsContent value="profileId">
            <div className="p-8 text-center text-muted-foreground">
              <UserCircle2 className="mx-auto h-12 w-12 mb-4" />
              <p>Search by Profile ID feature coming soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
