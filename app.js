// Import required modules
const express = require('express');
const cors = require('cors'); // Import cors
const permify = require("@permify/permify-node");
const authorizedRoute = require('./app/api/permission'); // Import the permission middleware
const bodyParser = require("body-parser");

// Create Express app
const app = express();

// Enable CORS
app.use(cors()); 

app.use(bodyParser.json());

// Define routes

// Route for '/admin/:userId'
app.get('/admin/:userId', authorizedRoute('view_admin'), (req, res) => {
  if (req.body && req.body.message === 'You are authorized!') {
    res.json({ message: 'You have access to the dashboard!'});
  } else {
    res.status(403).json({ message: 'You are not authorized to access the dashboard'});
  }
});

// Route for '/member/:userId'
app.get('/member/:userId', authorizedRoute('view_member'), (req, res) => {
  if (req.body && req.body.message === 'You are authorized!') {
    res.json({ message: 'You have access to the member page!'});
  } else {
    res.status(403).json({ message: 'You are not authorized to access the member page'});
  }
});

// Route for '/manager/:userId'
app.get('/manager/:userId', authorizedRoute('view_manager'), (req, res) => {
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