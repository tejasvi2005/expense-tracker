import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    title: '', amount: '', category: 'Food', description: ''
  });
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [budgetInput, setBudgetInput] = useState('');

  // Use mock data temporarily
  useEffect(() => {
    const mockExpenses = [
      { _id: '1', title: 'Lunch at Cafe', amount: 250, category: 'Food', date: new Date(), description: 'With friends' },
      { _id: '2', title: 'Bus Pass', amount: 500, category: 'Transport', date: new Date(), description: 'Monthly pass' },
      { _id: '3', title: 'Movie', amount: 300, category: 'Entertainment', date: new Date() }
    ];
    setExpenses(mockExpenses);
  }, []);

  // Mock add expense
  const addExpense = async (e) => {
    e.preventDefault();
    const newExpense = {
      _id: Date.now().toString(),
      title: formData.title,
      amount: Number(formData.amount),
      category: formData.category,
      description: formData.description,
      date: new Date()
    };
    setExpenses([newExpense, ...expenses]);
    setFormData({ title: '', amount: '', category: 'Food', description: '' });
  };

  // Mock delete expense
  const deleteExpense = async (id) => {
    setExpenses(expenses.filter(expense => expense._id !== id));
  };

  // Set budget
  const setBudget = () => {
    if (budgetInput && budgetInput > 0) {
      setMonthlyBudget(Number(budgetInput));
      setBudgetInput('');
    }
  };

  // Calculations
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = monthlyBudget - totalExpenses;
  const budgetPercentage = (totalExpenses / monthlyBudget) * 100;
  const isOverBudget = totalExpenses > monthlyBudget;

  return (
    <div className="App">
      <header className="app-header">
        <h1>💰 Smart Expense Tracker</h1>
        <div className="budget-section">
          <div className="budget-card">
            <h3>Monthly Budget: ₹{monthlyBudget}</h3>
            <div className="budget-input">
              <input
                type="number"
                placeholder="Set new budget"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
              />
              <button onClick={setBudget}>Update</button>
            </div>
          </div>
          
          <div className="total-card">
            <h3>Total Spent: ₹{totalExpenses}</h3>
            <p className={isOverBudget ? 'over-budget' : 'under-budget'}>
              Remaining: ₹{Math.abs(remainingBudget)} {isOverBudget ? 'Over Budget!' : 'Left'}
            </p>
          </div>
        </div>

        {/* Budget Progress Bar */}
        <div className="progress-container">
          <div className="progress-label">
            <span>Budget Usage: {budgetPercentage.toFixed(1)}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className={`progress-fill ${isOverBudget ? 'over-budget' : ''}`}
              style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
            ></div>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Add Expense Form */}
        <form onSubmit={addExpense} className="expense-form">
          <h2>Add New Expense</h2>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            required
          />
          <select
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            placeholder="Description (optional)"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          <button type="submit">Add Expense</button>
        </form>

        {/* Expenses List */}
        <div className="expenses-list">
          <h2>Recent Expenses</h2>
          {expenses.map(expense => (
            <div key={expense._id} className="expense-item">
              <div className="expense-info">
                <h3>{expense.title}</h3>
                <p>₹{expense.amount} • {expense.category}</p>
                <small>{new Date(expense.date).toLocaleDateString()}</small>
                {expense.description && <p className="expense-desc">{expense.description}</p>}
              </div>
              <button 
                onClick={() => deleteExpense(expense._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;