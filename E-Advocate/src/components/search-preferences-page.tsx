
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

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
  "Constitutional Law": [
    "Fundamental Rights",
    "Election Law",
    "Writ Petitions",
    "Centre-State Relations"
  ],
  "Intellectual Property Law": [
    "Patents",
    "Trademarks",
    "Copyrights",
    "Designs",
    "GI Tags"
  ],
  "Contract Law": [
    "Commercial Contracts",
    "E-Contracts",
    "Service Agreements",
    "Govt Contracts"
  ],
  "Tort Law": [
    "Defamation",
    "Negligence",
    "Nuisance",
    "Medical Malpractice"
  ],
  "Administrative Law": [
    "Service Law",
    "Tribunals",
    "RTI & Public Duty",
    "Disciplinary Actions"
  ],
  "Labour & Employment Law": [
    "Wages & Salary Law",
    "Industrial Disputes",
    "EPF & ESI Law",
    "Workplace Harassment"
  ],
  "Property Law": [
    "Lease & Rent",
    "Land Titles",
    "Transfer of Property",
    "Real Estate RERA"
  ],
  "Banking & Finance Law": [
    "Debt Recovery",
    "Loan Default Cases",
    "NBFC & RBI Compliance",
    "SEBI & Securities Law"
  ],
  "Consumer Protection Law": [
    "E-commerce Complaints",
    "Service Deficiency",
    "Product Liability",
    "Consumer Forums"
  ],
  "Environmental Law": [
    "Pollution Control",
    "Forest & Wildlife",
    "Environment Impact Assessment",
    "Climate Litigation"
  ],
  "Cyber Law / IT Law": [
    "Data Privacy",
    "IT Act Cases",
    "Online Fraud",
    "Digital Contracts"
  ],
  "Taxation Law": [
    "Income Tax",
    "GST Law",
    "Customs & Excise",
    "Tax Appeals"
  ],
  "Human Rights Law": [
    "Child Rights",
    "Women's Rights",
    "Prisoner Rights",
    "Minority Rights"
  ],
  "International Law": [
    "Diplomatic Treaties",
    "Extradition Law",
    "Cross-Border Disputes",
    "International Arbitration"
  ],
  "Arbitration & ADR": [
    "Domestic Arbitration",
    "International Arbitration",
    "Mediation",
    "Conciliation"
  ],
  "Media & Entertainment Law": [
    "Censorship Law",
    "OTT Regulation",
    "Film Contracts",
    "Artist Rights"
  ],
  "Any": [],
  "Others": []
};

type Department = keyof typeof legalSpecializations;


export function SearchPreferencesPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [ageRange, setAgeRange] = useState([25, 45]);
  const [experienceRange, setExperienceRange] = useState([2, 15]);
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
      title: "Preferences Saved",
      description: "Your search preferences have been updated.",
    });
    router.push('/dashboard/results');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Search Preferences</h1>
        </div>
        <Button variant="outline" size="sm" onClick={() => router.push('/dashboard/search-by-keyword')}>
            <Search className="mr-2 h-4 w-4" />
            Keyword Search
        </Button>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Label htmlFor="age-range">Age Range: {ageRange[0]} - {ageRange[1]}</Label>
            <Slider
              id="age-range"
              min={18}
              max={70}
              step={1}
              value={ageRange}
              onValueChange={setAgeRange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="e.g., Mumbai, Maharashtra" />
          </div>
          <div className="space-y-4">
            <Label>Department / Specialization</Label>
            <Select onValueChange={handleDepartmentChange}>
              <SelectTrigger>
                <SelectValue placeholder="Choose department" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(legalSpecializations).map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <Label>Sub-Department</Label>
            <Select disabled={!selectedDepartment || selectedDepartment === 'Others' || selectedDepartment === 'Any'}>
              <SelectTrigger>
                <SelectValue placeholder="Choose sub-department" />
              </SelectTrigger>
              <SelectContent>
                {subDepartments.map(subDept => (
                  <SelectItem key={subDept} value={subDept}>{subDept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <Label htmlFor="experience-range">Years of Experience: {experienceRange[0]} - {experienceRange[1]}</Label>
            <Slider
              id="experience-range"
              min={0}
              max={40}
              step={1}
              value={experienceRange}
              onValueChange={setExperienceRange}
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button type="submit">Save & Search</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
