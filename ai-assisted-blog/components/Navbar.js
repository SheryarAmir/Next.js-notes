"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {ModeToggle} from "./them-btn";

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b ">
      <div className=" container  mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">SHERUU</div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 items-center">
          <li className="hover:font-bold hover:animate-pulse ">
            <Link  href="/">Home</Link>
          </li>
          <li className="hover:font-bold  hover:animate-pulse">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:font-bold hover:animate-pulse">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:font-bold hover:animate-pulse ">
            <Link href="/blog">Blog</Link>
          </li>
          <div className="hidden lg:flex items-center space-x-4">
         
          <Button variant="outline">Signup</Button>
          <Button variant="outline">Login</Button>
          <ModeToggle />
        </div>
        </ul>

      
        

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </SheetTrigger>
            <span className="mx-2"> <ModeToggle /></span>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center">Sheryar Amir Blog</SheetTitle>
                <SheetDescription>
                  <ul className="space-y-4 text-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-col items-center space-y-2">
                    <ModeToggle />
                    <Button variant="outline">Signup</Button>
                    <Button variant="outline">Login</Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
