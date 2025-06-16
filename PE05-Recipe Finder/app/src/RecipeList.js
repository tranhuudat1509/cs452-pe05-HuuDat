import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipes')
            .then(res => setRecipes(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteRecipe = (id) => {
        axios.delete(`http://localhost:3001/recipes/${id}`)
            .then(() => setRecipes(recipes.filter(r => r._id !== id)));
    };

    return (
        <div>
            <h2>Recipe List</h2>
            <Link to="/add"><button>Add New Recipe</button></Link>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe._id}>
                        <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
                        <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
                        <Link to={`/edit/${recipe._id}`}><button>Edit</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
