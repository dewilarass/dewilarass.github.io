import React from "react";
import { navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="bg-neo-black text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-3">
              Laras<span className="text-neo-pink">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A passionate Project Officer & Coordinator creating meaningful
              impact through seamless planning, execution, and stakeholder
              engagement.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-3 text-neo-yellow">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-neo-yellow text-sm transition-colors font-heading"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-3 text-neo-yellow">
              Get In Touch
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>dewilarasativ@gmail.com</p>
              <p>+62 812 8978 8981</p>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm font-body">
            © {new Date().getFullYear()} Larasati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
