
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { io, Socket } from "socket.io-client";
import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = process.env.MODE === "development" ? "http://localhost:3001" : process.env.NEXT_PUBLIC_API_URL ;
// const BASE_URL = "http://localhost:3001";

interface AuthState {
  authUser: any;
  isUpdatingProfile: boolean;
  onlineUsers: any[];
  isCheckingAuth: boolean;
  socket: Socket | null;
  checkAuth: () => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      hasHydrated: false,
      authUser: null,
      isCheckingAuth: true,
      onlineUsers: [],
      isUpdatingProfile: false,
      socket: null,
      checkAuth: async () => {
        try {
          const response = await fetch(`${BASE_URL}/api/user/checkAuth`, {
            method: "GET",
            credentials: "include",
          });
          const data = await response.json();
          if (response.ok && data.user) {
            set({ authUser: data.user, isCheckingAuth: false });
            get().connectSocket();
          } else {
            set({ authUser: null, isCheckingAuth: false });
          }
        } catch (err) {
          console.error("Check auth error:", err);
          set({ authUser: null, isCheckingAuth: false });
        }
      },
      
      login: async (data: { email: string; password: string }) => {
        try {
          const response = await fetch(`${BASE_URL}/api/user/login`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          if (response.ok) {
            const responseData = await response.json();
            set({ authUser: responseData.user });
            toast.success("Login successful");
            get().connectSocket();
            console.log("auth user in login function is", get().authUser);
          } else {
            const errorData = await response.json();
            throw new Error(errorData.message || "Invalid credentials");
          }
        } catch (err: any) {
          console.error("Error during login:", err.message);
          throw err;
        }
      },
      
      logout: async () => {
        try {
          await fetch(`${BASE_URL}/api/user/logout`, {
            method: "POST",
            credentials: "include",
          });
          toast.success("Logout successful");
          set({ authUser: null });
          get().disconnectSocket();
        } catch (err) {
          console.error("Error during logout:", err);
        }
      },
      
      updateProfile: async (profilepic: any) => {
        set({ isUpdatingProfile: true });
        try {
          const response = await axios.patch(
            `${BASE_URL}/api/user/update-profile`,
            { profilepic },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
      
          const updatedUser = response.data;
          console.log("Updated user is", updatedUser);
          set({ authUser: updatedUser });
        } catch (err) {
          console.error("Error updating profile:", err);
        } finally {
          set({ isUpdatingProfile: false });
        }
      },
      
      connectSocket: () => {
        const { authUser } = get();

       
        console.log("authUse after login r", authUser);

        if (!authUser || !authUser.id) {
          console.log("No auth user");
          return;
        }

        if (authUser) {
          const newSocket = io(BASE_URL, {
            query: {
              userId: authUser.id,
            },
          });
          newSocket.connect();

          set({ socket: newSocket });

          console.log("Socket from connectSocket function is", newSocket);
          newSocket.on("getOnlineUsers", (userIds) => {
            console.log("Online users received:", userIds);
            set({ onlineUsers: userIds });
          });
          console.log("Socket connected");
        }
      },

      disconnectSocket: () => {
        const socket = get().socket;
      
        try {
          if (socket) {
            console.log("Socket before disconnecting:", socket);
      
            if (socket.connected===true) {
              socket.off("newMessage");
              socket.off("getOnlineUsers");
              // Add other events you are listening to here...
              socket.disconnect();
              console.log("Socket disconnected successfully");
            } else {
              console.log("Socket is already disconnected");
            }
          } else {
           
            console.log("Socket is not initialized");
          }
      
          set({ socket: null }); // Clear socket state after disconnection
        } catch (error) {
          // If there's an error (e.g., socket is not initialized), log it but don't let it break the app
          console.error("Error while disconnecting socket:", error);
        }
      },
      
    
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
      
        // Exclude functions and socket state from persistence
        ...Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              ![
                "socket",
                "connectSocket",
                "disconnectSocket",
              ].includes(key)
          )
        ),
      }),
    }
  )
);
