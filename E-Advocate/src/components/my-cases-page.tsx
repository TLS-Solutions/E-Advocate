
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, FilePlus, ClipboardList, Briefcase, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    id: "CASE-001",
    title: "Property Dispute in Mumbai",
    lawyer: {
      name: "Samantha",
      image: "https://placehold.co/400x400.png",
      barCouncilId: "NYC98765",
      verified: true,
    },
    status: "In Progress",
    lastUpdate: "2 days ago",
  },
  {
    id: "CASE-002",
    title: "Contract Breach Litigation",
    lawyer: {
      name: "Ben",
      image: "https://placehold.co/400x400.png",
      barCouncilId: "TEXAS1234",
      verified: true,
    },
    status: "Awaiting Documents",
    lastUpdate: "5 days ago",
  },
    {
    id: "CASE-003",
    title: "Family Law - Child Custody",
    lawyer: {
      name: "Chloe",
      image: "https://placehold.co/400x400.png",
      barCouncilId: "FR75001",
      verified: true,
    },
    status: "Resolved",
    lastUpdate: "1 month ago",
  },
];


export function MyCasesPage() {
  const router = useRouter();

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "In Progress":
        return "default";
      case "Awaiting Documents":
        return "secondary";
      case "Resolved":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">My Cases</h1>
        </div>
        <div className="flex items-center gap-2">
            <Button size="sm">
                <ClipboardList className="mr-2 h-4 w-4" />
                Case Status
            </Button>
            <Button size="sm" variant="outline" onClick={() => router.push('/dashboard/file-a-case')}>
                <FilePlus className="mr-2 h-4 w-4" />
                File a Case
            </Button>
            <Button size="sm" variant="outline">
                <Briefcase className="mr-2 h-4 w-4" />
                New Case
            </Button>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="space-y-6">
          {cases.map((caseItem) => (
            <Card key={caseItem.id} className="overflow-hidden shadow-lg">
                <CardHeader className="flex flex-row items-start justify-between gap-4 p-4 bg-muted/50">
                    <div className="flex-1 space-y-1">
                        <CardTitle className="text-lg">{caseItem.title}</CardTitle>
                        <p className="text-xs text-muted-foreground font-mono">{caseItem.id}</p>
                        <Badge variant={getStatusBadgeVariant(caseItem.status) as any}>{caseItem.status}</Badge>
                    </div>
                     <div className="flex flex-col items-center text-center gap-1.5">
                        <Avatar>
                            <AvatarImage src={caseItem.lawyer.image} alt={caseItem.lawyer.name} data-ai-hint="person avatar" />
                            <AvatarFallback>{caseItem.lawyer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-semibold">{caseItem.lawyer.name}</p>
                         {caseItem.lawyer.verified && caseItem.lawyer.barCouncilId && (
                          <div className="flex items-center gap-1.5 text-base">
                            <ShieldCheck className="h-6 w-6 text-blue-500" />
                            <span>{caseItem.lawyer.barCouncilId}</span>
                          </div>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Last update: {caseItem.lastUpdate}</span>
                        <Button variant="link" size="sm" className="p-0 h-auto">View Details</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                         <Button variant="outline">
                            Chat
                        </Button>
                        <Button variant="outline">
                            Call
                        </Button>
                        <Button variant="outline">
                            Docs
                        </Button>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
