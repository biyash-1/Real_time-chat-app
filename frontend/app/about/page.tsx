"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import dynamic from "next/dynamic";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-slate-900 p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl w-full">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <Image
            src="/profilePic.png" // Replace with your profile picture
            alt="Your profile"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-bold text-blue-700 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 text-center lg:text-left">
            Hi! I'm Biyash Shrestha, a passionate developer specializing in
            building real-time web applications. This chat app is a project to
            bring people closer together through seamless communication.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-4">
            <a
              href="https://github.com/im-biyash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className="text-2xl hover:text-gray-600">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/biyash-shrestha-375593278/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="text-2xl text-blue-600 hover:text-blue-400">
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://www.instagram.com/biyash10/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="text-2xl text-pink-600 hover:text-pink-400">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-white">
            About the App
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            This chat app enables instant messaging with real-time updates,
            providing a seamless experience for staying connected with friends
            and family. Powered by modern technologies like:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-slate-400">
            <li>
              <strong>Socket.IO</strong>: For real-time, bi-directional
              communication.
            </li>
            <li>
              <strong>Next.js</strong>: For fast and scalable front-end
              development.
            </li>
            <li>
              <strong>Express.js</strong>: For robust back-end API management.
            </li>
            <li>
              <strong>MongoDB</strong>: For efficient and reliable data storage.
            </li>
          </ul>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Thank you for trying out my app! I hope it helps you stay connected
            and makes communication easier.
          </p>
        </div>
      </div>
    </div>
  );
};

// Dynamic export for client-side rendering only
export default dynamic(() => Promise.resolve(About), { ssr: false });
