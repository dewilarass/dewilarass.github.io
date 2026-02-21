import React from "react";
import { projects, Project } from "../data";

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="neo-card overflow-hidden group">
      <div
        className={`${project.color} p-8 border-b-[3px] border-neo-black flex items-center justify-center`}
      >
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 border-2 border-neo-black rounded-md font-heading text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.link && (
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn !text-sm !px-4 !py-2 bg-neo-yellow"
            >
              Visit Site ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function OtherCard({ project }: { project: Project }) {
  return (
    <div className="neo-card overflow-hidden group">
      <div
        className={`${project.color} p-6 border-b-[3px] border-neo-black flex items-center justify-center`}
      >
        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-heading font-bold text-lg mb-2">{project.title}</h4>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 border-2 border-neo-black rounded-md font-heading text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="text-xs text-gray-500 px-2 py-1 font-heading">
              +{project.tags.length - 2} more
            </span>
          )}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn !text-xs !px-3 !py-1.5 bg-neo-yellow w-full justify-center text-center block"
          >
            Visit Site ↗
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center mb-12">
        <span className="neo-badge bg-neo-purple text-white mb-4 inline-block">
          Portfolio
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Here are some of the impactful projects and programs I've coordinated,
          spanning international summits, academic collaborations, creative
          workshops, and community engagement initiatives.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}
      </div>

      <h3 className="font-heading font-bold text-2xl text-center mb-8">
        Other Projects
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <OtherCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
