import Link from "next/link";
import React from "react";
import WaitlistButton from "./WaitlistButton";

const TopNav = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm font-headline antialiased">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-all duration-200"
        >
          <img src="/applogo.png" alt="Rallyo Logo" className="w-8 h-8 object-contain group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-black tracking-tighter text-violet-700 dark:text-violet-400">Rallyo</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/#features" className="text-violet-700 font-bold border-b-2 border-violet-500 transition-all">Features</Link>
          <Link href="/#how-it-works" className="text-zinc-600 hover:text-violet-600 transition-colors hover:scale-[1.05] transition-transform duration-200">How It Works</Link>
        </div>
        
        <WaitlistButton 
          className="bg-brand-gradient text-on-primary px-6 py-2.5 rounded-lg font-bold hover:scale-[1.05] active:scale-[0.95] transition-all shadow-lg shadow-primary/20"
        >
          Join Waitlist
        </WaitlistButton>
      </div>
    </nav>
  );
};

export default TopNav;