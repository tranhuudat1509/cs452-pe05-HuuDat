import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddRecipe() {
    const [form, setForm] = useState({ name: '', ingredients: '', instructions: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/recipes', form)
            .then(() => navigate('/'));
    };

    return (
        <div>
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
                <input placeholder="Ingredients" onChange={e => setForm({ ...form, ingredients: e.target.value })} />
                <textarea placeholder="Instructions" onChange={e => setForm({ ...form, instructions: e.target.value })}></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddRecipe;
