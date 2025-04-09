import Image from "next/image";
import eventPhoto from "../public/e.png";
import profilePhoto from "../public/p.png";

import chatPhoto from "../public/up2.png";

import homePhoto from "../public/h.png";
import playStore from "../public/ps.png";
import appleStore from "../public/as.png";
import logo from "../public/icon2.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-violet-200 to-violet-400 font-sans">
      <div className="p-2 sm:absolute  mx-auto md:top-14 top-5 left-12 rounded-2xl bg-violet-300 w-28">
        <Image className="w-22 h-22 rounded-xl" src={logo} alt="" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
    
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold space-y-1 text-gray-600 funnel-sans">
              Find Your People,  Make New Friends,  Share Your Moments.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Bold Hug helps you discover events, meet new people, and share
              real-life moments.
            </p>
          </header>
        

        <section className="justify-between gap-4 items-center flex flex-col md:flex-row p-4 rounded-3xl  bg-violet-300">
          <span className="md:w-[50%] ">
            <p className="mt-4 text-lg text-gray-700">
              Bold Hug is your go-to app for discovering events and finding
              companions — whether it's for travel, sports, food, or just
              hanging out. Create or join events, share photos, and connect with
              people near you who love doing the same things. Built for
              real-life connection. Designed for shared experiences.
            </p>
          </span>
          <div className=" px-3 py-2 w-[60%] rounded-2xl md:w-[30%]  h-full shadow-xl shadow-violet-400  ">
            <h2 className=" text-center text-2xl font-semibold mb-4 font-mono text-gray-600">
              Download Now (Coming soon)
            </h2>
            <div className="flex flex-col  md:flex-row   justify-center gap-4">
              <Link
             href={""}
                className=" bg-violet-200  text-white px-6 py-3 rounded-2xl font-medium hover:bg-violet-300 transition"
              >
                <Image
                  className="w-12 h-12 align-middle mx-auto"
                  src={playStore}
                  alt=""
                />
              </Link>
              <Link
              href={""}
                className="bg-violet-200 text-white px-6 py-3 rounded-2xl  font-medium hover:bg-violet-300 transition"
              >
                <Image className="w-12 h-12 mx-auto" src={appleStore} alt="" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12 flex mt-12 ">
          <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src={homePhoto}
              alt="Screenshot 1"
              className="rounded-xl shadow"
            />
            <Image
              src={eventPhoto}
              alt="Screenshot 1"
              className="rounded-xl shadow"
            />
            <Image
              src={profilePhoto}
              alt="Screenshot 2"
              className="rounded-xl shadow"
            />
            <Image
              src={chatPhoto}
              alt="Screenshot 3"
              className="rounded-xl shadow"
            />
          </div>
        </section>

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
