"use client";

import React from "react";
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

export default function AdvancedSearchPage() {
    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-[#0f1623] p-8 rounded-lg shadow-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Location */}
                    <div className="space-y-2">
                        <Label htmlFor="location" className="text-gray-300">
                            Location
                        </Label>
                        <Input
                            id="location"
                            placeholder="e.g., Hyderabad, Delhi"
                            className="bg-[#1a2332] border-gray-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Practice Area */}
                    <div className="space-y-2">
                        <Label htmlFor="practice-area" className="text-gray-300">
                            Practice Area
                        </Label>
                        <Select>
                            <SelectTrigger className="bg-[#1a2332] border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500">
                                <SelectValue placeholder="-- Select --" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a2332] border-gray-700 text-white">
                                <SelectItem value="criminal">Criminal Law</SelectItem>
                                <SelectItem value="civil">Civil Law</SelectItem>
                                <SelectItem value="corporate">Corporate Law</SelectItem>
                                <SelectItem value="family">Family Law</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Language */}
                    <div className="space-y-2">
                        <Label htmlFor="language" className="text-gray-300">
                            Language
                        </Label>
                        <Input
                            id="language"
                            placeholder="e.g., Hindi, Telugu"
                            className="bg-[#1a2332] border-gray-700 text-white placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Years of Experience */}
                    <div className="space-y-2">
                        <Label htmlFor="experience" className="text-gray-300">
                            Years of Experience
                        </Label>
                        <Select>
                            <SelectTrigger className="bg-[#1a2332] border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500">
                                <SelectValue placeholder="-- Select --" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a2332] border-gray-700 text-white">
                                <SelectItem value="0-5">0-5 Years</SelectItem>
                                <SelectItem value="5-10">5-10 Years</SelectItem>
                                <SelectItem value="10-15">10-15 Years</SelectItem>
                                <SelectItem value="15+">15+ Years</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Availability */}
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="availability" className="text-gray-300">
                            Availability
                        </Label>
                        <Select>
                            <SelectTrigger className="bg-[#1a2332] border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500">
                                <SelectValue placeholder="-- Select --" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a2332] border-gray-700 text-white">
                                <SelectItem value="immediate">Immediate</SelectItem>
                                <SelectItem value="within-week">Within a Week</SelectItem>
                                <SelectItem value="consultation-only">Consultation Only</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md font-medium transition-colors">
                        Search Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
