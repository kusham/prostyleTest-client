import { Modal } from "antd";
import React from "react";
import StudentForm from "./StudentForm";

const EditModal = ({ isModalOpen, handleOk, studentData , type}) => {
  return (
    <Modal
      open={isModalOpen}
      title="Edit Student"
      footer={false}
      closeIcon={false}
    >
      <StudentForm closeModel={handleOk} studentData={studentData} type={type} />
    </Modal>
  );
};

export default EditModal;
