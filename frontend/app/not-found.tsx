"use client";

import { Link } from "lucide-react";
import dynamic from "next/dynamic";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

// Export dynamically for client-side rendering only
export default dynamic(() => Promise.resolve(NotFound), { ssr: false });
