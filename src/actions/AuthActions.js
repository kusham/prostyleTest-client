import { notification } from "antd";
import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:7182" });

export const login = async (credentials, navigateToDashBoard) => {
  try {
    const { data } = await API.post("/api/Auth/signin", credentials);
    if (data.token) {
      sessionStorage.setItem("user", JSON.stringify(data));
      sessionStorage.setItem("token", JSON.stringify(data.token));
      notification.success({
        message: "Success",
        description: "Logged in successfully",
      });
      navigateToDashBoard();
    }
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    notification.error({
      message: "Log in failed",
      description: error?.response?.data,
    });
  }
};

export const signUp = async (userData, navigateToLogin) => {
  try {
     await API.post("/api/Auth/signup", userData);
    notification.success({
      message: "Success",
      description: "User registered successfully. Please log in.",
    });
    navigateToLogin();
  } catch (error) {
    console.log(error.response.data);
    notification.error({
      message: "Registration failed",
      description: "Please try again. If already registered, please log in.",
    });
  }
};
