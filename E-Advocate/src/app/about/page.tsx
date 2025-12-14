import React from 'react';
import { DashboardHeader } from "@/components/dashboard-header";
import Footer from "@/components/footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <DashboardHeader />
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6 text-center">About E-Advocate Services</h1>

                    <div className="prose dark:prose-invert max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-lg text-muted-foreground">
                                E-Advocate Services aims to bridge the gap between legal professionals and individuals seeking justice.
                                We believe that quality legal representation should be accessible, transparent, and efficient for everyone.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                            <p className="text-muted-foreground mb-4">
                                Our platform connects clients with verified advocates across various specializations. Whether you need
                                assistance with family law, corporate matters, criminal defense, or property disputes, we have
                                experienced professionals ready to help.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Verified Advocate Profiles</li>
                                <li>Secure Communication Channels</li>
                                <li>Transparent Fee Structures</li>
                                <li>Case Management Tools</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                            <p className="text-muted-foreground">
                                We are committed to maintaining the highest standards of professional ethics and data privacy.
                                Every advocate on our platform undergoes a verification process to ensure you receive legitimate
                                and high-quality legal assistance.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
