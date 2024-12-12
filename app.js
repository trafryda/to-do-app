const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'yourEndpoint',
    user: 'database username',
    password: 'database password',
    database: 'database name'
});

db.query(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        description VARCHAR(255),
        dueDate DATE,
        completed BOOLEAN DEFAULT false
    )
`);

app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/tasks', (req, res) => {
    const { description, dueDate } = req.body;
    db.query('INSERT INTO tasks (description, dueDate) VALUES (?, ?)', [description, dueDate], (err) => {
        if (err) throw err;
        res.sendStatus(201);
    });
});

app.put('/tasks/:id/complete', (req, res) => {
    const taskId = req.params.id;
    db.query('UPDATE tasks SET completed = true WHERE id = ?', [taskId], (err) => {
        if (err) res.status(500).send('Error marking task as complete');
        res.sendStatus(200);
    });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    db.query('DELETE FROM tasks WHERE id = ?', [taskId], (err) => {
        if (err) res.status(500).send('Error deleting task');
        res.sendStatus(200);
    });
});

const PORT = 3000;
const PUBLIC_IP = 'yourPublicIp';
app.listen(PORT, () => {
    console.log(`🎉 Server running on http://${PUBLIC_IP}:${PORT} 🎉`);
});
