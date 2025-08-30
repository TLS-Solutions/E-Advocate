
"use client";

import { useEffect, useState } from "react";
import { generateIcebreakerSuggestions } from "@/ai/flows/ai-icebreaker-suggestions";
import { currentUser, UserProfile } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles, Wand2, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IcebreakerModalProps {
  user: UserProfile;
  onOpenChange: (open: boolean) => void;
}

export function IcebreakerModal({ user, onOpenChange }: IcebreakerModalProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const userProfileString = `Name: ${currentUser.name}, Age: ${currentUser.age}, Bio: ${currentUser.bio}, Interests: ${currentUser.interests.join(", ")}, Location: ${currentUser.location}`;
        const interestedUserProfileString = `Name: ${user.name}, Age: ${user.age}, Bio: ${user.bio}, Interests: ${user.interests.join(", ")}, Location: ${user.location}`;
        
        const result = await generateIcebreakerSuggestions({
          userProfile: userProfileString,
          interestedUserProfile: interestedUserProfileString,
        });

        if (result && result.icebreakerQuestions) {
          setSuggestions(result.icebreakerQuestions);
        } else {
            throw new Error("Failed to generate suggestions.");
        }
      } catch (error) {
        console.error("Error generating icebreakers:", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Could not generate icebreaker suggestions. Please try again later.",
        });
        onOpenChange(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [user, onOpenChange, toast]);

  return (
    <Dialog open={true} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <Sparkles className="text-primary h-5 w-5" />
            AI Icebreakers for {user.name}
             {user.verified && <ShieldCheck className="h-5 w-5 text-blue-500" />}
          </DialogTitle>
          <DialogDescription>
            Here are a few conversation starters to help you connect.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-4/5" />
            </div>
          ) : (
            <ul className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                   <Wand2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                   <p className="text-sm">{suggestion}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
