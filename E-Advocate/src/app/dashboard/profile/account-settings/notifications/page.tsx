
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotificationSettingsPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Settings Saved",
        description: "Your notification settings have been updated.",
    });
    router.push('/dashboard/profile/account-settings');
  };

  const notificationGroups = [
    {
      title: "Email Notifications",
      options: [
        { id: "email-interests", label: "New Interests Received", defaultChecked: true },
        { id: "email-messages", label: "New Messages", defaultChecked: true },
        { id: "email-views", label: "Profile Views", defaultChecked: false },
        { id: "email-updates", label: "Product Updates & Offers", defaultChecked: true },
      ]
    },
    {
      title: "Push Notifications",
      options: [
        { id: "push-interests", label: "New Interests Received", defaultChecked: true },
        { id: "push-messages", label: "New Messages", defaultChecked: true },
        { id: "push-matches", label: "New Matches", defaultChecked: true },
      ]
    },
    {
      title: "SMS Notifications",
      options: [
        { id: "sms-alerts", label: "Critical Account Alerts", defaultChecked: true },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Notification Settings</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-8" onSubmit={handleSubmit}>
          {notificationGroups.map((group) => (
            <Card key={group.title}>
                <CardHeader>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {group.options.map((option, index) => (
                        <React.Fragment key={option.id}>
                            <div className="flex items-center justify-between">
                                <Label htmlFor={option.id} className="font-normal">{option.label}</Label>
                                <Switch id={option.id} defaultChecked={option.defaultChecked} />
                            </div>
                            {index < group.options.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
