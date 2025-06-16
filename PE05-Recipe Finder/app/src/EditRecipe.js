import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditRecipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', ingredients: '', instructions: '' });

    useEffect(() => {
        axios.get(`http://localhost:3001/recipes/${id}`)
            .then(res => setForm(res.data));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/recipes/${id}`, form)
            .then(() => navigate('/'));
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input value={form.ingredients} onChange={e => setForm({ ...form, ingredients: e.target.value })} />
                <textarea value={form.instructions} onChange={e => setForm({ ...form, instructions: e.target.value })}></textarea>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default EditRecipe;
