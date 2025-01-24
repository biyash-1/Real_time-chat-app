"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../app/store/useAuthStore";

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const { isloggedin } = useAuthStore();


    useEffect(() => {
      // Only redirect if we're done checking auth and there's no user
      if (!isloggedin) {
        router.push("/login"); // Redirect to login if not authenticated
      }
    }, []);

    // Don't render anything while checking authentication or if not authenticated
    

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
