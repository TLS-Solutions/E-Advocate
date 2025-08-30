
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronDown } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

const languages = ["English", "Hindi", "Spanish", "French", "Bengali", "Tamil", "Telugu"];

export default function EditCareerInfoPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["English", "Hindi"]);

  const handleMultiSelectChange = (value: string) => {
    setSelectedLanguages(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('profileStatus', 'review');
    toast({
        title: "Profile Updated",
        description: "Your career information has been saved and is under review.",
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
          <h1 className="text-xl font-bold font-headline">Career & Info</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firm-name">Current Firm / Organization (If any)</Label>
                    <Input id="firm-name" defaultValue="Apex Legal" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="position">Position / Designation</Label>
                    <Input id="position" defaultValue="Senior Associate" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="work-type">Work Type</Label>
                    <Select defaultValue="full-time">
                        <SelectTrigger id="work-type"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Languages Known</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant="outline"
                            className="w-full justify-between font-normal"
                            >
                            {selectedLanguages.length > 0 ? selectedLanguages.join(', ') : "Select languages"}
                            <ChevronDown className="h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                            <div className="p-2 space-y-1">
                            {languages.map(lang => (
                                <div key={lang} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
                                    <Checkbox
                                        id={`lang-${lang}`}
                                        checked={selectedLanguages.includes(lang)}
                                        onCheckedChange={() => handleMultiSelectChange(lang)}
                                    />
                                    <Label htmlFor={`lang-${lang}`} className="font-normal cursor-pointer flex-1">{lang}</Label>
                                </div>
                            ))}
                            </div>
                        </PopoverContent>
                    </Popover>
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
