// server/index.js

const express = require("express");
const store = require("./store");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json({ error: "Not yet implemented" });
});

app.post("/add-task", (req, res) => {
  store.add_task("1", req.body.task, Date.now());
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
