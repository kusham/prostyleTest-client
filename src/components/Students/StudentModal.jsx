import React from "react";
import { MODAL_TYPES } from "./Constants";
import ViewModal from "./Modals/ViewModal";
import EditModal from "./Modals/EditModal";
import AddModal from "./Modals/AddModal";
import DeleteModal from "./Modals/DeleteModal";

const StudentModal = ({ isModalOpen, handleOk, type, studentData }) => {
  const renderModal = () => {
    switch (type) {
      case MODAL_TYPES.VIEW:
        return (
          <ViewModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            studentData={studentData}
          />
        );
      case MODAL_TYPES.EDIT:
        return (
          <EditModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            studentData={studentData}
            type={type}
          />
        );
      case MODAL_TYPES.ADD:
        return (
          <AddModal isModalOpen={isModalOpen} handleOk={handleOk} type={type} />
        );
      case MODAL_TYPES.DELETE:
        return (
          <DeleteModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            studentData={studentData}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderModal()}</>;
};

export default StudentModal;
