
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Lightbulb, Shield, UserX, HeartHandshake, CheckCircle2, BookUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SafetyCenterPage() {
  const router = useRouter();

  const safetyItems = [
    { icon: Lightbulb, text: "Online/ Personal Tips" },
    { icon: Shield, text: "Privacy Settings" },
    { icon: UserX, text: "Report/Block Profile" },
    { icon: HeartHandshake, text: "Mental Wellbeing" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Safety Center</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-8">
        <div className="text-left">
          <p className="text-muted-foreground">
            We are committed to protecting you in your search for a life partner. Explore how we help you stay safe!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {safetyItems.map((item, index) => (
            <Card key={index} className="p-4 flex flex-col items-center justify-center text-center space-y-2 aspect-square">
              <div className="bg-primary/10 p-3 rounded-full">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm font-semibold">{item.text}</p>
            </Card>
          ))}
        </div>

        <Card className="p-4 bg-muted/50 flex items-start gap-4">
          <div className="flex-1">
            <h2 className="font-bold text-lg">Help us make E-Advocate safe & authentic!</h2>
            <p className="text-sm text-muted-foreground mt-1">
              We take pride in being the leading platform for verified profiles. Be a part of the verified community!
            </p>
            <Button variant="link" className="p-0 h-auto mt-2 text-primary font-bold">
              Verify yourself
            </Button>
          </div>
          <CheckCircle2 className="h-6 w-6 text-blue-500" />
        </Card>

        <div>
          <h2 className="text-xl font-bold mb-4">We're here for you</h2>
          <Card className="p-4 flex items-center gap-4">
            <div className="bg-muted p-3 rounded-lg">
                <BookUser className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Other resources</h3>
              <p className="text-sm text-muted-foreground">Cyber cell contacts to help you take action</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
