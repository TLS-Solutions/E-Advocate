import React from 'react';
import { DashboardHeader } from "@/components/dashboard-header";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogPosts = [
    {
        id: 1,
        title: "Understanding Your Rights in a Property Dispute",
        excerpt: "Learn about the key legal provisions that protect property owners in India and how to handle disputes effectively.",
        author: "Adv. Rajesh Kumar",
        date: "Nov 20, 2024",
        category: "Property Law"
    },
    {
        id: 2,
        title: "The Process of Filing a Divorce Petition",
        excerpt: "A step-by-step guide to understanding the legal procedures involved in filing for divorce under various personal laws.",
        author: "Adv. Priya Sharma",
        date: "Nov 18, 2024",
        category: "Family Law"
    },
    {
        id: 3,
        title: "Cyber Crime: How to Stay Safe Online",
        excerpt: "With rising digital fraud, it's crucial to know the legal remedies available for victims of cyber crimes.",
        author: "Adv. Meera Patel",
        date: "Nov 15, 2024",
        category: "Cyber Law"
    },
    {
        id: 4,
        title: "Corporate Compliance for Startups",
        excerpt: "Essential legal compliances every new business owner should be aware of to avoid penalties and legal hurdles.",
        author: "Adv. Suresh Reddy",
        date: "Nov 10, 2024",
        category: "Corporate Law"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <DashboardHeader />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Legal Insights & News</h1>
                        <p className="text-muted-foreground text-lg">
                            Stay informed with the latest legal updates and expert articles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-semibold px-2 py-1 bg-secondary rounded-full text-secondary-foreground">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-muted-foreground">{post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 hover:text-primary cursor-pointer">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">By {post.author}</span>
                                        <Button variant="outline" size="sm">Read More</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
