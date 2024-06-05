import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

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
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[1140px] w-[300px]">
            <Sidebar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
