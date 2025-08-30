
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Building, Handshake, Info, Link, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  { name: "LegalTech Inc.", description: "Innovating legal technology solutions.", icon: Handshake },
  { name: "Justice Foundation", description: "Promoting access to justice for all.", icon: Handshake },
  { name: "Pro Bono Associates", description: "Connecting lawyers with volunteer opportunities.", icon: Handshake },
];

const officials = [
  { name: "Ministry of Law & Justice", description: "Official updates and information.", icon: Building },
  { name: "National Legal Services Authority", description: "Free legal services to the weaker sections.", icon: Building },
];

const socialMedia = [
  { name: "LinkedIn", handle: "@e-advocate", icon: Users },
  { name: "Twitter", handle: "@eadvocate_app", icon: Users },
  { name: "Facebook", handle: "/eadvocateservices", icon: Users },
];

export function CreditsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Credits</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-8">
        <section>
            <h2 className="text-2xl font-bold mb-4">About E-Advocate Services</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Info className="h-6 w-6 text-primary" />
                        Our Mission
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        E-Advocate Services is dedicated to revolutionizing the way legal services are accessed and delivered in India. Our platform connects clients with verified and experienced advocates, ensuring transparency, efficiency, and trust in the legal process. We aim to bridge the gap between legal professionals and those in need of legal assistance, making justice more accessible for everyone.
                    </p>
                </CardContent>
            </Card>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.name}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <partner.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{partner.description}</p>
                  <Button variant="outline" size="sm">
                    <Link className="mr-2 h-4 w-4" />
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Approved Government Officials</h2>
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {officials.map((official) => (
              <Card key={official.name}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <official.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{official.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{official.description}</p>
                  <Button variant="outline" size="sm">
                     <Link className="mr-2 h-4 w-4" />
                    Official Link
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Follow Us on Social Media</h2>
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {socialMedia.map((social) => (
              <Card key={social.name}>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <social.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{social.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </CardHeader>
                <CardContent>
                   <Button variant="outline" size="sm">
                     <Link className="mr-2 h-4 w-4" />
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
