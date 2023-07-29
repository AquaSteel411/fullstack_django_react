import * as React from "react";
import axios from "axios";
import Category from "./Category";
import css from '../Styles/Categories.module.css';


function Categories() {
    let [categories, setCategories] = React.useState([]);

    const componentDidMount = () => {
        axios.get(`http://localhost:8000/recipe_dish/`)
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    };

    React.useEffect(() => {
        componentDidMount();
    }, []);

    return (
        <main className={css.main}>
            <h5>Выберите категорию:</h5>
            {categories.map((output, id) => <Category key={id} category={output.category}/>)}
        </main>
    )
}

export default Categories;