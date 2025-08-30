
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const legalSpecializations = {
  "Criminal Law": ["IPC & CrPC", "Cyber Crimes"],
  "Civil Law": ["Property Disputes", "Contract Breach"],
};
type Department = keyof typeof legalSpecializations;

export default function EditPracticeInformationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedDepartment, setSelectedDepartment] = useState<Department | ''>('Civil Law');
  const [subDepartments, setSubDepartments] = useState<string[]>(legalSpecializations["Civil Law"]);

  const handleDepartmentChange = (value: string) => {
    const department = value as Department;
    setSelectedDepartment(department);
    setSubDepartments(legalSpecializations[department] || []);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('profileStatus', 'review');
    toast({
        title: "Profile Updated",
        description: "Your practice information has been saved and is under review.",
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
          <h1 className="text-xl font-bold font-headline">Practice Information</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="court-of-practice">Court of Practice</Label>
                    <Select defaultValue="high-court">
                        <SelectTrigger id="court-of-practice"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="supreme-court">Supreme Court</SelectItem>
                            <SelectItem value="high-court">High Court</SelectItem>
                            <SelectItem value="district-court">District Court</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Specialization/Department</Label>
                    <Select onValueChange={handleDepartmentChange} defaultValue="Civil Law">
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {Object.keys(legalSpecializations).map(dept => (
                                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Sub-Department</Label>
                    <Select disabled={!selectedDepartment} defaultValue="Property Disputes">
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {subDepartments.map(subDept => (
                                <SelectItem key={subDept} value={subDept}>{subDept}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" defaultValue="5" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bar-association">Bar Association Name (If any)</Label>
                    <Input id="bar-association" defaultValue="Delhi High Court Bar Association" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="practice-license">Practice License Upload</Label>
                    <p className="text-xs text-muted-foreground">Current: practice-license.pdf</p>
                    <Input id="practice-license" type="file" />
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
