import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import GlobalWaitlistModal from "@/components/GlobalWaitlistModal";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://web.rallyo.online'),
  title: "Rallyo – Find Companions for Activities & Events",
  description:
    "Rallyo helps you find companions for real-life activities – like sports, travel, food, or social hangouts. Make new friends, find a hiking buddy, or join casual meetups nearby.",
  keywords: [
    "find activity partners",
    "make friends app",
    "meet new people nearby",
    "join group events",
    "event sharing app",
    "social meetup app",
    "activity companion app",
    "find hobby groups",
    "travel buddy app",
    "find people for activities",
    "friend finder",
    "local events near me",
    "sports meetups",
    "event discovery",
    "Rallyo",
    "rallyo app",
    "rallyo events",
    "find friends to travel with",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "7IcqY4aOAe6NCnOzvEaQPkMajGxhkOC8qBV30Zvzvfc",
  },
  openGraph: {
    title: "Rallyo – Discover and Share Local Events, Make Friends",
    description:
      "Join fun activities nearby – sports, travel, cooking, or just hangouts. Meet people who vibe with you.",
    siteName: "Rallyo",
    url: "https://web.rallyo.online",
    images: [
      {
        url: "/pre.png",
        width: 1200,
        height: 630,
        alt: "Rallyo Event Sharing App – Find companions for anything",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rallyo – Share Events, Meet New People, Make Friends",
    description:
      "Create or join activities in your city. From sports to travel to food – vibe and connect on Rallyo.",
    images: ["/pre.png"],
    creator: "@rallyo",
  },
  icons: {
    icon: "/applogo.png",
    shortcut: "/favicon.ico",
    apple: "/applogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${plusJakartaSans.variable} ${dancingScript.variable} antialiased bg-surface font-body text-on-surface selection:bg-secondary-container`}
      >
        {children}
        <GlobalWaitlistModal />
      </body>
    </html>
  );
}
