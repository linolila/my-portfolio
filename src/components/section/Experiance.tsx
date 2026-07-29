export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "EAII",
      period: "Aug 2025 – Present",
      description:
        "Developing scalable enterprise web applications using NestJS, Prisma, PostgreSQL, React, and TypeScript. Designing RESTful APIs, implementing complex business workflows, optimizing database performance, and collaborating with cross-functional teams to deliver reliable software solutions.",
    },
    {
      title: "Software Engineering Intern",
      company: "A2SV (Africa to Silicon Valley)",
      period: "Mar 2025 – Dec 2025",
      description:
        "Completed an intensive software engineering program focused on Data Structures and Algorithms while contributing to frontend development projects. Strengthened problem-solving skills through competitive programming and collaborative software development.",
    },
    {
      title: "Assistant Mentor Intern",
      company: "Yenneta Code Academy",
      period: "2025",
      description:
        "Assisted mentors in teaching programming fundamentals, guided students through coding exercises and projects, provided technical support during practical sessions, and helped foster an engaging and collaborative learning environment.",
    },
    {
      title: "Frontend Developer Intern",
      company: "Kifiya Fintech",
      period: "Jul 2024 – Sep 2024",
      description:
        "Built responsive and user-friendly interfaces using modern frontend technologies. Collaborated with developers and designers to deliver production-ready features while gaining experience with professional software development practices.",
    },
  ];

  return (
    <section
      id="experience"
      className="mx-auto min-h-screen max-w-7xl px-6 py-20"
    >
      <p className="mb-2 text-lg font-semibold text-rose-500">
        Experience
      </p>

      <h2 className="mb-3 text-4xl font-bold text-slate-900">
        Professional Experience
      </h2>

      <p className="mb-12 max-w-3xl text-lg leading-8 text-slate-600">
        My journey has taken me through frontend development, full-stack engineering,
        software engineering training, and mentoring. Each experience has strengthened
        both my technical expertise and my ability to collaborate, communicate, and
        solve complex problems.
      </p>

      <div className="relative border-l-2 border-rose-200 pl-8">
        {experiences.map((experience, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-white bg-rose-500 shadow" />

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-500">
                {experience.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {experience.title}
              </h3>

              <p className="mt-1 text-lg font-medium text-slate-700">
                {experience.company}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}