
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
  "Others": []
};

type Department = keyof typeof legalSpecializations;

export default function EditLegalSpecializationPage() {
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
    toast({
        title: "Profile Updated",
        description: "Your legal specialization has been saved.",
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
          <h1 className="text-xl font-bold font-headline">Legal Specialization</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label>Department / Specialization</Label>
            <Select onValueChange={handleDepartmentChange} defaultValue="Civil Law">
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
          <div className="space-y-2">
            <Label>Sub-Department</Label>
            <Select disabled={!selectedDepartment || selectedDepartment === 'Others'} defaultValue="Property Disputes">
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
          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input id="experience" type="number" defaultValue="5" />
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
