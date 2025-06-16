const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET all
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// GET by ID
router.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
});

// POST create
router.post('/', async (req, res) => {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
});

// PUT update
router.put('/:id', async (req, res) => {
    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
