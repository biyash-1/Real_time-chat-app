"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardFooter } from "../../components/ui/card"; // Update import paths as necessary
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

let BASE_URL = "/"; // Default to production URL

useEffect(() => {
  if (typeof window !== "undefined") {
    // Conditionally set BASE_URL for development
    BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "/";
  }
}, []);

interface FormData {
  username: string;
  email: string;
  password: string;
  image: File | null;
}

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    image: null,
  });

  const [uploading, setUploading] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSignup = async () => {
    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }

    try {
      setUploading(true);

      // Upload image to Cloudinary
      const imageData = new FormData();
      imageData.append("file", formData.image);
      imageData.append("upload_preset", "userimage"); // Your upload preset
      imageData.append("folder", "users"); // Cloudinary folder name

      const uploadResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dr8hssrjw/upload",
        imageData
      );

      const imageUrl: string = uploadResponse.data.secure_url;

      // Include the uploaded image URL in the user data
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        imageUrl,
      };

      console.log("User Data:", userData);

      // Make a POST request to the signup endpoint
      await axios.post(`${BASE_URL}/api/user/signup`, userData);
      router.push("/chatpage");
      toast.success("User created successfully");
    } catch (error) {
      console.error("Error uploading image or signing up:", error);
      alert("Error signing up. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="h-screen flex items-center justify-center mx-auto p-20">
      <Card className="p-4 flex flex-col items-start justify-center gap-6 w-1/4">
        <CardHeader className="text-2xl font-bold text-center mx-auto">
          Create an account
        </CardHeader>

        <div className="w-full">
          <Label htmlFor="username" className="mb-1 block">
            Username:
          </Label>
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="email" className="mb-1 block">
            Email:
          </Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="password" className="mb-1 block">
            Password:
          </Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full"
          />
        </div>

        <div className="w-full">
          <Label htmlFor="image" className="mb-1 block">
            Upload Image:
          </Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        <CardFooter className="flex flex-col w-full">
          <div className="flex flex-col justify-between gap-2 w-full">
            <Button className="w-full" onClick={handleSignup} disabled={uploading}>
              {uploading ? "Uploading..." : "Signup"}
            </Button>
            <p className="text-sm mt-2">Already have an account?</p>
            <Button className="w-full" variant={"outline"} onClick={handleLogin}>
              Login
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
