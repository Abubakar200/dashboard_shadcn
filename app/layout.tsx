import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css"

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const saraBun = Sarabun({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "500"],
});

export const metadata: Metadata = {
  title: "Next.Js Dashboard",
  description: "Next.Js Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saraBun.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="dashboard-theme"
            
          >
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
