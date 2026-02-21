import React, { useState } from "react";
import { navLinks } from "../data";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-[3px] border-neo-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-heading font-bold text-2xl tracking-tight">
            Laras<span className="text-neo-pink">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 font-heading font-semibold text-sm rounded-md border-2 transition-all duration-150 ${
                  activeSection === link.id
                    ? "bg-neo-yellow border-neo-black shadow-neo-hover"
                    : "border-transparent hover:border-neo-black hover:bg-neo-yellow/30"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden neo-btn !px-3 !py-2 bg-neo-yellow"
            aria-label="Toggle Menu"
          >
            <span className="text-xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-[3px] border-neo-black">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 font-heading font-semibold border-2 border-neo-black rounded-md hover:bg-neo-yellow shadow-neo-hover"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
