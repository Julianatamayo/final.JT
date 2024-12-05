import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { theme, changeTheme } = useContext(ContextGlobal);

  const themeIcon = theme === "dark" ? "🧔🏻‍♂️" : "🧔🏿‍♂️";

  return (
    <nav className={`navbar ${theme}`}>
      <h1>DH Odonto</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Destacados</Link>
        </li>
      </ul>
      <button onClick={changeTheme}>{themeIcon}</button>
    </nav>
  );
};

export default Navbar;
