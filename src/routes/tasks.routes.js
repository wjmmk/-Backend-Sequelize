const express = require('express');
const router = express.Router();
const tasks = require('../controllers/tasks.controller.js');


router.get("/", tasks.getTasks);
router.get("/:id", tasks.getTasks);
router.post("/", tasks.createTask);
router.put("/:id", tasks.updateTask);
router.delete("/:id", tasks.deleteTask);


module.exports = router;