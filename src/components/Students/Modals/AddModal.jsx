import { Modal } from "antd";
import React, { useEffect } from "react";
import StudentForm from "./StudentForm";

const AddModal = ({ isModalOpen, handleOk, type }) => {
    useEffect(() => {
        
    }, []);
  return (
    <Modal
      open={isModalOpen}
      title="Add Student"
      footer={false}
      closeIcon={false}
    >
      <StudentForm closeModel={handleOk} type={type}/>
    </Modal>
  );
};

export default AddModal;
