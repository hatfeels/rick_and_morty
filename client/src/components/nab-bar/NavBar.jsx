import SearchBar from "./search_bar/SearchBar";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.navBar}>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/favorites"><button>Favorites</button></NavLink>
      <SearchBar onSearch={onSearch} />
      <NavLink to="/about">
        <button className={styles.about}>About</button>
      </NavLink><br />
    </div>
  );
};

export default NavBar;
