const expenseForm = document.getElementById("expense-form");
const expenseTableBody = document.querySelector("#expense-table tbody");

// Fetch and display expenses
async function fetchExpenses() {
    const res = await fetch("/api/expenses");
    const expenses = await res.json();
    expenseTableBody.innerHTML = expenses
        .map(
            (e) => `
        <tr>
            <td>${e.id}</td>
            <td>${e.description}</td>
            <td>${e.amount}</td>
            <td>${e.date}</td>
            <td><button onclick="deleteExpense(${e.id})">Delete</button></td>
        </tr>
    `
        )
        .join("");
}

// Add new expense
expenseForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;

    await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, amount, date }),
    });

    expenseForm.reset();
    fetchExpenses();
});

// Delete expense
async function deleteExpense(id) {
    await fetch(`/api/expenses/${id}`, { method: "DELETE" });
    fetchExpenses();
}

// Initial fetch
fetchExpenses();
