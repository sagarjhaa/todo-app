// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/tasks", (req, res) => {
  res.json({ error: "Not yet implemented" });
});

app.get("/add-task", (req, res) => {
  console.log(req);
  res.json({ error: "Not yet implemented" });
});

app.put("/update-task", (req, res) => {
  res.json({ error: "Not yet implemented" });
});

app.post("/remove-task", (req, res) => {
  res.json({ error: "Not yet implemented" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
