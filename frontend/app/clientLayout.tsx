"use client";

import React from "react";
 
import { ThemeProvider } from "@/components/theme-provider";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
     
      
    </ThemeProvider>
  );
};

export default ClientLayout;
