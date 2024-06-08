"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [input, setInput] = useState("")  
  const pathname = usePathname();  

  return (
    <div>
        <div>
            <input className="text-black" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
        
      <div className="flex items-center gap-2">
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

          return (
            <Link className={isActive ? "font-bold text-blue-600" : ""} href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <h2>Inner layout</h2>
      {children}
    </div>
  );
}
