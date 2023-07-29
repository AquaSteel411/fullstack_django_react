import * as React from "react";
import Header from "./Header";
import Categories from "./Categories";
import Recipes from "./Recipes";
import {Route, Routes} from "react-router-dom";
import RecipesDetail from "./RecipesDetail";


function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Categories />} />
                <Route path='/:category' element={<Recipes />} />
                <Route path='/:category/:dish' element={<RecipesDetail />} />
            </Routes>

        </>
    )
}

export default App;