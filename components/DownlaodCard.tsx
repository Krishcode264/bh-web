import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import playStore from "../public/ps.png";
import appleStore from "../public/as.png";
const DownlaodCard = () => {
  return (
    <div className="px-3 py-2 w-full mb:w-[60%]   sm:w-[70%]  md:w-[45%] rounded-2xl flex flex-col items-center justify-center my-auto h-[30vh] shadow-xl shadow-violet-400">
            <h2 className="text-center text-2xl font-semibold mb-4 font-mono text-gray-600">
              Download Now  <br/>(Coming soon)
            </h2>
            <div className="flex flex-row justify-center gap-4">
              <Link
                href={""}
                className="hover:scale-110 transition-transform duration-300  bg-violet-200  text-white px-6 py-3 rounded-2xl font-medium  "
              >
                <Image
                  className="w-12 h-12 align-middle mx-auto"
                  src={playStore}
                  alt=""
                />
              </Link>
              <Link
                href={""}
                className="bg-violet-200 hover:scale-110 transition-transform duration-300 text-white px-6 py-3 rounded-2xl  font-medium "
              >
                <Image className="w-12 h-12 mx-auto   anim" src={appleStore} alt="" />
              </Link>
            </div>
          </div>
  )
}

export default DownlaodCard