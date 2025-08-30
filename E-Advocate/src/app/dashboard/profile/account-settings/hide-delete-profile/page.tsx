
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trash2, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast";


export default function HideDeleteProfilePage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleHideProfile = () => {
     toast({
        title: "Profile Hidden",
        description: "Your profile is now hidden from search results.",
    });
  }

  const handleDeleteProfile = () => {
    toast({
        variant: "destructive",
        title: "Profile Deleted",
        description: "Your account has been permanently deleted.",
    });
    router.push('/');
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Hide/Delete Profile</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <Card className="border-yellow-500 bg-yellow-50/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <EyeOff className="h-5 w-5 text-yellow-600" />
                    Hide Profile
                </CardTitle>
                <CardDescription>
                    Temporarily hide your profile. You can unhide it anytime. While hidden, you won't appear in searches, but you can still access your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="secondary" onClick={handleHideProfile}>Hide My Profile</Button>
            </CardContent>
        </Card>

        <Card className="border-destructive bg-destructive/10">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                    <Trash2 className="h-5 w-5" />
                    Delete Profile
                </CardTitle>
                <CardDescription className="text-destructive/80">
                   Permanently delete your profile and all associated data. This action is irreversible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete My Profile</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteProfile} className="bg-destructive hover:bg-destructive/90">Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
