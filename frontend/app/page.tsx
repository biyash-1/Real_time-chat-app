"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false); // State to control video display

  const handleLogin = () => {
    router.push("/login");
  };

  const handleDemoClick = () => {
    setShowVideo(true); // Show video frame when button is clicked
  };

  const closeVideo = () => {
    setShowVideo(false); // Hide video frame when close is clicked
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-slate-900 p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl w-full ">
        {/* Left Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-700">
            <span className="dark:text-white">Build</span> Connections Instantly
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400">
            Stay connected with your loved ones no matter where they are. Our
            chat app brings you closer within seconds.
          </p>
          <div className="flex flex-col items-start justify-center gap-2 ">

          <Button
            onClick={handleLogin}
            className="px-6 py-3 text-lg hover:bg-blue-700 rounded-md"
          >
            Login to Chat
          </Button>
          <Button
            onClick={handleDemoClick}
            className="px-6 py-3  text-lg bg-green-600 hover:bg-green-700 text-white rounded-md"
          >
            Click to See Live Demo
          </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <Image
            src="/bg.jpg" // Replace with the path to your image
            alt="Man chatting on a mobile phone"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Video Frame */}
      {showVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
      <button
        onClick={closeVideo}
        className="absolute top-0 right-2 text-red-600 text-2xl font-bold"
      >
        ×
      </button>
      <video
        src="/chatrecording.mp4" // Replace with the path to your video
        controls
        autoPlay
        className="rounded-lg w-full h-[500px]" // Adjusted height
      />
    </div>
  </div>
)}

    </div>
  );
}
