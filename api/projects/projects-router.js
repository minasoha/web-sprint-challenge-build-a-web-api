const express = require("express");
const Project = require("./projects-model");
const {
 validateProjectId,
 validateNewProject,
 validateUpdatedProject,
} = require("./projects-middleware");
const { handleError } = require("./../general-middleware");

const router = express.Router();

router.get("/", async (req, res, next) => {
 try {
  const projects = await Project.get();
  res.status(200).json(projects);
 } catch (err) {
  next(err);
 }
});
router.get("/:id", validateProjectId, async (req, res, next) => {
 try {
  const { id } = req.params;
  const targetProject = await Project.get(id);
  res.status(200).json(targetProject);
 } catch (err) {
  next(err);
 }
});
router.post("/", validateNewProject, async (req, res, next) => {
 try {
  const { completed = false } = req.body;
  const newProject = await Project.insert({ ...req.body, completed });
  res.status(201).json(newProject);
 } catch (err) {
  next(err);
 }
});
router.put(
 "/:id",
 validateProjectId,
 validateUpdatedProject,
 async (req, res, next) => {
  try {
   const { id } = req.params;
   const updatedProject = await Project.update(id, req.body);
   res.status(200).json(updatedProject);
  } catch (err) {
   next(err);
  }
 }
);
router.delete("/:id", validateProjectId, async (req, res, next) => {
 try {
  const { id } = req.params;
  await Project.remove(id);
  res.end();
 } catch (err) {
  next(err);
 }
});
router.get("/:id/actions", validateProjectId, async (req, res, next) => {
 try {
  const { id } = req.params;
  const targetProject = await Project.get(id);
  res.status(200).json(targetProject.actions);
 } catch (err) {
  next(err);
 }
});

router.use(handleError);

module.exports = router;
