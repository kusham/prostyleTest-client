import HOC from "./Layouts/HOC";
import Layout from "./Layouts/Layout";
import LogIn from "./components/Auth/LogIn";
import SignUp from "./components/Auth/SignUp";
import StudentList from "./components/Students/StudentList";

export const routes = [
  {
    path: "/students",
    component: Layout(HOC(StudentList)),
  },
  {
    path: "/",
    component: <LogIn />,
  },
  {
    path: "/signUp",
    component: <SignUp />,
  },
  {
    path: "*",
    component: <h1>404 Not Found</h1>,
  }
];
