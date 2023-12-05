// src/components/Body.js
import React, { useState, useEffect } from "react";
import { Calendar } from "antd";
import AttendanceModal from "./AttendanceModal";

const Body = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/attendance/get-all-attendance")
      .then((response) => response.json())
      .then((data) => {
        const statusMap = {};
        data.forEach((item) => {
          statusMap[item.date] = item.status;
        });
        setAttendanceStatus(statusMap);
      })
      .catch((error) => {
        console.error("Error fetching attendance:", error);
      });
  }, []);

  const handleDateClick = (value) => {
    const selectedDateString = value.format("YYYY-MM-DD");
    setSelectedDate(selectedDateString);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleModalOk = async (status) => {
    try {
      const apiUrl =
        attendanceStatus[selectedDate] !== undefined
          ? "http://localhost:5000/api/attendance/update-attendance"
          : "http://localhost:5000/api/attendance/mark-attendance";

      const response = await fetch(apiUrl, {
        method: attendanceStatus[selectedDate] !== undefined ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedDate,
          status: status,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log(`Attendance for ${selectedDate} is marked as ${status}`);

      setAttendanceStatus((prevStatus) => ({
        ...prevStatus,
        [selectedDate]: status,
      }));
    } catch (error) {
      console.error("Error saving/update attendance:", error);
    } finally {
      setModalVisible(false);
    }
  };

  const dateCellRender = (value) => {
    const dateString = value.format("YYYY-MM-DD");
    const status = attendanceStatus[dateString];

    if (status === "present") {
      return <div style={{ backgroundColor: "green" }}>{value.date()}</div>;
    } else if (status === "absent") {
      return <div style={{ backgroundColor: "red" }}>{value.date()}</div>;
    }

    return null;
  };

  return (
    <div>
      <Calendar onSelect={handleDateClick} dateCellRender={dateCellRender} />
      {modalVisible && (
        <AttendanceModal
          visible={modalVisible}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
          attendanceStatus={attendanceStatus[selectedDate]}
        />
      )}
    </div>
  );
};

export default Body;
