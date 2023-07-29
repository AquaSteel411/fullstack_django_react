import * as React from "react";
import {Link} from "react-router-dom";
import css from '../Styles/Recipe.module.css';

function Recipe(props) {

    return (
        <>
            <Link className={css.link} to={props.dish}>{props.dish}</Link><br/>
        </>

    )
}

export default Recipe;