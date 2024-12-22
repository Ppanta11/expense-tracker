# Expense Tracker

## Description
The Expense Tracker is a web application built with **Express.js** and **MongoDB**. It provides users with an intuitive interface to manage their expenses. Users can add, view, update, and delete expenses while storing data securely in a database. It also includes a feature to upload and display a banner image.

---

## Features
- **Add Expense**: Users can log expenses by entering a description, amount, and date.
- **View Expenses**: Displays a table with all recorded expenses retrieved from the database.
- **Update Expense**: Enables users to modify existing expenses.
- **Delete Expense**: Allows the removal of expenses from the database.
- **Banner Image Upload**:
  - Users can upload a banner image via the web UI.
  - Uploaded images are saved in the `uploads/` folder and displayed on the page.
  - A dedicated API endpoint (`POST /api/upload-banner`) handles the upload and returns the file path.

---

## Technologies Used
- **Backend**: Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **API**: RESTful API for CRUD operations

---

## Installation

### Prerequisites
Before running the application, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

---

### Step-by-Step Guide to Run the Application

1. **Clone the Repository**  
   Open your terminal and run the following commands:  
   ```bash
   git clone https://github.com/Ppanta11/expense-tracker.git
   cd expense-tracker
2. Install Dependencies
   Run the following command to install all required dependencies:
   ```bash
   npm install
3. Start MongoDB
   Ensure your MongoDB service is running. Start it with the following command:
   ```bash
   mongod
4.Start the Application
   Run the following command to start the server:
   ```bash
      node index.js
```
If everything is set up correctly, you should see the following output:
```bash
	Server running on port 3000
	Connected to MongoDB
```	
5. Open the Application
	Open your browser and navigate to:
	http://localhost:3000
