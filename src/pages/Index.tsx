import { ChatBot } from "@/components/chat/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chat-bg to-background">
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl mx-auto p-8">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            HR Assistant Portal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get instant help with HR policies, benefits, leave requests, and more. 
            Our AI-powered assistant is here to support you 24/7.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-2xl border border-chat-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">📋 Policies</h3>
              <p className="text-muted-foreground text-sm">Access company policies and procedures</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-chat-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">🏥 Benefits</h3>
              <p className="text-muted-foreground text-sm">Learn about your benefits and coverage</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-chat-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">📅 Leave</h3>
              <p className="text-muted-foreground text-sm">Submit and track leave requests</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            💬 Click the chat button to start a conversation with our HR Assistant
          </p>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot />
    </div>
  );
};

export default Index;
