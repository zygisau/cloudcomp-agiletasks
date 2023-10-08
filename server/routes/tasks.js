var express = require("express");
const {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  await getTasks(res);
});

router.get("/:taskId", async function (req, res, next) {
  await getTask(req, res);
});

router.post("/new", async function (req, res, next) {
  await createTask(req, res);
});

router.patch("/:taskId", async function (req, res, next) {
  await updateTask(req, res);
});

router.delete("/:taskId", async function (req, res, next) {
  await deleteTask(req, res);
});

module.exports = router;
