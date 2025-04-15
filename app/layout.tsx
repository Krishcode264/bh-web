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
    "BoldHug, Bold Hug, Bold-Hug  –  Find Companions for Activities & Events",
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
    <html lang="en" dir="ltr">
      <head>
        <link rel="canonical" href="https://web.boldhug.krishcode264.online/" />
        <meta
          name="description"
          content="Bold Hug is your go-to app to create and join real-life events. Whether it's travel, social meetups, or hobbies – find your people and share your moments."
        />
        <meta name="keywords" content="boldhug, bold hug, bold-hug app, social meetup app, friend finder, travel buddy, hobby groups, find companions nearby" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />
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

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is BoldHug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BoldHug is a social app that helps you find companions for real-life activities like sports, travel, food, or casual hangouts. It's designed to help you meet like-minded people near you."
      }
    },
    {
      "@type": "Question",
      "name": "Is BoldHug a dating app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, BoldHug is not a dating app. It focuses on friendship and shared experiences, not romantic relationships."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use BoldHug to find people for sports or travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Whether it’s a hiking buddy, a football partner, or a weekend traveler – BoldHug connects you with people nearby who enjoy the same activities."
      }
    },
    {
      "@type": "Question",
      "name": "How does BoldHug work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can create or join local activities, explore events near you, and chat with others who want to join. It's a safe, friendly way to meet new people."
      }
    },
    {
      "@type": "Question",
      "name": "Who can use BoldHug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone looking to make new friends, join group events, or find fun activity partners can use BoldHug. It’s perfect for both locals and newcomers."
      }
    }
  ]
}`}
        </script>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BoldHug",
  "url": "https://web.boldhug.krishcode264.online",
  "logo": "https://web.boldhug.krishcode264.online/icon2.png",
  "sameAs": [
    "https://www.instagram.com/boldhug",
    "https://www.twitter.com/boldhug",
    "https://play.google.com/store/apps/details?id=com.boldhug"
  ]
}`}
        </script>

        <script type="application/ld+json">
          {`{ "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://web.boldhug.krishcode264.online",
  "name": "BoldHug",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://web.boldhug.krishcode264.online/?q={search_term_string}",
    "query-input": "required name=search_term_string"
          }
}`}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <p style={{ display: "none" }}>
          BoldHug (boldhug) – Also known as Bold Hug, Bold-Hug App, and boldhug app. Find
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
