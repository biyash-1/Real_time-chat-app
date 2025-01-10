"use client";

import { ReactNode } from "react";
import ChatNavbar from "../../components/ChatNavbar"; // Your custom navbar component

interface ChatLayoutProps {
  children: ReactNode;
}

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Custom Navbar */}
      <ChatNavbar />

      {/* Page Content */}
      <main className="flex-grow bg-gray-100">{children}</main>
    </div>
  );
};

export default ChatLayout;
