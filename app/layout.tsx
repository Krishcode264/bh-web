import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import pre from "./pre.png"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoldHug – Share Events & Meet People",
  description:
    "BoldHug lets you find and create local events. Connect with people for sports, travel, food, and social hangouts.",
  keywords: [
    "event sharing app",
    "find people for activities",
    "travel buddy app",
    "local events",
    "find friend ",
    "sports meetups",
    "social app",
    "event finder",
    "BoldHug",
  ],
  
 
  openGraph: {
    title: "BoldHug – Discover & Share Local Events",
    description:
      "Join fun activities nearby – sports, travel, cooking, or just hangouts. Meet people who vibe with you.",
   
    siteName: "BoldHug",
    images: [
      {
        url: "./pre.png",
        width: 1200,
        height: 630,
        alt: "BoldHug Event Sharing App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldHug – Share Events, Meet New People",
    description:
      "Create or join activities in your city. From sports to travel to food – vibe and connect on BoldHug.",
    images: ["./pre.png"],
  },
  icons: {
    icon: "/icon2.png",
    apple: "/icon2.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
