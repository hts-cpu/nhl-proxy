const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  const nhlUrl = req.query.url;
  if (!nhlUrl) {
    res.status(400).send("Missing ?url= parameter");
    return;
  }

  try {
    const response = await fetch(nhlUrl);
    const data = await response.text();
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (err) {
    res.status(500).send("Error fetching NHL API: " + err);
  }
});

app.listen(port, () => {
  console.log(`NHL Proxy running on port ${port}`);
});
