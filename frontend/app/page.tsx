"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
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
          <Button onClick={handleLogin} className="px-6 py-3 text-lg  hover:bg-blue-700  rounded-md">
            Login to Chat
          </Button>
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
    </div>
  );
}
