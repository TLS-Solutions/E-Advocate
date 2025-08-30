
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, Heart, FileText, Shield, FileBadge, Cookie, AlertTriangle, Scale, BookCopy, FileClock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export function HelpSupportPage() {
  const router = useRouter();

  const supportItems = [
    {
      title: "Frequently Asked Questions",
      description: "Get answers to common queries about memberships, privacy settings & more",
    },
    {
      title: "Chat Support",
      description: "Connect with our support team via chat for quick assistance with your queries",
    },
    {
      title: "About Us",
      description: "Made with ❤️ in India",
      version: "Version 38.10.5",
    },
  ];

  const legalItems = [
    { icon: Building, title: "E-Advocate Centers", description: "Find our centers near you" },
    { icon: AlertTriangle, title: "Fraud Alert", description: "Stay safe from online fraud" },
    { icon: FileText, title: "Terms Of Use", description: "Read our terms of service" },
    { icon: FileBadge, title: "Third Party Terms Of Use", description: "Terms for third-party services" },
    { icon: Shield, title: "Privacy Policy", description: "How we handle your data" },
    { icon: Cookie, title: "Cookie Policy", description: "Our use of cookies" },
    { icon: BookCopy, title: "Privacy Features", description: "Control your privacy" },
    { icon: FileClock, title: "Summons / Notices", description: "Legal notices and summons" },
    { icon: Scale, title: "Grievances", description: "File a grievance with us" },
    { icon: FileBadge, title: "Refund Policy", description: "Our refund and cancellation policy" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Help & Support</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-8">
        <div>
            <p className="text-muted-foreground">You can get in touch with us for any query or help needed</p>
        </div>
        
        <div className="bg-card rounded-lg border">
          {supportItems.map((item, index) => (
            <div key={index}>
              <button className="w-full flex justify-between items-center p-4 text-left hover:bg-muted/50">
                <div className="flex-1">
                  <h2 className="font-semibold text-foreground">
                    {item.title}
                    {item.version && <span className="text-sm font-normal text-muted-foreground ml-2">({item.version})</span>}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{item.description.includes("❤️") ? 
                    <>Made with <Heart className="inline h-4 w-4 text-red-500 fill-current" /> in India</> 
                    : item.description}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
              {index < supportItems.length - 1 && <Separator />}
            </div>
          ))}
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Legal Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {legalItems.map((item, index) => (
                        <React.Fragment key={item.title}>
                            <button className="w-full flex justify-between items-center p-3 text-left hover:bg-muted/50 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <item.icon className="h-5 w-5 text-muted-foreground" />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            </button>
                             {index < legalItems.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </div>
            </CardContent>
        </Card>

      </main>
    </div>
  );
}
