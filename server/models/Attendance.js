import React, { useState, useEffect } from "react";
import { Calendar } from "antd";
import AttendanceModal from "./AttendanceModal";

const Body = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(null);

  const handleDateClick = (value) => {
    const selectedDateString = value.format("YYYY-MM-DD");
    setSelectedDate(selectedDateString);
    setModalVisible(true);

    fetch(
      `http://localhost:5000/api/attendance/get-attendance?date=${selectedDateString}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAttendanceStatus(data.status);
      })
      .catch((error) => {
        console.error("Error fetching attendance:", error);
      });
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalOk = async (status) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/attendance/mark-attendance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: selectedDate,
            status: status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log(`Attendance for ${selectedDate} is marked as ${status}`);
    } catch (error) {
      console.error("Error saving/update attendance:", error);
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <div>
      <Calendar onSelect={handleDateClick} />
      {modalVisible && (
        <AttendanceModal
          visible={modalVisible}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
          attendanceStatus={attendanceStatus}
        />
      )}
    </div>
  );
};

export default Body;
