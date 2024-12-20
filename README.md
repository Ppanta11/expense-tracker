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

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
