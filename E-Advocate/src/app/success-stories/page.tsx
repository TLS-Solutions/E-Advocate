"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
    {
        name: "Adv. Priya Mehta",
        location: "Mumbai, Maharashtra",
        quote:
            "Thanks to AdvocateServices.com, I've received 5x more client consultations in just 3 months. The platform makes scheduling and video consultations seamless.",
        img: "https://via.placeholder.com/50?text=PM",
    },
    {
        name: "Adv. Rajeev Sharma",
        location: "Delhi",
        quote:
            "This portal helped me build credibility online. I now have clients from other cities seeking virtual legal advice, and my profile ranks on top.",
        img: "https://via.placeholder.com/50?text=RS",
    },
    {
        name: "Adv. Sana Ali",
        location: "Hyderabad, Telangana",
        quote:
            "The dashboard and client review system helped me scale my solo practice. The Pro Plan is definitely worth it!",
        img: "https://via.placeholder.com/50?text=SA",
    },
];

export default function SuccessStoriesPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <div className="max-w-6xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
                <p className="text-gray-400 mb-12">
                    Hear how real advocates have grown their legal practices with AdvocateServices.com.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#0f1623] p-8 rounded-lg border border-gray-800 text-left flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                                    {/* Placeholder for advocate image if needed, using text for now or the placeholder URL */}
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic leading-relaxed flex-grow">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-16">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md font-medium transition-colors">
                        <Link href="/register">Share Your Story / Join Now</Link>
                    </Button>
                </div>

                <div className="text-sm text-gray-500">
                    Want to be featured here? Email us at <a href="mailto:stories@advocateservices.com" className="underline hover:text-gray-300">stories@advocateservices.com</a>
                </div>
            </div>
        </div>
    );
}
