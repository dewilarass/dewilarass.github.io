import React from "react";

const items = [
  "EVENT PLANNING",
  "STAKEHOLDER MANAGEMENT",
  "PROJECT COORDINATION",
  "PROGRAM DEVELOPMENT",
  "DOCUMENTATION",
  "BUDGETING",
  "TEAM LEADERSHIP",
  "COMMUNITY ENGAGEMENT",
];

export default function MarqueeBanner() {
  return (
    <div className="bg-neo-black text-white py-3 border-y-[3px] border-neo-black overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-8 mr-8 font-heading font-bold text-lg"
          >
            {items.map((item) => (
              <span key={item}>✦ {item}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
