import * as React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import css from '../Styles/RecipesDetail.module.css';


function RecipesDetail() {
    let [recipe, setRecipe] = React.useState([]);
    const params = useParams();

    const componentDidMount = () => {
        let category = params.category.replace(/ /g, '-').replace(/,/g, '')
        let dish = params.dish.replace(/ /g, '-').replace(/,/g, '')
        axios.get(`http://localhost:8000/recipe_dish/${category}/${dish}`)
            .then(res => {
                setRecipe([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    };

    React.useEffect(() => {
        componentDidMount();
    }, []);

    return (
        <article className={css.main}>
            {recipe.map((el, id) => <RecipeDetail key={id} dish={el.dish} recipe={el.recipe} />)}
        </article>
    )
}

export default RecipesDetail;