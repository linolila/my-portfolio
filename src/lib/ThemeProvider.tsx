import React , {useState, useEffect , type ReactNode} from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark((d) => !d);
 useEffect(() => {
    if (dark) {
      document.body.classList.add("bg-black", "text-gold");
      document.body.classList.remove("bg-gold", "text-black");
    } else {
      document.body.classList.add("bg-gold", "text-black");
      document.body.classList.remove("bg-black", "text-gold");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
