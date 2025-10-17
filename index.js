// index.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing ?url= parameter");

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.set('Content-Type', 'application/json');
    res.send(data);
  } catch (e) {
    res.status(500).send("Error fetching URL: " + e.message);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
