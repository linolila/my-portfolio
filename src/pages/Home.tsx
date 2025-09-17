
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // your picture

const Home = () => {
  return (
  <div className="min-h-screen flex flex-row items-center justify-center px-4">
      
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt="Jitu Tesfaye"
        className="w-70 h-70 rounded-full border-4 border-gold-300 mb-6 shadow-lg"
      />

      {/* Introduction */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I’m Jitu Simessa
      </h1>
      <p className="text-lg md:text-xl text-lightgray text-center max-w-xl mb-6">
        I’m a passionate software developer who loves building interactive and elegant web applications. I specialize in React, Node.js, and creative UI/UX design.
      </p>

      {/* Call to Action */}
      <Link
        to="/projects"
        className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-deepgold transition-colors"
      >
        View My Projects
      </Link>

      {/* Optional: Social Icons */}
      <div className="flex gap-6 mt-6">
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-deepgold transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-deepgold transition-colors">
          LinkedIn
        </a>
        <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-deepgold transition-colors">
          Twitter
        </a>
      </div>

    </div>
  );
};

export default Home;
