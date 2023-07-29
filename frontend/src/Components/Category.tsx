import * as React from "react";
import {Link} from "react-router-dom";
import css from '../Styles/Category.module.css';


function Category(props) {

    return (
        <>
            <Link className={css.link} to={props.category}>{props.category}</Link><br/>
        </>
    )
}

export default Category;