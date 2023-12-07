// server/models/Attendance.js
const { pool } = require("../db");

const Attendance = {
  markAttendance: (date, status) => {
    return new Promise((resolve, reject) => {
      pool.query(
        "INSERT INTO attendance (date, status) VALUES (?, ?)",
        [date, status],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  },
  getAttendance: () => {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM attendance", (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
  updateAttendance: (date, status) => {
    return new Promise((resolve, reject) => {
      pool.query(
        "UPDATE attendance SET status = ? WHERE date = ?",
        [status, date],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        }
      );
    });
  },
};

module.exports = Attendance;
