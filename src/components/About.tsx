import React from "react";

const highlights = [
  "Project & Event Coordination",
  "Stakeholder Management",
  "Documentation & Reporting",
  "Program Development",
  "Logistics & Budgeting",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <span className="neo-badge bg-neo-blue mb-4 inline-block">About Me</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4">
          Who is Larasati?
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Get to know a bit more about who I am and what I do
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="neo-card p-6 bg-neo-yellow/20">
            <h3 className="font-heading font-bold text-xl mb-3">
              Passionate Coordinator & Effective Problem Solver
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I'm a dedicated professional with experience managing large-scale
              programs, international summits, and collaborative academic
              projects. My strength lies in turning complex requirements into
              clear, structured plans that bring people, ideas, and
              organisations together.
            </p>
          </div>
          <div className="neo-card p-6 bg-neo-pink/20">
            <p className="text-gray-700 leading-relaxed">
              From coordinating ministerial guests at the International Battery
              Summit to managing academic projects at Universitas Indonesia, I
              thrive on creating structured, efficient, and engaging experiences.
              When I'm not coordinating events, you'll find me supporting
              community development, volunteering with organisations like TEDx
              Jakarta and Makna Talks, or helping creative studios bring their
              workshops to life.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {highlights.map((tag) => (
              <span key={tag} className="neo-badge bg-white text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="neo-card p-8 bg-white text-center">
            <div className="w-32 h-32 border-[3px] border-neo-black rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Laras – Project Officer & Coordinator"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h4 className="font-heading font-bold text-xl mb-1">Laras</h4>
            <p className="text-gray-600 mb-6">Project Officer & Coordinator</p>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="font-heading text-2xl font-bold text-neo-pink">50+</div>
                <div className="text-xs font-heading font-semibold text-gray-500">Events</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-neo-blue">5+</div>
                <div className="text-xs font-heading font-semibold text-gray-500">Years Exp</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-neo-green">30+</div>
                <div className="text-xs font-heading font-semibold text-gray-500">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
