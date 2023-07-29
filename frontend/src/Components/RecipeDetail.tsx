import * as React from "react";
import css from '../Styles/RecipeDetail.module.css';


function RecipeDetail(props) {
    let recipe = props.recipe.replace(/r\n/g, '<br/>');

    return (
        <main className={css.main}>
            <header className={css.header}><b>{props.dish}</b></header>
            <p className={css.recipe}>{recipe}</p>
        </main>
    )

}

export default RecipeDetail;