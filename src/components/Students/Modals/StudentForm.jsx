import React from "react";
import { Formik, Field } from "formik";
import { Input, Select, Button, Row, Col, Form } from "antd";
import { validationSchema } from "../../../utils/StudentFormValidation";
import { ButtonRow, FormContainer } from "../Student-style";
import { addStudent, editStudent } from "../../../actions/StudentActions";
import { MODAL_TYPES } from "../Constants";
const initialValues = {
  fullName: "",
  title: "",
  gender: "",
  indexNumber: "",
  department: "",
  email: "",
  phone: "",
  address: "",
};
const StudentForm = ({ closeModel, studentData , type}) => {
  const handleSubmit = (values, {resetForm}) => {
    if(type === MODAL_TYPES.ADD) {
      addStudent(values);
    } else if (type === MODAL_TYPES.EDIT) {
      editStudent(values, studentData.id);
    }
    resetForm();
    closeModel();
  };
  return (
    <Formik
      initialValues={studentData ? studentData : initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, resetForm, handleChange, handleBlur }) => (
        <FormContainer>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                validateStatus={errors.title && touched.title ? "error" : ""}
                help={errors.title && touched.title ? errors.title : null}
              >
                <Select
                  name="title"
                  value={values.title}
                  onChange={(value) => handleChange("title")(value)}
                  onBlur={handleBlur}
                >
                  <Select.Option value="">Select Title</Select.Option>
                  <Select.Option value="Thero">Thero.</Select.Option>
                  <Select.Option value="Mr.">Mr.</Select.Option>
                  <Select.Option value="Miss.">Miss.</Select.Option>
                  <Select.Option value="Mrs.">Mrs.</Select.Option>
                  <Select.Option value="Ms.">Ms.</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                validateStatus={
                  errors.indexNumber && touched.indexNumber ? "error" : ""
                }
                help={
                  errors.indexNumber && touched.indexNumber
                    ? errors.indexNumber
                    : null
                }
              >
                <Field
                  name="indexNumber"
                  as={Input}
                  placeholder="Index Number"
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                validateStatus={
                  errors.fullName && touched.fullName ? "error" : ""
                }
                help={
                  errors.fullName && touched.fullName ? errors.fullName : null
                }
              >
                <Field as={Input} name="fullName" placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                validateStatus={errors.gender && touched.gender ? "error" : ""}
                help={errors.gender && touched.gender ? errors.gender : null}
              >
                <Select
                  name="gender"
                  value={values.gender}
                  onChange={(value) => handleChange("gender")(value)}
                  onBlur={handleBlur}
                >
                  <Select.Option value="">Select Gender</Select.Option>
                  <Select.Option value="Male">Male</Select.Option>
                  <Select.Option value="Female">Female</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                validateStatus={
                  errors.department && touched.department ? "error" : ""
                }
                help={
                  errors.department && touched.department
                    ? errors.department
                    : null
                }
              >
                <Select
                  name="department"
                  value={values.department}
                  onChange={(value) => handleChange("department")(value)}
                  onBlur={handleBlur}
                >
                  <Select.Option value="">Select Department</Select.Option>
                  <Select.Option value="IT">IT</Select.Option>
                  <Select.Option value="Engineering">Engineering</Select.Option>
                  <Select.Option value="Computer Science">Computer Science</Select.Option>
                  <Select.Option value="Architecture">Architecture</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                validateStatus={errors.phone && touched.phone ? "error" : ""}
                help={errors.phone && touched.phone ? errors.phone : null}
              >
                <Field name="phone" as={Input} placeholder="Phone Number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                validateStatus={errors.email && touched.email ? "error" : ""}
                help={errors.email && touched.email ? errors.email : null}
              >
                <Field as={Input} name="email" placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                validateStatus={
                  errors.address && touched.address ? "error" : ""
                }
                help={errors.address && touched.address ? errors.address : null}
              >
                <Field name="address" as={Input} placeholder="Home Address" />
              </Form.Item>
            </Col>
          </Row>

          <ButtonRow>
            <Button
              onClick={() => {
                closeModel();
                resetForm();
              }}
            >
              Cancel
            </Button>

            <Button type="primary" htmlType="submit" >
              {type === MODAL_TYPES.ADD ? "Add" : "Edit"}
            </Button>
          </ButtonRow>
        </FormContainer>
      )}
    </Formik>
  );
};

export default StudentForm;
