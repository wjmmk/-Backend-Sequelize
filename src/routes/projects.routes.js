const express = require('express');
const router = express.Router();
const project = require('../controllers/projects.controller');


router.get("/", project.getProjects);
router.get("/:id", project.getProject);
router.post("/", project.createProject);
router.put("/:id", project.updateProject);
router.delete("/:id", project.deleteProject);


module.exports = router;