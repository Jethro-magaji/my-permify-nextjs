// Import required modules
const express = require('express');
const cors = require('cors'); // Import cors
const permify = require("@permify/permify-node");
const authMiddleware = require('./src/api/auth'); // Import the auth middleware
const bodyParser = require("body-parser");

// Create Express app
const app = express();

// Enable CORS
app.use(cors()); 

app.use(bodyParser.json());

// Define routes

// Route for '/admin/:userId' where you want to enforce permission check
app.get('/admin/:userId', authMiddleware('view_admin'), (req, res) => {
  // If middleware allows the request to pass through, handle the route logic here
  if (req.body && req.body.message === 'You are authorized!') {
    res.json({ message: 'You have access to the dashboard!'});
  } else {
    res.status(403).json({ message: 'You are not authorized to access the dashboard'});
  }
});

// Route for '/member/:userId' where you want to enforce permission check
app.get('/member/:userId', authMiddleware('view_member'), (req, res) => {
  // If middleware allows the request to pass through, handle the route logic here
  if (req.body && req.body.message === 'You are authorized!') {
    res.json({ message: 'You have access to the member page!'});
  } else {
    res.status(403).json({ message: 'You are not authorized to access the member page'});
  }
});

// Route for '/manager/:userId' where you want to enforce permission check
app.get('/manager/:userId', authMiddleware('view_manager'), (req, res) => {
  // If middleware allows the request to pass through, handle the route logic here
  if (req.body && req.body.message === 'You are authorized!') {
    res.json({ message: 'You have access to the manager page!'});
  } else {
    res.status(403).json({ message: 'You are not authorized to access the manager page'});
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});