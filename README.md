# Expense Tracker

## Description
The Expense Tracker is a web application built with Express.js and MongoDB. It allows users to add, view, update, and delete their expenses through a simple user interface. The app interacts with an API that connects to a MongoDB database to store expense details.

## Features
- **Add Expense**: Users can add expenses by entering a description, amount, and date.
- **View Expenses**: Displays a table with the list of all expenses from the database.
- **Update Expense**: Allows users to modify existing expenses.
- **Delete Expense**: Provides an option to delete expenses from the database.
- ## Image Upload Feature

- **Banner Image Upload**: Users can upload a banner image via the web UI. The uploaded image is stored in the `uploads/` folder and displayed on the page.
- **API Endpoint**: `POST /api/upload-banner` allows the uploading of banner images. The image file is stored and its path is returned in the response.


## Technologies Used
- **Backend**: Express.js
- **Database**: MongoDB
- **Frontend**: HTML, CSS, JavaScript
- **API**: RESTful API for CRUD operations

## Installation

##Prerequisites

##Before running the application, ensure you have the following installed:

Node.js
MongoDB
Git

##Step-by-Step Guide to Run the Application
#1. Clone the Repository
Open your terminal and run the following command to clone the repository:
   git clone https://github.com/Ppanta11/expense-tracker.git
Navigate to the project directory:
   cd expense-tracker
#2. Install Dependencies
Run the following command to install the required Node.js dependencies:
   npm install
#3. Start MongoDB
Ensure your MongoDB service is running. Use the following command to start MongoDB if it's not already running:
   mongod
#4. Start the Application
Run the following command to start the application:
   node index.js
You should see the following output if everything is set up correctly:
   Server running on port 3000
   Connected to MongoDB
#5. Open the Application in a Browser
Open your browser and navigate to:
   http://localhost:3000


