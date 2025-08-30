
"use client";

import { useState } from "react";
import { ArrowLeft, Send, ShieldCheck } from "lucide-react";
import { UserProfile, Message, getMockMessages, currentUser } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatProps {
  user: UserProfile;
  onBack: () => void;
}

export function Chat({ user, onBack }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>(getMockMessages(user.id));
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const message: Message = {
      id: messages.length + 1,
      senderId: currentUser.id,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center gap-4 p-4 border-b bg-card">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src={user.image} alt={user.name} data-ai-hint="person avatar"/>
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
             <p className="font-bold font-headline">{user.name}</p>
             {user.verified && user.barCouncilId && (
                <ShieldCheck className="h-5 w-5 text-blue-500" />
            )}
          </div>
          <p className="text-sm text-muted-foreground">{user.verified ? user.barCouncilId : 'Not Verified'}</p>
        </div>
      </header>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex items-end gap-2 max-w-[75%]",
                msg.senderId === currentUser.id ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={msg.senderId === currentUser.id ? currentUser.image : user.image} data-ai-hint="person avatar" />
                <AvatarFallback>{(msg.senderId === currentUser.id ? currentUser.name : user.name).charAt(0)}</AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "p-3 rounded-2xl",
                  msg.senderId === currentUser.id
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted rounded-bl-none"
                )}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <footer className="p-4 border-t bg-card">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
            autoComplete="off"
          />
          <Button type="submit" size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </footer>
    </div>
  );
}
