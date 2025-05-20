import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {

return (
    <header className={styles.header}>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : '')}>Movies</NavLink>
       </nav> 
   </header>
)
}
export default Header;