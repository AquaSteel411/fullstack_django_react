import * as React from "react";
import {Link} from "react-router-dom";
import css from '../Styles/Header.module.css';

function Header() {
     return (
         <nav className={css.nav}>
              <Link className={css.home} to='/'>Home</Link>
              <header>Рецепты блюд</header>
         </nav>
     )
}

export default Header;