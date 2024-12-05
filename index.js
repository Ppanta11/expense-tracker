const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const expensesFile = path.join(__dirname, 'data', 'expenses.json');

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle root path
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API!');
});

// Helper functions to read/write expenses data
const readExpenses = () => JSON.parse(fs.readFileSync(expensesFile));
const writeExpenses = (expenses) => fs.writeFileSync(expensesFile, JSON.stringify(expenses, null, 2));

// Route to add a new expense
app.post('/expenses', (req, res) => {
  const { description, amount, date } = req.body;
  
  if (!description || !amount || !date) {
    return res.status(400).json({ message: 'Please provide description, amount, and date.' });
  }

  const expenses = readExpenses();
  const newExpense = { description, amount: parseFloat(amount), date };
  
  expenses.push(newExpense);
  writeExpenses(expenses);
  
  res.status(201).json({ message: 'Expense added!', expense: newExpense });
});

// Route to get total expenses for a specific period
app.get('/expenses/total', (req, res) => {
  const { period } = req.query;
  const expenses = readExpenses();
  const now = new Date();

  const filterByPeriod = {
    day: (expenseDate) => expenseDate.toDateString() === now.toDateString(),
    week: (expenseDate) => {
      const weekAgo = new Date();
      weekAgo.setDate(now.getDate() - 7);
      return expenseDate >= weekAgo && expenseDate <= now;
    },
    month: (expenseDate) => {
      const monthAgo = new Date();
      monthAgo.setMonth(now.getMonth() - 1);
      return expenseDate >= monthAgo && expenseDate <= now;
    }
  };

  if (!filterByPeriod[period]) {
    return res.status(400).json({ message: 'Invalid period. Use day, week, or month.' });
  }

  const total = expenses
    .filter(exp => filterByPeriod[period](new Date(exp.date)))
    .reduce((sum, exp) => sum + exp.amount, 0);

  res.json({ total });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
