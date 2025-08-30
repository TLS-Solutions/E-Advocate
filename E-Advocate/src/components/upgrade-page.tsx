
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Info, ShieldCheck, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { requestAssistedCallback, AssistedCallbackInput } from "@/ai/flows/request-assisted-callback";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


const selfServicePlans = [
  {
    name: "Silver",
    price: 499,
    originalPrice: 1000,
    tokens: 50,
    contacts: 50,
    advocates: 50,
  },
  {
    name: "Gold",
    price: 999,
    originalPrice: 2000,
    tokens: 100,
    contacts: 100,
    advocates: 100,
    isRecommended: true,
  },
  {
    name: "Platinum",
    price: 1499,
    originalPrice: 3000,
    tokens: 200,
    contacts: 200,
    advocates: 200,
    isTopSeller: true,
  },
];

const assistedServicePlans = [
    { name: "Silver", price: 5000 },
    { name: "Gold", price: 10000 },
    { name: "Platinum", price: 15000 },
];

export function UpgradePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState("Gold");
  const [isLoading, setIsLoading] = useState(false);

  const handlePaymentRedirect = () => {
    const plan = selfServicePlans.find(p => p.name === selectedPlan);
    if (plan) {
      router.push(`/dashboard/payment?plan=${plan.name}&price=${plan.price}`);
    }
  };

  const handleAssistedSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data: AssistedCallbackInput = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      plan: formData.get('plan') as string,
      message: formData.get('message') as string,
    };

    try {
        const result = await requestAssistedCallback(data);
        if (result.success) {
             toast({
                title: "Request Received!",
                description: result.message,
            });
            (e.target as HTMLFormElement).reset();
        } else {
            throw new Error(result.message);
        }
    } catch (error) {
        console.error("Error submitting callback form:", error);
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "There was an error submitting your request. Please try again.",
        });
    } finally {
        setIsLoading(false);
    }
  }


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button variant="link" onClick={() => router.back()} className="text-primary font-bold">
          Skip
        </Button>
      </header>

      <main className="flex-1 p-4">
        <div className="text-left mb-4">
          <h1 className="text-2xl font-bold font-headline">Upgrade to Premium &</h1>
          <h2 className="text-2xl font-bold font-headline">enhance your experience!</h2>
        </div>

        <Tabs defaultValue="self-service" className="w-full mb-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="self-service">Self-Service</TabsTrigger>
            <TabsTrigger value="assisted">Assisted</TabsTrigger>
          </TabsList>
          <TabsContent value="self-service" className="space-y-6">
             <Card className="p-3 bg-muted border-border text-foreground flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <ShieldCheck className="h-10 w-10 text-foreground" fill="hsl(var(--muted))" />
                        <span className="absolute inset-0 flex items-center justify-center text-foreground text-[8px] font-bold">15-DAY</span>
                    </div>
                    <p className="text-[10px] font-semibold">MONEY BACK</p>
                </div>
                <div className="flex-1">
                    <p className="font-bold">15-day full refund guarantee*</p>
                    <p className="text-xs">*Conditions apply</p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Info className="h-5 w-5" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Package Details</DialogTitle>
                            <DialogDescription>Here's what each feature in our self-service plans means.</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Tokens</h4>
                                <p className="text-sm text-muted-foreground">Tokens are credits you can use to unlock premium features, like sending "Super Interests" or boosting your profile's visibility in search results.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Contacts</h4>
                                <p className="text-sm text-muted-foreground">This is the number of profiles you can view contact details for (phone number, email). Use them to connect with advocates or clients directly.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Advocates</h4>
                                <p className="text-sm text-muted-foreground">This refers to the number of advocate profiles you can shortlist or send an interest to. This helps you manage and focus on your most promising connections.</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              {selfServicePlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={cn(
                    "p-3 text-center rounded-xl cursor-pointer relative",
                    selectedPlan === plan.name ? "border-primary ring-2 ring-primary" : "border-border"
                  )}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {plan.isTopSeller && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full z-10">Top Seller</div>}
                  {plan.isRecommended && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full z-10">Recommended</div>}
                  
                  <CardHeader className="p-2">
                     <RadioGroup value={selectedPlan} className="flex justify-center">
                        <RadioGroupItem value={plan.name} id={plan.name} />
                     </RadioGroup>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-2">
                    <p className="text-2xl font-bold">₹{plan.price}</p>
                    <p className="text-sm text-muted-foreground line-through">₹{plan.originalPrice}</p>
                    <p className="text-xs font-semibold text-destructive mt-1">Save {Math.round(100 - (plan.price / plan.originalPrice) * 100)}%</p>
                  </CardContent>
                  <CardFooter className="p-2 flex flex-col items-center justify-center text-xs space-y-1">
                    <p>{plan.tokens} Tokens</p>
                    <p>{plan.contacts} Contacts</p>
                    <p>{plan.advocates} Advocates</p>
                  </CardFooter>
                </Card>
              ))}
            </div>

             <div className="pt-4">
                <Button onClick={handlePaymentRedirect} className="w-full h-12 bg-primary hover:bg-primary/90 text-lg text-primary-foreground">
                Get {selectedPlan} now
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-2">Recurring payment, cancel anytime</p>
            </div>
          </TabsContent>
          <TabsContent value="assisted">
            <Card>
                <CardHeader>
                    <CardTitle>Request a Callback</CardTitle>
                    <CardDescription>Our experts will call you back to help you choose the best plan.</CardDescription>
                </CardHeader>
                <CardContent>
                     <form id="assisted-form" onSubmit={handleAssistedSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="assisted-name">Full Name</Label>
                            <Input id="assisted-name" name="name" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="assisted-phone">Phone Number</Label>
                                 <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="assisted-phone" name="phone" type="tel" required className="pl-10" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="assisted-email">Email</Label>
                                 <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="assisted-email" name="email" type="email" required className="pl-10" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Plan Interested In</Label>
                             <RadioGroup name="plan" defaultValue="Silver" className="flex gap-4">
                                {assistedServicePlans.map(plan => (
                                    <div key={plan.name} className="flex items-center space-x-2">
                                        <RadioGroupItem value={plan.name} id={`assisted-${plan.name}`} />
                                        <Label htmlFor={`assisted-${plan.name}`} className="font-normal">{plan.name} (₹{plan.price})</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="assisted-message">Message (Optional)</Label>
                            <Textarea id="assisted-message" name="message" placeholder="Let us know if you have any specific questions." />
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button type="submit" form="assisted-form" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Request a call back'}
                    </Button>
                </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
