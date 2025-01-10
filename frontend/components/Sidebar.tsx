"use client";
import React, { useEffect, useState } from "react";
import { useChatStore } from "../app/store/useChatStore";
import SidebarSkeleton from "./SidebarSkeleton";
import { Users } from "lucide-react";
import { useAuthStore } from "@/app/store/useAuthStore";

const Sidebar = () => {
  const { users, getUsers, selectedUser, setSelectedUser, isUserLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUserLoading) return <SidebarSkeleton />;

  return (
    <aside className=" border-t h-full dark:bg-slate-850 w-20 lg:w-72 border-r border-base-500 flex flex-col transition-all duration-200">
      <div className="border-b border-base-100 w-full p-5 ">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block text-lg">Contacts</span>
        </div>
        {/* Online filter toggle */}
        <div className="mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm accent-green-500 outline-2"
            />
            <span className="text-sm dark:text-slate-200">Show online users</span>
          </label>
        </div>
      </div>
      <div className="overflow-y-auto w-full py-3">
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full p-3 flex items-center gap-3 transition-colors ${
                selectedUser?._id === user._id
                  ? "dark:bg-slate-800 ring-base-300 bg-slate-200"
                  : "dark:hover:bg-slate-900 hover:bg-slate-200"
              }`}
            >
              <div className="relative mx-auto lg:mx-0">
                <img
                  src={user.profilePicture || "/avatar.png"}
                  alt={user.fullName}
                  className="size-12 object-cover rounded-full"
                />
              </div>
              <div className="hidden lg:flex flex-col text-left min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="font-medium truncate">{user.username}</h1>
                  {onlineUsers.includes(user._id) && (
                    <span className="size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
                  )}
                </div>
                <div className="text-sm dark:text-zinc-400 text-zinc-400">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center text-zinc-500 py-4">No users available</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
