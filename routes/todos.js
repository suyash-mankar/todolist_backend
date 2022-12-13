const express = require("express");
const router = express.Router();

const todosController = require("../controllers/todos_controller");

router.get("/", todosController.view);
router.post("/create", todosController.create);

module.exports = router;
