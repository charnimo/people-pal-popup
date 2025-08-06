import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatWindow } from "./ChatWindow";
import { cn } from "@/lib/utils";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsOpen(false);
      setIsMinimized(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-[var(--shadow-button)] transition-all duration-300 z-50",
          "bg-gradient-to-r from-primary to-primary-glow hover:scale-110 hover:shadow-lg",
          isOpen && "scale-90 opacity-80"
        )}
        size="lg"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
            {/* Pulse indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-chat-bounce">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </>
        )}
      </Button>

      {/* Chat Window */}
      <ChatWindow
        isOpen={isOpen}
        onClose={closeChat}
        onMinimize={minimizeChat}
        isMinimized={isMinimized}
      />
    </>
  );
};