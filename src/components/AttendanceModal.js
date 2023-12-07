import React, { useState, useEffect } from "react";
import { Modal, Button, Radio } from "antd";

const AttendanceModal = ({ visible, onCancel, onOk, attendanceStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(
    attendanceStatus || "present"
  );

  useEffect(() => {
    setSelectedStatus(attendanceStatus || "present");
  }, [attendanceStatus]);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleSaveClick = () => {
    onOk(selectedStatus);
  };

  return (
    <Modal
      title="Mark Attendance"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="ok" type="primary" onClick={handleSaveClick}>
          Save
        </Button>,
      ]}
    >
      <Radio.Group onChange={handleStatusChange} value={selectedStatus}>
        <Radio value="present">Present</Radio>
        <Radio value="absent">Absent</Radio>
      </Radio.Group>
    </Modal>
  );
};

export default AttendanceModal;
