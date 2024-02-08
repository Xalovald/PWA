// app.js
const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes


async function getDatabase(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'guiblog',
      });
    return connection;
}

app.get('/api/posts', async (req, res) => {
  try {
    const database = await getDatabase();
    const data = await getData(database);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/posts', async (req, res) => {
  const { title, content, created_at } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const database = await getDatabase(); // Assuming getDatabase() returns the database connection
    await insertData(database, title, content, created_at);
    res.status(201).json({ message: 'Post created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function getData(connection) {
  try {
    const [results] = await connection.query('SELECT * FROM `Post`');
    return results;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Insert data into the Post table
async function insertData(connection, title, content) {
  try {
    await connection.query('INSERT INTO `Post` (title, content) VALUES (?, ?)', [title, content]);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});