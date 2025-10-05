import Image from "next/image";
import logo from "../public/ficon.jpg";
import Link from "next/link";
import "./globals.css"
import DownlaodCard from "@/components/DownlaodCard";
import FeatureShowcase from "@/components/FeatureShowcase";
import TopNav from "@/components/TopNav";
export default function Home() {
  return (
    <div className="min-h-screen  w-full bg-gradient-to-tr from-violet-200 to-violet-400 font-sans">
      <div className="absolute top-4 left-4 z-10 p-2 rounded-xl bg-violet-200 w-20 h-20 flex items-center justify-center">
        <Image className="w-16 h-16 rounded-xl" src={logo} alt="Bold Hug Logo" />
      </div>
      <TopNav />
      <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
        <header className="text-center mb-12">
          
            <h1 className="text-4xl md:text-5xl font-bold space-y-1 text-gray-700 funnel-sans">
              Find Companions for the Things You 
            </h1>
            <h1 className="mt-4 love text-[5em] md:text-[5rem] font-bold space-y-1 bg-gradient-to-r from-violet-600 via-pink-500 to-violet-800 bg-clip-text text-transparent animate-pulse font-dancing-script">LOVE</h1>
          

          <p className="mt-4 text-xl  text-gray-600 ">
            Create personal plans and find real people to enjoy them with.
          </p>
        </header>

        <section id="download" className="justify-between gap-4  items-center flex flex-col md:flex-row p-4 rounded-3xl  bg-violet-300">
          <span className=" w-[70%] ">
            <p className="mt-4 text-lg text-gray-700 font-semibold">
              Bold Hug connects you with people nearby who want to do the same
              things as you , whether it’s playing a sport, grabbing food, going
              for a walk, planning a small picnic, or exploring a new place
              together. These aren’t big public events they’re personal plans
              created by people like you.
              <br /> Create or join casual activities, share photos, and meet
              companions for real-life moments from spontaneous coffee meetups
              to mini travel plans. Built for connection. Designed for everyday
              life.
            </p>
          </span>
          <DownlaodCard />
        </section>

        <FeatureShowcase />

        {/* FOOTER */}
        <footer className="text-center text-sm text-gray-600 mt-12">
          Created by Krishna — ☕{" "}
          <a
            href="https://www.buymeacoffee.com/krish264"
            className="underline hover:text-gray-800"
            target="_blank"
          >
            Buy me a coffee
          </a>
        </footer>
      </div>
    </div>
  );
}
