"use client";

import { useAuthStore } from "../store/useAuthStore";

import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "@/components/NoChatSelected";
import ChatContainer from "@/components/ChatContainer";
import Sidebar from "@/components/Sidebar";
import withAuth from "../../lib/withAuth";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();

  

  
  const { authUser,onlineUsers,connectSocket } = useAuthStore();

  console.log("token is",authUser.token);
  console.log("online usersd are",onlineUsers);
  useEffect(() => {
    if (authUser && authUser._id) {
        console.log("authUser is available. Connecting socket...");
        connectSocket();
    } else {
        console.log("Waiting for authUser to be available...");
    }
}, [authUser?._id]);



  console.log("auth status of chat page", authUser);
  console.log("online users are", onlineUsers);
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center pt-10 border-black">
        <div className="dark:bg-slate-900 bg-slate-400/10 rounded-lg w-full max-w-6xl h-[calc(100vh-4rem)] px-4">
          <div className="flex h-full rounded-lg overflow-hidden ">
            <Sidebar />
            {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);