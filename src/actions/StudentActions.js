import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:7182" });

export const getAllStudents = async () => {
  try {
    const { data } = await API.get("/api/Student/getAll");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addStudent = async (studentData) => {
  try {
    const { data } = await API.post("/api/Student/add", studentData);
    if (data) {
      notification.success({
        message: "Success",
        description: "Student added successfully",
      });
    }
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Error",
      description: "Failed to add student",
    });
  }
};

export const editStudent = async (studentData, id) => {
  console.log("🚀 ~ editStudent ~ studentData:", studentData)
  try {
    const { data } = await API.put(`/api/Student/${id}`, studentData);
    if (data) {
      notification.success({
        message: "Success",
        description: "Student updated successfully",
      });
    }
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Error",
      description: "Failed to update student",
    });
  }
};

export const deleteStudent = async (id) => {
  try {
    await API.delete(`/api/Student/${id}`);
    notification.success({
      message: "Success",
      description: "Student deleted successfully",
    });
  } catch (error) {
    console.log(error);
    notification.error({
      message: "Error",
      description: "Failed to delete student",
    });
  }
};
