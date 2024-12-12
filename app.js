const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Serve the static index.html file

// Connect to MySQL Database
const db = mysql.createConnection({
    host: 'tododatabase.cby4e4amwp4k.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Tf#31931',
    database: 'tododatabase'
});

// Ensure tasks table exists
db.query(
    CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255),
        dueDate DATE,
        completed BOOLEAN DEFAULT false
    )
);

// Get all tasks
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { description, dueDate } = req.body;
    db.query('INSERT INTO tasks (description, dueDate) VALUES (?, ?)', [description, dueDate], (err) => {
        if (err) throw err;
        res.sendStatus(201);
    });
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
 
