
import { Card } from "../components/ui/card";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website built with React and Vite.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://www.youtube.com/embed/demo_video_id",
  },
  {
    name: "Task Manager",
    description: "A simple task manager app with CRUD operations.",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://www.youtube.com/embed/demo_video_id2",
  },
  // Add more projects as needed
];


const Projects = () => {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-8">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="border border-gray-200 rounded-lg p-6 w-[350px] bg-white shadow-md flex flex-col"
          >
            <h2 className="flex items-center justify-between text-xl font-semibold mb-2">
              {project.name}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-2">
                <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" className="inline text-gray-700">
                  <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </h2>
            <div className="my-4">
              <iframe
                className="w-full h-52 rounded"
                src={project.demo}
                title={project.name + " Demo"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-gray-700">{project.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default Projects;
