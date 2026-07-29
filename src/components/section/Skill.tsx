const skillCategories = [
  {
    title: "Backend Development",
    icon: "⚙️",
    description:
      "Building scalable APIs, authentication systems, and backend architectures.",
    skills: [
      "Go",
      "NestJS",
      "Node.js",
      "Express.js",
    ],
  },

  {
    title: "Frontend Development",
    icon: "🎨",
    description:
      "Creating responsive interfaces and reusable component systems.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    title: "Database & Data",
    icon: "🗄️",
    description:
      "Designing database structures and managing application data.",
    skills: [
      "PostgreSQL",
      "Prisma",
      "SQL",
    ],
  },

  {
    title: "Mobile Development",
    icon: "📱",
    description:
      "Developing cross-platform mobile applications.",
    skills: [
      "Flutter",
      "Dart",
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: "🤖",
    description:
      "Exploring artificial intelligence concepts and integrating intelligent solutions into applications.",
    skills: [
      "Python",
      "Machine Learning Fundamentals",
      "AI Tools & APIs",
      "Prompt Engineering",
      "Data Processing",
    ],
  },

  {
    title: "Tools & Engineering",
    icon: "🛠️",
    description:
      "Development workflow, collaboration, and deployment practices.",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "REST API",
      "CI/CD",
    ],
  },

  {
    title: "Soft Skills",
    icon: "🤝",
    description:
      "Professional skills that support effective teamwork and problem-solving.",
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Leadership",
      "Mentoring",
      "Adaptability",
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-24
        min-h-screen
        bg-[#FAF3E1]
        px-6
        py-20
      "
    >

      <div className="mx-auto max-w-7xl">


        {/* Header */}
        <div className="text-center">

          <span
            className="
              rounded-full
              bg-[#F6E7C3]
              px-5
              py-2
              text-sm
              font-semibold
              text-[#264653]
            "
          >
            My Skills
          </span>


          <h2
            className="
              mt-6
              font-heading
              text-4xl
              font-bold
              text-[#264653]
              md:text-5xl
            "
          >
            Technologies I work with
          </h2>


          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-[#264653]/70
            "
          >
            A collection of technologies I use to design,
            build, and maintain modern applications.
          </p>

        </div>


        {/* Skill Cards */}
        <div
          className="
            mt-12
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="
                rounded-3xl
                border
                border-[#264653]/10
                bg-white/70
                p-8
                shadow-md
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Icon */}
              <div
                className="
                  text-4xl
                "
              >
                {category.icon}
              </div>


              <h3
                className="
                  mt-5
                  font-heading
                  text-2xl
                  font-bold
                  text-[#264653]
                "
              >
                {category.title}
              </h3>


              <p
                className="
                  mt-3
                  leading-7
                  text-[#264653]/70
                "
              >
                {category.description}
              </p>


              {/* Technology badges */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-xl
                      bg-[#CEF2EE]
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-[#264653]
                      transition
                      hover:bg-[#2A9D8F]
                      hover:text-white
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

.
    </section>
  );
}