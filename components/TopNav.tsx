import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <nav className="fixed top-2 right-2 sm:top-4 sm:right-4 z-20 w-auto">
      <div className="bg-violet-200/15 backdrop-blur-md rounded-2xl shadow-sm border border-violet-300/20 px-3 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-sm sm:text-lg font-semibold text-violet-600 hover:text-violet-800 transition-colors"
          >
            BoldHug
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <Link 
              href="/activities" 
              className="text-violet-700 hover:text-violet-900 font-semibold transition-colors hover:bg-violet-100/30 px-2 py-1 rounded-lg text-sm sm:text-base"
            >
              Activities
            </Link>
            <Link 
              href="#download" 
              className="bg-gradient-to-r from-violet-400/70 to-pink-400/70 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-xl font-medium hover:shadow-md transition-all duration-200 hover:scale-105 border border-violet-300/30 text-xs sm:text-sm"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;