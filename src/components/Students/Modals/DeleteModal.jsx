import { Modal } from "antd";
import React from "react";
import { DeleteModalContent } from "../Student-style";
import { deleteStudent } from "../../../actions/StudentActions";

const DeleteModal = ({ isModalOpen, handleOk, studentData }) => {
  const handleDelete = () => {
    deleteStudent(studentData.id);
    handleOk();
  };
  return (
    <Modal
      open={isModalOpen}
      title="Are you sure delete this student?"
      okText="Yes"
      cancelText="No"
      okType="danger"
      onOk={handleDelete}
      onCancel={handleOk}
      closeIcon={false}
      maskClosable={false}
    >
      <DeleteModalContent>
        The name and Index number of the student you are trying to delete are
        <span> {studentData.fullName} </span>
        and
        <span> {studentData.indexNumber}</span>. This action
        <b> cannot be undone.</b>
      </DeleteModalContent>
    </Modal>
  );
};

export default DeleteModal;
