"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import withAuth from "@/lib/withAuth";

interface UserProfile {
  username: string;
  email: string;
  joinedDate: string;
  avatarUrl: string | null;
}

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { authUser, updateProfile } = useAuthStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setSelectedImg(reader.result as string);
      }
    };
  };

  const handleImageUpload = async () => {
    if (!selectedImg) return;

    setUploading(true);
    try {
      await updateProfile(selectedImg);
      setSelectedImg(null);
    } catch (error) {
      console.error("Failed to upload avatar", error);
    } finally {
      setUploading(false);
    }
  };

  const userProfile: UserProfile = {
    username: authUser?.username || "",
    email: authUser?.email || "",
    joinedDate: authUser?.joinedDate || new Date().toISOString(),
    avatarUrl: authUser?.profilePicture || null,
  };

  return (
    <div className="h-screen pt-14">
      <div className="max-w-2xl mx-auto p-4 py-7">
        <div className="rounded-xl p-6 shadow space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-gray-500">Your profile information</p>
          </div>

          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={selectedImg || userProfile.avatarUrl || "/default-avatar.png"}
                alt="User Avatar"
                className="w-24 h-24 rounded-full object-cover"
              />
              <Label
                htmlFor="avatar-upload"
                className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs px-1 py-1 rounded cursor-pointer hover:bg-blue-600"
              >
                Change
              </Label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 cursor-pointer">
              Click "Change" to browse images
            </p>
            <Button
              className="mt-4"
              onClick={handleImageUpload}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload Avatar"}
            </Button>
          </div>

          {/* User Information Section */}
          <div className="space-y-4">
            <div>
              <Label className="block text-gray-700 font-medium">Username</Label>
              <Input
                value={userProfile.username}
                readOnly
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label className="block text-gray-700 font-medium">Email</Label>
              <Input
                value={userProfile.email}
                readOnly
                className="bg-gray-100"
              />
            </div>
          </div>

          {/* Account Information */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-700">
              Account Information
            </h2>
            <p className="text-gray-500">
              Joined Date: {new Date(userProfile.joinedDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfilePage);