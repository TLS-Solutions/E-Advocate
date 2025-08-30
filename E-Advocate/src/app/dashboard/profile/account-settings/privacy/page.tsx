
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function PrivacySettingsPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Settings Saved",
        description: "Your privacy settings have been updated.",
    });
    router.push('/dashboard/profile/account-settings');
  };

  const privacyOptions = [
    { id: "showProfile", label: "Show my profile to all members", description: "Your profile will be visible in search results." },
    { id: "showContact", label: "Show my contact number", description: "Allow members to see your phone number." },
    { id: "showEmail", label: "Show my email address", description: "Allow members to see your email address." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Privacy Settings</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="bg-card rounded-lg border">
                {privacyOptions.map((option, index) => (
                    <React.Fragment key={option.id}>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex-1 pr-4">
                                <Label htmlFor={option.id} className="font-semibold">{option.label}</Label>
                                <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                            </div>
                            <Switch id={option.id} defaultChecked={index < 1} />
                        </div>
                        {index < privacyOptions.length - 1 && <Separator />}
                    </React.Fragment>
                ))}
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
