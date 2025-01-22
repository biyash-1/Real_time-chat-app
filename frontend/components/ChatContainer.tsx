"use client";
import React, { useEffect, useState } from "react";
import { useChatStore } from "../app/store/useChatStore";
import ChatHeader from "@/components/ChatHeader";
import MessageInput from "@/components/MessageInput";
import MessageSkeleton from "./MessageSkeleton";
import { useAuthStore } from "../app/store/useAuthStore";
import { formatMessageTime } from "../lib/date";


const ChatContainer = () => {
  const {
    messages,
    getMessages,
    
    deleteMessage,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser,socket } = useAuthStore();
  console.log("auth user in chat container is",authUser);
  console.log("messages in chat container are",messages);
console.log("selected user is",selectedUser);
  console.log("socket in chat container is",socket);
  
  
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null); 
  const [showDeleteButton, setShowDeleteButton] = useState<string | null>(null); 
  
  
  const scrollToBottom = () => {
    const container = document.querySelector(".messages-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
      socket?.connect();

      subscribeToMessages();
    }

    return () => unsubscribeFromMessages();
  }, [selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages,socket]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      console.log("messages are",messages);
      scrollToBottom();
    }
  }, [messages]);

  const handleDeleteMessage = (messageId:any) => {
 
    deleteMessage(messageId);
  
  };

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden mb-6 ">
      
      <ChatHeader />
      <div className="messages-container  h-full overflow-y-auto p-2 space-y-2 ">
        {authUser && messages && Array.isArray(messages) && messages.map((message, index) => (
          <div
            key={message._id || `message-${index}`}
            className={`chat ${message.sender === authUser._id ? "chat-end" : "chat-start"}`}
            onMouseEnter={() => setHoveredMessageId(message._id)}
            onMouseLeave={() => {
              setHoveredMessageId(null);
              setShowDeleteButton(null);
            }}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={message.sender === authUser._id ? authUser?.profilePicture || "avatar.png" : selectedUser?.profilePicture || "avatar.png"}
                  alt="profile picture"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-sm opacity-50 ml-1">{formatMessageTime(message.createdAt)}</time>
            </div>
            <div className="chat-bubble flex flex-col relative dark:bg-slate-700  bg-gray-300 border-zinc-400 text-black">
              {hoveredMessageId === message._id && (
                <div className="absolute left-[-30px] top-0 flex space-x-1">
                  <button className="dark:text-white " onClick={() => setShowDeleteButton(message._id)}>...</button>
                  {showDeleteButton === message._id && (
                    <button className="text-white bg-red-600 relative bottom-5 right-8 rounded-full p-1" onClick={() => handleDeleteMessage(message._id)}>Delete</button>
                  )}
                </div>
              )}
              {message?.image && (
                <img src={message?.image} alt="image" className="w-[200px] h-auto object-cover" />
              )}
              <p className="text-sm dark:text-zinc-300">{message?.text || message.text || "No content"}</p>
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
