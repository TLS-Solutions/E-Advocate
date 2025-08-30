
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const legalSpecializations = {
  "Criminal Law": [
    "IPC & CrPC",
    "Cyber Crimes",
    "Juvenile Justice",
    "White-Collar Crime",
    "Narcotics Law"
  ],
  "Civil Law": [
    "Property Disputes",
    "Injunctions",
    "Contract Breach",
    "Recovery Suits"
  ],
  "Family Law": [
    "Hindu Law",
    "Muslim Law",
    "Christian Law",
    "Marriage & Divorce",
    "Adoption",
    "Maintenance"
  ],
  "Corporate / Company Law": [
    "Company Incorporation",
    "Mergers & Acquisitions",
    "Insolvency & Bankruptcy",
    "Corporate Governance",
    "SEBI Compliance"
  ],
  "Any": [],
  "Others": []
};

type Department = keyof typeof legalSpecializations;

export function FileACasePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedDepartment, setSelectedDepartment] = useState<Department | ''>('');
  const [subDepartments, setSubDepartments] = useState<string[]>([]);

  const handleDepartmentChange = (value: string) => {
    const department = value as Department;
    setSelectedDepartment(department);
    setSubDepartments(legalSpecializations[department] || []);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Case Filed Successfully",
        description: "Your case has been submitted. You will be notified shortly.",
    });
    router.push('/dashboard/my-cases');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">File a New Case</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <Card>
            <CardHeader>
                <CardTitle>Case Details</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <Label htmlFor="case-title">Case Title</Label>
                    <Input id="case-title" placeholder="e.g., Land dispute in Bangalore" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="case-description">Case Description</Label>
                    <Textarea id="case-description" placeholder="Provide a detailed description of your case" required rows={5} />
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label>Case Category</Label>
                        <Select onValueChange={handleDepartmentChange} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(legalSpecializations).map(dept => (
                            <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Sub-Category</Label>
                        <Select disabled={!selectedDepartment || selectedDepartment === 'Others' || selectedDepartment === 'Any'} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a sub-category" />
                        </SelectTrigger>
                        <SelectContent>
                            {subDepartments.map(subDept => (
                            <SelectItem key={subDept} value={subDept}>{subDept}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="documents">Upload Relevant Documents</Label>
                    <div className="flex items-center justify-center w-full">
                        <Label
                            htmlFor="documents"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/75"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">PDF, DOC, JPG, PNG (MAX. 5MB)</p>
                            </div>
                            <Input id="documents" type="file" className="hidden" multiple />
                        </Label>
                    </div>
                </div>
                <div className="space-y-3">
                    <Label>Find an Advocate</Label>
                    <RadioGroup defaultValue="search" className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="search" id="search" />
                            <Label htmlFor="search" className="font-normal">I will search for an advocate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="assign" id="assign" />
                            <Label htmlFor="assign" className="font-normal">Please assign an advocate for me</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit">Submit Case</Button>
                </div>
                </form>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
