
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const graduateDegreeOptions = {
    "Undergraduate Law Degrees": ["LL.B.", "B.A. LL.B.", "B.B.A. LL.B."],
    "Postgraduate Law Degrees": ["LL.M.", "MCL"],
};
type GraduateDegree = keyof typeof graduateDegreeOptions;

const universityColleges = {
    "University of Delhi": ["Faculty of Law", "Campus Law Centre"],
    "National Law School of India University": ["NLSIU Main Campus"],
};
type University = keyof typeof universityColleges;

const statesOfIndia = ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"];

export default function EditEducationalDetailsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedGraduateDegree, setSelectedGraduateDegree] = useState<GraduateDegree | ''>('Undergraduate Law Degrees');
  const [degreeCourses, setDegreeCourses] = useState<string[]>(graduateDegreeOptions["Undergraduate Law Degrees"]);
  const [selectedUniversity, setSelectedUniversity] = useState<University | ''>('University of Delhi');
  const [colleges, setColleges] = useState<string[]>(universityColleges["University of Delhi"]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('profileStatus', 'review');
    toast({
        title: "Profile Updated",
        description: "Your educational details have been saved and are under review.",
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
          <h1 className="text-xl font-bold font-headline">Educational Details</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="graduate-degree">Graduate Degree</Label>
                    <Select onValueChange={handleGraduateDegreeChange} defaultValue="Undergraduate Law Degrees">
                        <SelectTrigger id="graduate-degree"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {Object.keys(graduateDegreeOptions).map(degree => (<SelectItem key={degree} value={degree}>{degree}</SelectItem>))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="degree-course">Degree Course</Label>
                    <Select disabled={degreeCourses.length === 0} defaultValue="LL.B.">
                        <SelectTrigger id="degree-course"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {degreeCourses.map(course => (<SelectItem key={course} value={course}>{course}</SelectItem>))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select defaultValue="Delhi">
                        <SelectTrigger id="state"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {statesOfIndia.map(state => (<SelectItem key={state} value={state}>{state}</SelectItem>))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="university-name">University Name</Label>
                    <Select onValueChange={handleUniversityChange} defaultValue="University of Delhi">
                        <SelectTrigger id="university-name"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {Object.keys(universityColleges).map(uni => (<SelectItem key={uni} value={uni}>{uni}</SelectItem>))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="college-name">College</Label>
                    <Select disabled={colleges.length === 0} defaultValue="Faculty of Law">
                        <SelectTrigger id="college-name"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            {colleges.map(college => (<SelectItem key={college} value={college}>{college}</SelectItem>))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="graduation-year">Graduation Year</Label>
                    <Input id="graduation-year" defaultValue="2020" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bar-enrolment-number">Bar Council Enrolment Number</Label>
                    <Input id="bar-enrolment-number" defaultValue="BAR123456" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="state-bar-council">State Bar Council</Label>
                    <Input id="state-bar-council" defaultValue="Delhi Bar Council" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="enrollment-year">Enrollment Year</Label>
                    <Input id="enrollment-year" defaultValue="2021" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="enrollment-certificate">Enrollment Certificate</Label>
                    <p className="text-xs text-muted-foreground">Current: enrollment.pdf</p>
                    <Input id="enrollment-certificate" type="file" />
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
