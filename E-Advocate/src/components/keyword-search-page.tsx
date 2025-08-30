
"use client";

import { useRouter } from "next/navigation";
import { X, Clock, ArrowUpLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function KeywordSearchPage() {
  const router = useRouter();

  const suggestedSearches = [
    "India Naidu brides having done M.Arch",
    "Telugu brides in Andhra Pradesh",
    "Telugu girl working as Law Enforcement",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard/results");
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <X className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Keyword Search</h1>
        </div>
      </header>
      <main className="flex-1 p-4 space-y-8">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Input
              id="keyword-search"
              placeholder="What are you looking for?"
              className="pr-10 h-12 text-base"
            />
             <Button type="submit" size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 text-muted-foreground">
                <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>

        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-4">
            YOU CAN TRY SEARCHING FOR
          </h2>
          <ul className="space-y-1">
            {suggestedSearches.map((query, index) => (
              <li key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">{query}</span>
                </div>
                <ArrowUpLeft className="h-5 w-5 text-muted-foreground -rotate-45" />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
