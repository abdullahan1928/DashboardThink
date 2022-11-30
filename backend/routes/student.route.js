const express = require('express');
const router = express.Router();
const { studentController, studentListController } = require('../controllers/student.controller');

router.post("/list", studentController);
router.get("/list", studentListController);

module.exports = router;