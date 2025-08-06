import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 mb-4 animate-fade-in",
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
            HR
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
        isBot 
          ? "bg-chat-bot text-foreground rounded-bl-md" 
          : "bg-primary text-primary-foreground rounded-br-md"
      )}>
        <p className="text-sm leading-relaxed">{message}</p>
        <span className={cn(
          "text-xs mt-1 block opacity-70",
          isBot ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {!isBot && (
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-muted text-muted-foreground text-xs">
            You
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};