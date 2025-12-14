import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DashboardHeader } from "@/components/dashboard-header";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-muted-foreground text-center mb-10">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px]" />
              </div>
              
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
