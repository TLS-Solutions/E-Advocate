
"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Scale, CircleUserRound, ArrowLeft } from "lucide-react"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { LogoWithText } from "./logo"
import { LawyerRegistrationForm } from "./lawyer-registration-form"

export function LandingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") || "login";
  const role = searchParams.get("role") || 'client';
  const fromLogin = searchParams.get("from") === "login";

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/dashboard/results")
  }

  const handleTabChange = (value: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('tab', value);
    router.push(`?${currentParams.toString()}`);
  };

  const handleBack = () => {
    if (fromLogin) {
      router.push('/');
    } else {
      router.push('/register');
    }
  }

  const isClient = role === 'client';

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <LogoWithText className="w-48 h-auto mx-auto" />
        </div>

        <Card className="w-full max-w-md p-2">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-6">
              <Button variant="ghost" onClick={handleBack} className="p-0 h-auto">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground capitalize">
                {fromLogin ? (
                  <>
                    <CircleUserRound className="h-5 w-5" /> / <Scale className="h-5 w-5" />
                    <span>Client / Lawyer</span>
                  </>
                ) : (
                  <>
                    {isClient ? <CircleUserRound className="h-5 w-5" /> : <Scale className="h-5 w-5" />}
                    <span>{role}</span>
                  </>
                )}
              </div>
            </div>

            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold">Welcome</h2>
              <p className="text-muted-foreground">Access your {fromLogin ? '' : role} dashboard</p>
            </div>

            <Tabs defaultValue={defaultTab} value={defaultTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-login">Email Address</Label>
                    <Input id="email-login" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-login">Password</Label>
                    <Input id="password-login" type="password" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember-me" />
                      <Label htmlFor="remember-me" className="text-sm font-normal">Remember me</Label>
                    </div>
                  </div>
                  <Button type="submit" className="w-full">Sign In</Button>
                </form>
              </TabsContent>
              <TabsContent value="register" className="mt-6">
                {isClient ? (
                  <p className="text-center text-muted-foreground">Please complete the registration via the client portal.</p>
                ) : (
                  <LawyerRegistrationForm />
                )}
              </TabsContent>
            </Tabs>
            <div className="mt-6 text-center">
              <Button variant="link" asChild className="p-0 h-auto text-sm">
                <Link href="/contact">Need help? Contact Support</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
