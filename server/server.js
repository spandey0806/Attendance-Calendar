const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const attendanceRoutes = require("./routes/attendanceRoutes");
const dotenv = require("dotenv");
const { pool } = require("./db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/attendance", attendanceRoutes);

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed: ", err.stack);
    return;
  }
  console.log("Connected to database");

  connection.release();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
