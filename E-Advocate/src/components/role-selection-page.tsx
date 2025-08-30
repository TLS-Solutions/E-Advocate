
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LogoWithText } from "./logo";
import { Scale, CircleUserRound } from "lucide-react";

export function RoleSelectionPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <div className="text-center mb-8">
            <LogoWithText className="w-48 h-auto mx-auto" />
        </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Join E-Advocate Services</CardTitle>
          <CardDescription>Choose your role to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <Button
            variant="outline"
            className="w-full h-16 text-lg justify-start p-4"
            onClick={() => router.push("/register/client")}
          >
            <CircleUserRound className="mr-4 h-8 w-8" />
            Register as a Client
          </Button>
          <Button
            variant="outline"
            className="w-full h-16 text-lg justify-start p-4"
            onClick={() => router.push("/register/lawyer")}
          >
            <Scale className="mr-4 h-8 w-8" />
            Register as a Lawyer
          </Button>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => router.push("/login?from=login&tab=login")}
              >
                Click here to login
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
