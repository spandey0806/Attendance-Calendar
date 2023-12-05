const Attendance = require("../models/Attendance");

const markAttendance = async (req, res) => {
  const { date, status } = req.body;
  try {
    await Attendance.markAttendance(date, status);
    res.json({ success: true });
  } catch (err) {
    console.error("Error marking attendance:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAttendance = async (_, res) => {
  try {
    const results = await Attendance.getAttendance();
    res.json(results);
  } catch (err) {
    console.error("Error getting attendance:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAttendance = async (req, res) => {
  const { date, status } = req.body;
  try {
    await Attendance.updateAttendance(date, status);
    res.json({ success: true });
  } catch (err) {
    console.error("Error updating attendance:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  markAttendance,
  getAttendance,
  updateAttendance,
};
