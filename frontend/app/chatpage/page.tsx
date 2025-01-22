"use client";

import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "@/components/NoChatSelected";
import ChatContainer from "@/components/ChatContainer";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import withAuth from "@/lib/withAuth";

const ChatPage: React.FC = () => {
  const { authUser, onlineUsers, connectSocket } = useAuthStore();

  console.log("auth user in chat page",authUser);
  
  const { selectedUser } = useChatStore();

 
  console.log("Online users are", onlineUsers);

  useEffect(() => {
    if (authUser) {
      console.log("authUser is available. Connecting socket...");
      connectSocket();
    
    } else {
      console.log("Waiting for authUser to be available...");
    }
  }, [authUser?.id]);


  

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center pt-10 border-black">
        <div className="dark:bg-slate-900 bg-slate-400/10 rounded-lg w-full max-w-6xl h-[calc(100vh-4rem)] px-4">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar  />
            {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export dynamically as a client-only component
export default dynamic(() => Promise.resolve(withAuth(ChatPage)), { ssr: false });
