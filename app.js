const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL database configuration
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Goutham@1982',
  database: 'Student Result Managment',
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle login request
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Replace with your own login logic
  if (username === 'admin' && password === 'admin123') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

// Handle result insertion request
app.post('/addResult', (req, res) => {
  const { name, subject, marks } = req.body;

  // Insert the result into the database
  const query = `INSERT INTO student_results (name, subject, marks) VALUES (?, ?, ?)`;
  db.query(query, [name, subject, marks], (err, result) => {
    if (err) {
      console.error('Error inserting result:', err);
      res.status(500).json({ success: false, message: 'Failed to insert result' });
      return;
    }

    // Send the inserted result back as a response
    const insertedResult = {
      id: result.insertId,
      name: name,
      subject: subject,
      marks: marks,
    };
    res.status(200).json({ success: true, result: insertedResult });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
