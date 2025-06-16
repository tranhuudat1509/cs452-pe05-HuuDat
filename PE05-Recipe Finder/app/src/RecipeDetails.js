import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/recipes/${id}`)
            .then(res => setRecipe(res.data));
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetails;
