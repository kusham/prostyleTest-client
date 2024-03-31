import React, { useEffect, useState } from "react";
import { getAllStudents } from "../../actions/StudentActions";
import { Button, Table, Tooltip } from "antd";
import {
  BlueEditIcon,
  ButtonContainer,
  CreateButton,
  StudentContainer,
  TableTile,
  TopRowTable,
} from "./Student-style";
import {
  DeleteOutlined,
  EyeOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import StudentModal from "./StudentModal";
import { MODAL_TYPES } from "./Constants";

const StudentList = () => {
  const columns = [
    {
      title: "Index Number",
      dataIndex: "indexNumber",
      key: "indexNumber",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      dataIndex: "studentActions",
      render: (data, item) => (
        <ButtonContainer>
          <Tooltip title="View Student">
            <Button
              type="text"
              onClick={() => handleStudentModal(MODAL_TYPES.VIEW, item)}
            >
              <EyeOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Edit Student">
            <Button
              type="text"
              onClick={() => handleStudentModal(MODAL_TYPES.EDIT, item)}
            >
              <BlueEditIcon style={{ color: "blue" }} />
            </Button>
          </Tooltip>
          <Tooltip title="Delete Student">
            <Button
              type="text"
              danger
              onClick={() => handleStudentModal(MODAL_TYPES.DELETE, item)}
            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </ButtonContainer>
      ),
    },
  ];
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const fetchData = async () => {
    setStudents(await getAllStudents());
  };
  const handleStudentModal = (type, student) => {
    setModalType(type);
    setIsModalOpen(true);
    setSelectedStudent(student);
  };
  useEffect(() => {
    if(!isModalOpen && modalType !== MODAL_TYPES.VIEW) {
      fetchData();
    }
  }, [isModalOpen, modalType]);

  useEffect(() => {

  }, [students]);

  return (
    <StudentContainer>
      <TopRowTable>
        <TableTile><UserOutlined /> Students</TableTile>
        <CreateButton
          type="primary"
          onClick={() => handleStudentModal(MODAL_TYPES.ADD)}
        >
          <UserAddOutlined /> Create Student
        </CreateButton>
      </TopRowTable>
      <Table dataSource={students} columns={columns} scroll={{x: true}} />
      <StudentModal
        handleOk={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        type={modalType}
        studentData={selectedStudent}
      />
    </StudentContainer>
  );
};

export default StudentList;
