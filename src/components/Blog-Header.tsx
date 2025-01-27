"use client"
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Button } from "./ui/button";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full p-4 absolute top-0 z-50 bg-white md:bg-transparent">
      
      <div className="flex justify-between max-w-[1200px] mx-auto items-center px-4 md:px-8">
        {/* Logo */}
        
        <div className="text-[#4b0005]  font-bold text-2xl">
           KIRAN
           <p className="text-xs text-[#4b0005] ">FASHION BLOG</p>
        </div>
        {/* Navbar Links for large screens */}
        <nav className={`hidden md:flex space-x-8 items-center ${menuOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-[#4b0005]">Home</Link>
          <Link href="/about" className="text-[#4b0005]">About</Link>
          <Link href="/blog" className="text-[#4b0005]">Blog</Link>
          <Link href="/contact" className="text-[#4b0005]">Contact</Link>
          <Link href="/contact"><Button className="bg-[#ff4d6d] hover:bg-[#c9184a] font-bold text-white px-4 py-2">
          Contact Me</Button></Link>
          
        </nav>

        {/* Hamburger Icon for small screens */}
        <button
          className="md:hidden text-3xl text-white bg-[#4b0005] w-10 h-10 cursor-pointer flex justify-center items-center"
          onClick={toggleMenu}
        >
          {menuOpen ? <RxCross2 /> : <FiMenu />}
        </button>
      </div>

      {/* Navbar for small screens */}
      {menuOpen && (
        <div className="md:hidden mt-5">
          <nav className="flex flex-col space-y-6">
            <Link href="/" className="hover:text-[#c9184a] text-black border-b border-[#4b0005] pb-3 w-full flex justify-start items-start">Home</Link>
            <Link href="/about" className="hover:text-[#c9184a] text-black border-b border-[#4b0005] pb-3 w-full flex justify-start items-start">About</Link>
            <Link href="/blog" className="hover:text-[#c9184a] text-black border-b border-[#4b0005] pb-3 w-full flex justify-start items-start">Blog</Link>
            <Link href="/contact" className="hover:text-[#c9184a] text-black border-b border-[#4b0005] pb-3 w-full flex justify-start items-start">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;