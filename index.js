const express = require("express");
const mongoose = require("mongoose");
const Expense = require("./models/expense");

const app = express();
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/expense-tracker")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API!");
  });


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

app.listen(3000, () => console.log("Server running on port 3000"));
