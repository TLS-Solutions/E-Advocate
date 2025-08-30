
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function ManageMessagesPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Settings Saved",
        description: "Your message settings have been updated.",
    });
    router.push('/dashboard/profile/account-settings');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Manage Messages</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="bg-card rounded-lg border p-6 space-y-6">
            <h2 className="text-lg font-semibold">Interest Settings</h2>
            <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="auto-accept" className="font-semibold">Automatically accept new interests</Label>
                    <p className="text-xs text-muted-foreground mt-1">Save time by auto-accepting interests from matching profiles.</p>
                </div>
                <Switch id="auto-accept" />
            </div>
             <Separator />
            <div className="flex items-center justify-between">
                 <div>
                    <Label htmlFor="send-prewritten" className="font-semibold">Send a pre-written message on acceptance</Label>
                    <p className="text-xs text-muted-foreground mt-1">Automatically send a message when you accept an interest.</p>
                 </div>
                <Switch id="send-prewritten" defaultChecked />
            </div>
            <div className="space-y-2">
                <Label htmlFor="prewritten-message">Your pre-written message</Label>
                <Textarea
                    id="prewritten-message"
                    placeholder="e.g., Thank you for your interest! I'm looking forward to connecting."
                    defaultValue="Thank you for your interest! I'm happy to connect."
                />
            </div>
          </div>
          
          <div className="bg-card rounded-lg border p-6 space-y-4">
             <h2 className="text-lg font-semibold">Who Can Message You?</h2>
             <RadioGroup defaultValue="accepted" className="space-y-3">
                <div className="flex items-center space-x-3">
                    <RadioGroupItem value="anyone" id="anyone" />
                    <Label htmlFor="anyone" className="font-normal">Anyone</Label>
                </div>
                <div className="flex items-center space-x-3">
                    <RadioGroupItem value="accepted" id="accepted" />
                    <Label htmlFor="accepted" className="font-normal">Only members whose interest I've accepted</Label>
                </div>
                <div className="flex items-center space-x-3">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium" className="font-normal">Only premium members</Label>
                </div>
             </RadioGroup>
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
