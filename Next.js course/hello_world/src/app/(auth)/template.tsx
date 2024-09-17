"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ChildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Current path
const [input ,setInput]=useState("")
  return (
    <div>
      <nav>
        <div>
          <input value={input}  onChange={(e)=>setInput(e.target.value)}/>
        </div>
        {navLinks.map((link) => {
          // Calculate isActive within the map function for each link
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <main>{children}</main>
    </div>
  );
}
