const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceControllers");

router.post("/mark-attendance", attendanceController.markAttendance);
router.get("/get-attendance", attendanceController.getAttendance);
router.put("/update-attendance", attendanceController.updateAttendance);

module.exports = router;
