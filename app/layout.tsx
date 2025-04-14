import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import pre from "./pre.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "BoldHug  (Bold Hug / Bold-Hug App)  –  Find Companions for the Things You Love",
  description:
    "BoldHug (also known as Bold Hug or Bold-Hug) app helps you find companions for real-life activities – like sports, travel, food, or social hangouts. Whether you want to make new friends, find a hiking buddy, or join casual meetups nearby – start here.",
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
    "BoldHug",
    "Bold Hug",
    "Bold-Hug",
    "boldhug app",
    "bold hug app",
    "bold-hug app",
    "boldhug events",
    "bold hug events",
    "bold hug social app",
    "find friends to travel with",
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
        <meta
          name="description"
          content="Bold Hug is your go-to app to create and join real-life events. Whether it's travel, social meetups, or hobbies – find your people and share your moments."
        />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
  {`
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Bold Hug",
    "alternateName": ["Bold Hug", "Bold-Hug", "boldhug app", "Bold Hug App", "Friend finding app"],
    "url": "https://web.boldhug.krishcode264.online",
    "description": "Find companions for events and activities. Meet new people for socializing, biking, traveling, and more!",
    "applicationCategory": "Social",
    "operatingSystem": "iOS, Android",
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.boldhug"
  }
  `}
</script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <p style={{ display: "none" }}>
          BoldHug – Also known as Bold Hug, Bold-Hug App, and boldhug app. Find
          your companion for travel, events, and fun activities.
        </p>
        <h1 style={{ display: "none" }}>
        Find Friends, Join Events, and Connect Over Shared Interests
        </h1>
        <p style={{ display: "none" }}>
          Looking for a travel buddy, someone to play badminton with, or just
          people to hang out with? BoldHug helps you meet new friends and
          companions for real-life events and fun group activities. Discover and
          share local moments with people who vibe with you.
        </p>
        {children}
      </body>
    </html>
  );
}
