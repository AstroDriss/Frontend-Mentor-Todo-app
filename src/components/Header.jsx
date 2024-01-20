import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";

const Header = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`flex justify-between ${props.className} ${theme}`}>
      <h1 className="sm:text-[2.7rem] text-2xl font-semibold tracking-[.3em] text-veryLightGray">
        TODO
      </h1>

      <button onClick={() => toggleTheme()} aria-label="Toggle theme">
        <img src={theme == "light" ? moon : sun} alt="" />
      </button>
    </header>
  );
};

export default Header;
