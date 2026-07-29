import { useEffect, useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section!);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section!);
      });
    };
  }, []);

  return (
    <nav
      className="
        fixed
        top-0
        z-50
        w-full
        bg-[#FAF3E1]/80
        backdrop-blur-md
        border-b
        border-[#264653]/10
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >

        {/* Logo */}
        <a
          href="#hero"
          className="
            font-heading
            text-3xl
            font-bold
            text-[#264653]
            transition
            duration-300
            hover:text-[#2A9D8F]
          "
        >
          JT
        </a>


        {/* Navigation Links */}
        <div
          className="
            hidden
            items-center
            gap-2
            md:flex
          "
        >

          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");

            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-[#2A9D8F]
                        text-white
                        shadow-md
                      `
                      : `
                        text-[#264653]
                        hover:bg-[#CEF2EE]
                        hover:text-[#2A9D8F]
                      `
                  }
                `}
              >
                {item.name}
              </a>
            );
          })}

        </div>

      </div>
    </nav>
  );
}