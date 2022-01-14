// Write your "projects" router here!
const express = require("express");
const Project = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res) => {
 try {
  const project = await Project.get();
  res.status(200).json(project);
 } catch (err) {
  res.status(404).json({ err: err.message });
 }
});

router.get("/:id", async (req, res) => {
 const { id } = req.params;
 try {
  const oneProject = await Project.get(id);
  if (!oneProject) {
   res.status(404).json({ message: "Project not found" });
  } else {
   res.status(200).json(oneProject);
  }
 } catch (err) {
  res.status(404).json({ err: err.message });
 }
});

router.post("/", async (req, res) => {
 const { name, description, completed } = req.body;
 const newProject = await Project.insert({ name, description, completed });
 try {
  if (!name || !description || !completed) {
   res.status(400).json({ message: "project not found" });
  } else {
   res.status(201).json(newProject);
  }
 } catch (err) {
  res.status(404).json({ err: err.message });
 }
});


module.exports = router;
