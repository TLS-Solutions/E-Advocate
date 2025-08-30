
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function WelcomePage() {
  const router = useRouter();
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to E-Advocate";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText, fullText]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
        <div className="flex-1 flex flex-col items-center justify-center p-8">
            <div>
                 <video 
                    src="https://videos.pexels.com/video-files/853877/853877-hd_1280_720_25fps.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="rounded-full object-cover h-48 w-48"
                    width="200"
                    height="200"
                 />
            </div>

            <div className="flex flex-col items-center text-center mt-8">
              <h1 className="text-3xl font-bold font-headline text-foreground h-10">
                {typedText}
                <span className="inline-block w-1 animate-pulse bg-foreground h-8 ml-1"></span>
              </h1>
              <p className="mt-2 max-w-sm text-muted-foreground">
                  Your trusted platform for legal services. Connect with verified advocates and find the help you need.
              </p>
            </div>
        </div>

        <div className="flex flex-col gap-4 p-8 pt-0">
            <Button
                className="w-full"
                onClick={() => router.push("/register")}
            >
                New user? Register for Free
            </Button>
            <div className="flex gap-4">
                <Button
                variant="outline"
                className="w-full bg-background/80"
                onClick={() => router.push("/dashboard")}
                >
                Explore the App
                </Button>
                <Button
                variant="outline"
                className="w-full bg-background/80"
                onClick={() => router.push("/login?tab=login&from=login")}
                >
                Existing user? Login
                </Button>
            </div>
        </div>
    </div>
  );
}
