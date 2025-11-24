
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { CheckCircle2, Mail, Phone, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const steps = [
  "Personal Details",
  "Verification",
  "Address & Location",
  "Legal Help Required",
  "Declarations",
];

const legalDepartments = {
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
  
type Department = keyof typeof legalDepartments;
const consultationModes = ["Phone", "Video", "In-person"];
const languages = ["English", "Hindi", "Spanish", "French"];


export function ClientRegistrationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | ''>('');
  const [subDepartments, setSubDepartments] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [dob, setDob] = useState("");
  const [selectedConsultationModes, setSelectedConsultationModes] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    if (value.length > 4) {
      value = `${value.slice(0, 2)}-${value.slice(2, 4)}-${value.slice(4)}`;
    } else if (value.length > 2) {
      value = `${value.slice(0, 2)}-${value.slice(2)}`;
    }
    setDob(value);
  };

  const handleDepartmentChange = (value: string) => {
    const department = value as Department;
    setSelectedDepartment(department);
    setSubDepartments(legalDepartments[department] || []);
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  }

  const handleMultiSelectChange = (value: string, type: 'consultation' | 'language') => {
    if (type === 'consultation') {
      setSelectedConsultationModes(prev => 
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    } else {
      setSelectedLanguages(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    }
  }


  return (
    <>
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4 sm:p-8">
      <header className="w-full max-w-4xl text-center mb-8">
        <Logo className="h-12 w-12 mx-auto mb-4 text-white fill-current" />
        <h1 className="text-3xl font-bold">Create your account</h1>
        <p className="text-neutral-400">
          Already have an account?{" "}
          <Button
            variant="link"
            className="text-purple-400 p-0"
            onClick={() => router.push("/login")}
          >
            Sign in
          </Button>
        </p>
        <h2 className="text-2xl font-semibold mt-2">Client Registration</h2>
      </header>

      <main className="w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-lg p-8">
        <div className="flex justify-between items-center border-b border-neutral-700 mb-8 overflow-x-auto">
          {steps.map((step, index) => (
            <div
              key={step}
              onClick={() => setCurrentStep(index)}
              className={cn(
                "w-full text-center py-4 px-2 text-neutral-500 font-medium cursor-pointer whitespace-nowrap text-sm",
                currentStep === index && "border-b-2 border-purple-500 text-purple-400"
              )}
            >
              {step}
            </div>
          ))}
        </div>

        {currentStep === 0 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name *</Label>
                <Input
                  id="first-name"
                  placeholder="Enter your first name"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name *</Label>
                <Input
                  id="last-name"
                  placeholder="Enter your last name"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select required>
                  <SelectTrigger
                    id="gender"
                    className="bg-neutral-800 border-neutral-600 text-white"
                  >
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type="text"
                  placeholder="dd-mm-yyyy"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500"
                  required
                  value={dob}
                  onChange={handleDobChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  placeholder="Enter 10-digit mobile number"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="proof-type">Document / Proof Type *</Label>
                <Select required>
                  <SelectTrigger
                    id="proof-type"
                    className="bg-neutral-800 border-neutral-600 text-white"
                  >
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                    <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                    <SelectItem value="pan">PAN Card</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="voterid">Voter ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-picture">Profile Picture *</Label>
                <Input
                  id="profile-picture"
                  type="file"
                  className="bg-neutral-800 border-neutral-600 text-white file:text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 hover:file:bg-neutral-600"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Next
              </Button>
            </div>
          </form>
        )}
        {currentStep === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="max-w-md mx-auto">
                <div className="space-y-6 text-center">
                    <div>
                    <h3 className="text-xl font-bold">Verification</h3>
                    <p className="text-muted-foreground text-sm">Enter the OTP sent to your email and phone.</p>
                    </div>
                    <div className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="email-otp" type="text" placeholder="Email OTP" required className="pl-10 bg-neutral-800 border-neutral-600" />
                    </div>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input id="phone-otp" type="text" placeholder="Phone OTP" required className="pl-10 bg-neutral-800 border-neutral-600" />
                    </div>
                    </div>
                    <div className="flex items-center justify-center">
                    <Button variant="link" size="sm" type="button" className="text-purple-400">Resend OTP</Button>
                    </div>
                </div>
                 <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Verify & Continue</Button>
                </div>
            </form>
        )}
        {currentStep === 2 && (
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="country">Country*</Label>
                        <Input id="country" placeholder="Enter your country" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="state">State*</Label>
                        <Input id="state" placeholder="Enter your state" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="city">City / Town*</Label>
                        <Input id="city" placeholder="Enter your city or town" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="office-address">Current Office Address*</Label>
                        <Input id="office-address" placeholder="Enter your current office address" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                     <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="permanent-address">Permanent Address*</Label>
                        <Textarea id="permanent-address" placeholder="Enter your permanent address" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="pin-code">Pin Code*</Label>
                        <Input id="pin-code" placeholder="Enter your pin code" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Next</Button>
                </div>
            </form>
        )}
        {currentStep === 3 && (
             <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                     <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select required onValueChange={handleDepartmentChange}>
                            <SelectTrigger id="category" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                {Object.keys(legalDepartments).map(dept => (
                                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="Department">Department *</Label>
                        <Select required onValueChange={handleDepartmentChange}>
                            <SelectTrigger id="Department" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                           <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                {Object.keys(legalDepartments).map(dept => (
                                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="sub-department">Sub-Department *</Label>
                        <Select required disabled={!selectedDepartment || selectedDepartment === 'Others' || selectedDepartment === 'Any'}>
                            <SelectTrigger id="sub-department" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select sub-department" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                {subDepartments.map(subDept => (
                                    <SelectItem key={subDept} value={subDept}>{subDept}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Preferred Consultation Mode *</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant="outline"
                                className="w-full justify-between bg-neutral-800 border-neutral-600 text-white hover:bg-neutral-700 hover:text-white"
                                >
                                {selectedConsultationModes.length > 0 ? selectedConsultationModes.join(', ') : "Select modes"}
                                <ChevronDown className="h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[--radix-popover-trigger-width] bg-neutral-800 border-neutral-600 text-white p-0">
                                <div className="p-2 space-y-1">
                                {consultationModes.map(mode => (
                                    <div key={mode} className="flex items-center space-x-2 p-2 rounded-md hover:bg-neutral-700">
                                        <Checkbox
                                            id={`mode-${mode}`}
                                            checked={selectedConsultationModes.includes(mode)}
                                            onCheckedChange={() => handleMultiSelectChange(mode, 'consultation')}
                                        />
                                        <Label htmlFor={`mode-${mode}`} className="font-normal cursor-pointer flex-1">{mode}</Label>
                                    </div>
                                ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="advocate-type">Preferred Advocate Type *</Label>
                        <Select required>
                            <SelectTrigger id="advocate-type" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select advocate type" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectItem value="any">Any</SelectItem>
                                <SelectItem value="junior">Junior</SelectItem>
                                <SelectItem value="senior">Senior</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Preferred Consultation Time</Label>
                        <div className="flex items-center gap-2">
                             <Input type="time" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                             <span>-</span>
                            <Input type="time" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label>Languages Known *</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant="outline"
                                className="w-full justify-between bg-neutral-800 border-neutral-600 text-white hover:bg-neutral-700 hover:text-white"
                                >
                                {selectedLanguages.length > 0 ? selectedLanguages.join(', ') : "Select languages"}
                                <ChevronDown className="h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[--radix-popover-trigger-width] bg-neutral-800 border-neutral-600 text-white p-0">
                                <div className="p-2 space-y-1">
                                {languages.map(lang => (
                                    <div key={lang} className="flex items-center space-x-2 p-2 rounded-md hover:bg-neutral-700">
                                        <Checkbox
                                            id={`lang-${lang}`}
                                            checked={selectedLanguages.includes(lang)}
                                            onCheckedChange={() => handleMultiSelectChange(lang, 'language')}
                                        />
                                        <Label htmlFor={`lang-${lang}`} className="font-normal cursor-pointer flex-1">{lang}</Label>
                                    </div>
                                ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="legal-issue">Brief About Your Legal Issue *</Label>
                        <Textarea id="legal-issue" placeholder="Describe your issue briefly" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                </div>
                 <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Next</Button>
                </div>
            </form>
        )}
        {currentStep === 4 && (
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Declarations</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <Checkbox id="dec-1" required className="mt-1" />
                            <Label htmlFor="dec-1" className="font-normal text-neutral-300">I hereby declare that all the above information is true and correct to the best of my knowledge.</Label>
                        </div>
                         <div className="flex items-start space-x-3">
                            <Checkbox id="dec-2" required className="mt-1" />
                            <Label htmlFor="dec-2" className="font-normal text-neutral-300">I agree to abide by the terms and conditions of E-Advocate Services and BCI norms.</Label>
                        </div>
                         <div className="flex items-start space-x-3">
                            <Checkbox id="dec-3" required className="mt-1" />
                            <Label htmlFor="dec-3" className="font-normal text-neutral-300">I consent to share my profile with clients registered on this platform.</Label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="signature">Signature*</Label>
                            <Input id="signature" type="file" required className="bg-neutral-800 border-neutral-600 text-white file:text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 hover:file:bg-neutral-600" />
                        </div>
                        <div className="space-y-2">
                             <Label htmlFor="date">Date*</Label>
                             <Input id="date" type="text" placeholder="dd-mm-yyyy" required className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500"/>
                        </div>
                    </div>
                     <div className="flex items-start space-x-3 pt-4">
                        <Checkbox id="terms-final" required className="mt-1" />
                        <Label htmlFor="terms-final" className="font-normal text-neutral-300">
                            I accept the <Button variant="link" className="p-0 h-auto text-purple-400">Terms & Conditions</Button> and <Button variant="link" className="p-0 h-auto text-purple-400">Privacy Policy</Button>
                        </Label>
                    </div>
                </div>
                 <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Submit</Button>
                </div>
            </form>
        )}
      </main>
    </div>
    <AlertDialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <AlertDialogContent>
            <AlertDialogHeader className="items-center text-center">
                 <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                 </div>
                <AlertDialogTitle className="text-2xl">Success!</AlertDialogTitle>
                <AlertDialogDescription>
                    Successfully Client Registered
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="sm:justify-center">
                <AlertDialogAction onClick={() => router.push('/dashboard/results')} className="bg-purple-600 hover:bg-purple-700 text-white w-full">OK</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    </>
  );
}
