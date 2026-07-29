const Footer = () => {
  return (
    <footer className="h-auto bg-black border-t border-[#F5C518] text-[#F5C518] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand / Name */}
        <div className="font-semibold tracking-wide text-center md:text-left">
          © 2025 Jitu | All Rights Reserved
        </div>

        {/* Center: Quick Links */}
        <div className="flex space-x-6 text-center">
          <a href="/" className="hover:underline">Home</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/about" className="hover:underline">About</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 justify-center md:justify-end">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.1 10.93c.6.11.82-.26.82-.58v-2.06c-3.3.71-4-1.59-4-1.59-.55-1.38-1.34-1.74-1.34-1.74-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.63-.3-5.4-1.32-5.4-5.9 0-1.3.47-2.37 1.24-3.21-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.22A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.01.4 2.29-1.54 3.3-1.22 3.3-1.22.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.21 0 4.59-2.78 5.6-5.43 5.9.43.38.82 1.12.82 2.27v3.37c0 .32.21.7.82.58A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 19.3H3.9V9h3.2v10.3zM5.5 7.6c-1 0-1.8-.8-1.8-1.8S4.5 4 5.5 4s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.8 11.7h-3.2v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-3.2V9h3.1v1.4h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5v6.9z"/>
            </svg>
          </a>

          {/* Email */}
          <a href="mailto:your.email@example.com" aria-label="Email">
            <svg
              className="w-5 h-5 hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4V4zm8 8l8-5H4l8 5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
