
const projects = [
  {
    title: "Enterprise Complaint Management System",
    description:
      "An enterprise-grade complaint management platform that digitizes the complete complaint lifecycle, including complaint registration, investigations, appeals, approvals, notifications, reporting, and configurable letter generation.",
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
      "JWT",
      "Swagger",
    ],
    github: null,
    featured: true,
    private: true,
  },
 {
  title: "Ethiopian Statistics Service (ESS) Platform",
  description:
    "A frontend statistics management platform designed for managing statistical reports, visualizing collected data through dashboards, and tracking enumerator activities during data collection processes.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  github: "https://github.com/linolila/ESS",
  featured: true,
  private: true,
},
  {
    title: "Addis Cakes",
    description:
      "A modern cake ordering and management platform that allows customers to browse products, place orders, and manage purchases through a user-friendly interface.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/linolila/Addis-CaKes",
    featured: false,
    private: true,
  },
  {
    title: "A2SV Application Platform",
    description:
      "A frontend application developed during the A2SV Software Engineering Program, focusing on reusable components, responsive design, and API integration.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    github:
      "https://github.com/linolila/a2sv-application-platform-frontend",
    featured: false,
    private: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto min-h-screen max-w-7xl px-6 py-20"
    >
      <p className="mb-2 text-lg font-semibold text-rose-500">
        Projects
      </p>

      <h2 className="mb-12 text-4xl font-bold text-slate-900">
        Featured Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              {project.featured && (
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
                  Featured
                </span>
              )}
            </div>

            <p className="mt-4 leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              {project.private ? (
                <span className="text-sm font-medium text-slate-500">
                  Private Repository
                </span>
              ) : (
                <a
                  href={project.github || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-rose-500 hover:underline"
                >
                  {/* <Github className="h-5 w-5" /> */}
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}