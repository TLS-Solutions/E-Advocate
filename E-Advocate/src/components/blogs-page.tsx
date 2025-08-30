
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Understanding Your Legal Rights: A Beginner's Guide",
    description: "Navigating the legal world can be daunting. This guide breaks down the fundamental rights every citizen should know, from consumer protection to basic civil liberties.",
    image: "https://placehold.co/600x400.png",
    imageHint: "law books library",
    author: "Jane Doe, Senior Advocate",
    date: "October 26, 2023",
  },
  {
    title: "The Rise of Digital Contracts: What You Need to Know",
    description: "In an increasingly digital world, e-contracts are becoming the norm. Learn about their validity, how to ensure they are secure, and the common pitfalls to avoid.",
    image: "https://placehold.co/600x400.png",
    imageHint: "person signing digital contract",
    author: "John Smith, Corporate Lawyer",
    date: "October 24, 2023",
  },
  {
    title: "Demystifying Intellectual Property: Patents, Trademarks, and Copyrights",
    description: "Intellectual Property (IP) is a valuable asset. This post explains the key differences between patents, trademarks, and copyrights, and how to protect your creations.",
    image: "https://placehold.co/600x400.png",
    imageHint: "lightbulb idea concept",
    author: "Emily White, IP Attorney",
    date: "October 22, 2023",
  },
];

export function BlogsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 md:px-6 bg-card border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold font-headline">Blogs</h1>
        </div>
        <Button onClick={() => router.push('/dashboard/blogs/create')}>
          <FilePlus className="mr-2 h-4 w-4" />
          New Post
        </Button>
      </header>
      <main className="flex-1 p-4 md:p-6 space-y-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-md">
                <CardHeader className="p-0">
                     <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                        data-ai-hint={post.imageHint}
                    />
                </CardHeader>
                <CardContent className="p-4">
                    <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                    <p className="text-xs text-muted-foreground mb-3">{post.author} • {post.date}</p>
                    <p className="text-sm text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button variant="link" className="p-0 h-auto text-primary">Read More</Button>
                </CardFooter>
            </Card>
          ))}
      </main>
    </div>
  );
}
