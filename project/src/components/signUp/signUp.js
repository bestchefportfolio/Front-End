import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import "../signUp/signUp.css";
import styled from "styled-components";

const Input = styled(Field)`
  border-radius: 6px;
`;

const SignUpForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);
  const isEnabled =
    values.username.length > 0 &&
    values.password.length > 5 &&
    values.name.length > 0 &&
    values.email.length > 0;
  useEffect(() => {
    console.log("status has changed", status);
    status && setUser(user => [...user, status]);
  }, [status]);
  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <Form>
        <div>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <Input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
          <Input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <Input type="email" name="email" placeholder="Email" />
        </div>
        <div className="isChef">
          <div>
            {touched.is_chef && errors.is_chef && (
              <p className="error">{errors.is_chef}</p>
            )}
            <Field type="checkbox" name="is_chef" checked={values.is_chef} />
            <span> Are you a chef?</span>
            <p>If yes, continue below:</p>
          </div>
          <div>
            {touched.location && errors.location && (
              <p className="error">{errors.location}</p>
            )}
            <Input
              type="text"
              name="location"
              placeholder="Location"
              disabled={!values.is_chef}
            />
          </div>
          <div>
            {touched.phone_number && errors.phone_number && (
              <p className="error">{errors.phone_number}</p>
            )}
            <Input
              type="text"
              name="phone_number"
              placeholder="Enter phone number"
              disabled={!values.is_chef}
            />
          </div>
          <div>
            {touched.business_name && errors.business_name && (
              <p className="error">{errors.business_name}</p>
            )}
            <Input
              type="text"
              name="business_name"
              placeholder="Business name"
              disabled={!values.is_chef}
            />
          </div>
          <div>
            <Button disabled={!isEnabled} type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

const FormikOnboardForm = withFormik({
  mapPropsToValues({
    username,
    password,
    name,
    email,
    is_chef,
    location,
    phone_number,
    business_name
  }) {
    return {
      username: username || "",
      password: password || "",
      name: name || "",
      email: email || "",
      is_chef: is_chef || false,
      location: location || "",
      phone_number: phone_number || "",
      business_name: business_name || ""
    };
  },

  //====VALIDATION SCHEMA====
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
  }),
  //===END VALIDATION SCHEMA===
  handleSubmit(values, { setStatus, resetForm }) {
    const { username, password, name, email, is_chef } = values;
    const chefVal = {
      username: username,
      password: password,
      name: name,
      email: email,
      location: values.location,
      phone_number: values.phone_number,
      business_name: values.business_name
    }
    console.log("Submitting!", chefVal);
    if (values.is_chef === true)
      axios
        .post(`https://chef-portfolio-be.herokuapp.com/register/chef`, chefVal)
        .then(res => {
          console.log("success", res);
          setStatus(res.data);
          resetForm();
        })
        .catch(err => console.log(err.response));
    else
      axios
        .post(`https://chef-portfolio-be.herokuapp.com/register`, {
          username,
          password,
          name,
          email
        })
        .then(res => {
          console.log("success", res);
          setStatus(res.data);
          resetForm();
        })
        .catch(err => console.log(err.response));
  }
})(SignUpForm);

export default FormikOnboardForm;
