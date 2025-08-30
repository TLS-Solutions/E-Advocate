
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function EditProfessionalDetailsPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Profile Updated",
        description: "Your professional details have been saved.",
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
          <h1 className="text-xl font-bold font-headline">Professional Details</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="barId">Bar Council ID</Label>
            <Input id="barId" defaultValue="BAR123456" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="officeAddress">Office Address / Location</Label>
            <Textarea id="officeAddress" rows={3} defaultValue="123 Law Street, Justice City, CA 94103" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="availability">Set Availability</Label>
            <Input id="availability" defaultValue="Mon-Fri, 9am-5pm" />
          </div>
           <div className="space-y-2">
              <Label htmlFor="license-upload">Bar Council License</Label>
              <p className="text-xs text-muted-foreground">Current: license.pdf</p>
              <Input id="license-upload" type="file" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="certificates-upload">Certificates (optional)</Label>
               <p className="text-xs text-muted-foreground">Current: cert1.pdf, cert2.jpg</p>
              <Input id="certificates-upload" type="file" multiple />
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
