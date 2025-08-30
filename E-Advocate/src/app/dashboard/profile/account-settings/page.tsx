
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AccountSettingsPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic here
    router.push('/login');
  };

  const settingsItems = [
    {
      heading: "Manage Account",
      items: [
        { label: "Privacy Settings", onClick: () => router.push('/dashboard/profile/account-settings/privacy') },
        { label: "Change Password", onClick: () => router.push('/dashboard/profile/account-settings/change-password') },
        { label: "Hide/Delete Profile", onClick: () => router.push('/dashboard/profile/account-settings/hide-delete-profile') },
      ],
    },
    {
      heading: "Manage Messages",
      items: [
        { label: "Manage Messages for Interests & Acceptances", onClick: () => router.push('/dashboard/profile/account-settings/manage-messages') },
      ],
    },
    {
      heading: "Notifications",
      items: [
        { label: "Notification Settings", onClick: () => router.push('/dashboard/profile/account-settings/notifications') },
      ],
    },
    {
      heading: "For Advocates",
      items: [
        { label: "Join Platform", onClick: () => router.push('/register') },
        { label: "Find Clients", onClick: () => router.push('/dashboard/results') },
        { label: "Pricing", onClick: () => router.push('/dashboard/upgrade') },
      ],
    },
     {
      heading: "For Clients",
      items: [
        { label: "Find Advocates", onClick: () => router.push('/dashboard/results') },
        { label: "Legal Resources", onClick: () => router.push('/dashboard/help-support') },
        { label: "How it Works", onClick: () => {} },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Account & Settings</h1>
        </div>
      </header>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-4 md:p-6 space-y-8">
          {settingsItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-sm font-semibold text-muted-foreground mb-2 px-2">{section.heading}</h2>
              <div className="bg-card rounded-lg border">
                {section.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <button
                      onClick={item.onClick}
                      className="w-full flex justify-between items-center p-4 text-left text-foreground hover:bg-muted/50"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                    {itemIndex < section.items.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 md:p-6 mt-auto">
          <Button variant="outline" className="w-full justify-start p-4 h-auto" onClick={handleLogout}>
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>
      </main>
    </div>
  );
}
