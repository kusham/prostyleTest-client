import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  title: Yup.string().required("Title is required"),
  gender: Yup.string().required("Gender is required"),
  indexNumber: Yup.string()
    .required("Index Number is required")
    .matches(
      /^[a-zA-Z0-9]{7}$/,
      "Index Number must be 7 characters long and contain only letters and digits"
    ),
  department: Yup.string().required("Department is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits long"),
  address: Yup.string().required("Address is required"),
});
