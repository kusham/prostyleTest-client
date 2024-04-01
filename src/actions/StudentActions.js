import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:5001" });

const handleTokenExpiration = () => {
  window.location.replace("/");
};

API.interceptors.request.use(
  (config) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      handleTokenExpiration();
    }
    return Promise.reject(error);
  }
);

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
  try {
    await API.put(`/api/Student/${id}`, studentData);
      notification.success({
        message: "Success",
        description: "Student updated successfully",
      });
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
