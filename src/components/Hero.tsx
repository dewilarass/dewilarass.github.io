import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block neo-badge bg-neo-green mb-6">
            👋 Hello, I'm
          </div>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Dewi
            <span className="block text-neo-pink">Larasati</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-lg font-body leading-relaxed">
            Hi there, I'm Laras — a project officer and event coordinator with
            experience managing events ranging from small training sessions to
            large-scale gatherings with thousands of participants. Let's connect!
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="neo-btn bg-neo-yellow">
              View My Work ↓
            </a>
            <a href="#contact" className="neo-btn bg-white">
              Get In Touch ✉
            </a>
            <a
              href="/Resume - Dewi Larasati.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-neo-green"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 border-[3px] border-neo-black shadow-neo-xl rounded-2xl overflow-hidden float-animation">
              <img
                src="/images/profile.jpg"
                alt="Larasati – Project Officer & Event Coordinator"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
              <div className="neo-badge bg-neo-yellow text-base whitespace-nowrap">
                Project Officer
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-neo-yellow border-[3px] border-neo-black shadow-neo rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-neo-blue border-[3px] border-neo-black shadow-neo rounded-lg rotate-12" />
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-neo-green border-[3px] border-neo-black shadow-neo rounded-md -rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
