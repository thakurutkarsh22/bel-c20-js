const express = require("express");
const app = express();


app.get("/search", (req, res) => {
  const q = req.query.q || "";
  // Vulnerable: reflects user input directly into HTML
  res.send(`
    <h2>Search Results</h2>
    <p>You searched for: ${q}</p>
  `);
});


app.get("/home", (req, res) => {
  res.send(`
    <h2>Home</h2>
    <p>Welcome to the home page</p>
  `);
});


app.listen(8089, () => {
  console.log("Server running on http://localhost:8089");
});