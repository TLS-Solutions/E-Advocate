
"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone } from "lucide-react"

const legalSpecializations = {
  "Criminal Law": ["IPC & CrPC", "Cyber Crimes", "Juvenile Justice", "White-Collar Crime", "Narcotics Law"],
  "Civil Law": ["Property Disputes", "Injunctions", "Contract Breach", "Recovery Suits"],
  "Family Law": ["Hindu Law", "Muslim Law", "Christian Law", "Marriage & Divorce", "Adoption", "Maintenance"],
  "Corporate / Company Law": ["Company Incorporation", "Mergers & Acquisitions", "Insolvency & Bankruptcy", "Corporate Governance", "SEBI Compliance"],
  "Constitutional Law": ["Fundamental Rights", "Election Law", "Writ Petitions", "Centre-State Relations"],
  "Intellectual Property Law": ["Patents", "Trademarks", "Copyrights", "Designs", "GI Tags"],
  "Contract Law": ["Commercial Contracts", "E-Contracts", "Service Agreements", "Govt Contracts"],
  "Tort Law": ["Defamation", "Negligence", "Nuisance", "Medical Malpractice"],
  "Administrative Law": ["Service Law", "Tribunals", "RTI & Public Duty", "Disciplinary Actions"],
  "Labour & Employment Law": ["Wages & Salary Law", "Industrial Disputes", "EPF & ESI Law", "Workplace Harassment"],
  "Property Law": ["Lease & Rent", "Land Titles", "Transfer of Property", "Real Estate RERA"],
  "Banking & Finance Law": ["Debt Recovery", "Loan Default Cases", "NBFC & RBI Compliance", "SEBI & Securities Law"],
  "Consumer Protection Law": ["E-commerce Complaints", "Service Deficiency", "Product Liability", "Consumer Forums"],
  "Environmental Law": ["Pollution Control", "Forest & Wildlife", "Environment Impact Assessment", "Climate Litigation"],
  "Cyber Law / IT Law": ["Data Privacy", "IT Act Cases", "Online Fraud", "Digital Contracts"],
  "Taxation Law": ["Income Tax", "GST Law", "Customs & Excise", "Tax Appeals"],
  "Human Rights Law": ["Child Rights", "Women's Rights", "Prisoner Rights", "Minority Rights"],
  "International Law": ["Diplomatic Treaties", "Extradition Law", "Cross-Border Disputes", "International Arbitration"],
  "Arbitration & ADR": ["Domestic Arbitration", "International Arbitration", "Mediation", "Conciliation"],
  "Media & Entertainment Law": ["Censorship Law", "OTT Regulation", "Film Contracts", "Artist Rights"],
  "Others": []
};

type Department = keyof typeof legalSpecializations;

export function LawyerRegistrationForm() {
  const router = useRouter();
  const [verificationStep, setVerificationStep] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | ''>('');
  const [subDepartments, setSubDepartments] = useState<string[]>([]);

  const handleDepartmentChange = (value: string) => {
    const department = value as Department;
    setSelectedDepartment(department);
    setSubDepartments(legalSpecializations[department] || []);
  }

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVerificationStep(true);
  }
  
  const handleVerificationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard/results");
  }

  if (verificationStep) {
    return (
      <form onSubmit={handleVerificationSubmit} className="space-y-6 text-center">
        <div>
          <h3 className="text-xl font-bold">Verification</h3>
          <p className="text-muted-foreground text-sm">Enter the OTP sent to your email and phone.</p>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="email-otp" type="text" placeholder="Email OTP" required className="pl-10" />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input id="phone-otp" type="text" placeholder="Phone OTP" required className="pl-10" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button variant="link" size="sm" type="button">Resend OTP</Button>
        </div>
        <Button type="submit" className="w-full">Verify & Register</Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleRegisterSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name-register-lawyer">Full Name</Label>
        <Input id="name-register-lawyer" placeholder="Enter your full name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-register-lawyer">Email Address</Label>
        <Input id="email-register-lawyer" type="email" placeholder="m@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone-register-lawyer">Phone Number</Label>
        <Input id="phone-register-lawyer" type="tel" placeholder="Enter your phone number" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-register-lawyer">Create Password</Label>
        <Input id="password-register-lawyer" type="password" required />
      </div>
      
      <div className="space-y-2">
        <Label>Department / Specialization</Label>
        <Select required onValueChange={handleDepartmentChange}>
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
        <Select required disabled={!selectedDepartment || selectedDepartment === 'Others'}>
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
          <Input id="experience" type="number" placeholder="e.g., 5" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bar-id">Bar Council ID</Label>
        <Input id="bar-id" placeholder="Enter your Bar Council ID" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="license-upload">Bar Council License Upload</Label>
        <Input id="license-upload" type="file" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="certificates-upload">Upload Certificates (optional)</Label>
        <Input id="certificates-upload" type="file" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="office-address">Office Address / Location</Label>
        <Textarea id="office-address" placeholder="Enter your full office address" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="availability">Set Availability</Label>
        <Input id="availability" placeholder="e.g., Mon-Fri, 9am-5pm" required />
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox id="terms-lawyer" required />
        <Label htmlFor="terms-lawyer" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">I accept the terms & conditions</Label>
      </div>
      <Button type="submit" className="w-full">Register</Button>
    </form>
  )
}
