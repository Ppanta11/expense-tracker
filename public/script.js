const expenseForm = document.getElementById("expense-form");
const expenseTableBody = document.querySelector("#expense-table tbody");
const uploadBannerForm = document.getElementById("upload-banner-form");
const bannerImage = document.getElementById("banner-image");

async function fetchExpenses() {
    const res = await fetch("/api/expenses");
    const expenses = await res.json();
    expenseTableBody.innerHTML = expenses
        .map(
            (e) => `
        <tr>
            <td>${e._id}</td> <!-- Use _id here -->
            <td>${e.description}</td>
            <td>${e.amount}</td>
            <td>${new Date(e.date).toLocaleDateString()}</td> <!-- Format the date -->
            <td><button onclick="deleteExpense('${e._id}')">Delete</button></td> <!-- Use _id here as well -->
        </tr>
    `
        )
        .join("");
}


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

async function deleteExpense(id) {
    await fetch(`/api/expenses/${id}`, { method: "DELETE" });
    fetchExpenses();
}

uploadBannerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const bannerImageFile = document.querySelector('input[name="bannerImage"]').files[0];

    if (!bannerImageFile) {
        alert("Please select an image to upload.");
        return;
    }

    formData.append("bannerImage", bannerImageFile);

    try {
        const res = await fetch("/api/upload-banner", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            const data = await res.json();

            bannerImage.src = data.imageUrl;
            bannerImage.style.display = "block";
        } else {
            alert("Error uploading image.");
        }
    } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image.");
    }
});


fetchExpenses();
