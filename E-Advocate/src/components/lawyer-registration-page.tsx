
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
import { Mail, Phone, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


const steps = [
  "Personal Details",
  "Verification",
  "Educational Details",
  "Practice Information",
  "Location Details",
  "Career Info",
  "Availability",
  "Declarations",
];

const graduateDegreeOptions = {
    "Undergraduate Law Degrees": [
        "LL.B.",
        "B.A. LL.B.",
        "B.B.A. LL.B.",
        "B.Com. LL.B.",
        "B.Sc. LL.B.",
        "B.Tech LL.B."
    ],
    "Postgraduate Law Degrees": [
        "LL.M.",
        "MCL",
        "ML"
    ],
    "Doctoral & Advanced Research Degrees": [
      "Ph.D. in Law",
      "S.J.D. / J.S.D.",
      "D.Litt. in Law"
    ],
    "Diploma & Certificate Courses (Short-term)": [
        "PG Diploma in Cyber Law",
        "Diploma in Taxation Laws",
        "Certificate in IPR",
        "Diploma in Human Rights Law"
    ],
    "International Law Degrees (also accepted globally)": [
        "J.D. (Juris Doctor)",
        "LL.B. (Hons)",
        "B.C.L. / M.C.L."
    ],
    "Major Law Specializations": [
        "Criminal Law",
        "Civil Law",
        "Corporate Law",
        "Constitutional Law",
        "Family Law",
        "Labour & Employment Law",
        "Property Law",
        "Taxation Law",
        "Intellectual Property Rights (IPR)",
        "Environmental Law",
        "International Law",
        "Cyber Law / IT Law",
        "Banking & Finance Law",
        "Human Rights Law",
        "Administrative Law",
        "Media & Entertainment Law",
        "Maritime/Admiralty Law",
        "Aviation Law",
        "Education Law",
        "Alternative Dispute Resolution (ADR)",
    ],
    "Emerging & Niche Fields": [
        "Space Law",
        "Sports Law",
        "Healthcare Law",
        "Energy Law",
        "Fashion Law",
        "Technology Law",
        "Animal Rights Law",
    ],
};

type GraduateDegree = keyof typeof graduateDegreeOptions;

const universityColleges = {
    "University of Delhi": ["Faculty of Law", "Campus Law Centre", "Law Centre-I"],
    "National Law School of India University": ["NLSIU Main Campus"],
    "Symbiosis International University": ["Symbiosis Law School, Pune", "Symbiosis Law School, Noida", "Symbiosis Law School, Hyderabad"],
};

type University = keyof typeof universityColleges;


const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

const languages = ["English", "Hindi", "Spanish", "French", "Bengali", "Tamil", "Telugu"];

export function LawyerRegistrationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [dob, setDob] = useState("");
  const [selectedGraduateDegree, setSelectedGraduateDegree] = useState<GraduateDegree | ''>('');
  const [degreeCourses, setDegreeCourses] = useState<string[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<University | ''>('');
  const [colleges, setColleges] = useState<string[]>([]);
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

  const handleGraduateDegreeChange = (value: string) => {
    const degree = value as GraduateDegree;
    setSelectedGraduateDegree(degree);
    setDegreeCourses(graduateDegreeOptions[degree] || []);
  }

  const handleUniversityChange = (value: string) => {
    const university = value as University;
    setSelectedUniversity(university);
    setColleges(universityColleges[university] || []);
  }
  
  const handleMultiSelectChange = (value: string) => {
    setSelectedLanguages(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
        router.push('/dashboard/results');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final submission
    router.push('/dashboard/results');
  }


  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-4 sm:p-8">
      <header className="w-full max-w-6xl text-center mb-8">
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
        <h2 className="text-2xl font-semibold mt-2">Advocate Registration</h2>
      </header>

      <main className="w-full max-w-6xl bg-neutral-900 border border-neutral-700 rounded-lg p-8">
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
                        <Label htmlFor="graduate-degree">Graduate Degree *</Label>
                        <Select required onValueChange={handleGraduateDegreeChange}>
                            <SelectTrigger id="graduate-degree" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select graduate degree" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                {Object.keys(graduateDegreeOptions).map(degree => (
                                     <SelectItem key={degree} value={degree}>{degree}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="degree-course">Degree course *</Label>
                         <Select required disabled={degreeCourses.length === 0}>
                            <SelectTrigger id="degree-course" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select degree course" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                 {degreeCourses.map(course => (
                                     <SelectItem key={course} value={course}>{course}</SelectItem>
                                 ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="state">State*</Label>
                        <Select required>
                            <SelectTrigger id="state" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white h-60">
                                {statesOfIndia.map(state => (
                                    <SelectItem key={state} value={state}>{state}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="university-name">University Name *</Label>
                        <Select required onValueChange={handleUniversityChange}>
                            <SelectTrigger id="university-name" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select university" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                {Object.keys(universityColleges).map(uni => (
                                     <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="college-name">College *</Label>
                         <Select required disabled={colleges.length === 0}>
                            <SelectTrigger id="college-name" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select college" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                 {colleges.map(college => (
                                     <SelectItem key={college} value={college}>{college}</SelectItem>
                                 ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="graduation-year">Graduation Year *</Label>
                        <Input id="graduation-year" placeholder="e.g., 2020" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bar-enrolment-number">Bar Council Enrolment Number *</Label>
                        <Input id="bar-enrolment-number" placeholder="Enter enrolment number" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="state-bar-council">State Bar Council</Label>
                        <Input id="state-bar-council" placeholder="Enter state bar council name" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="enrollment-year">Enrollment Year *</Label>
                        <Input id="enrollment-year" placeholder="e.g., 2021" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="enrollment-certificate">Enrollment Certificate *</Label>
                        <Input id="enrollment-certificate" type="file" className="bg-neutral-800 border-neutral-600 text-white file:text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 hover:file:bg-neutral-600" required />
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
                        <Label htmlFor="court-of-practice">Court of Practice *</Label>
                        <Select required>
                            <SelectTrigger id="court-of-practice" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select court" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectItem value="supreme-court">Supreme Court</SelectItem>
                                <SelectItem value="high-court">High Court</SelectItem>
                                <SelectItem value="district-court">District Court</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="specialization">Specialization/Department *</Label>
                         <Select required>
                            <SelectTrigger id="specialization" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select specialization" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectItem value="civil">Civil Law</SelectItem>
                                <SelectItem value="criminal">Criminal Law</SelectItem>
                                <SelectItem value="corporate">Corporate Law</SelectItem>
                                <SelectItem value="family">Family Law</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="sub-department">Sub-Department *</Label>
                         <Select required>
                            <SelectTrigger id="sub-department" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select sub-department" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectItem value="property">Property Disputes</SelectItem>
                                <SelectItem value="contract">Contract Breach</SelectItem>
                                <SelectItem value="divorce">Maintenance</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input id="experience" placeholder="e.g., 5" type="number" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bar-association">Bar Association Name (If any):</Label>
                        <Input id="bar-association" placeholder="Enter your bar association name" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="practice-license">Practice License Upload* (.pdf/.jpg)</Label>
                        <Input id="practice-license" type="file" required className="bg-neutral-800 border-neutral-600 text-white file:text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-neutral-700 hover:file:bg-neutral-600" />
                    </div>
                </div>
                 <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Next</Button>
                </div>
            </form>
        )}

        {currentStep === 4 && (
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
        
        {currentStep === 5 && (
             <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="firm-name">Current Firm / Organization (If any):</Label>
                        <Input id="firm-name" placeholder="Enter your current firm or organization" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="position">Position / Designation:</Label>
                        <Input id="position" placeholder="Enter your position or designation" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="work-type">Work Type*</Label>
                         <Select required>
                            <SelectTrigger id="work-type" className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectValue placeholder="Select work type" />
                            </SelectTrigger>
                            <SelectContent className="bg-neutral-800 border-neutral-600 text-white">
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="part-time">Part-time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                            </SelectContent>
                        </Select>
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
                <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Next</Button>
                </div>
            </form>
        )}

        {currentStep === 6 && (
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    <div className="space-y-4">
                        <Label>Available For*</Label>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="phone-consultation" className="border-neutral-600" defaultChecked/>
                                <Label htmlFor="phone-consultation" className="font-normal">Phone Consultation</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="video-consultation" className="border-neutral-600" defaultChecked/>
                                <Label htmlFor="video-consultation" className="font-normal">Video Consultation</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="in-person-consultation" className="border-neutral-600" defaultChecked/>
                                <Label htmlFor="in-person-consultation" className="font-normal">In-person Consultation</Label>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Label>Working Hours:</Label>
                        <div className="flex items-center gap-4">
                            <Input type="time" defaultValue="00:00" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                            <Input type="time" defaultValue="23:59" className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-500" />
                        </div>
                    </div>
                    <div className="space-y-4 md:col-span-2">
                        <Label>Available Days*</Label>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <div key={day} className="flex items-center space-x-2">
                                    <Checkbox id={`day-${day.toLowerCase()}`} className="border-neutral-600" defaultChecked />
                                    <Label htmlFor={`day-${day.toLowerCase()}`} className="font-normal">{day}</Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <Button type="button" variant="outline" onClick={handleBack} className="bg-transparent border-neutral-600 hover:bg-neutral-800 text-white">Back</Button>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Next</Button>
                </div>
            </form>
        )}

        {currentStep === 7 && (
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
                            I accept the <Button variant="link" className="p-0 h-auto text-purple-400">Terms &amp; Conditions</Button> and <Button variant="link" className="p-0 h-auto text-purple-400">Privacy Policy</Button>
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
  );
}
