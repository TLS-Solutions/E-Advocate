
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

export default function EditLocationDetailsPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('profileStatus', 'review');
    toast({
        title: "Profile Updated",
        description: "Your location details have been saved and are under review.",
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
          <h1 className="text-xl font-bold font-headline">Location Details</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" defaultValue="India" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" defaultValue="Delhi" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="city">City / Town</Label>
                    <Input id="city" defaultValue="New Delhi" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pin-code">Pin Code</Label>
                    <Input id="pin-code" defaultValue="110001" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="office-address">Current Office Address</Label>
                    <Textarea id="office-address" rows={3} defaultValue="123 Law Street, Connaught Place, New Delhi" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="permanent-address">Permanent Address</Label>
                    <Textarea id="permanent-address" rows={3} defaultValue="456 Justice Avenue, Saket, New Delhi" />
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
