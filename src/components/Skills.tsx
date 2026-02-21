import { additionalSkills, skillCategories } from "../data";

const badgeColors = [
  "bg-neo-yellow",
  "bg-neo-pink",
  "bg-neo-blue",
  "bg-neo-green",
  "bg-neo-orange",
  "bg-neo-purple text-white",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y-[3px] border-neo-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="neo-badge bg-neo-orange mb-4 inline-block">
            Core Strengths
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Areas where I bring consistent value across projects and
            organisations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="neo-card p-6 flex flex-col gap-4"
            >
              <span className={`neo-badge ${category.color} self-start`}>
                {category.title}
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
              <ul className="space-y-2 mt-1">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm font-medium text-gray-800"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full border-2 border-neo-black bg-transparent shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-heading font-bold text-xl mb-6">
            Also experienced in
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill}
                className={`neo-badge ${badgeColors[index % badgeColors.length]} text-sm cursor-default hover:shadow-neo-lg hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
