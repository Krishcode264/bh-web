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
  title: "BoldHug –  Find Companions for the Things You Love",
  description:
    "BoldHug lets you Create personal plans and find real people to enjoy them with. Connect with people for sports, travel, food, and social hangouts.",
  keywords: [
    "event sharing app",
    "Bold Hug app",
    "friend find app",
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
    title: "BoldHug – Discover and  Share Local Events , Make Friends",
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
    title: "BoldHug – Share Events, Meet New People , Make Friends",
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
     <head>
     <meta name="description" content="Bold Hug is your go-to app to create and join real-life events. Whether it's travel, social meetups, or hobbies – find your people and share your moments." />
     </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
