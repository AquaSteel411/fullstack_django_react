import * as React from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Recipe from "./Recipe";
import css from '../Styles/Recipes.module.css';


function Recipes() {
    let [recipes, setRecipes] = React.useState([]);
    const params = useParams();

    const componentDidMount = () => {
        let category = params.category.replace(/ /g, '-').replace(/,/g, '')
        axios.get(`http://localhost:8000/recipe_dish/${category}`)
            .then(res => {
                setRecipes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    React.useEffect(() => {
        componentDidMount()
    }, []);

    return (
        <>
            <main className={css.main}>
                <h5>Выберите блюдо:</h5>
                { recipes.map((el, id) => <Recipe key={id} dish={el.dish}/>) }
            </main>
        </>

    )
}

export default Recipes;