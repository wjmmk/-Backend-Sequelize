const express = require('express');
const router = express.Router();
const project = require('../controllers/projects.controller');

// Get all projects
router.get("/", project.getProjects);
router.get("/:id", project.getProject);
router.post("/", project.createProject);
router.put("/:id", project.updateProject);
router.delete("/:id", project.deleteProject);

router.get("/:id/tasks", project.getProjectTasks);


module.exports = router;