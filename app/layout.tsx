import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import AuthProvider from "@/providers/auth-provider";

export const metadata: Metadata = {
  title: "Streamger Guide",
  description: "Streamger Guide Admin Panel",
  icons: "/assets/favicon.svg",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
