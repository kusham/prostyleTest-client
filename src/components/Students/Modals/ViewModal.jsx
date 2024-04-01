import React from "react";
import {
  CustomModal,
  InfoItem,
  Label,
  Value,
  ViewContainer,
} from "../Student-style";

const ViewModal = ({ isModalOpen, handleOk, studentData }) => {
  return (
    <CustomModal
      title={studentData?.title + " " + studentData?.fullName}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleOk}
      closeIcon={false}
    >
      <ViewContainer>
        {Object.values(studentData).map(
          (value, index) =>
            index !== 0 && (
              <InfoItem key={index}>
                <Label>{Object.keys(studentData)[index].replace(/^\w/, (c) => c.toUpperCase())}</Label>
                <Value>{value}</Value>
              </InfoItem>
            )
        )}
      </ViewContainer>
    </CustomModal>
  );
};

export default ViewModal;
