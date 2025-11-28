"use client";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { FiSearch, FiUser } from "react-icons/fi";
import { MdPhotoCamera, MdSlowMotionVideo } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white border-b border-border-gray sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-6">
          <button className="p-2 rounded hover:bg-gray-100 transition hidden sm:inline-flex items-center justify-center">
            <FiMenu size={24} className="text-gray-700" />
          </button>

          <Image 
            src="/images/logo.svg" 
            alt="Live Hindustan" 
            width={200} 
            height={50} 
            className="h-14 w-auto" 
            priority
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-base font-semibold">
          <a href="#" className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition group">
            <MdPhotoCamera size={20} className="text-gray-500 group-hover:text-red-600 transition" />
            <span className="text-gray-800">फोटो</span>
          </a>
          <a href="#" className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition group">
            <MdSlowMotionVideo size={20} className="text-gray-500 group-hover:text-red-600 transition" />
            <span className="text-gray-800">वीडियो</span>
          </a>
          <a href="#" className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition group">
            <FaRegNewspaper size={18} className="text-gray-500 group-hover:text-red-600 transition" />
            <span className="text-gray-800">ई-पेपर</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50 hover:border-gray-500 transition w-56">
            <input
              type="text"
              placeholder="खोजें..."
              className="outline-none w-full bg-transparent text-base placeholder-gray-400 text-gray-800"
            />
            <FiSearch size={18} className="text-gray-500" />
          </div>

          <button className="hidden sm:inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow hover:bg-red-700 transition">
            सदस्य बनें
          </button>

          <button 
            aria-label="Account" 
            className="p-2 rounded-full hover:bg-gray-100 transition inline-flex items-center justify-center"
          >
            <FiUser size={22} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
