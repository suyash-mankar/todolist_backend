const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task_controller");

router.get("/", taskController.view);
router.post("/create", taskController.create);
router.put("/:id", taskController.modify);
router.delete("/:id", taskController.delete);

module.exports = router;
