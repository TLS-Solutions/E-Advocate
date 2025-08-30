
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function यूपीआईIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M2.91602 0.333313V11.6666H0.696015V0.333313H2.91602Z" fill="#505F79"/>
        <path d="M9.93208 0.333313V1.91331H12.1881V11.6666H14.4081V1.91331H16.6641V0.333313H9.93208Z" fill="#505F79"/>
        <path d="M21.3787 0.333313L17.5867 11.6666H20.0347L20.5987 10.0866H25.0267L25.5907 11.6666H28.0387L24.2467 0.333313H21.3787ZM21.5707 8.50665L22.8067 4.90665L24.0427 8.50665H21.5707Z" fill="#505F79"/>
        <path d="M8.07005 0.333313H5.20205V11.6666H8.07005V9.44665C9.22205 9.44665 10.1581 8.51065 10.1581 7.35865V2.56665C10.1581 1.41465 9.22205 0.478652 8.07005 0.478652V0.333313ZM7.41005 7.21331H5.86205V2.63331H7.41005V7.21331Z" fill="#505F79"/>
      </svg>
    )
}

function GooglePayLogo() {
  return (
    <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.32,10.15a4.43,4.43,0,0,1,1.92-3.79V4.22H23.51a6,6,0,0,0-5.73,6,6,6,0,0,0,5.73,6H23.5v-2.2a4.4,4.4,0,0,1-1.93-3.66Z" fill="#EA4335"/>
        <path d="M30.34,10.15a6,6,0,0,0-6-6h-2.1v2.18h2.1a3.86,3.86,0,1,1,0,7.72h-2.1V16.2h2.1a6,6,0,0,0,6-6Z" fill="#FBBC05"/>
        <path d="M3.86,10.1a3.86,3.86,0,0,1,3.87-3.87H9.86V4.05H7.73A6.05,6.05,0,0,0,5.49,15.63,6,6,0,0,0,7.73,16.2H9.86V14a3.86,3.86,0,0,1-3.87-3.87Z" fill="#4285F4"/>
        <path d="M17.77,10.15a3.86,3.86,0,0,1-3.87,3.87H11.78V4.05h2.12a3.86,3.86,0,1,1,0,7.73h.11A3.83,3.83,0,0,1,17.77,10.15Zm-2.12,2.07V8.08h.11a2.07,2.07,0,1,1,0,4.14Z" fill="#34A853"/>
        <path d="M35,6.38a3.29,3.29,0,0,0-3.37,3.37v6.33H33.8V10.29a1.14,1.14,0,1,1,2.28,0v5.79h2.12V10.29a3.37,3.37,0,0,0-3.2-3.91Z" fill="#5F6368"/>
        <path d="M46.71,9.75,44.1,16.08h-2L40,7.47h2.24l1.59,6,1.59-6Z" fill="#5F6368"/>
    </svg>
  )
}

function PhonePeLogo() {
  return (
    <svg width="75" height="20" viewBox="0 0 95 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.59 13.51L46.96 11.14L43.83 8L41.46 10.37L39.09 8L36.72 10.37L34.35 8L28.36 14L30.73 16.37L33 14.1L35.37 16.47L37.74 14.1L40.11 16.47L42.48 14.1L44.85 16.47L50.84 10.48L48.47 8.11L44.59 12.16V13.51Z" fill="#5A3393"/>
        <path d="M62.33 11.23C62.33 13.12 61.38 14.47 59.84 14.47C58.3 14.47 57.35 13.12 57.35 11.23C57.35 9.34 58.3 8 59.84 8C61.38 8 62.33 9.34 62.33 11.23ZM60.08 11.23C60.08 10.28 59.98 9.34 59.18 9.34C58.38 9.34 58.28 10.28 58.28 11.23C58.28 12.18 58.38 13.12 59.18 13.12C59.98 13.12 60.08 12.18 60.08 11.23Z" fill="#5A3393"/>
        <path d="M67.31 8.24V14.23H66.36L64.82 12.38V14.23H63.97V8.24H64.92L66.46 10.14V8.24H67.31Z" fill="#5A3393"/>
        <path d="M72.34 8.24V14.23H71.5V12.79L70.19 14.23H69.45L70.76 12.69L69.31 8.24H70.36L71.21 11.04L72.06 8.24H72.34Z" fill="#5A3393"/>
        <path d="M76.04 11.23C76.04 13.12 75.09 14.47 73.55 14.47C72.01 14.47 71.06 13.12 71.06 11.23C71.06 9.34 72.01 8 73.55 8C75.09 8 76.04 9.34 76.04 11.23ZM73.79 11.23C73.79 10.28 73.69 9.34 72.89 9.34C72.09 9.34 71.99 10.28 71.99 11.23C71.99 12.18 72.09 13.12 72.89 13.12C73.69 13.12 73.79 12.18 73.79 11.23Z" fill="#5A3393"/>
        <path d="M18.11 10.43C18.11 15.63 13.31 19.38 8.11 19.38C2.91 19.38 -0.99 15.54 -0.99 10.43C-0.99 5.32 2.91 1.48 8.11 1.48C13.31 1.48 18.11 5.32 18.11 10.43Z" fill="#5A3393"/>
        <path d="M84.73 11.23C84.73 13.12 83.78 14.47 82.24 14.47C80.7 14.47 79.75 13.12 79.75 11.23C79.75 9.34 80.7 8 82.24 8C83.78 8 84.73 9.34 84.73 11.23ZM82.48 11.23C82.48 10.28 82.38 9.34 81.58 9.34C80.78 9.34 80.68 10.28 80.68 11.23C80.68 12.18 80.78 13.12 81.58 13.12C82.38 13.12 82.48 12.18 82.48 11.23Z" fill="#5A3393"/>
        <path d="M93.38 8.24V14.23H92.54V9.68L90.59 14.23H89.95L88.04 9.68V14.23H87.2V8.24H88.58L90.27 12.52L91.96 8.24H93.38Z" fill="#5A3393"/>
    </svg>
  )
}

