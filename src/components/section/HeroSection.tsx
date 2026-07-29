import Button from "../ui/Button";
import cvFile from "../../assets/Jitu_last.pdf"
import {SITE } from '../../constants/site'
export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center bg-[#FAF3E1]"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center">

                {/* Welcome Badge */}
                <h1 className="
  font-heading
  text-5xl
  font-extrabold
  text-[#264653]
  md:text-7xl
">
                    Selam, I'm{" "}
                    <span className="text-[#2A9D8F]">
                        {SITE.name}
                    </span>
                </h1>


                {/* Role */}
                <div className="flex flex-wrap justify-center gap-3">

                    {/* Role */}
                    <span
                        className="
      rounded-2xl
      border
      border-[#2A9D8F]/40
      bg-[#2A9D8F]
      px-5
      py-2
      font-heading
      font-bold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
                    >
                        {SITE.title}
                       
                    </span>


                    {/* Technologies */}
                    {[
                        "React",
                        "Next.js",
                        "Node.js",
                        "NestJS",
                        "Express.js",
                        "Python",
                        "Go",
                        "Flutter",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="
        rounded-2xl
        border
        border-[#264653]/10
        bg-white/70
        px-5
        py-2
        font-semibold
        text-[#264653]
        shadow-md
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#2A9D8F]
        hover:text-[#2A9D8F]
        hover:shadow-xl
      "
                        >
                            {tech}
                        </span>
                    ))}

                </div>


                {/* Description */}
                <p
                    className="
            max-w-3xl 
            text-lg 
            leading-8 
            text-[#264653]/70
          "
                >
                    I build scalable backend systems, modern web applications,
                    and clean APIs with a strong focus on performance,
                    maintainability, and user experience.
                </p>


                {/* Actions */}
                <div className="flex gap-4">

                    <a href="#projects">
  <Button variant="primary">
    View Projects
  </Button>
</a>

                 <a 
  href={cvFile}
  download
>
  <Button variant="outline">
    Download CV
  </Button>
</a>
                </div>

            </div>
        </section>
    );
}