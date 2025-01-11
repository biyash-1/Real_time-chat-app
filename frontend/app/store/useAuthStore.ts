import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { io, Socket } from "socket.io-client";
import axios from "axios";
import { toast } from "react-hot-toast";

// Use the BASE_URL to handle different environments (development vs production)
const BASE_URL = process.env.MODE === "development" ? "http://localhost:3001" : process.env.NEXT_PUBLIC_API_URL;

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
          if (response.ok) {
            const data = await response.json();
            set({ authUser: data.user, isCheckingAuth: false });
            get().connectSocket();
          } else {
            set({ authUser: null });
          }
        } catch (err) {
          console.error("Error during authentication check:", err);
          set({ authUser: null });
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
                get().connectSocket(); // Ensure this function is also safe for client-only
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
        const { authUser, socket } = get();
        console.log("authUser", authUser);

        if (!authUser || !authUser._id) {
          console.log("No auth user");
          return;
        }

        if (authUser && !socket) {
          const newSocket = io(BASE_URL, {
            query: {
              userId: authUser._id,
            },
          });
          newSocket.connect();

          set({ socket: newSocket });

          console.log("Socket from connectSocket function is", socket);
          newSocket.on("getOnlineUsers", (userIds) => {
            console.log("Online users received:", userIds);
            set({ onlineUsers: userIds });
          });
          console.log("Socket connected");
        }
      },

      disconnectSocket: () => {
        const socket = get().socket;
        if (socket && socket.connected) {
          socket.disconnect();
        }
        set({ socket: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        authUser: state.authUser,
        onlineUsers: state.onlineUsers,
        isCheckingAuth: state.isCheckingAuth,
        isUpdatingProfile: state.isUpdatingProfile,
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