function PaytmLogo() {
  return (
    <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.16 3.8H0V4.76H3.84V16.2H5.96V4.76H10.16V3.8Z" fill="#002F6C"/>
        <path d="M10.96 11.88V3.8H12.94L16.48 9.88V3.8H18.4V16.2H16.42L12.94 10.24V16.2H10.96V11.88Z" fill="#00B9F1"/>
        <path d="M33.22 3.8L28.3 12.64L26.88 9.96C26.14 8.76 25.1 8.1 23.68 8.1H19.2V16.2H21.28V9.82H23.54L27.66 16.2H30.1L31.96 12.92L34.98 16.2H37.32L33.22 8.76V3.8Z" fill="#002F6C"/>
        <path d="M49.2 8.26C49.2 5.68 47.46 3.8 44.52 3.8H38.2V16.2H40.28V10.18H44.18L46.36 16.2H48.8L46.22 9.58C48.06 9.52 49.2 8.92 49.2 8.26ZM44.42 8.38H40.28V5.62H44.42C45.66 5.62 46.54 6.22 46.54 7.54C46.54 8.2 45.92 8.38 44.42 8.38Z" fill="#002F6C"/>
        <path d="M50.48 11.88V3.8H52.46L55.94 9.88V3.8H57.86V16.2H55.88L52.46 10.24V16.2H50.48V11.88Z" fill="#00B9F1"/>
        <path d="M58.64 3.8H64V5.44L60.52 10.74V10.8L64 16.2H58.64V14.5L61.76 11.04V10.5L58.64 5.5V3.8Z" fill="#00B9F1"/>
    </svg>
  )
}

export function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const planName = searchParams.get('plan') || 'Unknown Plan';
  const planPrice = searchParams.get('price') || '0';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Successful!",
      description: `You have successfully purchased the ${planName} plan.`,
    });
    router.push('/dashboard/results');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Complete Your Payment</h1>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
            <CardDescription>
              You are purchasing the <span className="font-bold text-primary">{planName}</span> plan for <span className="font-bold text-primary">₹{planPrice}</span>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card">
                    <CreditCard className="h-5 w-5 mr-2" /> Cards
                </TabsTrigger>
                <TabsTrigger value="upi">
                    <यूपीआईIcon className="mr-2" />
                </TabsTrigger>
                <TabsTrigger value="more">More</TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="mt-6">
                 <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <div className="relative">
                        <Input id="card-number" placeholder="0000 0000 0000 0000" required />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                        <Label htmlFor="expiry-month">Expiry</Label>
                        <Input id="expiry-month" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="CVC" required />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="zip">ZIP</Label>
                        <Input id="zip" placeholder="ZIP" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="card-holder">Card Holder Name</Label>
                        <Input id="card-holder" placeholder="Enter name as on card" required />
                    </div>
                 </form>
              </TabsContent>
              <TabsContent value="upi" className="mt-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="upi-id">Enter UPI ID</Label>
                        <Input id="upi-id" placeholder="yourname@bank" />
                    </div>
                    <div className="text-center text-muted-foreground my-4">OR</div>
                    <div className="flex flex-col items-center gap-4">
                         <p>Scan QR code with your UPI app</p>
                         <Image src="https://placehold.co/150x150.png" width={150} height={150} alt="UPI QR Code" data-ai-hint="qr code" />
                    </div>
                </div>
              </TabsContent>
               <TabsContent value="more" className="mt-6">
                <div className="space-y-4">
                    <p className="font-semibold text-center">More Payment Options</p>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-14 flex items-center justify-center">
                            <GooglePayLogo />
                        </Button>
                         <Button variant="outline" className="h-14 flex items-center justify-center">
                            <PaytmLogo />
                        </Button>
                         <Button variant="outline" className="h-14 flex items-center justify-center">
                            <PhonePeLogo />
                        </Button>
                         <Button variant="outline" className="h-14">
                            Netbanking
                        </Button>
                    </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button type="submit" form="payment-form" className="w-full h-12 text-lg">
              Pay ₹{planPrice}
            </Button>
            <div className="flex items-center text-xs text-muted-foreground gap-1.5">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>Secure payments powered by Stripe.</span>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
