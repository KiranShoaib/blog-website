import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#4b0005] py-8 text-white">
      <div className="mx-auto max-w-[1200px] flex flex-wrap gap-12 md:gap-20 px-4 md:px-8">
        <div>
          <h3 className="font-bold text-xl cursor-pointer">KIRAN</h3>
          <p className="text-xs mb-4 cursor-pointer">FASHION BLOG</p>
          <p className="text-xs mb-4 ">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-black"
            />
            <Button className="bg-[#ff4d6d] hover:bg-[#c9184a] px-4 py-2 w-[160px] h-[44px] text-white">
              Subscribe
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 cursor-pointer">
            <li>
              <Link href="#home" className="hover:text-[#c9184a]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[#c9184a]">
                About
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-[#c9184a]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#c9184a]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Hot Posts</h4>
          <ul className="space-y-2 cursor-pointer">
            <li className="hover:text-[#c9184a]">Your Guide to Look Stunning in Winter Clothes</li>
            <li className="hover:text-[#c9184a]">Fall Clothes to look for when shopping</li>
            <li className="hover:text-[#c9184a]">2023 Fashion trends summary guide</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Follow Me</h4>
          <ul className="space-y-2 cursor-pointer">
            <li className="flex gap-2 items-center group"><Facebook className="group-hover:text-[#c9184a]" /><span className="group-hover:text-[#c9184a]">Facebook</span></li>
            <li className="flex gap-2 items-center group"><Instagram className="group-hover:text-[#c9184a]" /><span className="group-hover:text-[#c9184a]">Instagram</span></li>
            <li className="flex gap-2 items-center group"><Twitter className="group-hover:text-[#c9184a]" /><span className="group-hover:text-[#c9184a]">Twitter</span></li>
            <li className="flex gap-2 items-center group"><Youtube className="group-hover:text-[#c9184a]" /><span className="group-hover:text-[#c9184a]">Youtube</span></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t-2 border-white pt-4 max-w-[1200px] mx-auto">
        Copyright © 2025 Fashion Blogger | Powered by Fashion Blogger
      </div>
    </footer>
  );
}
