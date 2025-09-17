import { useTheme } from "../lib/ThemeContext";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react"; 
const Navbar = () => {
  const { dark, toggle } = useTheme();

  return (
    <div
      className={`flex items-center p-4 border-b-4 border-gold ${dark ? "bg-black text-gold" : "bg-gold text-black"}`}
    >
      <div className="flex-1">
        <Link to="/" className="hover:text-deepgold transition-colors font-semibold">
          Home
        </Link>
      </div>

      <div className="flex-1">
        <Link to="/projects" className="hover:text-deepgold transition-colors font-semibold">
          Projects
        </Link>
      </div>

      <div className="flex-1">
        <Link to="/about" className="hover:text-deepgold transition-colors font-semibold">
          About
        </Link>
      </div>

      {/* Theme toggle / Easter Egg */}
      <div className="cursor-pointer ml-4" onClick={toggle} title="Toggle Theme">
        <Zap size={24} className="hover:text-deepgold transition-colors" />
      </div>
    </div>
  );
};

export default Navbar;
