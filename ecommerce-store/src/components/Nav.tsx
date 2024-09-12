
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link"; // Using Next.js Link for routing
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

// Nav Component to render the navigation container
export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground flex justify-center px-4">
      {children} {/* Render children */}
    </nav>
  );
}

// NavLink Component with conditional class names based on the current pathname
export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname(); // Get the current path

  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground", // Styling for hover and focus
        pathname === props.href && "bg-background text-foreground" // Active link styles
      )}
    />
  );
}
