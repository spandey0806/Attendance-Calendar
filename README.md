# Attendance Calendar

A simple Attendance Calendar implemented using Node.js, Express.js, React.js, and MySQL. This system allows users to mark attendance for specific dates, view attendance records, and update attendance status.

## Features

- Mark attendance for specific dates.
- View and update attendance records.
- Calendar UI for easy navigation.
- Color-coded cells indicating attendance status (green for present, red for absent).
- Modal for marking and updating attendance.

## Technologies Used

- Node.js
- Express.js
- React.js
- MySQL
- Ant Design
- Tailwind CSS
- Firebase

## Folder Structure

attendance-app/
|-- client/
| |-- public/
| |-- src/
| |-- components/
| |-- Body.js
| |-- AttendanceModal.js
| |-- App.js
| |-- package.json
|-- server/
| |-- controllers/
| |-- attendanceController.js
| |-- routes/
| |-- attendanceRoutes.js
| |-- models/
| |-- Attendance.js
| |-- db.js
| |-- server.js
| |-- package.json
|-- .env.example
|-- README.md
|-- package.json

## API Endpoints

- `POST /api/attendance/mark-attendance` - Mark attendance for a specific date.
- `GET /api/attendance/get-attendance` - Get attendance records for a specific date.
- `PUT /api/attendance/update-attendance` - Update attendance for a specific date.
- `GET /api/attendance/get-all-attendance` - Get all attendance records.
