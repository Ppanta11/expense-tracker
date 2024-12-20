const express = require("express");
const mongoose = require("mongoose");
const Expense = require("./models/expense");
const path = require("path");

const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/expense-tracker")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Root route (API base endpoint)
app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API!");
});

// Fetch all expenses and send to the client
app.get("/api/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new expense
app.post("/api/expenses", async (req, res) => {
  const { description, amount, date } = req.body;

  try {
    const newExpense = new Expense({ description, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an existing expense
app.put("/api/expenses/:id", async (req, res) => {
  const { id } = req.params;
  const { description, amount, date } = req.body;

  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { description, amount, date },
      { new: true, runValidators: true }
    );
    if (!updatedExpense) return res.status(404).send("Expense not found");
    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an expense
app.delete("/api/expenses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) return res.status(404).send("Expense not found");
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
