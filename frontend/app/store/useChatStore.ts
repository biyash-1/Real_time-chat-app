import { create } from "zustand";
import { Socket } from "socket.io-client";
import { useAuthStore } from "./useAuthStore";

const BASE_URL = process.env.MODE === "development" ? "http://localhost:3001" : process.env.NEXT_PUBLIC_API_URL;


interface User {
  _id: string;
  username: string;
  fullName: string;
  profilePicture?: string;
  isOnline: boolean;
}

interface Message {
  _id: string;
  sender: string;
  createdAt: string;
  text?: string;
  image?: string | null;
}

interface ChatStoreState {
  messages: Message[];
  socket: Socket | null;
  users: User[];
  selectedUser: User | null;
  isUserLoading: boolean;
  isMessagesLoading: boolean;
  getUsers: () => Promise<void>;
  getMessages: (userId: string) => Promise<void>;
  deleteMessage: (messageId: any) => Promise<void>;
  setSelectedUser: (selectedUser: User | null) => void;
  sendMessage: (messageData: Omit<Message, "_id" | "createdAt">) => Promise<void>;
  subscribeToMessages: () => void;
  unsubscribeFromMessages: () => void;
}

export const useChatStore = create<ChatStoreState>((set, get) => ({
  messages: [],
  users: [],
  socket: null,
  selectedUser: null,
  isUserLoading: false,
  isMessagesLoading: false,

  setSelectedUser: (selectedUser) => set({ selectedUser }),

  getUsers: async () => {
    set({ isUserLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/api/message/getUsers`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      set({ users: data });
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      set({ isUserLoading: false });
    }
  },

  getMessages: async (userId: string) => {
    set({ isMessagesLoading: true });
    try {
      const response = await fetch(`${BASE_URL}/api/message/${userId}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      set({ messages: data });
    } catch (error) {
      console.error(`Failed to fetch messages for user ${userId}:`, error);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  deleteMessage: async (messageId: any) => {
    const { messages } = get();
    try {
      const response = await fetch(`${BASE_URL}/api/message/delete/${messageId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to delete message");
      }
    
      set({ messages: messages.filter((message) => message._id !== messageId) });
    } catch (error) {
      console.error(`Failed to delete message ${messageId}:`, error);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  // Ensure `messages` is always an array
  // if (!Array.isArray(messages)) {
  //   console.error("Messages state is not an array.");
  //   return;
  // }

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
  
    if (!selectedUser) {
      console.error("No selected user.");
      return;
    }
  
    try {
      const response = await fetch(`${BASE_URL}/api/message/send/${selectedUser._id}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      const data = await response.json();
  
      // Ensure the response contains the necessary data
      if (!data || !data._id) {
        console.error("Invalid message data received from server:", data);
        return;
      }
  
      // Ensure messages is initialized as an array
      const updatedMessages = Array.isArray(messages) ? messages : [];
      set({ messages: [...updatedMessages, data] });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  },
  
  subscribeToMessages: () => {
    const { selectedUser } = get();
    console.log("selected user",selectedUser);
    
    
    if (!selectedUser) {
      console.error("Socket or selected user is not available");
      return;
    }
    const socket  = useAuthStore.getState().socket;
    console.log("socket is",socket);
    
    if (!socket) {

      
      return;
    }

    socket?.off("newMessage"); // Clear previous listeners
    socket?.on("newMessage", (newMessage: Message) => {
      if (newMessage.sender === selectedUser._id) {
        set({ messages: [...get().messages, newMessage] });
      }
    });
  },

  unsubscribeFromMessages: () => {
    const socket = get().socket;
  
    if (socket) {
      try {
        socket.off("newMessage"); 
        console.log("Unsubscribed from newMessage event");
      } catch (error) {
        console.error("Error unsubscribing from messages:", error);
      }
    } else {
      console.log("Socket is not initialized, skipping unsubscribe");
    }
  },
  
}));
