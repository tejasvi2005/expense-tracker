import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Simple expenses array (temporary storage)
let expenses = [
  { _id: '1', title: 'Lunch', amount: 250, category: 'Food', date: new Date() },
  { _id: '2', title: 'Bus', amount: 50, category: 'Transport', date: new Date() }
];

// Get all expenses
app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

// Add expense
app.post('/api/expenses', (req, res) => {
  try {
    const { title, amount, category, description } = req.body;
    
    const newExpense = {
      _id: Date.now().toString(),
      title,
      amount: Number(amount),
      category,
      description: description || '',
      date: new Date()
    };
    
    expenses.unshift(newExpense); // Add to beginning
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense' });
  }
});

// Delete expense
app.delete('/api/expenses/:id', (req, res) => {
  expenses = expenses.filter(expense => expense._id !== req.params.id);
  res.json({ message: 'Expense deleted' });
});

// MongoDB connection (optional - will work without it)
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('MongoDB connection failed, using memory storage'));
} else {
  console.log('No MongoDB URI, using memory storage');
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Backend URL: http://localhost:${PORT}`);
});