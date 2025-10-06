import express from 'express';
import Expense from '../models/Expense.js';

const router = express.Router();

// Get all expenses for user
router.get('/', async (req, res) => {
  try {
    // In real app, get user from JWT token
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add expense
router.post('/', async (req, res) => {
  try {
    const { title, amount, category, description } = req.body;
    const expense = await Expense.create({
      title,
      amount,
      category,
      description,
      user: 'user_id_placeholder' // In real app, get from JWT
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete expense
router.delete('/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;