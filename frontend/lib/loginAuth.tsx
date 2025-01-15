import React, { useEffect } from "react";
import { useAuthStore } from "../app/store/useAuthStore";
import { useRouter } from "next/navigation";

const loginAuth = (WrappedComponent: React.FC) => {
  const AuthWrapper = (props: any) => {
    const { authUser } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
      if (authUser) {
        router.push("/chatpage");
      }
    }, [authUser, router]);

    // Optionally, render nothing or a loading spinner until navigation
    if (authUser) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default loginAuth;
