"use client";

import React from "react";
import { useAuthStore } from "../app/store/useAuthStore"; // Adjust the import path based on your project structure
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./Mode-toogle";

const Navbar: React.FC = () => {
  const { authUser, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await logout(); // Call the logout function from Zustand
    router.push("/"); // Redirect to the home page
  };

  const handleLogin = () => {
    router.push("/login"); // Redirect to the login page
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800">
      {/* Logo */}
      <div
        className="text-lg font-bold cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
        onClick={() => router.push("/")}
      >
        Chat<span className="text-red-500">Me</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link
          href="/"
          className="hover:underline hover:text-gray-600 dark:hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:underline hover:text-gray-600 dark:hover:text-gray-300"
        >
          About
        </Link>
        <Link
          href="/chatpage"
          className="hover:underline hover:text-gray-600 dark:hover:text-gray-300"
        >
          Messenger
        </Link>
        {authUser && (
          <Link
            href="/profile"
            className="hover:underline hover:text-gray-600 dark:hover:text-gray-300"
          >
            Profile
          </Link>
        )}
      </div>

      {/* Login/Logout and Mode Toggle */}
      <div className="flex items-center space-x-4">
        {authUser ? (
          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </Button>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
