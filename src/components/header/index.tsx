import styles from "./styles.module.scss";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { SearchIcon } from "../SearchIcon";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={Logo} alt="suno movies" />
        <nav>
          <NavLink to="/" exact activeClassName={styles.active}>
            Início
          </NavLink>
          <NavLink to="/catalog" activeClassName={styles.active}>
            Catálogo
          </NavLink>
          <SearchIcon />
        </nav>
      </div>
    </header>
  );
}
