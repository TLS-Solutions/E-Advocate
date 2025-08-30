
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditAvailabilityPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('profileStatus', 'review');
    toast({
        title: "Profile Updated",
        description: "Your availability has been saved and is under review.",
    });
    router.push('/dashboard/profile');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Availability</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <Label>Available For</Label>
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="phone-consultation" defaultChecked/>
                        <Label htmlFor="phone-consultation" className="font-normal">Phone Consultation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="video-consultation" defaultChecked/>
                        <Label htmlFor="video-consultation" className="font-normal">Video Consultation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="in-person-consultation" defaultChecked/>
                        <Label htmlFor="in-person-consultation" className="font-normal">In-person Consultation</Label>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <Label>Working Hours</Label>
                <div className="flex items-center gap-4">
                    <Input type="time" defaultValue="09:00" />
                    <span className="text-muted-foreground">to</span>
                    <Input type="time" defaultValue="17:00" />
                </div>
            </div>
            <div className="space-y-4">
                <Label>Available Days</Label>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <div key={day} className="flex items-center space-x-2">
                            <Checkbox id={`day-${day.toLowerCase()}`} defaultChecked={!['Sat', 'Sun'].includes(day)} />
                            <Label htmlFor={`day-${day.toLowerCase()}`} className="font-normal">{day}</Label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                <Button type="submit">Save Changes</Button>
            </div>
        </form>
      </main>
    </div>
  );
}
