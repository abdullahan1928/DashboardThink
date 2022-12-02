const express = require("express");
const router = express.Router();
const {
    studentAddController: studentController,
    studentListController,
    studentDeleteController,
    studentDetailsController,
    studentUpdateController
} = require("../controllers/student.controller");

router.post("/list", studentController);
router.get("/list", studentListController);
router.delete("/list/:id", studentDeleteController);
router.get("/list/:id", studentDetailsController);
router.put("/list/:id", studentUpdateController);

module.exports = router;
