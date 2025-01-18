// "use client";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "../app/store/useAuthStore";

// const withAuth = (WrappedComponent: React.FC) => {
//   const AuthenticatedComponent = (props: any) => {
//     const router = useRouter();
//     const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

//     useEffect(() => {
//       // Check authentication status when component mounts
//       checkAuth();
//     }, [checkAuth]);

//     useEffect(() => {
//       // Only redirect if we're done checking auth and there's no user
//       if (!isCheckingAuth && !authUser) {
//         router.replace("/login"); // Redirect to login if not authenticated
//       }
//     }, [authUser, isCheckingAuth, router]);

//     // Don't render anything while checking authentication or if not authenticated
//     if (isCheckingAuth || !authUser) {
//       return null; // Or you can display a loading spinner instead of returning null
//     }

//     return <WrappedComponent {...props} />;
//   };

//   return AuthenticatedComponent;
// };

// export default withAuth;
