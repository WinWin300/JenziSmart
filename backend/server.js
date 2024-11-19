const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const User = require("./models/user");
const Project = require("./models/project");

const app = express();
app.use(cors());
app.use(express.json());

sequelize.sync();

// Register user
app.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Post a project
app.post("/projects", async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
